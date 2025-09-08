import express, { type Request, Response, NextFunction } from "express";
import cors from "cors";
import compression from "compression";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import net from "net";

const app = express();
app.disable('x-powered-by');
app.use(cors({ origin: true, credentials: true }));
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false }));

// health first (no heavy middleware needed)
app.get('/api/health', (req, res) => {
  log(`health check hit from ${req.ip}`);
  res.json({ ok: true, env: app.get('env'), time: new Date().toISOString() });
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Use different default ports for dev vs prod
  // Dev: 5173 (standard Vite port), Prod: 5000 (deployment standard)
  const isDev = app.get("env") === "development";
  const defaultPort = isDev ? '5173' : '5000';
  const basePort = parseInt(process.env.PORT || defaultPort, 10);

  async function findAvailablePort(start: number, maxAttempts = 10): Promise<number> {
    for (let i = 0; i < maxAttempts; i++) {
      const candidate = start + i;
      const available = await new Promise<boolean>((resolve) => {
        const tester = net.createServer()
          .once('error', () => resolve(false))
          .once('listening', () => {
            tester.close(() => resolve(true));
          })
          .listen(candidate, '0.0.0.0');
      });
      if (available) return candidate;
      log(`port ${candidate} in use, trying ${candidate + 1}`);
    }
    throw new Error(`No available port found starting at ${start}`);
  }

  const finalPort = await findAvailablePort(basePort);
  server.listen({ port: finalPort, host: "0.0.0.0" }, () => {
    log(`🚀 Server ready at http://localhost:${finalPort}`);
    log(`📱 API health check: http://localhost:${finalPort}/api/health`);
  });
})();

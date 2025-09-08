# Luxu Massae - Premium In-Villa Massage Services

A modern, responsive website for premium massage services in Ubud, Bali.

## Features

- **Modern Stack**: React 18, TypeScript, Express.js, Vite
- **UI Components**: Tailwind CSS, Radix UI, shadcn/ui
- **Backend**: Express server with Drizzle ORM and Zod validation
- **Booking System**: WhatsApp integration and booking management
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Mobile Responsive**: Works perfectly on all devices

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development and builds
- Tailwind CSS for styling
- Radix UI & shadcn/ui for components
- Wouter for routing
- TanStack React Query for state management
- React Hook Form for form handling
- Framer Motion for animations
- Lucide React for icons

### Backend
- Express.js web server
- Drizzle ORM for database operations
- Zod for data validation
- CORS and compression middleware

## Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd luxu-massae-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   Server will start on http://localhost:5173 (or next available port)

4. **Build for production (Static)**
   ```bash
   npm run build
   npm run preview
   ```

5. **Run full-stack development (with backend)**
   ```bash
   npm run server:dev
   ```

## Deployment

### Static Deployment (Recommended for Vercel)
This project is optimized for static deployment on Vercel, Netlify, etc.

1. Push to GitHub
2. Import into Vercel
3. Choose "Vite" preset
4. Deploy automatically

### Full-Stack Deployment (Optional)
If you need the backend API:

```bash
npm run server:build
npm run server:start
```

## Project Structure

```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/       # Page components
│   │   ├── lib/         # Utility functions
│   │   └── hooks/       # Custom React hooks
├── server/           # Backend Express application
│   ├── index.ts        # Main server entry point
│   ├── routes.ts       # API routes
│   └── storage.ts      # Data storage layer
├── shared/           # Shared types and schemas
└── attached_assets/  # Static assets and images
```

## API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/bookings` - Create new booking
- `GET /api/bookings` - Get all bookings
- `PATCH /api/bookings/:id/status` - Update booking status

## License

MIT License

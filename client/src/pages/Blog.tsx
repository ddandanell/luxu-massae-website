import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <TopBanner />
      <Header />
      <main className="pt-20">
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
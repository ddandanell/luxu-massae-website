import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <TopBanner />
      <Header />
      <main className="pt-20">
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
}
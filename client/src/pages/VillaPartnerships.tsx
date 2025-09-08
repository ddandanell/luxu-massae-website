import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import VillaPartnerships from "@/components/VillaPartnerships";
import Footer from "@/components/Footer";

export default function VillaPartnershipsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-10">
      <TopBanner />
      <Header />
      <main className="pt-20">
        <VillaPartnerships />
      </main>
      <Footer />
    </div>
  );
}
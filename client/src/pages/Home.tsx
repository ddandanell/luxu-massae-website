import Header from "@/components/Header";
import TopBanner from "@/components/TopBanner";
import Hero from "@/components/Hero";
import Guarantees from "@/components/Guarantees";
import Services from "@/components/Services";
import HealthBenefits from "@/components/HealthBenefits";
import ServiceAreas from "@/components/ServiceAreas";
import SEOContent from "@/components/SEOContent";
import UbudAreas from "@/components/UbudAreas";
import About from "@/components/About";
import BookingProcess from "@/components/BookingProcess";
import WhatToExpect from "@/components/WhatToExpect";
import SafetyHygiene from "@/components/SafetyHygiene";
import Therapists from "@/components/Therapists";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased pt-20">
      <TopBanner />
      <Header />
      <main>
        <Hero />
        <Guarantees />
        <Services />
        <HealthBenefits />
        <About />
        <BookingProcess />
        <WhatToExpect />
        <SafetyHygiene />
        <Therapists />
        <Testimonials />
        <Pricing />
        <ServiceAreas />
        <FAQ />
        <Contact />
        <UbudAreas />
        <SEOContent />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

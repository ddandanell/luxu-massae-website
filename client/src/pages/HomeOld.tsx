import HeaderNew from "@/components/HeaderNew";
import TopBanner from "@/components/TopBanner";
import EnhancedHero from "@/components/EnhancedHero";
import TrustBadges from "@/components/TrustBadges";
import Guarantees from "@/components/Guarantees";
import Services from "@/components/Services";
import HealthBenefits from "@/components/HealthBenefits";
import ServiceAreas from "@/components/ServiceAreas";
import SEOContent from "@/components/SEOContent";
import UbudAreas from "@/components/UbudAreas";
import About from "@/components/About";
import BookingProcess from "@/components/BookingProcess";
import WhatToExpected from "@/components/WhatToExpect";
import SafetyHygiene from "@/components/SafetyHygiene";
import Therapists from "@/components/Therapists";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp, { FloatingWhatsAppDesktop } from "@/components/FloatingWhatsApp";
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{}} 
      />
      
      {/* Header */}
      <HeaderNew />
      
      <main>
        {/* Enhanced Hero Section */}
        <EnhancedHero />
        
        {/* Trust Badges */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <TrustBadges variant="detailed" />
          </div>
        </section>
        
        {/* Existing Components */}
        <Services />
        <HealthBenefits />
        <About />
        <BookingProcess />
        <WhatToExpected />
        <SafetyHygiene />
        <Therapists />
        <Testimonials />
        <Pricing />
        <FAQ />
        <ServiceAreas />
        <UbudAreas />
        <SEOContent />
        <Contact />
        <Footer />
      </main>

      {/* Floating Elements */}
      <FloatingWhatsApp />
      <FloatingWhatsAppDesktop />
    </div>
  );
}
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

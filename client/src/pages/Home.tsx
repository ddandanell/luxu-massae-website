import Header from "@/components/Header";
import EnhancedHero from "@/components/EnhancedHero";
import TrustBadges from "@/components/TrustBadges";
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
import SchemaMarkup from "@/components/SchemaMarkup";

export default function Home() {
  const faqData = [
    {
      question: "How do I book a massage in Ubud?",
      answer: "Booking is simple! Contact us via WhatsApp at +62 811-2656-869. We recommend booking 24-48 hours in advance for best availability."
    },
    {
      question: "What areas do you serve in Ubud?",
      answer: "We provide in-villa massage services throughout Ubud center, Tegallalang, Sanggingan, Campuhan, Penestanan, and surrounding areas within a 15km radius."
    },
    {
      question: "Are your therapists licensed and professional?",
      answer: "Yes, all our massage therapists are licensed professionals with extensive training in therapeutic massage techniques. We maintain the highest standards of professionalism and ethics."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      {/* SEO Schema Markup */}
      <SchemaMarkup 
        type="organization" 
        data={{}} 
      />
      
      <SchemaMarkup 
        type="faq" 
        data={faqData} 
      />
      
      {/* Header */}
      <Header />
      
      <main>
        {/* Enhanced Hero Section */}
        <section id="home">
          <EnhancedHero />
        </section>
        
        {/* Trust Badges */}
        <section className="py-8 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <TrustBadges variant="detailed" />
          </div>
        </section>
        
        {/* Main Content Sections */}
        <section id="services">
          <Services />
        </section>
        <HealthBenefits />
        <section id="about">
          <About />
        </section>
        <section id="book">
          <BookingProcess />
        </section>
        <WhatToExpect />
        <SafetyHygiene />
        <Therapists />
        <Testimonials />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <ServiceAreas />
        <UbudAreas />
        <SEOContent />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

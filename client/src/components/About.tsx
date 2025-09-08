import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Leaf, Clock, Star } from "lucide-react";
import BookingModal from "@/components/BookingModal";
import aboutImage from "@assets/woman-getting-bali-massage-with-all-the-benefits-of-bailnese-massage_1757329093079.jpg";
import villaSetupImage from "@assets/pexels-anntarazevich-6560304-ezgif.com-jpg-to-webp-converter-1366x2048_1757329025591.webp";

export default function About() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const stats = [
    { label: 'Happy Clients', value: '500+' },
    { label: 'Expert Therapists', value: '15+' },
    { label: 'Years Experience', value: '5' }
  ];

  const benefits = [
    {
      icon: Home,
      title: 'Complete Privacy & Personal Sanctuary Experience',
      description: 'Experience absolute privacy and comfort in your personal accommodation, luxury residence, vacation rental, or private retreat space. Eliminate travel time, parking concerns, scheduling constraints, and public spa environments. Transform your living space into a personalized healing sanctuary, therapeutic oasis, and wellness haven designed exclusively for your comfort and relaxation needs.'
    },
    {
      icon: Leaf,
      title: 'Traditional Indonesian Healing Arts & Cultural Wellness Practices',
      description: 'Our professionally certified healing practitioners, therapeutic specialists, and wellness experts deliver authentic Balinese healing traditions, ancient Indonesian bodywork techniques, traditional therapeutic methods, and cultural wellness practices. We use premium organic essential oils, therapeutic-grade herbal blends, traditional healing ingredients, and authentic spa-quality products sourced from local Balinese suppliers and organic wellness producers.'
    },
    {
      icon: Clock,
      title: 'Personalized Scheduling & Accommodation Coordination',
      description: 'Schedule therapeutic sessions, wellness treatments, and healing appointments that perfectly accommodate your travel itinerary, vacation timeline, work schedule, retreat agenda, or personal wellness routine. Available for sunrise wellness sessions, morning therapeutic treatments, afternoon relaxation appointments, evening healing sessions, and specialized moonlight restoration experiences. Complete flexibility for digital nomads, international travelers, retreat participants, and wellness enthusiasts.'
    },
    {
      icon: Star,
      title: 'Fully Customized Therapeutic Experience & Wellness Planning',
      description: 'Every healing session, therapeutic treatment, and wellness experience is completely personalized, customized, and tailored to your individual health needs, wellness objectives, physical condition, stress levels, pain concerns, relaxation preferences, and therapeutic goals. Our expert practitioners conduct comprehensive wellness consultations, therapeutic assessments, and personalized treatment planning for optimal healing results and transformative wellness outcomes.'
    }
  ];

  return (
    <>
      {/* Why Choose In-Villa Massage */}
      <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0" data-testid="why-choose-title">
                Why Choose Home Wellness Ubud for In-Residence Therapeutic Bodywork
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8 px-2 sm:px-0" data-testid="why-choose-description">
                Experience unparalleled luxury, convenience, and personalized wellness with our mobile therapeutic services, in-residence bodywork treatments, private accommodation spa experiences, and exclusive home-based healing sessions. We transform your living space, vacation rental, luxury property, or private retreat into a comprehensive wellness sanctuary, therapeutic healing center, and personalized spa environment. Our mobile wellness professionals bring premium spa amenities, authentic Balinese healing traditions, and world-class therapeutic expertise directly to your accommodation doorstep.
              </p>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 md:space-x-4" data-testid={`benefit-${index}`}>
                    <benefit.icon className="text-primary mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h3 className="serif text-base sm:text-lg md:text-xl font-semibold mb-1 md:mb-2" data-testid={`benefit-title-${index}`}>
                        {benefit.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed" data-testid={`benefit-description-${index}`}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={villaSetupImage}
                alt="Professional massage therapy session with skilled therapist providing relaxing treatment in luxury spa setting" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center rounded-2xl shadow-2xl"
                data-testid="villa-spa-image"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Massage Ubud */}
      <section id="about" className="py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img 
                src={aboutImage}
                alt="Professional massage therapy session with skilled therapist providing relaxing treatment in luxury spa setting" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center rounded-2xl shadow-2xl"
                data-testid="balinese-healer-image"
                loading="lazy"
                width="800"
                height="600"
              />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8" data-testid="about-title">
                About Home Wellness Ubud – Premium Therapeutic Bodywork & Healing Services for Your Private Accommodation
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-4 md:mb-6" data-testid="about-intro">
                Home Wellness Ubud (homemassageubud.com) is your premier destination and trusted wellness partner for comprehensive relaxation services, therapeutic recovery treatments, stress relief solutions, pain management therapy, and authentic Balinese healing arts delivered directly to your private accommodation, luxury property, vacation rental, boutique hotel, exclusive retreat, or residential sanctuary in Ubud, Tegallalang, Sanggingan, Campuhan, Penestanan, and surrounding Central Bali regions. We specialize in mobile wellness services, in-residence therapeutic bodywork, private accommodation spa experiences, and personalized healing sessions that seamlessly blend ancient Indonesian healing traditions, traditional Balinese therapeutic methods, cultural wellness practices, and contemporary spa luxury techniques.
              </p>
              
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6" data-testid="mission-statement">
                <strong>Our Mission – Accessible Wellness & Therapeutic Healing Everywhere:</strong> Ubud represents the spiritual heart and wellness capital of Bali, globally recognized for holistic healing, therapeutic practices, meditation culture, yoga traditions, spiritual awakening, and mind-body balance. At Home Wellness Ubud, our comprehensive mission centers on making authentic Balinese healing power, traditional therapeutic wisdom, cultural wellness practices, and transformative spa experiences accessible anytime, anywhere within your private accommodation space. Whether you are an international traveler recovering from long-haul flights, jetlag, and travel fatigue; a wellness retreat participant seeking enhanced relaxation and healing support; a digital nomad requiring stress relief, muscle tension release, and work-related pain management; a vacation guest desiring luxury spa experiences; or a local resident needing regular therapeutic maintenance, we expertly transform your living space, accommodation, or private residence into a comprehensive wellness sanctuary, therapeutic healing center, and personalized spa oasis.
              </p>
              
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8" data-testid="team-description">
                <strong>Expert Certified Healing Practitioners & Therapeutic Specialists:</strong> Our professional wellness team consists of extensively trained, certified, and licensed Balinese therapeutic specialists, Indonesian healing practitioners, traditional bodywork experts, and contemporary spa professionals who have dedicated years to mastering both ancient healing traditions and modern therapeutic modalities. Each healing practitioner, therapeutic specialist, and wellness expert undergoes rigorous selection processes emphasizing professional excellence, therapeutic competency, cultural authenticity, compassionate care delivery, and unwavering dedication to holistic well-being, client satisfaction, and transformative healing outcomes. Our comprehensive service range spans from gentle aromatherapy treatments, relaxation sessions, and stress relief therapy to intensive deep tissue bodywork, pain management treatments, sports recovery therapy, and specialized therapeutic interventions, with every healing session meticulously designed, personalized, and customized around your individual wellness needs, health objectives, physical condition, and therapeutic preferences.
              </p>
              
              <div className="grid grid-cols-3 gap-3 md:gap-6 mb-6 md:mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center" data-testid={`stat-${index}`}>
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-1 md:mb-2" data-testid={`stat-value-${index}`}>
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              
              <Button 
                className="bg-primary text-primary-foreground hover:bg-accent" 
                onClick={() => setIsBookingModalOpen(true)}
                data-testid="button-book-experience"
              >
                Book Your Experience
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Massage Ubud */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="why-choose-massage-ubud-title">
              Why Choose Home Wellness Ubud for Premium In-Residence Therapeutic Services?
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="why-choose-description">
              Experience the transformative power, ancient wisdom, and healing magic of authentic Balinese therapeutic traditions, traditional Indonesian wellness practices, and cultural healing arts in the complete privacy, ultimate comfort, and personalized sanctuary of your own private accommodation, luxury residence, vacation rental, boutique retreat, or exclusive living space in Ubud's most prestigious neighborhoods and surrounding wellness districts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-in-villa">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Mobile Wellness Services Throughout Ubud & Central Bali</h3>
                <p className="text-muted-foreground text-sm">Comprehensive in-residence therapeutic services delivered directly to your private accommodation, luxury property, vacation rental, boutique hotel, exclusive retreat, residential sanctuary, or wellness lodging throughout Ubud center, Tegallalang rice terraces, Sanggingan art district, Campuhan ridge area, Penestanan village, Monkey Forest vicinity, and surrounding Central Bali wellness regions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-authentic">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Comprehensive Healing Arts & Advanced Therapeutic Modalities</h3>
                <p className="text-muted-foreground text-sm">Extensive therapeutic offerings including Traditional Balinese bodywork, Indonesian healing arts, Thai therapeutic treatments, Hot Stone therapy, Lymphatic Drainage sessions, Deep Tissue bodywork, Aromatherapy experiences, Reflexology treatments, Sports recovery therapy, Prenatal wellness care, Four Hands luxury experiences, Couples therapeutic sessions, and specialized pain management interventions.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-premium">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Premium Therapeutic Products & Professional Equipment Standards</h3>
                <p className="text-muted-foreground text-sm">Professional-grade therapeutic equipment, premium organic essential oils, therapeutic-grade herbal blends, authentic Balinese healing products, sanitized treatment tables, luxury linens, aromatherapy diffusers, and complete spa-quality amenities delivered to your accommodation. All equipment meets international hygiene standards and therapeutic industry requirements.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-flexible">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Complete Scheduling Flexibility & Accommodation Coordination</h3>
                <p className="text-muted-foreground text-sm">Comprehensive scheduling options including early morning wellness sessions, midday relaxation appointments, afternoon therapeutic treatments, evening healing sessions, late-night stress relief, weekend availability, holiday bookings, same-day appointments, advanced reservations, group scheduling, couples coordination, and specialized timing for jet lag recovery, retreat integration, work schedule accommodation, and travel itinerary coordination.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-professional">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Strictly Professional Therapeutic Standards & Ethical Practice</h3>
                <p className="text-muted-foreground text-sm">Exclusively therapeutic, medical-grade, and ethical wellness services maintaining the highest standards of professional conduct, client respect, cultural sensitivity, therapeutic integrity, and healing-focused practice. Our practitioners adhere to international therapeutic standards, professional codes of conduct, and ethical guidelines ensuring safe, respectful, and transformative healing experiences.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="benefit-peace-of-mind">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">✅ Complete Peace of Mind & Safety Assurance</h3>
                <p className="text-muted-foreground text-sm">Comprehensive safety protocols, strict hygiene standards, professional therapeutic ethics, transparent pricing, licensed practitioners, insurance coverage, client confidentiality, and exclusively legitimate healing services. We provide only authentic therapeutic treatments, restorative bodywork, and healing-focused wellness experiences with complete respect, professionalism, and therapeutic integrity for your safety, comfort, and peace of mind.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Certifications & Training */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="certifications-title">
              Professional Certifications & Training Standards
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="certifications-description">
              Our therapists hold internationally recognized certifications and continuously train in both traditional Balinese techniques and modern therapeutic practices. We maintain the highest professional standards in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-vtct">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">VTCT Level 3 Diploma</h3>
                <p className="text-muted-foreground text-sm">Globally recognized certification covering Swedish, aromatherapy, stone massage, and Indian head massage through Bali International Spa Academy (BISA).</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-cibtac">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">CIBTAC Certification</h3>
                <p className="text-muted-foreground text-sm">Internationally respected UK-based certification demonstrating rigorous training standards and professional competency.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-bisa">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">BISA Institute Certificates</h3>
                <p className="text-muted-foreground text-sm">Local Balinese Spa Academy training including intuitive massage, anatomy & physiology, and foundational spa techniques.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-mandara">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">Mandara Spa Training</h3>
                <p className="text-muted-foreground text-sm">Global spa operator certification including Indonesian healing arts, 5-day Balinese massage, and specialized modalities.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-specialized">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">Specialized Modalities</h3>
                <p className="text-muted-foreground text-sm">Advanced certifications in deep tissue, lymphatic drainage, hot-stone therapy, Thai massage, and reflexology techniques.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border hover-scale" data-testid="cert-cultural">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-xl font-semibold mb-3 text-primary">Cultural Authenticity</h3>
                <p className="text-muted-foreground text-sm">Balinese massage certification with Continuing Education Units, highlighting cultural roots and technical mastery.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-12 md:mt-16">
            <div className="bg-secondary rounded-2xl p-8 max-w-5xl mx-auto">
              <h3 className="serif text-2xl font-semibold text-primary mb-6 text-center">Why Our Certifications Matter</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-3">🌍 International Credibility</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    VTCT, CIBTAC, and other certifications are globally recognized, elevating our service above local competitors.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-3">🏛️ Deep Cultural Authenticity</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Balinese-specific training through BISA and Mandara shows our team is deeply rooted in local healing traditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-3">🎯 Versatility in Specialties</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    Certifications in diverse modalities—deep tissue, aromatherapy, hot stone, lymphatic drainage—ensure expert care.
                  </p>
                  
                  <h4 className="font-semibold text-primary mb-3">🛡️ Safety & Trust First</h4>
                  <p className="text-muted-foreground text-sm">
                    Training in anatomy, safety standards, and health protocols ensures your complete peace of mind during treatment.
                  </p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <div className="bg-primary/10 rounded-lg p-6">
                  <h4 className="serif text-xl font-semibold text-primary mb-3">Our Competitive Advantage</h4>
                  <p className="text-muted-foreground">
                    <strong>Certified VTCT, CIBTAC, and Balinese Massage Experts</strong> — trained, insured, and committed to your wellness journey. Most local providers don't specify training or certificates. We lead with internationally recognized credentials for your complete confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas & Experience */}
      <section className="py-12 md:py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8" data-testid="service-areas-title">
                Massage Services in Every Area of Ubud
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8" data-testid="service-areas-description">
                We proudly serve all of Ubud, including Ubud Center, Penestanan, Sayan, Nyuh Kuning, Pengosekan, Petulu, Tegalalang, Pejeng, Kedewatan, Mas, and Lodtunduh. No matter where your villa is located, our therapists arrive on time, ready to deliver a full spa experience at home.
              </p>
              
              <h3 className="serif text-xl md:text-2xl font-semibold mb-4 text-primary" data-testid="experience-title">
                Experience the Magic of Massage in Ubud
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8" data-testid="experience-description">
                Imagine lying in your villa surrounded by rice fields, hearing the sounds of nature, and feeling skilled Balinese hands releasing every bit of tension. That is the experience we bring. No spa walls. No stress. Just healing touch, relaxation, and renewal—delivered to your door.
              </p>
              
              <Button 
                className="bg-primary text-primary-foreground hover:bg-accent"
                onClick={() => setIsBookingModalOpen(true)}
                data-testid="button-book-today"
              >
                Book Your In-Villa Massage Today
              </Button>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Serene villa massage setup with rice field views and traditional Balinese ambiance" 
                className="w-full h-64 md:h-80 lg:h-96 object-cover object-center rounded-2xl shadow-2xl"
                data-testid="villa-experience-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Partnerships */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="partnerships-title">
              Ubud Villa Partnerships for Massage Services
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="partnerships-description">
              We are working with these because we are giving the highest premium service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-0">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-0">
                Four Seasons Resort Bali at Sayan
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-0">
                Luxury resort perched above the Ayung River valley, offering unparalleled privacy and world-class amenities.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-1">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-1">
                COMO Shambhala Estate
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-1">
                Wellness retreat set in tropical rainforest with luxury residences and holistic healing focus.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-2">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-2">
                Mandapa, a Ritz-Carlton Reserve
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-2">
                Ultra-luxury resort along the sacred Ayung River with private villas and infinity pools.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-3">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-3">
                Amankila Ubud
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-3">
                Exclusive Aman resort featuring traditional Balinese architecture with modern luxury amenities.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-4">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-4">
                Capella Ubud
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-4">
                Luxury tented camp in pristine rainforest offering glamping with five-star service and privacy.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-4 md:p-6 border-border hover-scale" data-testid="villa-partnership-5">
              <h3 className="serif text-lg md:text-xl font-semibold mb-2 md:mb-3 text-primary" data-testid="villa-name-5">
                Hanging Gardens of Bali
              </h3>
              <p className="text-muted-foreground text-xs md:text-sm" data-testid="villa-description-5">
                Iconic resort with stunning infinity pools overlooking ancient rainforest and Ayung River valley.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm md:text-base text-muted-foreground mb-6 px-4" data-testid="partnership-benefits">
              Our partnerships with Ubud's most prestigious properties ensure seamless access, 
              privacy protection, and the highest standards of luxury service delivery.
            </p>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-accent"
              onClick={() => setIsBookingModalOpen(true)}
              data-testid="button-villa-booking"
            >
              Book Villa Service
            </Button>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  );
}

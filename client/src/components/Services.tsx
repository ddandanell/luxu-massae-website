import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";
import balineseImage from "@assets/Balinese-Massage_1757317131191.jpg";
import deepTissueImage from "@assets/Deep-Tissue-Massage_1757317131192.jpg";
import aromatherapyImage from "@assets/Aromatherapy-Massage_1757317131192.jpg";
import lymphaticImage from "@assets/lymphatic-drainage-massage_1757317131192.jpg";
import thaiImage from "@assets/Thai-Massage_1757317131192.jpg";
import fourHandsImage from "@assets/Four-Hands-Massage_1757317131192.jpg";
import hotStoneImage from "@assets/woman-getting-bali-massage-with-all-the-benefits-of-bailnese-massage_1757329093079.jpg";

const services = [
  {
    id: 'traditional-balinese',
    name: 'Traditional Balinese Massage',
    image: balineseImage,
    description: 'Traditional full-body massage combining palm pressure, acupressure, and stretching with aromatic oils. Perfect for stress relief, muscle tension release, and overall relaxation.',
    pricing: [
      { duration: '60 Min', price: 'IDR 350K' },
      { duration: '90 Min', price: 'IDR 500K' },
      { duration: '120 Min', price: 'IDR 650K' }
    ]
  },
  {
    id: 'deep-tissue',
    name: 'Deep Tissue Massage',
    image: deepTissueImage,
    description: 'Intensive treatment targeting chronic muscle tension and deep knots using firm pressure and specialized techniques. Ideal for sports recovery, chronic pain, and work-related tension.',
    pricing: [
      { duration: '60 Min', price: 'IDR 400K' },
      { duration: '90 Min', price: 'IDR 550K' },
      { duration: '120 Min', price: 'IDR 700K' }
    ]
  },
  {
    id: 'aromatherapy',
    name: 'Aromatherapy Massage',
    image: aromatherapyImage,
    description: 'Relaxing full-body massage using premium essential oils like lavender, lemongrass, or eucalyptus. Light to medium pressure promotes deep relaxation and better sleep.',
    pricing: [
      { duration: '60 Min', price: 'IDR 350K' },
      { duration: '90 Min', price: 'IDR 500K' },
      { duration: '120 Min', price: 'IDR 650K' }
    ]
  },
  {
    id: 'lymphatic-drainage',
    name: 'Lymphatic Drainage Massage',
    image: lymphaticImage,
    description: 'Gentle rhythmic massage that stimulates lymphatic drainage to reduce swelling and boost immunity. Perfect for post-flight recovery and detox support.',
    pricing: [
      { duration: '60 Min', price: 'IDR 450K' },
      { duration: '90 Min', price: 'IDR 650K' },
      { duration: '120 Min', price: 'IDR 850K' }
    ]
  },
  {
    id: 'thai-massage',
    name: 'Thai Massage',
    image: thaiImage,
    description: 'Energizing treatment combining yoga-like stretches with pressure along energy lines. Performed fully clothed, it improves flexibility and relieves stiffness. Great after hiking or long sitting.',
    pricing: [
      { duration: '60 Min', price: 'IDR 450K' },
      { duration: '90 Min', price: 'IDR 650K' },
      { duration: '120 Min', price: 'IDR 850K' }
    ]
  },
  {
    id: 'four-hands',
    name: 'Four Hands Massage',
    image: fourHandsImage,
    description: 'Luxury treatment with two synchronized therapists working together for complete body coverage. Creates deep relaxation and is perfect for special occasions or ultimate indulgence.',
    pricing: [
      { duration: '60 Min', price: 'IDR 600K' },
      { duration: '90 Min', price: 'IDR 850K' },
      { duration: '120 Min', price: 'IDR 1.100K' }
    ]
  },
  {
    id: 'hot-stone',
    name: 'Hot Stone Massage',
    image: hotStoneImage,
    description: 'Therapeutic massage using smooth heated volcanic stones placed on key points of the body. The warmth penetrates deep into muscles, releasing tension and promoting profound relaxation. Perfect for muscle stiffness and stress relief.',
    pricing: [
      { duration: '60 Min', price: 'IDR 500K' },
      { duration: '90 Min', price: 'IDR 700K' },
      { duration: '120 Min', price: 'IDR 900K' }
    ]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="services-title">
            Professional Massage Services Delivered to Your Villa
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4" data-testid="services-description">
Professional Balinese massage services delivered directly to your accommodation in Ubud. Choose from traditional healing treatments to modern therapeutic techniques, all performed by certified therapists in the comfort of your villa.
          </p>
          
          {/* English Communication Badge */}
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-3 sm:px-4 py-2 rounded-full mt-3 sm:mt-4 mx-2 sm:mx-0">
            <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold text-xs sm:text-sm">Expert English consultation & booking coordination available</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-card rounded-2xl overflow-hidden hover-scale border-border" data-testid={`service-card-${service.id}`}>
              <img 
                src={service.image}
                alt={`${service.name} - authentic Balinese therapeutic treatment performed by certified healing practitioners using traditional techniques and premium organic products in private villa accommodation Ubud`} 
                className="w-full h-40 sm:h-48 md:h-56 object-cover object-center"
                loading="lazy"
                width="400"
                height="300"
              />
              <CardContent className="p-3 sm:p-4 md:p-6">
                <h3 className="serif text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 text-primary leading-tight" data-testid={`service-name-${service.id}`}>
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed" data-testid={`service-description-${service.id}`}>
                  {service.description}
                </p>
                
                {/* Pricing Options */}
                <div className="mb-3 sm:mb-4">
                  <div className="space-y-1 sm:space-y-2">
                    {service.pricing.map((option, index) => (
                      <div key={index} className="flex justify-between items-center text-xs sm:text-sm">
                        <span className="text-muted-foreground">{option.duration}:</span>
                        <span className="font-semibold text-accent">{option.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Button 
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold text-sm sm:text-base py-2 sm:py-3"
                  data-testid={`button-book-${service.id}`}
                >
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
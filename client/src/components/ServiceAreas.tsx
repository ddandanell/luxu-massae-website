import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Star } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const serviceAreas = [
  {
    area: 'Central Ubud Village & Monkey Forest Area',
    neighborhoods: ['Monkey Forest Road', 'Jalan Raya Ubud', 'Campuhan Ridge', 'Bisma Road', 'Hanoman Road'],
    landmarks: ['Sacred Monkey Forest Sanctuary', 'Ubud Traditional Market', 'Saraswati Temple', 'Ubud Palace', 'Campuhan Ridge Walk'],
    travelTime: '5-15 minutes',
    specialties: ['Luxury resort treatments', 'Traditional villa sessions', 'Heritage property services'],
    description: 'The spiritual and cultural heart of Ubud, featuring traditional architecture, world-class restaurants, and premium accommodations surrounded by lush tropical gardens and rice terraces.'
  },
  {
    area: 'Tegallalang Rice Terraces & Northern Ubud',
    neighborhoods: ['Tegallalang Village', 'Ceking Terrace', 'Pakudui', 'Sebali Village', 'Kedisan'],
    landmarks: ['Famous Tegallalang Rice Terraces', 'Ceking Rice Terrace Swings', 'Tegenungan Waterfall area', 'Suwat Waterfall vicinity'],
    travelTime: '15-25 minutes',
    specialties: ['Post-hiking recovery sessions', 'Nature immersion treatments', 'Waterfall recovery therapy'],
    description: 'Stunning agricultural landscape featuring iconic rice terraces, adventure activities, and eco-luxury accommodations with breathtaking valley views and natural water features.'
  },
  {
    area: 'Sanggingan Art District & Cultural Quarter',
    neighborhoods: ['Sanggingan Village', 'Kedewatan', 'Sayan Village', 'Ayung River Valley'],
    landmarks: ['Four Seasons Sayan', 'ARMA Museum', 'Blanco Renaissance Museum', 'Ayung River Rafting'],
    travelTime: '10-20 minutes',
    specialties: ['Artist retreat treatments', 'Creative wellness sessions', 'River valley relaxation'],
    description: 'Artistic and cultural hub featuring world-renowned museums, luxury resorts, and creative communities nestled along the dramatic Ayung River valley with inspiring natural beauty.'
  },
  {
    area: 'Penestanan & Sayan Valley Luxury Zone',
    neighborhoods: ['Penestanan Kelod', 'Penestanan Kaja', 'Sayan Ridge', 'Payangan border'],
    landmarks: ['Sayan Ridge Walk', 'Penestanan Organic Farm', 'Valley viewpoints', 'Luxury villa complexes'],
    travelTime: '15-25 minutes',
    specialties: ['Ultra-luxury villa services', 'Exclusive retreat treatments', 'Valley view sessions'],
    description: 'Exclusive residential area featuring multi-million dollar villas, organic farming communities, and panoramic valley views offering ultimate privacy and luxury accommodation experiences.'
  },
  {
    area: 'Mas Village & Traditional Craft Quarter',
    neighborhoods: ['Mas Village', 'Peliatan Village', 'Petulu Village', 'Lodtunduh'],
    landmarks: ['Traditional wood carving workshops', 'Petulu White Heron sanctuary', 'Traditional Balinese architecture'],
    travelTime: '20-30 minutes',
    specialties: ['Cultural immersion treatments', 'Traditional healing sessions', 'Artisan community wellness'],
    description: 'Traditional Balinese village community renowned for wood carving artistry, cultural preservation, and authentic village life experiences with traditional architecture and local craftsmanship.'
  },
  {
    area: 'Ubud Periphery & Extended Coverage',
    neighborhoods: ['Sukawati border', 'Gianyar proximity', 'Tampaksiring direction', 'Bedulu ancient sites'],
    landmarks: ['Elephant Cave (Goa Gajah)', 'Tirta Empul Temple', 'Gunung Kawi Temple', 'Traditional markets'],
    travelTime: '25-40 minutes',
    specialties: ['Temple tour recovery', 'Cultural exploration aftercare', 'Extended area coverage'],
    description: 'Extended service coverage including ancient temple sites, traditional markets, and cultural attractions for comprehensive wellness support throughout your Ubud exploration journey.'
  }
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="service-areas-title">
            Comprehensive Mobile Wellness Coverage Throughout Ubud & Central Bali
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="service-areas-description">
            Our premium mobile wellness services, therapeutic treatments, and in-residence healing sessions are available throughout Ubud's most prestigious neighborhoods, luxury accommodation areas, cultural districts, and surrounding wellness regions. From the spiritual heart of Central Ubud to the artistic communities of Sanggingan, from the luxury villas of Sayan Valley to the traditional villages of Mas, we deliver authentic Balinese healing wherever you are staying in this magical wellness destination.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale h-full" data-testid={`service-area-card-${index}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-primary mr-3 flex-shrink-0" />
                    <h3 className="serif text-xl font-semibold text-primary" data-testid={`service-area-title-${index}`}>
                      {area.area}
                    </h3>
                  </div>
                  <div className="flex items-center bg-primary/10 rounded-full px-3 py-1">
                    <Clock className="w-4 h-4 text-primary mr-1" />
                    <span className="text-sm font-medium text-primary">{area.travelTime}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed" data-testid={`service-area-description-${index}`}>
                  {area.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Key Neighborhoods & Areas:</h4>
                  <div className="flex flex-wrap gap-1">
                    {area.neighborhoods.map((neighborhood, neighborhoodIndex) => (
                      <span 
                        key={neighborhoodIndex}
                        className="px-2 py-1 bg-secondary text-xs rounded-full"
                        data-testid={`neighborhood-${index}-${neighborhoodIndex}`}
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Notable Landmarks & Attractions:</h4>
                  <ul className="space-y-1">
                    {area.landmarks.slice(0, 3).map((landmark, landmarkIndex) => (
                      <li key={landmarkIndex} className="text-xs text-muted-foreground flex items-start" data-testid={`landmark-${index}-${landmarkIndex}`}>
                        <Star className="w-3 h-3 text-amber-500 mr-1 mt-0.5 flex-shrink-0" />
                        <span>{landmark}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4 flex-grow">
                  <h4 className="font-semibold text-sm mb-2">Specialized Services:</h4>
                  <div className="space-y-1">
                    {area.specialties.map((specialty, specialtyIndex) => (
                      <span 
                        key={specialtyIndex}
                        className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded mr-1 mb-1"
                        data-testid={`specialty-${index}-${specialtyIndex}`}
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border">
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    data-testid={`book-area-${index}`}
                  >
                    Book Service in This Area
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 text-primary mr-3" />
              <h3 className="serif text-xl md:text-2xl font-bold text-primary">
                Complete Ubud Area Coverage & Beyond
              </h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Our mobile wellness services extend throughout the entire Ubud region and surrounding areas. If your accommodation is outside our standard coverage zones, please contact us for extended area service availability. We strive to accommodate all guests throughout Central Bali with advance booking and coordination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-accent text-primary-foreground"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                data-testid="check-coverage-button"
              >
                <Phone className="w-4 h-4 mr-2" />
                Check Your Area Coverage
              </Button>
              <Button 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                data-testid="extended-area-button"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Request Extended Area Service
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
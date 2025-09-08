import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Users, Award } from "lucide-react";

const partnerVillas = [
  {
    name: 'Four Seasons Resort Bali at Sayan',
    location: 'Sayan, Ubud',
    rating: 5.0,
    description: 'Luxury resort nestled in the Ayung River valley, offering unparalleled wellness experiences.',
    features: ['Riverside Location', 'Luxury Amenities', 'Private Villas', 'World-Class Spa']
  },
  {
    name: 'COMO Shambhala Estate',
    location: 'Begawan, Ubud',
    rating: 5.0,
    description: 'Holistic wellness retreat surrounded by tropical rainforest and ancient healing traditions.',
    features: ['Wellness Focus', 'Organic Gardens', 'Healing Cuisine', 'Expert Practitioners']
  },
  {
    name: 'Mandapa, A Ritz-Carlton Reserve',
    location: 'Kedewatan, Ubud',
    rating: 5.0,
    description: 'Ultra-luxury sanctuary offering authentic Balinese experiences in pristine natural settings.',
    features: ['Cultural Immersion', 'Private Pools', 'Butler Service', 'Gourmet Dining']
  },
  {
    name: 'The Kayon Jungle Resort',
    location: 'Bresela, Payangan',
    rating: 4.8,
    description: 'Boutique resort with stunning river valley views and traditional Balinese architecture.',
    features: ['Jungle Setting', 'Infinity Pool', 'Organic Farm', 'Yoga Pavilion']
  },
  {
    name: 'Alila Ubud',
    location: 'Melinggih Kelod, Payangan',
    rating: 4.9,
    description: 'Eco-luxury resort perched on ridgeline overlooking Ayung River with sustainable practices.',
    features: ['Sustainable Design', 'Valley Views', 'Local Experiences', 'Wellness Programs']
  },
  {
    name: 'Private Villa Network',
    location: 'Throughout Ubud',
    rating: 4.7,
    description: 'Exclusive collection of private villas offering complete privacy and personalized service.',
    features: ['Complete Privacy', 'Custom Services', 'Chef Available', 'Concierge Support']
  }
];

const partnershipBenefits = [
  {
    icon: Users,
    title: 'Exclusive Access',
    description: 'Priority booking for villa guests with special rates and packages tailored to luxury stays.'
  },
  {
    icon: Award,
    title: 'Premium Standards',
    description: 'All partner villas meet our strict quality standards for luxury, privacy, and guest experience.'
  },
  {
    icon: MapPin,
    title: 'Strategic Locations',
    description: 'Prime locations throughout Ubud ensuring easy access to cultural sites and natural beauty.'
  },
  {
    icon: Star,
    title: 'Concierge Integration',
    description: 'Seamless booking through villa concierge services with dedicated support and coordination.'
  }
];

export default function VillaPartnerships() {
  return (
    <section id="villa-partnerships" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="partnerships-title">
            Villa Partnerships: Luxury Accommodations We Serve
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="partnerships-description">
            Home Massage Ubud is the trusted wellness partner for Ubud's most prestigious resorts and private villas. 
            We bring our premium massage services directly to your luxury accommodation.
          </p>
        </div>

        {/* Partnership Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {partnershipBenefits.map((benefit, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale" data-testid={`benefit-${index}`}>
              <CardContent className="p-4 md:p-6 text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2" data-testid={`benefit-title-${index}`}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground" data-testid={`benefit-description-${index}`}>
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Villas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {partnerVillas.map((villa, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale" data-testid={`villa-${index}`}>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="serif text-lg md:text-xl font-semibold text-primary mb-1" data-testid={`villa-name-${index}`}>
                      {villa.name}
                    </h3>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {villa.location}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-amber-500 fill-current mr-1" />
                    <span className="text-sm font-semibold">{villa.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4" data-testid={`villa-description-${index}`}>
                  {villa.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {villa.features.map((feature, featureIndex) => (
                    <span 
                      key={featureIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      data-testid={`villa-feature-${index}-${featureIndex}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Villa Partnership Inquiries
            </h3>
            <p className="text-muted-foreground mb-6">
              Are you a luxury villa or resort owner in Ubud? Partner with Home Massage Ubud to offer your guests 
              premium in-villa massage services. We provide training, equipment, and professional therapists. Contact us at homemassageubud.com.
            </p>
            <Button 
              className="bg-primary hover:bg-accent text-primary-foreground"
              data-testid="partnership-contact-button"
            >
              Contact Partnership Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
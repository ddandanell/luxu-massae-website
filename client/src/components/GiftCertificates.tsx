import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, Heart, Calendar, Users, Star } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const giftPackages = [
  {
    id: 'romantic-escape',
    name: 'Romantic Villa Escape',
    icon: Heart,
    price: 'IDR 1,200K',
    originalPrice: 'IDR 1,400K',
    duration: '2 hours',
    description: 'Perfect for couples celebrating special moments in Ubud',
    includes: [
      'Four Hands Massage (90 min) for two people',
      'Premium aromatherapy oils & candles',
      'Rose petal villa decoration setup',
      'Complimentary herbal tea ceremony',
      'Beautiful gift certificate presentation'
    ],
    popular: true
  },
  {
    id: 'wellness-journey',
    name: 'Complete Wellness Journey',
    icon: Star,
    price: 'IDR 850K',
    originalPrice: 'IDR 1,000K',
    duration: '90 minutes',
    description: 'A transformative wellness experience for mind, body & soul',
    includes: [
      'Choice of Traditional Balinese or Deep Tissue',
      'Hot stone therapy addition',
      'Lymphatic drainage boost session',
      'Organic essential oil selection',
      'Post-massage healthy refreshments'
    ],
    popular: false
  },
  {
    id: 'family-wellness',
    name: 'Family Wellness Package',
    icon: Users,
    price: 'IDR 1,500K',
    originalPrice: 'IDR 1,800K',
    duration: '3 hours',
    description: 'Quality bonding time with therapeutic massage for the whole family',
    includes: [
      'Massage sessions for up to 4 people',
      'Age-appropriate massage techniques',
      'Flexible scheduling throughout the day',
      'Family wellness consultation',
      'Group meditation session included'
    ],
    popular: false
  }
];

const occasions = [
  'Anniversary Celebrations',
  'Birthday Surprises', 
  'Honeymoon Gifts',
  'Corporate Wellness Rewards',
  'Holiday Season Presents',
  'Thank You Gestures',
  'Valentine\'s Day Romance',
  'Mother\'s Day Appreciation'
];

export default function GiftCertificates() {
  return (
    <section id="gift-certificates" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="gift-certificates-title">
            Gift Certificates: Share the Gift of Wellness
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-4" data-testid="gift-certificates-description">
            Give your loved ones the ultimate relaxation experience with Home Massage Ubud gift certificates. 
            Perfect for special occasions, these beautifully presented wellness packages create unforgettable memories in Ubud.
          </p>
        </div>

        {/* Gift Packages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {giftPackages.map((pkg) => (
            <Card key={pkg.id} className={`bg-card rounded-2xl overflow-hidden hover-scale border-border relative ${
              pkg.popular ? 'ring-2 ring-primary' : ''
            }`} data-testid={`gift-package-${pkg.id}`}>
              {pkg.popular && (
                <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-primary text-primary-foreground text-xs" data-testid={`badge-popular-${pkg.id}`}>
                  MOST POPULAR
                </Badge>
              )}
              
              <CardContent className="p-3 sm:p-4 md:p-6">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <pkg.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="serif text-lg md:text-xl font-semibold text-primary" data-testid={`package-name-${pkg.id}`}>
                      {pkg.name}
                    </h3>
                    <p className="text-muted-foreground text-sm" data-testid={`package-duration-${pkg.id}`}>
                      {pkg.duration}
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4" data-testid={`package-description-${pkg.id}`}>
                  {pkg.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg md:text-xl font-bold text-primary" data-testid={`package-price-${pkg.id}`}>
                      {pkg.price}
                    </span>
                    <span className="text-muted-foreground line-through text-sm" data-testid={`package-original-price-${pkg.id}`}>
                      {pkg.originalPrice}
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground">Package Includes:</h4>
                    <ul className="space-y-1">
                      {pkg.includes.map((item, index) => (
                        <li key={index} className="text-xs text-muted-foreground flex items-start" data-testid={`package-include-${pkg.id}-${index}`}>
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <Button 
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold"
                  data-testid={`button-gift-${pkg.id}`}
                >
                  <Gift className="w-4 h-4 mr-2" />
                  Purchase Gift Certificate
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Perfect Occasions */}
        <div className="bg-secondary rounded-2xl p-6 md:p-8">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="serif text-xl md:text-2xl font-semibold text-primary mb-3" data-testid="occasions-title">
              Perfect Gift Occasions
            </h3>
            <p className="text-muted-foreground" data-testid="occasions-description">
              Home Massage Ubud gift certificates are ideal for any special moment
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {occasions.map((occasion, index) => (
              <div key={index} className="bg-card rounded-lg p-3 text-center border border-border" data-testid={`occasion-${index}`}>
                <Calendar className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">{occasion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mt-12 md:mt-16">
          <div className="text-center mb-8 md:mb-12">
            <h3 className="serif text-xl md:text-2xl font-semibold text-primary mb-3" data-testid="how-it-works-title">
              How Gift Certificates Work
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center" data-testid="step-1">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-primary">1</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Purchase Online</h4>
              <p className="text-sm text-muted-foreground">
                Choose your package and complete secure payment via WhatsApp or our booking system
              </p>
            </div>
            
            <div className="text-center" data-testid="step-2">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-primary">2</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Receive Certificate</h4>
              <p className="text-sm text-muted-foreground">
                Get a beautifully designed digital or physical certificate ready for gifting
              </p>
            </div>
            
            <div className="text-center" data-testid="step-3">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-primary">3</span>
              </div>
              <h4 className="font-semibold text-primary mb-2">Book & Enjoy</h4>
              <p className="text-sm text-muted-foreground">
                Recipients contact us to schedule their dream massage experience at their Ubud villa
              </p>
            </div>
          </div>
        </div>

        {/* Special Features */}
        <div className="mt-12 md:mt-16 bg-primary/10 rounded-2xl p-6 md:p-8">
          <div className="text-center">
            <h3 className="serif text-xl md:text-2xl font-semibold text-primary mb-4" data-testid="special-features-title">
              Gift Certificate Benefits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2" data-testid="benefit-1">
                <Gift className="w-4 h-4 text-primary" />
                <span>12-month validity period</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="benefit-2">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Flexible booking dates</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="benefit-3">
                <Heart className="w-4 h-4 text-primary" />
                <span>Personalized gift messages</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="benefit-4">
                <Users className="w-4 h-4 text-primary" />
                <span>Transferable to others</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
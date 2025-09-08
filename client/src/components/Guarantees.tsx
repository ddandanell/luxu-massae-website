import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Clock, Star, Heart, Globe, Leaf } from "lucide-react";

const guarantees = [
  {
    id: 'money-back',
    icon: Shield,
    title: '100% Money-Back Guarantee',
    description: 'If you\'re not satisfied, you don\'t pay. Period.',
    type: 'bold'
  },
  {
    id: 'professional-service',
    icon: Clock,
    title: 'Professional Service Promise',
    description: 'Punctual arrivals, seamless setup, and premium service delivery every single time.',
    type: 'bold'
  },
  {
    id: 'relax-free',
    icon: Heart,
    title: '"Relax or It\'s Free" Policy',
    description: 'If you don\'t feel relaxed within 15 minutes, you don\'t pay.',
    type: 'bold'
  }
];

const luxuryFeatures = [
  {
    icon: Star,
    title: 'Luxury Villa Specialists',
    description: 'We only serve villas, hotels, and private homes—not street walk-ins.'
  },
  {
    icon: Globe,
    title: '5-Star Villa Partnerships',
    description: 'Trusted by Bali\'s most luxurious retreats and resorts.'
  },
  {
    icon: Leaf,
    title: 'Premium Oils Only',
    description: 'Cold-pressed, natural oils infused with local botanicals.'
  },
  {
    icon: Shield,
    title: 'Certified Elite Therapists',
    description: 'Every therapist is internationally certified in Balinese and modern techniques.'
  },
  {
    icon: Clock,
    title: '7 AM – 10 PM Daily',
    description: 'Wellness delivered at your schedule, not the spa\'s.'
  },
  {
    icon: Heart,
    title: 'Strictly Therapeutic',
    description: 'Zero erotic services, 100% professional healing touch.'
  },
  {
    icon: Globe,
    title: 'High-Level English Support',
    description: 'Our booking team speaks English at a high level — seamless communication for all your needs.'
  }
];

const premiumPromises = [
  'Sanitized & Hygienic Equipment – Fresh linens and sterilized tools for every client',
  'Exclusive Client List – We serve a limited number of clients per day to ensure quality',
  'Discreet & Professional – Total privacy and respect at every session',
  'Female Therapists Only – For comfort, safety, and professionalism',
  'Professional English Support – Our booking team speaks English at a high level for seamless communication',
  'Emergency Recovery Sessions – Jet lag, long flights, sore muscles—we\'ve got you',
  'Villa Setup Service – We create a full spa atmosphere in your living room or garden',
  'Eco-Friendly Promise – Oils and linens are locally sourced and eco-conscious',
  'Private Spa Experience – No shared walls, no strangers, just you and your space',
  'Safety First – All therapists trained in basic anatomy, hygiene, and wellness care',
  'Regularly Tested Therapists – Skills checked and refreshed every 6 months',
  'Exclusive Add-Ons – Hot stones, herbal compresses, scrubs, glow rituals—all at your villa',
  'Book Anytime, Anywhere – WhatsApp, online, or call—your villa massage is one click away',
  'Trusted by Thousands – Loved by digital nomads, couples, and luxury travelers worldwide'
];

export default function Guarantees() {
  return (
    <>
      {/* Bold Guarantees Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-900 via-slate-800 to-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 text-amber-400 px-2 sm:px-0" data-testid="guarantees-title">
              The Rolls Royce of Villa Massage in Ubud
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-3xl mx-auto px-2 sm:px-0" data-testid="guarantees-subtitle">
              Bold guarantees that no average spa would dare to promise
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 max-w-5xl mx-auto">
            {guarantees.map((guarantee) => (
              <Card key={guarantee.id} className="bg-slate-800/80 border-2 border-amber-500/30 rounded-xl hover-scale backdrop-blur-sm" data-testid={`guarantee-${guarantee.id}`}>
                <CardContent className="p-3 sm:p-4 md:p-6 text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <guarantee.icon className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />
                  </div>
                  <Badge className="bg-amber-500 text-slate-900 mb-2 sm:mb-3 font-bold text-xs sm:text-sm" data-testid={`guarantee-badge-${guarantee.id}`}>
                    GUARANTEE
                  </Badge>
                  <h3 className="font-bold text-white mb-1 sm:mb-2 text-xs sm:text-sm md:text-base leading-tight" data-testid={`guarantee-title-${guarantee.id}`}>
                    {guarantee.title}
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-xs md:text-sm leading-relaxed" data-testid={`guarantee-description-${guarantee.id}`}>
                    {guarantee.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Features Grid */}
      <section className="py-8 sm:py-12 md:py-16 bg-background">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0" data-testid="luxury-features-title">
              Luxury Standards That Set Us Apart
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {luxuryFeatures.map((feature, index) => (
              <Card key={index} className="bg-card border-border hover-scale h-full" data-testid={`luxury-feature-${index}`}>
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1 sm:mb-2 text-xs sm:text-sm md:text-base leading-tight" data-testid={`luxury-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-xs md:text-sm leading-relaxed" data-testid={`luxury-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Promises */}
      <section className="py-8 sm:py-12 md:py-16 bg-secondary">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h2 className="serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 px-2 sm:px-0" data-testid="premium-promises-title">
              25 Premium Promises We Make to Every Client
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0" data-testid="premium-promises-subtitle">
              Professional standards and luxury touches that ensure your complete satisfaction
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {premiumPromises.map((promise, index) => (
                <div key={index} className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 md:p-4 bg-card rounded-lg border border-border" data-testid={`premium-promise-${index}`}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0 mt-1.5 sm:mt-2"></div>
                  <p className="text-muted-foreground text-xs sm:text-xs md:text-sm leading-relaxed" data-testid={`premium-promise-text-${index}`}>
                    {promise}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6 sm:mt-8 md:mt-12">
            <div className="bg-primary/10 rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
              <h3 className="serif text-base sm:text-lg md:text-xl font-bold text-primary mb-2 sm:mb-3" data-testid="no-spa-traffic-title">
                No Spa Traffic, No Stress
              </h3>
              <p className="text-muted-foreground text-xs sm:text-sm md:text-base" data-testid="no-spa-traffic-description">
                The spa comes to you. Exclusive, private, and perfectly tailored to your villa experience in Ubud.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
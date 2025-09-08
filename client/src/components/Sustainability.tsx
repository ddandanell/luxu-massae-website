import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Leaf, Recycle, Heart, Droplets, TreePine, Users } from "lucide-react";

const sustainabilityInitiatives = [
  {
    icon: Leaf,
    title: 'Organic & Natural Products',
    description: 'We use only certified organic oils, locally-sourced botanicals, and natural ingredients in all our treatments.',
    details: ['100% organic essential oils', 'Locally grown herbs', 'Chemical-free products', 'Cruelty-free certification']
  },
  {
    icon: Recycle,
    title: 'Zero Waste Operations',
    description: 'Our commitment to minimal environmental impact through comprehensive waste reduction and recycling programs.',
    details: ['Reusable equipment', 'Biodegradable packaging', 'Waste reduction training', 'Composting program']
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced water management systems and practices that protect Ubud\'s precious water resources.',
    details: ['Rainwater harvesting', 'Greywater recycling', 'Minimal water treatments', 'Conservation education']
  },
  {
    icon: TreePine,
    title: 'Forest Protection',
    description: 'Supporting local reforestation efforts and sustainable harvesting of natural materials.',
    details: ['Tree planting initiatives', 'Sustainable sourcing', 'Habitat conservation', 'Carbon offset programs']
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Empowering local communities through fair employment, training, and economic development programs.',
    details: ['Local therapist training', 'Fair wage policies', 'Women empowerment', 'Cultural preservation']
  },
  {
    icon: Heart,
    title: 'Wellness Philosophy',
    description: 'Holistic approach to wellness that includes environmental and social well-being alongside personal health.',
    details: ['Mindful practices', 'Eco-friendly spaces', 'Sustainable lifestyle', 'Community wellness']
  }
];

const certifications = [
  {
    name: 'USDA Organic Certified',
    description: 'All massage oils and lotions meet strict organic standards'
  },
  {
    name: 'Rainforest Alliance',
    description: 'Supporting sustainable farming and forest conservation'
  },
  {
    name: 'Fair Trade Certified',
    description: 'Ensuring fair wages and working conditions for all suppliers'
  },
  {
    name: 'Carbon Neutral Business',
    description: 'Offsetting 100% of our carbon footprint through verified programs'
  }
];

const impactStats = [
  { number: '500+', label: 'Trees Planted This Year', icon: TreePine },
  { number: '10,000L', label: 'Water Saved Monthly', icon: Droplets },
  { number: '95%', label: 'Waste Diverted from Landfills', icon: Recycle },
  { number: '50+', label: 'Local Therapists Employed', icon: Users }
];

export default function Sustainability() {
  return (
    <section id="sustainability" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="sustainability-title">
            Sustainability: Caring for Bali's Natural Beauty
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="sustainability-description">
            Home Massage Ubud is committed to preserving the natural paradise that makes Ubud special. 
            Our eco-conscious practices ensure that wellness tourism benefits both guests and the environment.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
          {impactStats.map((stat, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border text-center" data-testid={`impact-stat-${index}`}>
              <CardContent className="p-4 md:p-6">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl md:text-3xl font-bold text-primary mb-1" data-testid={`stat-number-${index}`}>
                  {stat.number}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {sustainabilityInitiatives.map((initiative, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale" data-testid={`initiative-${index}`}>
              <CardContent className="p-4 md:p-6">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <initiative.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="serif text-lg md:text-xl font-semibold text-primary mb-3" data-testid={`initiative-title-${index}`}>
                  {initiative.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4" data-testid={`initiative-description-${index}`}>
                  {initiative.description}
                </p>
                <ul className="space-y-1">
                  {initiative.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs md:text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-background rounded-2xl p-6 md:p-8 mb-12 md:mb-16">
          <h3 className="serif text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">
            Our Environmental Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 border border-border rounded-lg" data-testid={`certification-${index}`}>
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-semibold text-primary mb-2" data-testid={`cert-name-${index}`}>
                  {cert.name}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground" data-testid={`cert-description-${index}`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Join Our Sustainability Mission
            </h3>
            <p className="text-muted-foreground mb-6">
              When you choose Home Massage Ubud, you're supporting responsible tourism that protects Bali's natural beauty 
              for future generations. Experience wellness that's good for you and good for the planet.
            </p>
            <Button 
              className="bg-primary hover:bg-accent text-primary-foreground"
              data-testid="sustainability-action-button"
            >
              Learn More About Our Impact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
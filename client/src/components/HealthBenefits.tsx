import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Zap, Shield, Moon, Flower2 } from "lucide-react";

const healthBenefits = [
  {
    icon: Heart,
    title: 'Cardiovascular Health & Circulation Enhancement',
    benefits: [
      'Improved blood circulation and lymphatic drainage throughout the body',
      'Reduced blood pressure and enhanced heart rate variability',
      'Enhanced oxygen delivery to muscles and organs',
      'Improved venous return and reduced swelling in extremities',
      'Better cardiovascular endurance and overall heart health'
    ]
  },
  {
    icon: Brain,
    title: 'Mental Health & Cognitive Function',
    benefits: [
      'Significant stress reduction and cortisol level decrease',
      'Enhanced mental clarity and improved focus',
      'Reduced anxiety and depression symptoms',
      'Better emotional regulation and mood stabilization',
      'Improved memory and cognitive processing abilities'
    ]
  },
  {
    icon: Zap,
    title: 'Physical Performance & Recovery',
    benefits: [
      'Accelerated muscle recovery and reduced delayed onset muscle soreness',
      'Enhanced flexibility and range of motion in joints',
      'Reduced muscle tension and fascial restrictions',
      'Improved athletic performance and endurance',
      'Faster healing from minor injuries and physical strain'
    ]
  },
  {
    icon: Shield,
    title: 'Immune System & Disease Prevention',
    benefits: [
      'Boosted immune system function and white blood cell activity',
      'Enhanced detoxification through lymphatic system stimulation',
      'Reduced inflammation markers throughout the body',
      'Better resistance to illness and seasonal health challenges',
      'Improved overall cellular health and regeneration'
    ]
  },
  {
    icon: Moon,
    title: 'Sleep Quality & Relaxation Response',
    benefits: [
      'Deeper, more restorative sleep patterns and REM cycles',
      'Reduced insomnia and sleep disturbances',
      'Enhanced relaxation response and parasympathetic activation',
      'Better sleep onset and increased sleep duration',
      'Improved morning energy levels and daytime alertness'
    ]
  },
  {
    icon: Flower2,
    title: 'Hormonal Balance & Overall Wellness',
    benefits: [
      'Balanced hormone production including serotonin and endorphins',
      'Reduced chronic pain and improved pain management',
      'Enhanced digestive function and gut health',
      'Better skin health and improved cellular turnover',
      'Overall sense of well-being and life satisfaction'
    ]
  }
];

export default function HealthBenefits() {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="health-benefits-title">
            Comprehensive Health Benefits of Therapeutic Bodywork & Wellness Treatments
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="health-benefits-description">
            Scientific research and clinical studies consistently demonstrate the profound health benefits of regular therapeutic treatments, traditional healing practices, and professional bodywork. Discover how our authentic Balinese therapeutic services, mobile wellness treatments, and in-residence healing sessions can transform your physical health, mental well-being, and overall quality of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {healthBenefits.map((category, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale h-full" data-testid={`health-benefit-card-${index}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="serif text-xl font-semibold mb-4 text-primary" data-testid={`health-benefit-title-${index}`}>
                  {category.title}
                </h3>
                
                <ul className="space-y-2 flex-grow">
                  {category.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="text-sm text-muted-foreground flex items-start" data-testid={`health-benefit-${index}-${benefitIndex}`}>
                      <span className="text-primary mr-2 mt-1 text-xs">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Evidence-Based Wellness & Clinical Research Support
            </h3>
            <p className="text-muted-foreground mb-6">
              Our therapeutic approaches are supported by extensive clinical research, peer-reviewed studies, and decades of traditional healing wisdom. Regular therapeutic treatments have been scientifically proven to provide measurable improvements in physical health markers, mental health assessments, stress hormone levels, immune system function, and overall quality of life indicators. Experience these transformative health benefits through our authentic Balinese healing practices and professional therapeutic services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
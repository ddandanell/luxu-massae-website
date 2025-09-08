import { Card, CardContent } from "@/components/ui/card";
import { Clock, Home, Droplets, Users, Heart, Star } from "lucide-react";

const expectationPhases = [
  {
    phase: 'Pre-Arrival Preparation',
    icon: Home,
    duration: '15-30 minutes before',
    activities: [
      'Receive confirmation call or message with therapist details and estimated arrival time',
      'Prepare a quiet, comfortable space in your accommodation with minimal distractions',
      'Ensure easy access route for therapist with equipment and clear parking if needed',
      'Have a shower or bathroom facility accessible for post-treatment refreshment',
      'Wear comfortable, loose-fitting clothing that can be easily removed and replaced'
    ],
    tips: 'Create a peaceful atmosphere by dimming lights, reducing noise, and ensuring privacy for the ultimate relaxation experience.'
  },
  {
    phase: 'Therapist Arrival & Setup',
    icon: Users,
    duration: '10-15 minutes',
    activities: [
      'Professional therapist arrives punctually with all necessary equipment and supplies',
      'Brief introduction and verification of appointment details and treatment preferences',
      'Professional setup of portable massage table, fresh linens, and therapeutic equipment',
      'Arrangement of premium oils, aromatherapy supplies, and relaxation enhancements',
      'Final consultation regarding pressure preferences, focus areas, and any special requests'
    ],
    tips: 'Feel free to communicate any last-minute preferences, concerns, or questions - our therapists are here to ensure your complete comfort.'
  },
  {
    phase: 'Initial Consultation & Assessment',
    icon: Heart,
    duration: '5-10 minutes',
    activities: [
      'Comprehensive health and wellness intake to ensure safe and effective treatment',
      'Discussion of your therapeutic goals, stress areas, and desired outcomes',
      'Explanation of the chosen treatment technique and what to expect during the session',
      'Final confirmation of essential oil selections and aromatherapy preferences',
      'Professional guidance on positioning, draping, and comfort during the treatment'
    ],
    tips: 'Be honest about any health conditions, recent injuries, or areas of sensitivity to ensure the safest and most beneficial experience.'
  },
  {
    phase: 'Therapeutic Treatment Experience',
    icon: Droplets,
    duration: '60-120 minutes',
    activities: [
      'Begin with gentle, warming strokes to prepare muscles and establish relaxation response',
      'Progressive application of chosen therapeutic techniques tailored to your specific needs',
      'Continuous monitoring of comfort levels and pressure adjustments as needed',
      'Integration of aromatherapy, breathwork guidance, and mindfulness elements',
      'Focused attention on problem areas while maintaining full-body therapeutic integration'
    ],
    tips: 'Allow yourself to fully surrender to the experience - communicate if you need pressure adjustments, but otherwise, simply breathe deeply and relax.'
  },
  {
    phase: 'Treatment Completion & Transition',
    icon: Clock,
    duration: '5-10 minutes',
    activities: [
      'Gentle conclusion of bodywork with grounding techniques and final relaxation',
      'Gradual awakening process allowing time for consciousness and awareness to return',
      'Professional guidance for safe transition from treatment position to sitting',
      'Offering of complimentary herbal tea, water, or electrolyte refreshment',
      'Brief discussion of treatment effects and initial feedback on your experience'
    ],
    tips: 'Take your time transitioning - avoid sudden movements and drink plenty of water to support the detoxification process.'
  },
  {
    phase: 'Post-Treatment Care & Departure',
    icon: Star,
    duration: '10-15 minutes',
    activities: [
      'Comprehensive post-treatment guidance for maximizing therapeutic benefits',
      'Recommendations for hydration, rest, and activities to avoid for optimal results',
      'Professional equipment breakdown and space restoration to original condition',
      'Discussion of follow-up treatment scheduling and ongoing wellness planning',
      'Final payment processing and gratitude for choosing our therapeutic services'
    ],
    tips: 'Schedule some quiet time after treatment to maintain the relaxed state - avoid strenuous activities and enjoy the lasting benefits of your session.'
  }
];

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="what-to-expect-title">
            What to Expect During Your Premium In-Residence Therapeutic Experience
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="what-to-expect-description">
            Experience complete transparency and preparation for your transformative wellness journey. From initial therapist arrival to post-treatment aftercare, every moment is carefully orchestrated to provide maximum relaxation, therapeutic benefit, and peace of mind. Understanding our comprehensive service process helps you prepare for the ultimate healing experience in your private accommodation.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {expectationPhases.map((phase, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale" data-testid={`expectation-phase-card-${index}`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:text-center lg:min-w-[120px]">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                      <phase.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-center lg:mt-2">
                      <p className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {phase.duration}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="serif text-xl md:text-2xl font-semibold mb-4 text-primary" data-testid={`expectation-phase-title-${index}`}>
                      {phase.phase}
                    </h3>
                    
                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((activity, activityIndex) => (
                        <li key={activityIndex} className="text-sm text-muted-foreground flex items-start" data-testid={`expectation-activity-${index}-${activityIndex}`}>
                          <span className="text-primary mr-2 mt-1 text-xs">•</span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
                      <div className="flex items-start">
                        <Star className="w-4 h-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-amber-800 mb-1">Pro Tip:</p>
                          <p className="text-sm text-amber-700">{phase.tips}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Complete Transparency & Professional Excellence
            </h3>
            <p className="text-muted-foreground">
              Our detailed process ensures you know exactly what to expect at every stage of your therapeutic experience. We believe in complete transparency, professional excellence, and your absolute comfort throughout the entire journey. Every session is designed to exceed your expectations while delivering profound therapeutic benefits and transformative wellness results. For specific questions about your upcoming session, contact our professional team at +62 811-2656-869 or hello@homemassageubud.com.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
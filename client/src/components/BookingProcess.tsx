import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, MapPin, Users, Clock, CheckCircle } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const bookingSteps = [
  {
    step: 1,
    icon: MessageCircle,
    title: 'Initial Contact & Consultation',
    description: 'Contact our expert booking team via WhatsApp, phone, or email for personalized consultation and service recommendations.',
    details: [
      'WhatsApp us at +62 811-2656-869 for immediate assistance',
      'Call our booking hotline for detailed consultation',
      'Email hello@homemassageubud.com for comprehensive inquiries',
      'Professional English-speaking consultation available',
      'Personalized treatment recommendations based on your needs'
    ],
    timeframe: 'Immediate response during business hours'
  },
  {
    step: 2,
    icon: Calendar,
    title: 'Treatment Selection & Scheduling',
    description: 'Choose from our comprehensive range of therapeutic treatments and select your preferred date, time, and session duration.',
    details: [
      'Browse our complete menu of authentic Balinese and therapeutic treatments',
      'Select session duration: 60, 90, or 120-minute appointments available',
      'Choose preferred appointment time from 9:00 AM to 9:00 PM daily',
      'Book single sessions, couples treatments, or group experiences',
      'Schedule advance bookings or same-day appointments (subject to availability)'
    ],
    timeframe: 'Flexible scheduling 7 days a week'
  },
  {
    step: 3,
    icon: MapPin,
    title: 'Location Confirmation & Access Coordination',
    description: 'Provide your accommodation details and coordinate access logistics for seamless service delivery to your location.',
    details: [
      'Share your villa, hotel, or accommodation address in Ubud area',
      'Coordinate with property management or reception for therapist access',
      'Provide specific location instructions or landmarks if needed',
      'Confirm parking availability and access requirements',
      'Arrange any special accommodation needs or space requirements'
    ],
    timeframe: '24-48 hours before appointment'
  },
  {
    step: 4,
    icon: Users,
    title: 'Health Consultation & Customization',
    description: 'Complete health intake and discuss any specific needs, preferences, or customizations for your therapeutic experience.',
    details: [
      'Discuss any health conditions, injuries, or physical limitations',
      'Share allergies, sensitivities, or product preferences',
      'Customize pressure levels, focus areas, and treatment techniques',
      'Select preferred essential oils and aromatherapy options',
      'Communicate any special requests or therapeutic objectives'
    ],
    timeframe: 'During booking or arrival consultation'
  },
  {
    step: 5,
    icon: Clock,
    title: 'Appointment Confirmation & Preparation',
    description: 'Receive booking confirmation with therapist details and prepare your space for the ultimate therapeutic experience.',
    details: [
      'Receive confirmation message with therapist name and arrival time',
      'Prepare a quiet, private space in your accommodation',
      'Ensure access to nearby shower or bathroom facility',
      'Clear comfortable area for massage table setup',
      'Have loose, comfortable clothing available for post-treatment'
    ],
    timeframe: '1-2 hours before scheduled appointment'
  },
  {
    step: 6,
    icon: CheckCircle,
    title: 'Professional Service Delivery & Follow-up',
    description: 'Enjoy your transformative therapeutic experience and receive post-treatment care guidance and follow-up support.',
    details: [
      'Professional therapist arrives with all necessary equipment and supplies',
      'Complete setup and breakdown of therapeutic table and equipment',
      'Personalized treatment delivery based on your specific needs',
      'Post-treatment wellness guidance and aftercare recommendations',
      'Follow-up support and scheduling assistance for future appointments'
    ],
    timeframe: 'Full service duration plus setup/breakdown time'
  }
];

export default function BookingProcess() {
  return (
    <section id="booking-process" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="booking-process-title">
            Simple 6-Step Booking Process for Premium In-Residence Therapeutic Services
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="booking-process-description">
            Experience the ease and convenience of booking your transformative wellness treatments with our streamlined, professional booking process. From initial consultation to post-treatment follow-up, every step is designed to ensure your complete satisfaction, comfort, and therapeutic success. Our expert booking team guides you through each phase for the perfect healing experience.
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {bookingSteps.map((step, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale" data-testid={`booking-step-card-${index}`}>
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6">
                  <div className="flex items-center space-x-4 mb-4 lg:mb-0 lg:flex-col lg:space-x-0 lg:space-y-4 lg:text-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center lg:mt-2">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1 lg:pr-6">
                        <h3 className="serif text-xl md:text-2xl font-semibold mb-2 text-primary" data-testid={`booking-step-title-${index}`}>
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground mb-4" data-testid={`booking-step-description-${index}`}>
                          {step.description}
                        </p>
                      </div>
                      <div className="bg-primary/10 rounded-lg px-4 py-2 mb-4 lg:mb-0">
                        <p className="text-sm font-medium text-primary">
                          {step.timeframe}
                        </p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-sm text-muted-foreground flex items-start" data-testid={`booking-step-detail-${index}-${detailIndex}`}>
                          <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
              Start your transformative therapeutic experience today with our simple booking process. Our professional team is ready to guide you through each step and customize the perfect healing session for your individual needs.
            </p>
            <Button 
              className="bg-primary hover:bg-accent text-primary-foreground px-8 py-3 text-lg font-semibold"
              onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
              data-testid="start-booking-button"
            >
              Start Booking Process Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
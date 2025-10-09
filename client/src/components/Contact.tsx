import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export default function Contact() {

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 811-2656-869',
      id: 'phone'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+62 811-2656-869',
      id: 'whatsapp'
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@homemassageubud.com',
      id: 'email'
    },
    {
      icon: MessageCircle,
      label: 'Website',
      value: 'homemassageubud.com',
      id: 'website'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Central Ubud, Bali, Indonesia',
      id: 'location'
    }
  ];

  const operatingHours = [
    { day: 'Monday - Sunday', hours: '9:00 AM - 9:00 PM', type: 'regular' },
    { day: 'Same-day booking', hours: 'Subject to availability', type: 'special' },
    { day: 'Emergency contact', hours: 'Available 24/7', type: 'emergency' }
  ];

  return (
    <section id="contact" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="contact-title">
            Book Ubud Massage | Contact Best Massage Ubud Services
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4" data-testid="contact-description">
            Ready to book the best Ubud massage? Contact our professional massage Ubud booking team for authentic Balinese massage, traditional therapeutic treatments, and transformative wellness in your villa. Schedule your home massage Ubud experience - available for in-villa massage Ubud, couples massage Ubud, same-day massage appointments, and all types of massage in Ubud delivered to your location. Experience why we're the top-rated massage Ubud service in Bali.
          </p>
          
          {/* English Communication Guarantee */}
          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3 sm:p-4 max-w-2xl mx-3 sm:mx-auto mt-4 sm:mt-6">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <p className="text-emerald-800 font-semibold text-xs sm:text-sm md:text-base">
                🗣️ <strong>Professional English Communication & Wellness Consultation</strong> — Our expert booking specialists provide comprehensive English-language support, therapeutic consultation, treatment recommendations, accommodation coordination, scheduling assistance, and personalized wellness planning for international guests, travelers, expatriates, and wellness enthusiasts throughout Ubud and Central Bali.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16">
          {/* WhatsApp Booking */}
          <Card className="bg-card rounded-2xl border-border" data-testid="booking-card">
            <CardContent className="p-3 sm:p-4 md:p-6 lg:p-8">
              <h3 className="serif text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-primary" data-testid="booking-title">
                Book Your Massage
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-6" data-testid="booking-description">
                Contact us directly via WhatsApp for instant booking and personalized service.
              </p>

              <div className="space-y-3 md:space-y-4">
                <Button 
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  className="w-full bg-primary text-primary-foreground py-3 md:py-4 hover:bg-accent golden-glow font-semibold text-base md:text-lg"
                  data-testid="button-whatsapp"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Book via WhatsApp
                </Button>
                
                <a href="tel:+628112656869" className="block">
                  <Button 
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-secondary py-3 md:py-4 font-semibold text-base md:text-lg"
                    data-testid="button-call"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-secondary rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>WhatsApp:</strong> +62 811-2656-869
                </p>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <Card className="bg-card rounded-2xl border-border" data-testid="contact-info-card">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="serif text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-primary" data-testid="contact-info-title">
                  Contact Information
                </h3>
                <div className="space-y-3 md:space-y-4">
                  {contactInfo.map((contact) => (
                    <div key={contact.id} className="flex items-center space-x-3 md:space-x-4" data-testid={`contact-${contact.id}`}>
                      <contact.icon className="text-primary" size={20} />
                      <div>
                        <div className="text-sm md:text-base font-semibold" data-testid={`contact-label-${contact.id}`}>
                          {contact.label}
                        </div>
                        <div className="text-sm md:text-base text-muted-foreground" data-testid={`contact-value-${contact.id}`}>
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border" data-testid="operating-hours-card">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="serif text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-primary" data-testid="operating-hours-title">
                  Operating Hours
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {operatingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center" data-testid={`schedule-${index}`}>
                      <span className="text-sm md:text-base" data-testid={`schedule-day-${index}`}>{schedule.day}</span>
                      <span 
                        className={`text-sm md:text-base ${
                          schedule.type === 'regular' ? 'text-primary' : 
                          schedule.type === 'special' ? 'text-accent' : 'text-primary'
                        }`}
                        data-testid={`schedule-hours-${index}`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card rounded-2xl border-border" data-testid="social-media-card">
              <CardContent className="p-4 md:p-6 lg:p-8">
                <h3 className="serif text-lg md:text-xl lg:text-2xl font-semibold mb-4 md:mb-6 text-primary" data-testid="social-media-title">
                  Follow Us
                </h3>
                <div className="flex space-x-3 md:space-x-4">
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                    data-testid="button-instagram"
                  >
                    <Instagram size={20} />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                    data-testid="button-facebook"
                  >
                    <Facebook size={20} />
                  </Button>
                  <Button
                    size="icon"
                    className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                    data-testid="button-tripadvisor"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                    </svg>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

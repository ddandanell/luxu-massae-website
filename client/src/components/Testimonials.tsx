import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    location: 'Australia',
    rating: 5,
    review: 'The Traditional Balinese Royal Healing Ritual was absolutely transformative and exceeded all expectations. Kadek\'s exceptional expertise, professional demeanor, authentic traditional techniques, and intuitive therapeutic touch created the most deeply relaxing, healing, and rejuvenating wellness experience of my entire life. Having this premium therapeutic treatment delivered directly to our private accommodation in Ubud made the experience even more special, intimate, and profoundly healing. The convenience of in-residence therapy, combined with the authentic Balinese healing traditions, created a perfect wellness sanctuary right in our living space.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616c6a96789?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'emma-rodriguez',
    name: 'Emma Rodriguez',
    location: 'Spain',
    rating: 5,
    review: 'My husband and I experienced the Couples Sacred Union therapeutic treatment for our wedding anniversary celebration, and it was an incredibly romantic, professionally delivered, and deeply bonding wellness experience. The two therapeutic specialists were synchronized perfectly in their movements, pressure application, and healing techniques while maintaining the highest levels of professionalism, respect for our privacy, and therapeutic integrity. The intimate setting of our private accommodation combined with the expert dual-therapist approach created an unforgettable anniversary wellness experience that strengthened our connection and provided profound relaxation for both of us.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  },
  {
    id: 'james-chen',
    name: 'James Chen',
    location: 'Singapore',
    rating: 5,
    review: 'The Volcanic Harmony Flow therapeutic treatment was exactly what my body needed after extensive hiking adventures through Ubud\'s beautiful rice terraces and jungle trails. Wayan\'s extensive knowledge of pressure points, muscle anatomy, traditional healing techniques, and expert application of heated volcanic stones provided incredible relief for my tired muscles, sore joints, and physical fatigue. The combination of therapeutic expertise, authentic healing stones, and personalized treatment approach delivered in the comfort of our private accommodation made this an exceptional wellness experience. I highly recommend this therapeutic service to anyone seeking authentic healing and professional wellness care!',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'
  }
];

export default function Testimonials() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2 sm:px-0" data-testid="testimonials-title">
            Client Testimonials: Authentic Reviews of Premium In-Residence Therapeutic Experiences
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-2 sm:px-4" data-testid="testimonials-description">
            Discover why international guests, wellness travelers, luxury seekers, and healing enthusiasts from around the world consistently choose Home Wellness Ubud for their transformative Ubud wellness journeys, therapeutic healing experiences, and luxury spa treatments. Read authentic, verified reviews and detailed testimonials from satisfied clients who experienced our premium in-residence therapeutic services, mobile wellness treatments, and private accommodation spa experiences throughout Ubud and Central Bali.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-card rounded-2xl p-3 sm:p-4 md:p-6 border-border" data-testid={`testimonial-card-${testimonial.id}`}>
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="flex text-accent">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" data-testid={`star-${testimonial.id}-${i}`} />
                  ))}
                </div>
                <span className="ml-1 md:ml-2 text-muted-foreground text-xs md:text-sm" data-testid={`rating-${testimonial.id}`}>
                  {testimonial.rating}.0
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-3 md:mb-4 italic leading-relaxed" data-testid={`review-${testimonial.id}`}>
                "{testimonial.review}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} from ${testimonial.location} - satisfied client who experienced premium Balinese therapeutic massage services at private villa accommodation in Ubud`} 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full object-cover object-center mr-2 md:mr-3"
                  data-testid={`client-image-${testimonial.id}`}
                  loading="lazy"
                  width="48"
                  height="48"
                />
                <div>
                  <div className="text-xs sm:text-sm md:text-base font-semibold text-primary" data-testid={`client-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-muted-foreground text-xs sm:text-xs md:text-sm" data-testid={`client-location-${testimonial.id}`}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-6 sm:mt-8 md:mt-12">
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3"
            data-testid="button-read-more-reviews"
          >
            Read More Reviews
          </Button>
        </div>
      </div>
    </section>
  );
}

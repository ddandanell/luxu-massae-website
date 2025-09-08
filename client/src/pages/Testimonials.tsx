import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, MapPin, Calendar, Users, MessageCircle } from 'lucide-react';
import WhatsAppBookingModal from '@/components/WhatsAppBookingModal';

const testimonials = [
  {
    name: 'Sarah & David Chen',
    location: 'Villa Sanctuary, Ubud',
    service: 'Couples Balinese Massage',
    rating: 5,
    date: 'August 2025',
    review: 'Absolutely incredible experience! The therapists arrived on time with everything perfectly set up. The massage was so relaxing and professional. My husband and I felt completely renewed. The attention to detail was amazing - they even brought flowers and created such a peaceful atmosphere. Will definitely book again!',
    highlight: 'Professional setup and amazing attention to detail'
  },
  {
    name: 'Emma Rodriguez',
    location: 'Penestanan Villa',
    service: 'Deep Tissue Massage',
    rating: 5,
    date: 'August 2025',
    review: 'I had chronic back pain from long flights and sitting at desks. The deep tissue massage was exactly what I needed. The therapist was incredibly skilled and knew exactly where to focus. I felt immediate relief and slept better that night than I had in months. Truly therapeutic!',
    highlight: 'Immediate relief from chronic back pain'
  },
  {
    name: 'James Mitchell',
    location: 'Tegallalang Resort',
    service: 'Traditional Balinese Massage',
    rating: 5,
    date: 'July 2025',
    review: 'This was my first professional massage and it exceeded all expectations. The therapist was so knowledgeable about traditional Balinese techniques. They explained everything and made sure I was comfortable throughout. The oils smelled amazing and I felt completely relaxed. Perfect way to end our Bali vacation!',
    highlight: 'Perfect introduction to Balinese wellness traditions'
  },
  {
    name: 'Lisa & Mark Thompson',
    location: 'Campuhan Villa',
    service: 'Aromatherapy Couples Package',
    rating: 5,
    date: 'July 2025',
    review: 'We booked the aromatherapy package for our anniversary and it was magical! The essential oils were divine and the synchronized massage was so romantic. The therapists worked in perfect harmony and created such a special experience for us. We felt so connected and relaxed afterwards.',
    highlight: 'Magical anniversary experience with synchronized massage'
  },
  {
    name: 'Michael Chen',
    location: 'Sanggingan Retreat',
    service: 'Hot Stone Massage',
    rating: 5,
    date: 'June 2025',
    review: 'The hot stone massage was incredible! I was skeptical at first but the warm stones combined with the skilled massage technique was so soothing. Perfect for my sore muscles after all the temple visits and hiking. The therapist was professional and the setup at our villa was seamless.',
    highlight: 'Perfect for sore muscles after active sightseeing'
  },
  {
    name: 'Amanda Foster',
    location: 'Central Ubud Villa',
    service: 'Prenatal Massage',
    rating: 5,
    date: 'June 2025',
    review: 'Being 6 months pregnant, I was nervous about getting a massage while traveling. The prenatal specialist was so knowledgeable and gentle. They used safe positions and techniques that relieved my back pain and swelling. I felt so much better and more comfortable for the rest of our trip. Highly recommend for expecting mothers!',
    highlight: 'Safe and effective prenatal care while traveling'
  },
  {
    name: 'Robert & Jennifer Kim',
    location: 'Luxury Villa Ubud',
    service: 'Ultimate Relaxation Package',
    rating: 5,
    date: 'May 2025',
    review: 'We treated ourselves to the ultimate package and it was worth every penny! 2.5 hours of pure bliss - massage, aromatherapy, reflexology, and they even brought healthy refreshments. We felt like we had our own private spa. The therapists were so skilled and the whole experience was perfectly coordinated.',
    highlight: 'Like having a private spa at our villa'
  },
  {
    name: 'Sophie Williams',
    location: 'Monkey Forest Villa',
    service: 'Lymphatic Drainage',
    rating: 5,
    date: 'May 2025',
    review: 'I had been feeling bloated and sluggish from travel and rich foods. The lymphatic drainage massage was exactly what I needed! The therapist explained the benefits and I could feel the difference immediately. Less bloating, more energy, and my skin looked brighter. Such a unique and beneficial treatment!',
    highlight: 'Immediate improvement in energy and wellbeing'
  },
  {
    name: 'Daniel Rodriguez',
    location: 'Ubud Center Villa',
    service: 'Monthly Wellness Subscription',
    rating: 5,
    date: 'Ongoing Client',
    review: 'I work remotely from Bali and the monthly subscription has been a game-changer for my wellness routine. Having regular professional massage keeps my stress levels manageable and my posture issues under control. The priority booking and discount make it incredible value. Best investment in my health!',
    highlight: 'Game-changer for remote work wellness routine'
  },
  {
    name: 'Rachel & Tom Anderson',
    location: 'Penestanan Hillside',
    service: 'Couples Retreat Package',
    rating: 5,
    date: 'April 2025',
    review: 'Our 2-hour couples retreat was the highlight of our honeymoon! The romantic setup with flowers and candles was gorgeous. The synchronized massage was so relaxing and the herbal tea ceremony afterwards was a beautiful touch. We felt so pampered and connected. Perfect for couples wanting quality time together.',
    highlight: 'Honeymoon highlight with romantic touches'
  },
  {
    name: 'Grace Liu',
    location: 'Tegallalang Villa',
    service: 'Traditional Balinese + Aromatherapy',
    rating: 5,
    date: 'April 2025',
    review: 'I booked two different treatments during my week in Ubud and both were exceptional. The traditional Balinese was perfect for cultural experience and the aromatherapy helped with my jet lag and stress. The therapists remembered my preferences and both treatments were perfectly tailored to what I needed.',
    highlight: 'Perfectly tailored treatments for different needs'
  },
  {
    name: 'Marcus Johnson',
    location: 'Campuhan Ridge Villa',
    service: 'Deep Tissue Massage',
    rating: 5,
    date: 'March 2025',
    review: 'As an athlete, I need therapeutic massage that actually works. This deep tissue treatment was incredible - the therapist clearly had extensive training and knew how to target specific muscle groups. My recovery time was noticeably faster and I felt ready for more activities the next day. Truly professional service!',
    highlight: 'Professional athletic recovery treatment'
  }
];

const stats = [
  { number: '500+', label: 'Happy Clients' },
  { number: '98%', label: 'Satisfaction Rate' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '24/7', label: 'Booking Support' }
];

export default function Testimonials() {
  const [isBookingModalOpen, setIsBookingModalOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800">
            Client Reviews
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say About
            <span className="text-amber-600"> Their Experience</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real stories from real people who have experienced our premium 
            in-villa massage services throughout Ubud and surrounding areas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-600 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <div className="relative mb-4 flex-grow">
                    <Quote className="h-6 w-6 text-amber-200 mb-2" />
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {testimonial.review}
                    </p>
                  </div>

                  {/* Highlight */}
                  <div className="mb-4">
                    <Badge variant="outline" className="text-xs text-emerald-700 border-emerald-200">
                      {testimonial.highlight}
                    </Badge>
                  </div>

                  {/* Client Info */}
                  <div className="mt-auto">
                    <div className="font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </div>
                    
                    <div className="flex items-center text-xs text-gray-500 mb-1">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.location}
                    </div>
                    
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {testimonial.date}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.service}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Clients Choose Us
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Licensed Professionals</h3>
              <p className="text-sm text-gray-600">All therapists are certified, experienced, and specially trained in therapeutic massage techniques.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Convenience</h3>
              <p className="text-sm text-gray-600">We come to you with all equipment, setup, and cleanup - just relax and enjoy your treatment.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consistent Quality</h3>
              <p className="text-sm text-gray-600">Premium oils, professional equipment, and standardized techniques ensure the same high quality every time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience What Our Clients Love?
              </h3>
              <p className="text-gray-600 mb-8">
                Join hundreds of satisfied clients who have discovered the perfect 
                blend of convenience, professionalism, and therapeutic excellence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-amber-600 hover:bg-amber-700"
                  onClick={() => setIsBookingModalOpen(true)}
                >
                  Book Your Treatment
                </Button>
                
                <a 
                  href="https://wa.me/6281126568690" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Ask Questions
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <WhatsAppBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </div>
  );
}

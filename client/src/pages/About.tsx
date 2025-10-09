import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Shield, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  MessageCircle,
  Award,
  MapPin,
  Phone
} from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';

// Import images
import massageImage from '../assets/woman-getting-bali-massage-with-all-the-benefits-of-bailnese-massage_1757329093079.jpg';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Healing',
      description: 'Traditional Balinese techniques passed down through generations, combined with modern wellness practices.'
    },
    {
      icon: Shield,
      title: 'Safety & Hygiene',
      description: 'Strict sanitization protocols, professional-grade equipment, and certified therapists for your peace of mind.'
    },
    {
      icon: Users,
      title: 'Personal Service',
      description: 'Customized treatments tailored to your needs, preferences, and comfort level in your private space.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to providing the highest quality massage experience with attention to every detail.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '4.9', label: 'Average Rating' },
    { number: '3+', label: 'Years Experience' },
    { number: '24/7', label: 'Booking Available' }
  ];

  const team = [
    {
      name: 'Made Sutrisna',
      role: 'Senior Therapist & Founder',
      experience: '8+ years',
      specialties: ['Traditional Balinese', 'Deep Tissue', 'Aromatherapy'],
      description: 'Certified massage therapist with deep knowledge of traditional Balinese healing arts.'
    },
    {
      name: 'Kadek Sari',
      role: 'Wellness Specialist',
      experience: '6+ years',
      specialties: ['Lymphatic Drainage', 'Thai Massage', 'Prenatal Massage'],
      description: 'Expert in therapeutic massage with specialization in womens wellness treatments.'
    },
    {
      name: 'Wayan Agus',
      role: 'Therapeutic Specialist',
      experience: '7+ years',
      specialties: ['Sports Massage', 'Four Hands', 'Couples Massage'],
      description: 'Professional therapist specializing in therapeutic and sports recovery treatments.'
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-emerald-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-100 text-xs sm:text-sm">
                About Home Massage Ubud
              </Badge>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                Bringing <span className="text-emerald-600">Authentic</span>
                <br />
                <span className="text-amber-600">Balinese Wellness</span>
                <br />
                To Your Doorstep
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Founded with a passion for traditional healing arts, we bring the authentic 
                experience of Balinese massage therapy directly to your villa, hotel, or accommodation 
                throughout Ubud and surrounding areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button 
                  size="lg" 
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Book Your Treatment
                </Button>
                
                <a href="https://wa.me/6281126568690" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full">
                    <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Contact Us
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-emerald-100 to-amber-100 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                <img 
                  src={massageImage}
                  alt="Professional Balinese massage therapy session"
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                />
                
                {/* Floating Stats - Mobile Optimized */}
                <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-white p-2 sm:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="text-xs sm:text-sm font-semibold">4.9/5</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">500+ Reviews</p>
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-emerald-600 text-white p-2 sm:p-4 rounded-xl shadow-lg">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5" />
                    <div>
                      <p className="font-semibold text-xs sm:text-sm">Certified</p>
                      <p className="text-xs opacity-90">Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-emerald-600 mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Story</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Home Massage Ubud was born from a deep love for traditional Balinese healing practices 
              and a desire to make these authentic treatments accessible to visitors in the comfort 
              of their own space. What started as a small family business has grown into Ubud's 
              most trusted mobile massage service.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Our team consists of highly trained, certified therapists who have learned their craft 
              from generations of healers. We combine ancient wisdom with modern professionalism to 
              deliver an experience that not only relaxes the body but also nurtures the spirit.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-emerald-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Team</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your wellness journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-emerald-400 to-amber-400 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">{member.name.charAt(0)}</span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-emerald-600 font-semibold mb-2 text-sm sm:text-base">{member.role}</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{member.experience} experience</p>
                
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-gray-800 font-medium mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 justify-center">
                    {member.specialties.map((specialty, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <p className="text-xs sm:text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-emerald-600 to-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Experience Authentic Balinese Wellness?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto opacity-90">
            Book your personalized massage treatment today and discover why we're Ubud's most trusted mobile massage service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-emerald-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
            >
              <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book Now
            </Button>
            
            <a href="https://wa.me/6281126568690" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-emerald-600 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full"
              >
                <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <SchemaMarkup 
        type="organization"
        data={{
          name: "Home Massage Ubud",
          description: "Professional mobile massage therapy service in Ubud, Bali. Authentic Balinese healing treatments delivered to your accommodation.",
          url: "https://homemassageubud.com/about",
          telephone: "+62-811-2656-8690",
          address: {
            streetAddress: "Ubud Area",
            addressLocality: "Ubud",
            addressRegion: "Bali",
            addressCountry: "Indonesia"
          }
        }}
      />
    </>
  );
}

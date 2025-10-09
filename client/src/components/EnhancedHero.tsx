import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, MapPin, Clock, Users, MessageCircle, Phone, CheckCircle } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import TrustBadges from './TrustBadges';
import massageHeroImage from '../assets/massage-therapy-hero.jpg';

export default function EnhancedHero() {

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Star, number: '4.9', label: 'Rating' },
    { icon: Clock, number: '24/7', label: 'Booking' },
    { icon: MapPin, number: '15km', label: 'Service Area' }
  ];

  const benefits = [
    'Licensed Professional Therapists',
    'Complete Equipment & Setup Included',
    'All-Natural Premium Oils & Products',
    'Flexible Scheduling 8AM-9PM',
    '100% Satisfaction Guarantee',
    'COVID-19 Safety Protocols'
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <Badge className="mb-6 bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors">
              <Star className="h-3 w-3 mr-1" />
              #1 Rated In-Villa Massage Service
            </Badge>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Professional 
              <span className="text-amber-600 relative">
                {' '}Massage Therapy
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-amber-200" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,2 100,8" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
              <br />
              <span className="text-emerald-600">at Your Villa</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience authentic Balinese healing arts and therapeutic treatments 
              delivered to your private accommodation in Ubud. Licensed therapists, 
              premium equipment, complete setup included.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 text-left">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Book Treatment Now
              </Button>
              
              <div className="flex gap-2">
                <a href="https://wa.me/6281126568690" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline" className="px-6 py-4">
                    <MessageCircle className="mr-2 h-5 w-5 text-green-600" />
                    WhatsApp
                  </Button>
                </a>
                
                <a href="tel:+6281126568690">
                  <Button size="lg" variant="outline" className="px-6 py-4">
                    <Phone className="mr-2 h-5 w-5" />
                    Call
                  </Button>
                </a>
              </div>
            </div>

            {/* Trust Indicators */}
            <TrustBadges variant="minimal" className="mb-8" />

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <div className="p-2 bg-amber-100 rounded-full mr-2">
                      <stat.icon className="h-4 w-4 text-amber-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{stat.number}</span>
                  </div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-amber-100 to-emerald-100 rounded-3xl p-8 shadow-2xl">
              {/* Main Massage Therapy Image */}
              <div className="aspect-[4/5] bg-white rounded-2xl shadow-lg overflow-hidden relative">
                <img 
                  src={massageHeroImage}
                  alt="Professional Balinese massage therapy session in a peaceful setting"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                {/* Subtle overlay for visual enhancement */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm font-semibold">4.9/5</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">500+ Reviews</p>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-emerald-600 text-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <div>
                    <p className="font-semibold text-sm">Available Today</p>
                    <p className="text-xs opacity-90">8:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

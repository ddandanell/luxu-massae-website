import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Star, CheckCircle, MessageCircle } from 'lucide-react';
import { generateGeneralInquiryMessage, openWhatsApp } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';

// Import service images
import balineseImage from '../assets/Balinese-Massage_1757317131191.jpg';
import aromatherapyImage from '../assets/Aromatherapy-Massage_1757317131192.jpg';
import deepTissueImage from '../assets/Deep-Tissue-Massage_1757317131192.jpg';
import fourHandsImage from '../assets/Four-Hands-Massage_1757317131192.jpg';
import thaiImage from '../assets/Thai-Massage_1757317131192.jpg';
import lymphaticImage from '../assets/lymphatic-drainage-massage_1757317131192.jpg';

export default function Services() {
  const services = [
    {
      id: 1,
      name: 'Traditional Balinese Massage',
      duration: '60-90 minutes',
      price: 'From $35',
      image: balineseImage,
      description: 'A traditional healing practice that combines gentle stretches, acupressure, and aromatherapy oils to stimulate blood circulation and ease tension.',
      benefits: [
        'Improves blood circulation',
        'Reduces muscle tension',
        'Promotes deep relaxation',
        'Balances energy flow'
      ],
      popular: true
    },
    {
      id: 2,
      name: 'Aromatherapy Massage',
      duration: '60-90 minutes',
      price: 'From $40',
      image: aromatherapyImage,
      description: 'Relaxing massage using premium essential oils that penetrate deep into the skin, promoting healing and emotional balance.',
      benefits: [
        'Stress relief and relaxation',
        'Improved mood and mental clarity',
        'Enhanced sleep quality',
        'Natural detoxification'
      ]
    },
    {
      id: 3,
      name: 'Deep Tissue Massage',
      duration: '60-90 minutes',
      price: 'From $45',
      image: deepTissueImage,
      description: 'Therapeutic massage targeting deep layers of muscle tissue to release chronic tension and knots.',
      benefits: [
        'Relieves chronic pain',
        'Improves mobility',
        'Breaks down scar tissue',
        'Reduces inflammation'
      ]
    },
    {
      id: 4,
      name: 'Four Hands Massage',
      duration: '60-90 minutes',
      price: 'From $70',
      image: fourHandsImage,
      description: 'Luxurious massage performed by two therapists simultaneously, creating a deeply relaxing and unique experience.',
      benefits: [
        'Ultimate relaxation experience',
        'Synchronized movement therapy',
        'Enhanced circulation',
        'Stress elimination'
      ],
      luxury: true
    },
    {
      id: 5,
      name: 'Thai Massage',
      duration: '60-90 minutes',
      price: 'From $40',
      image: thaiImage,
      description: 'Ancient healing art combining acupressure, assisted yoga postures, and stretching techniques.',
      benefits: [
        'Increased flexibility',
        'Energy pathway activation',
        'Joint mobility improvement',
        'Mental clarity'
      ]
    },
    {
      id: 6,
      name: 'Lymphatic Drainage',
      duration: '60-90 minutes',
      price: 'From $50',
      image: lymphaticImage,
      description: 'Gentle massage technique designed to stimulate lymphatic system and promote natural detoxification.',
      benefits: [
        'Reduces swelling and bloating',
        'Boosts immune system',
        'Improves skin tone',
        'Natural detoxification'
      ]
    }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-amber-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-100 text-amber-800 hover:bg-amber-100">
              Professional Massage Services
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Authentic <span className="text-amber-600">Balinese Healing</span>
              <br />
              <span className="text-emerald-600">At Your Villa</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover our comprehensive range of therapeutic massage treatments, 
              performed by licensed professionals in the comfort of your accommodation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-lg mx-auto sm:max-w-none">
              <Button 
                size="lg" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Book Treatment Now
              </Button>
              
              <a href="https://wa.me/6281126568690" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full">
                  WhatsApp Consultation
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {service.popular && (
                      <Badge className="bg-amber-500 text-white">Most Popular</Badge>
                    )}
                    {service.luxury && (
                      <Badge className="bg-purple-500 text-white">Luxury</Badge>
                    )}
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-800">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {service.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          1-2 people
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-amber-600">{service.price}</div>
                      <div className="text-xs text-gray-500">per person</div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                  >
                    Book This Treatment
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What's Included</h2>
            <p className="text-xl text-gray-600">Everything you need for a complete wellness experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Professional Therapists</h3>
              <p className="text-gray-600">Licensed and certified massage therapists with years of experience</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Complete Setup</h3>
              <p className="text-gray-600">Professional massage table, linens, oils, and all equipment included</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Premium Experience</h3>
              <p className="text-gray-600">High-quality oils, relaxing music, and personalized treatment</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <SchemaMarkup 
        type="service"
        data={{
          name: "Home Massage Ubud - Professional Massage Services",
          description: "Authentic Balinese massage treatments delivered to your villa in Ubud. Professional therapists, premium equipment, complete setup included.",
          provider: {
            name: "Home Massage Ubud",
            telephone: "+62-811-2656-8690"
          },
          areaServed: "Ubud, Bali",
          serviceType: "Mobile Massage Therapy"
        }}
      />
    </>
  );
}

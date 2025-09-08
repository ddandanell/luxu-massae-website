import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MessageCircle, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle
} from 'lucide-react';
import WhatsAppBookingModal from '@/components/WhatsAppBookingModal';
import { generateBookingMessage } from '@/lib/whatsapp';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Contact() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    people: '1',
    hours: '1',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = () => {
    const message = generateBookingMessage({
      people: formData.people,
      hours: formData.hours,
      firstName: formData.name,
      villa: formData.location,
      message: formData.message
    });
    const whatsappUrl = `https://wa.me/6281126568690?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      people: '1',
      hours: '1',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone & WhatsApp',
      details: '+62 811 2656 8690',
      description: 'Available 24/7 for bookings',
      action: () => window.open('https://wa.me/6281126568690', '_blank')
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Chat',
      details: 'Instant Response',
      description: 'Quick booking and consultation',
      action: () => window.open('https://wa.me/6281126568690', '_blank')
    },
    {
      icon: MapPin,
      title: 'Service Area',
      details: 'Ubud & Surrounding Areas',
      description: 'Up to 15km radius coverage',
      action: null
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      details: '8:00 AM - 9:00 PM',
      description: 'Daily booking availability',
      action: null
    }
  ];

  const serviceAreas = [
    'Central Ubud', 'Monkey Forest Road', 'Jalan Raya Ubud', 'Campuhan Ridge',
    'Penestanan', 'Sayan', 'Petulu', 'Tegallalang', 'Payangan', 'Mas Village', 'Peliatan', 'Lodtunduh'
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section - Mobile Optimized */}
      <section className="pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
              Get In Touch
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact <span className="text-blue-600">Home Massage</span>
              <br />
              <span className="text-emerald-600">Ubud</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
              Ready to book your relaxing massage experience? Contact us through your preferred method below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods - Mobile Optimized Grid */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className={`p-4 sm:p-6 rounded-xl border-2 text-center transition-all hover:shadow-lg ${
                  item.action ? 'cursor-pointer hover:border-blue-300 border-gray-200' : 'border-gray-200'
                }`}
                onClick={item.action || undefined}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h3>
                <p className="text-lg sm:text-xl font-bold text-blue-600 mb-1 sm:mb-2">{item.details}</p>
                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{item.description}</p>
                
                {item.action && (
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2">
                    Contact Now
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Info - Mobile Optimized */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and we'll respond via WhatsApp with availability and pricing.
              </p>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700 text-sm sm:text-base">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      className="mt-1 text-sm sm:text-base"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-gray-700 text-sm sm:text-base">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+62 xxx xxx xxxx"
                      className="mt-1 text-sm sm:text-base"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="location" className="text-gray-700 text-sm sm:text-base">Location/Accommodation *</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Hotel/Villa name and area"
                    className="mt-1 text-sm sm:text-base"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="people" className="text-gray-700 text-sm sm:text-base">Number of People</Label>
                    <select
                      id="people"
                      name="people"
                      value={formData.people}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5+ People</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="hours" className="text-gray-700 text-sm sm:text-base">Hours of Massage</Label>
                    <select
                      id="hours"
                      name="hours"
                      value={formData.hours}
                      onChange={handleInputChange}
                      className="mt-1 w-full p-2 sm:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm sm:text-base"
                    >
                      <option value="1">1 Hour</option>
                      <option value="1.5">1.5 Hours</option>
                      <option value="2">2 Hours</option>
                      <option value="2.5">2.5 Hours</option>
                      <option value="3">3+ Hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-700 text-sm sm:text-base">Additional Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Any specific requests or questions..."
                    className="mt-1 text-sm sm:text-base"
                    rows={4}
                  />
                </div>

                <div className="space-y-3">
                  <Button 
                    onClick={handleWhatsAppSubmit}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold"
                    disabled={!formData.name || !formData.phone || !formData.location}
                  >
                    <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Send via WhatsApp
                  </Button>
                  
                  <Button 
                    onClick={() => setIsBookingModalOpen(true)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 text-base sm:text-lg font-semibold"
                  >
                    <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Quick Booking Modal
                  </Button>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Service Areas</h2>
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  We provide mobile massage services throughout Ubud and surrounding areas within a 15km radius.
                </p>
                
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Quick Contact</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <a 
                    href="https://wa.me/6281126568690" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">WhatsApp</p>
                      <p className="text-xs sm:text-sm text-gray-600">+62 811 2656 8690</p>
                    </div>
                  </a>
                  
                  <a 
                    href="tel:+6281126568690"
                    className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm sm:text-base">Phone Call</p>
                      <p className="text-xs sm:text-sm text-gray-600">+62 811 2656 8690</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-emerald-600 p-6 sm:p-8 rounded-2xl text-white">
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Available 24/7</h3>
                <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                  We're available around the clock to take your bookings and answer any questions.
                </p>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="font-semibold text-sm sm:text-base">8:00 AM - 9:00 PM Daily</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />

      <SchemaMarkup 
        type="organization"
        data={{
          name: "Home Massage Ubud",
          description: "Contact Home Massage Ubud for professional mobile massage services in Ubud, Bali.",
          url: "https://homemassageubud.com/contact",
          telephone: "+62-811-2656-8690"
        }}
      />
    </>
  );
}

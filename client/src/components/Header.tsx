import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle, MapPin } from 'lucide-react';
import WhatsAppBookingModal from './WhatsAppBookingModal';

export default function Header() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="currentColor"/>
                  <circle cx="12" cy="8" r="2" fill="white"/>
                </svg>
                <div className="font-bold text-xl text-gray-900">
                  Home Massage <span className="text-amber-600">Ubud</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                    location === item.href ? 'text-amber-600' : 'text-gray-700'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a href="tel:+6281126568690" className="text-gray-600 hover:text-amber-600 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              
              <a 
                href="https://wa.me/6281126568690" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              
              <Button 
                onClick={() => setIsBookingModalOpen(true)}
                className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2"
              >
                Book Now
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span 
                    className={`block px-3 py-2 text-base font-medium transition-colors hover:text-amber-600 ${
                      location === item.href ? 'text-amber-600 bg-amber-50' : 'text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              
              <div className="border-t pt-4 mt-4">
                <div className="flex items-center space-x-4 px-3 py-2">
                  <a href="tel:+6281126568690" className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">Call Us</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/6281126568690" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
                
                <div className="px-3 py-2">
                  <Button 
                    onClick={() => {
                      setIsBookingModalOpen(true);
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-amber-600 hover:bg-amber-700"
                  >
                    Book Treatment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Floating CTA (appears on scroll) */}
      {isScrolled && (
        <div className="fixed bottom-6 right-6 z-40 hidden md:block">
          <Button 
            onClick={() => setIsBookingModalOpen(true)}
            size="lg"
            className="bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
          >
            <MapPin className="mr-2 h-5 w-5" />
            Quick Book
          </Button>
        </div>
      )}

      <WhatsAppBookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}

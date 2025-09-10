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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Book Now', href: '#book', primary: true }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            <Link href="/">
              <div className="flex items-center space-x-1.5">
                <svg className="h-6 w-6 text-amber-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" fill="currentColor"/>
                  <circle cx="12" cy="8" r="2" fill="white"/>
                </svg>
                <div className="font-bold text-lg sm:text-xl">
                  <span className="hidden sm:inline text-gray-900">Home Massage </span>
                  <span className="text-black md:text-amber-600">
                    <span className="sm:hidden">HomeMassage</span>
                    <span className="hidden sm:inline">Ubud</span>
                  </span>
                </div>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => {
                if (item.primary) {
                  return (
                    <Button 
                      key={item.name}
                      onClick={() => setIsBookingModalOpen(true)}
                      className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 text-sm"
                    >
                      {item.name}
                    </Button>
                  );
                }
                
                if (item.href.startsWith('#')) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                      className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                        location === item.href ? 'text-amber-600' : 'text-gray-700'
                      }`}
                    >
                      {item.name}
                    </button>
                  );
                }
                
                return (
                  <Link key={item.name} href={item.href}>
                    <span className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                      location === item.href ? 'text-amber-600' : 'text-gray-700'
                    }`}>
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </nav>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 hover:bg-gray-100"
              >
                {isMenuOpen ? 
                  <X className="h-5 w-5 text-black" /> : 
                  <Menu className="h-5 w-5 text-black" />
                }
              </Button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-gray-200 shadow-xl">
            <div className="px-4 py-4 space-y-2">
              {navigation.map((item) => {
                if (item.primary) {
                  return (
                    <Button
                      key={item.name}
                      onClick={() => {
                        setIsBookingModalOpen(true);
                        setIsMenuOpen(false);
                      }}
                      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 text-sm font-semibold rounded-lg"
                    >
                      {item.name}
                    </Button>
                  );
                }
                
                if (item.href.startsWith('#')) {
                  return (
                    <button
                      key={item.name}
                      onClick={() => {
                        const element = document.querySelector(item.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-colors"
                    >
                      {item.name}
                    </button>
                  );
                }
                
                return (
                  <Link key={item.name} href={item.href}>
                    <span 
                      className={`block px-4 py-3 text-base font-medium transition-colors hover:text-amber-600 rounded-lg ${
                        location === item.href ? 'text-amber-600 bg-amber-50' : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </span>
                  </Link>
                );
              })}
              
              <div className="border-t-2 border-gray-100 pt-3 mt-3">
                <div className="flex items-center justify-center space-x-8 px-4 py-2">
                  <a 
                    href="tel:+6281126568690" 
                    className="flex items-center text-gray-700 hover:text-amber-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">Call</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/6281126568690" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-green-600 hover:text-green-700 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

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

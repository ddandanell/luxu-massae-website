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
              <a href="tel:+628112656869" className="text-gray-600 hover:text-amber-600 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
              
              <a 
                href="https://wa.me/628112656869" 
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
                  <a href="tel:+628112656869" className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    <span className="text-sm">Call Us</span>
                  </a>
                  
                  <a 
                    href="https://wa.me/628112656869" 
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-10 w-full z-40 transition-all duration-500 ease-out ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl shadow-amber-500/10' 
        : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent'
    }`}>
      <div className={`container mx-auto px-4 transition-all duration-500 flex justify-between items-center ${
        scrolled ? 'py-2' : 'py-4'
      }`}>
        
        {/* Logo */}
        <div className="flex items-center space-x-3 group cursor-pointer" data-testid="logo" onClick={() => scrollToSection('home')}>
          <div className={`transition-all duration-500 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30 group-hover:shadow-amber-500/50 group-hover:scale-110 ${
            scrolled ? 'w-6 h-6' : 'w-8 h-8'
          }`}>
            <svg className={`transition-all duration-300 ${
              scrolled ? 'w-3 h-3' : 'w-4 h-4'
            }`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="white" strokeWidth="1.5" opacity="0.8"/>
            </svg>
          </div>
          <span className={`font-bold text-white uppercase tracking-widest transition-all duration-500 bg-gradient-to-r from-white to-amber-200 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-white ${
            scrolled ? 'text-xs' : 'text-sm'
          }`}>HOME MASSAGE UBUD</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {[
            { id: 'home', label: 'HOME' },
            { id: 'services', label: 'SERVICES' },
            { id: 'ubud-areas', label: 'AREAS' },
            { id: 'about', label: 'ABOUT' },
            { id: 'contact', label: 'CONTACT' }
          ].map((item) => (
            <button 
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-3 py-2 text-white/90 hover:text-white font-medium uppercase tracking-wide transition-all duration-300 group ${
                scrolled ? 'text-xs' : 'text-sm'
              }`}
              data-testid={`nav-${item.id}`}
            >
              <span className="relative z-10">{item.label}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100"></div>
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full group-hover:left-0 rounded-full"></div>
            </button>
          ))}
        </nav>
        
        {/* Social Icons & Book Now */}
        <div className="hidden lg:flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <button className="p-2 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full" data-testid="social-instagram">
              <Instagram size={scrolled ? 16 : 18} />
            </button>
            <button className="p-2 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-full" data-testid="social-facebook">
              <Facebook size={scrolled ? 16 : 18} />
            </button>
          </div>
          <Button 
            onClick={() => setIsWhatsAppModalOpen(true)}
            className={`relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold uppercase tracking-wider border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-500/30 group ${
              scrolled ? 'px-4 py-1.5 text-xs' : 'px-6 py-2 text-sm'
            }`}
            data-testid="button-book-now"
          >
            <span className="relative z-10">BOOK NOW</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden relative p-2 text-white hover:text-amber-400 transition-all duration-300 hover:bg-white/10 rounded-xl group"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="mobile-menu-button"
        >
          <div className="relative w-6 h-6">
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
              mobileMenuOpen ? 'rotate-45 translate-y-0' : 'translate-y-[-8px]'
            }`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
              mobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ease-out ${
              mobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[8px]'
            }`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-black/98 backdrop-blur-xl border-t border-amber-500/20">
          <div className="px-6 py-8 space-y-6">
            {[
              { id: 'home', label: 'HOME' },
              { id: 'services', label: 'SERVICES' },
              { id: 'ubud-areas', label: 'AREAS' },
              { id: 'about', label: 'ABOUT' },
              { id: 'contact', label: 'CONTACT' }
            ].map((item, index) => (
              <button 
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left relative group transition-all duration-300 ${
                  mobileMenuOpen 
                    ? 'transform translate-x-0 opacity-100' 
                    : 'transform -translate-x-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                data-testid={`mobile-nav-${item.id}`}
              >
                <div className="relative px-4 py-3 text-white/90 hover:text-white font-medium uppercase tracking-widest text-sm transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-amber-500/10 group-hover:to-transparent rounded-lg">
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute left-0 top-1/2 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full transform -translate-y-1/2 rounded-full"></div>
                </div>
              </button>
            ))}
            
            <div className={`flex items-center justify-center space-x-4 pt-6 border-t border-amber-500/20 transition-all duration-300 ${
              mobileMenuOpen 
                ? 'transform translate-y-0 opacity-100' 
                : 'transform translate-y-4 opacity-0'
            }`} style={{ transitionDelay: '250ms' }}>
              <button className="p-3 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-amber-500/20 rounded-full" data-testid="mobile-social-instagram">
                <Instagram size={20} />
              </button>
              <button className="p-3 text-white/80 hover:text-amber-400 transition-all duration-300 hover:scale-110 hover:bg-amber-500/20 rounded-full" data-testid="mobile-social-facebook">
                <Facebook size={20} />
              </button>
            </div>
            
            <Button 
              onClick={() => {
                setIsWhatsAppModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className={`w-full relative overflow-hidden bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold uppercase tracking-widest py-4 border-0 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-amber-500/30 group ${
                mobileMenuOpen 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: '300ms' }}
              data-testid="mobile-button-book-now"
            >
              <span className="relative z-10">BOOK NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </Button>
          </div>
        </div>
      </div>
      
      <WhatsAppBookingModal 
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </header>
  );
}
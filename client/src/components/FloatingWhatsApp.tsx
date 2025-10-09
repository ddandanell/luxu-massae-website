import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 100px
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phoneNumber = '628112656869';
  const message = encodeURIComponent(
    'Hi! I would like to book some massages to my villa.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          flex items-center bg-green-500 hover:bg-green-600 text-white rounded-full 
          shadow-lg hover:shadow-xl transition-all duration-300 transform 
          ${isHovered ? 'scale-105' : 'scale-100'}
          ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-3">
          <MessageCircle className="h-6 w-6" />
        </div>
        <div className={`
          overflow-hidden transition-all duration-300 
          ${isHovered ? 'max-w-xs pr-4' : 'max-w-0 pr-0'}
        `}>
          <span className="whitespace-nowrap text-sm font-medium">
            Book Now via WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}

// Alternative larger floating button for desktop
export function FloatingWhatsAppDesktop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const phoneNumber = '628112656869';
  const message = encodeURIComponent(
    'Hi! I would like to book some massages to my villa.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block">
      <div className="relative">
        {/* Dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute -top-2 -right-2 bg-gray-500 hover:bg-gray-600 text-white rounded-full p-1 z-10"
        >
          <X className="h-3 w-3" />
        </button>
        
        {/* Main button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex items-center bg-gradient-to-r from-green-500 to-green-600 
            hover:from-green-600 hover:to-green-700 text-white rounded-2xl 
            shadow-lg hover:shadow-2xl transition-all duration-300 transform 
            hover:scale-105 p-4 min-w-[200px] animate-bounce
          "
        >
          <div className="bg-white/20 p-2 rounded-xl mr-3">
            <MessageCircle className="h-6 w-6" />
          </div>
          <div>
            <div className="font-semibold text-sm">Quick Booking</div>
            <div className="text-xs opacity-90">Chat with us now!</div>
          </div>
        </a>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 bg-green-400 rounded-2xl animate-ping opacity-20"></div>
      </div>
    </div>
  );
}

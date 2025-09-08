import { Clock, MessageCircle } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export default function TopBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-center space-x-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 animate-pulse" />
          <span className="text-sm font-bold tracking-wide">
            Therapist arrives in 15-45 mins
          </span>
        </div>
        <div className="hidden sm:block w-px h-4 bg-white/30"></div>
        <button 
          onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
          className="flex items-center space-x-1 text-sm font-semibold hover:text-amber-100 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
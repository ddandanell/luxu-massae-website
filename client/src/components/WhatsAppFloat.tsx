import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import WhatsAppBookingModal from "@/components/WhatsAppBookingModal";

export default function WhatsAppFloat() {
  const [isWhatsAppModalOpen, setIsWhatsAppModalOpen] = useState(false);

  const handleWhatsAppClick = () => {
    setIsWhatsAppModalOpen(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-600 text-white shadow-2xl animate-bounce"
        data-testid="whatsapp-float-button"
      >
        <MessageCircle size={24} />
      </Button>
      
      {/* Optional tooltip */}
      <div className="absolute bottom-20 right-0 bg-card border border-border rounded-lg p-3 shadow-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <p className="text-sm font-medium">💬 Chat with us on WhatsApp</p>
        <p className="text-xs text-muted-foreground">Quick booking & instant replies</p>
      </div>
      
      <WhatsAppBookingModal 
        isOpen={isWhatsAppModalOpen}
        onClose={() => setIsWhatsAppModalOpen(false)}
      />
    </div>
  );
}
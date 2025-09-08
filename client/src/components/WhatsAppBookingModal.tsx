import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Clock, MessageCircle, Zap, Calendar } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface WhatsAppBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppBookingModal({ isOpen, onClose }: WhatsAppBookingModalProps) {
  const [bookingType, setBookingType] = useState<'asap' | 'scheduled'>('asap');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: '',
    date: '',
    time: '',
    villa: '',
    notes: ''
  });

  const services = [
    'Traditional Balinese Massage',
    'Deep Tissue Massage', 
    'Aromatherapy Massage',
    'Lymphatic Drainage Massage',
    'Thai Massage',
    'Four Hands Massage'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
    '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateWhatsAppMessage = () => {
    let message = "🌺 *Home Massage Ubud Booking Request* 🌺\n\n";
    
    message += `👋 Hello! I'd like to book a massage.\n\n`;
    message += `📱 *Customer Details:*\n`;
    message += `• Name: ${formData.name || 'Not provided'}\n`;
    message += `• Phone: ${formData.phone || 'Not provided'}\n`;
    message += `• Villa: ${formData.villa || 'Not provided'}\n\n`;
    
    message += `💆‍♀️ *Treatment:* ${formData.treatment || 'Not specified'}\n\n`;
    
    if (bookingType === 'asap') {
      message += `⚡ *BOOKING TYPE:* ASAP (Next Available)\n`;
      message += `🕐 Please send therapist as soon as possible\n\n`;
    } else {
      message += `📅 *BOOKING TYPE:* Scheduled\n`;
      message += `🗓️ Date: ${formData.date || 'Not specified'}\n`;
      message += `🕐 Time: ${formData.time || 'Not specified'}\n\n`;
    }
    
    if (formData.notes) {
      message += `📝 *Additional Notes:*\n${formData.notes}\n\n`;
    }
    
    message += `🗣️ *Communication:* English (our booking team speaks English at a high level)\n\n`;
    message += `⏰ *We will reply to you within 10 minutes to confirm your booking!*\n\n`;
    message += `Thank you for choosing Home Massage Ubud! 🙏`;
    
    return message;
  };

  const handleSendWhatsApp = () => {
    if (!formData.name) {
      alert('Please enter your name');
      return;
    }
    
    if (bookingType === 'scheduled' && (!formData.date || !formData.time)) {
      alert('Please select date and time for scheduled booking');
      return;
    }

    const message = generateWhatsAppMessage();
    openWhatsApp(message);
    onClose();
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      treatment: '',
      date: '',
      time: '',
      villa: '',
      notes: ''
    });
    setBookingType('asap');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] sm:max-w-[500px] bg-card border-border max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-primary">
            <MessageCircle className="w-5 h-5" />
            <span>Book via WhatsApp</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Booking Type Selection */}
          <div className="grid grid-cols-2 gap-3">
            <Button
              variant={bookingType === 'asap' ? 'default' : 'outline'}
              onClick={() => setBookingType('asap')}
              className={`p-4 h-auto flex flex-col space-y-2 ${
                bookingType === 'asap' 
                  ? 'bg-primary text-primary-foreground animate-pulse' 
                  : 'border-border hover:bg-secondary'
              }`}
              data-testid="booking-type-asap"
            >
              <Zap className="w-6 h-6" />
              <span className="font-semibold">ASAP</span>
              <span className="text-xs opacity-80">Next Available</span>
            </Button>
            
            <Button
              variant={bookingType === 'scheduled' ? 'default' : 'outline'}
              onClick={() => setBookingType('scheduled')}
              className={`p-4 h-auto flex flex-col space-y-2 ${
                bookingType === 'scheduled' 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border-border hover:bg-secondary'
              }`}
              data-testid="booking-type-scheduled"
            >
              <Calendar className="w-6 h-6" />
              <span className="font-semibold">Schedule</span>
              <span className="text-xs opacity-80">Pick Date & Time</span>
            </Button>
          </div>
          
          {/* Customer Details */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Your Details</h3>
            
            <Input
              placeholder="Your Name *"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="bg-input border-border"
              data-testid="modal-input-name"
            />
            
            <Input
              placeholder="Phone/WhatsApp Number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className="bg-input border-border"
              data-testid="modal-input-phone"
            />
            
            <Input
              placeholder="Villa Name/Address in Ubud"
              value={formData.villa}
              onChange={(e) => handleInputChange('villa', e.target.value)}
              className="bg-input border-border"
              data-testid="modal-input-villa"
            />
          </div>
          
          {/* Treatment Selection */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Treatment</h3>
            <Select value={formData.treatment} onValueChange={(value) => handleInputChange('treatment', value)}>
              <SelectTrigger className="bg-input border-border" data-testid="modal-select-treatment">
                <SelectValue placeholder="Choose your massage treatment" />
              </SelectTrigger>
              <SelectContent>
                {services.map((service, index) => (
                  <SelectItem key={index} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          {/* Scheduling (only show if scheduled is selected) */}
          {bookingType === 'scheduled' && (
            <div className="space-y-4 bg-secondary/50 p-4 rounded-lg">
              <h3 className="font-semibold text-foreground flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>When would you like your massage?</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="bg-input border-border"
                  data-testid="modal-input-date"
                />
                
                <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger className="bg-input border-border" data-testid="modal-select-time">
                    <SelectValue placeholder="Time" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time, index) => (
                      <SelectItem key={index} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
          
          {/* Additional Notes */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Additional Requests (Optional)</h3>
            <Textarea
              placeholder="Any special requests or notes? (pressure preference, focus areas, etc.)"
              value={formData.notes}
              onChange={(e) => handleInputChange('notes', e.target.value)}
              className="bg-input border-border resize-none"
              rows={3}
              data-testid="modal-textarea-notes"
            />
          </div>
          
          {/* Reply Promise */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-amber-600" />
              <p className="text-amber-800 font-semibold text-sm">
                ⏰ <strong>We will reply to you within 10 minutes</strong> to confirm your booking!
              </p>
            </div>
          </div>
          
          {/* Send Button */}
          <Button
            onClick={handleSendWhatsApp}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 font-semibold"
            data-testid="modal-send-whatsapp"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Send WhatsApp Message
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
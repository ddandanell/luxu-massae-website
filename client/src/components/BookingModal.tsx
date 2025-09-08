import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Users, Clock, MapPin } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService?: string;
}

export default function BookingModal({ isOpen, onClose, selectedService }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    people: "",
    hours: "",
    date: "",
    time: "",
    notes: ""
  });

  const generateBookingMessage = () => {
    const message = `Hi! I'd like to book a massage service:

👤 Name: ${formData.name}
📱 Phone: ${formData.phone}
📍 Villa/Location: ${formData.location}

👥 How many persons: ${formData.people}
⏰ How many hours: ${formData.hours}

📅 Preferred date: ${formData.date}
🕐 Preferred time: ${formData.time}

${formData.notes ? `📝 Additional requests: ${formData.notes}

` : ''}Please confirm availability and send final pricing. Thank you!`;

    return encodeURIComponent(message);
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.people || !formData.hours) {
      alert("Please fill in all required fields");
      return;
    }
    
    openWhatsApp(generateBookingMessage());
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border">
        <DialogHeader>
          <DialogTitle className="serif text-xl text-primary">Book Your Massage</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Your full name"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+62 or your country code"
            />
          </div>
          
          <div>
            <Label htmlFor="location">Villa/Hotel Location</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              placeholder="e.g., Villa Name, Ubud Center"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="people">How many persons *</Label>
              <Select value={formData.people} onValueChange={(value) => setFormData(prev => ({ ...prev, people: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select persons" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 person</SelectItem>
                  <SelectItem value="2">2 people</SelectItem>
                  <SelectItem value="3">3 people</SelectItem>
                  <SelectItem value="4">4 people</SelectItem>
                  <SelectItem value="5+">5+ people</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="hours">How many hours *</Label>
              <Select value={formData.hours} onValueChange={(value) => setFormData(prev => ({ ...prev, hours: value }))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select hours" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 hour</SelectItem>
                  <SelectItem value="1.5">1.5 hours</SelectItem>
                  <SelectItem value="2">2 hours</SelectItem>
                  <SelectItem value="2.5">2.5 hours</SelectItem>
                  <SelectItem value="3">3 hours</SelectItem>
                  <SelectItem value="3+">3+ hours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              />
            </div>
            
            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="notes">Special Requests</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any special requests or health conditions we should know about..."
              rows={3}
            />
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancel
            </Button>
            <Button 
              onClick={handleSubmit}
              className="flex-1 bg-primary hover:bg-accent text-primary-foreground"
            >
              <Phone className="w-4 h-4 mr-2" />
              Send to WhatsApp
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
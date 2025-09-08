// WhatsApp utility functions for booking and chat
export const WHATSAPP_NUMBER = "+62 811-2656-869";

export interface BookingDetails {
  treatment?: string;
  people?: string;
  hours?: string;
  date?: string;
  time?: string;
  firstName?: string;
  lastName?: string;
  villa?: string;
  message?: string;
}

export function generateWhatsAppURL(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
}

export function generateBookingMessage(details: BookingDetails): string {
  let message = "🌸 *UBUD VILLA MASSAGE* 🌸\n\n";
  message += "Hi! I'd like to book a massage treatment:\n\n";
  
  if (details.treatment) {
    message += `💆‍♀️ *Treatment:* ${details.treatment}\n`;
  }
  
  if (details.people) {
    message += `👥 *Number of People:* ${details.people}\n`;
  }
  
  if (details.hours) {
    message += `⏰ *Hours of Massage:* ${details.hours}\n`;
  }
  
  if (details.date) {
    message += `📅 *Preferred Date:* ${details.date}\n`;
  }
  
  if (details.time) {
    message += `🕐 *Preferred Time:* ${details.time}\n`;
  }
  
  if (details.firstName || details.lastName) {
    message += `👤 *Name:* ${details.firstName} ${details.lastName}\n`;
  }
  
  if (details.villa) {
    message += `🏡 *Villa Location:* ${details.villa}\n`;
  }
  
  if (details.message) {
    message += `📝 *Special Requests:* ${details.message}\n`;
  }
  
  message += "\nPlease confirm availability and pricing. Thank you! 🙏";
  
  return message;
}

export function generateQuickBookingMessage(treatment: string, date: string, time: string): string {
  let message = "🌸 *UBUD VILLA MASSAGE* 🌸\n\n";
  message += "Hi! I'd like to make a quick booking:\n\n";
  message += `💆‍♀️ *Treatment:* ${treatment}\n`;
  message += `📅 *Date:* ${date}\n`;
  message += `⏰ *Time:* ${time}\n\n`;
  message += "Please confirm availability and send me the details. Thank you! 🙏";
  
  return message;
}

export function generateGeneralInquiryMessage(): string {
  return "🌸 Hi Ubud Villa Massage! I'm interested in your in-villa massage services in Ubud. Could you please share more information about your treatments and availability? Thank you! 🙏";
}

export function openWhatsApp(message: string): void {
  const url = generateWhatsAppURL(message);
  window.open(url, '_blank');
}
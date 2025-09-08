import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 'booking',
    question: 'How do I book premium in-residence therapeutic treatments and mobile wellness services in Ubud?',
    answer: 'Booking your transformative wellness experience is incredibly simple and convenient! Contact us through multiple convenient channels: use our comprehensive online booking system at homemassageubud.com, WhatsApp our expert booking team at +62 811-2656-869 for immediate assistance, call us directly for personalized consultation, or email hello@homemassageubud.com for detailed inquiries. We strongly recommend booking 24-48 hours in advance, especially during peak wellness seasons, holidays, and popular travel periods. Our professional booking specialists will confirm your therapeutic appointment, coordinate seamlessly with your accommodation management, arrange therapist access, and ensure all logistical details are perfectly handled for your comfort and convenience.'
  },
  {
    id: 'preparation',
    question: 'What preparation is needed for my private accommodation wellness session?',
    answer: 'Absolutely nothing - we bring every professional element needed for your transformative therapeutic experience! Simply ensure you have a peaceful, quiet, and private space available within your accommodation, residence, or retreat area. Our mobile wellness specialists arrive fully equipped with professional portable therapeutic tables, premium organic essential oils, therapeutic-grade healing products, fresh sanitized linens and towels, aromatherapy supplies, relaxation music, and all necessary wellness equipment. Access to a nearby shower or bathroom facility is helpful for post-treatment refreshment and enhanced relaxation, but we can accommodate any space configuration for your maximum comfort and therapeutic benefit.'
  },
  {
    id: 'certification',
    question: 'Are your healing practitioners certified, licensed, and thoroughly professional?',
    answer: 'Absolutely and unequivocally yes! Every single healing practitioner, therapeutic specialist, and wellness expert on our professional team holds comprehensive certifications in traditional Balinese therapeutic techniques, Indonesian healing arts, modern spa methodologies, and international wellness standards. Our practitioners undergo extensive continuous education, professional development training, and maintain current certifications from internationally recognized therapeutic institutions, wellness academies, and healing arts organizations. Our entire team maintains the absolute highest standards of professional conduct, therapeutic integrity, client respect, cultural sensitivity, ethical practice, complete client privacy protection, and unwavering commitment to transformative healing experiences.'
  },
  {
    id: 'inclusions',
    question: 'What comprehensive services and amenities are included in my therapeutic treatment investment?',
    answer: 'Your therapeutic treatment investment includes an extensive array of professional services and premium amenities: complete professional therapeutic table setup and breakdown, premium organic essential oils and therapeutic-grade lotions, fresh sanitized linens and luxury towels, comprehensive aromatherapy elements and relaxation enhancements, complimentary post-treatment herbal tea or premium water, detailed pre-treatment wellness consultation and post-session guidance, transportation of all equipment and supplies to your accommodation, professional setup and breakdown of all therapeutic equipment, and ongoing support for your wellness journey. Every element is designed to provide maximum therapeutic value, comfort, and transformative healing results.'
  },
  {
    id: 'special-requests',
    question: 'Can you accommodate specialized therapeutic requests, health conditions, and individual wellness needs?',
    answer: 'Absolutely and comprehensively! We expertly customize and personalize every therapeutic treatment for pregnancy wellness care, injury rehabilitation support, allergy accommodations, chronic pain management, mobility limitations, specific health conditions, therapeutic preferences, and individual wellness objectives. Please inform our professional booking team during your reservation process about any health conditions, physical limitations, therapeutic preferences, allergic sensitivities, or specialized wellness needs. Our extensively trained healing practitioners and therapeutic specialists are expertly qualified to modify treatment techniques, adjust pressure applications, select appropriate therapeutic products, and customize healing approaches for optimal safety, comfort, and therapeutic effectiveness tailored to your unique individual requirements.'
  },
  {
    id: 'policies',
    question: 'What are your comprehensive cancellation policies and flexible payment options?',
    answer: 'We maintain fair and transparent policies designed for your convenience and peace of mind. Cancellation Policy: We require 24-hour advance notice for cancellations to avoid service charges, though we understand emergencies and work flexibly with our valued clients. Payment Options: We accept multiple convenient payment methods including cash payments (USD or Indonesian Rupiah), international credit cards, PayPal transfers, Wise international transfers, and local bank transfers for your convenience. Additional Information: A 10% service charge applies for same-day bookings when therapist availability permits. Group bookings, retreats, and multiple-session packages may require a modest deposit to secure your preferred dates and therapist assignments. All pricing is transparent with no hidden fees.'
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="faq-title">
            Comprehensive FAQ: In-Residence Therapeutic Services & Mobile Wellness
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="faq-description">
            Comprehensive information and detailed answers about booking, experiencing, and enjoying luxury therapeutic services, mobile wellness treatments, and premium spa experiences in your private accommodation, residence, or retreat space throughout Ubud and Central Bali. Get expert answers to the most frequently asked questions from our international guests, wellness travelers, and therapeutic service clients.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq) => (
            <Card key={faq.id} className="bg-card rounded-lg border-border" data-testid={`faq-item-${faq.id}`}>
              <button 
                className="w-full text-left p-4 md:p-6 flex justify-between items-center hover:bg-muted/20 transition-colors"
                onClick={() => toggleItem(faq.id)}
                data-testid={`faq-button-${faq.id}`}
              >
                <span className="text-sm md:text-base font-semibold pr-2" data-testid={`faq-question-${faq.id}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`transform transition-transform ${
                    openItems.has(faq.id) ? 'rotate-180' : ''
                  }`}
                  size={20}
                  data-testid={`faq-chevron-${faq.id}`}
                />
              </button>
              {openItems.has(faq.id) && (
                <div className="p-4 md:p-6 pt-0 text-sm md:text-base text-muted-foreground" data-testid={`faq-answer-${faq.id}`}>
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

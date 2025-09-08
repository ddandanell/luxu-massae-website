import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, Droplets, CheckCircle, Lock, Award } from "lucide-react";

const safetyMeasures = [
  {
    icon: Shield,
    title: 'Professional Health & Safety Protocols',
    measures: [
      'All therapeutic equipment sanitized with hospital-grade disinfectants before each session',
      'Fresh, single-use linens and towels provided for every client appointment',
      'Therapists undergo regular health screenings and maintain current health certifications',
      'Comprehensive liability insurance coverage for all therapeutic services and practitioners',
      'Strict adherence to international spa and wellness industry safety standards'
    ]
  },
  {
    icon: Users,
    title: 'Client Privacy & Professional Boundaries',
    measures: [
      'Absolute respect for client privacy, dignity, and personal boundaries at all times',
      'Professional draping techniques ensuring complete modesty and comfort throughout treatments',
      'Strictly therapeutic focus with no inappropriate or non-professional services offered',
      'Clear communication protocols and informed consent procedures before all sessions',
      'Professional conduct training and ongoing ethical education for all practitioners'
    ]
  },
  {
    icon: Droplets,
    title: 'Premium Product Safety & Quality Assurance',
    measures: [
      'Exclusive use of certified organic, therapeutic-grade essential oils and products',
      'Allergy screening and product sensitivity assessments before treatment application',
      'Regular product quality testing and safety verification from certified suppliers',
      'Proper storage and handling protocols for all therapeutic oils and equipment',
      'Comprehensive ingredient disclosure available for clients with sensitivities'
    ]
  },
  {
    icon: CheckCircle,
    title: 'COVID-19 Safety & Health Protocols',
    measures: [
      'Enhanced sanitization procedures following international health organization guidelines',
      'Regular health monitoring and symptom screening for all team members',
      'Contactless booking, payment, and communication options available',
      'Flexible rescheduling policies for clients experiencing any health concerns',
      'Updated safety protocols in compliance with local health department requirements'
    ]
  },
  {
    icon: Lock,
    title: 'Secure Booking & Information Protection',
    measures: [
      'Encrypted data protection for all client information and booking details',
      'Confidential health intake procedures and secure information storage',
      'Professional discretion maintained regarding all client interactions and treatments',
      'Secure payment processing through verified and trusted financial platforms',
      'Strict confidentiality agreements signed by all team members and practitioners'
    ]
  },
  {
    icon: Award,
    title: 'Professional Certifications & Credentials',
    measures: [
      'All practitioners hold current certifications from recognized therapeutic institutions',
      'Regular continuing education requirements and skill advancement training',
      'Professional membership in international massage therapy and wellness organizations',
      'Background checks and professional references verified for all team members',
      'Ongoing assessment and quality assurance monitoring for service excellence'
    ]
  }
];

export default function SafetyHygiene() {
  return (
    <section id="safety-hygiene" className="py-12 md:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="safety-hygiene-title">
            Comprehensive Safety Protocols & Professional Hygiene Standards
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="safety-hygiene-description">
            Your safety, comfort, and peace of mind are our highest priorities. We maintain the most stringent safety protocols, professional hygiene standards, and ethical practices in the mobile wellness industry. Every aspect of our service delivery is designed to ensure your complete safety, absolute privacy, and total confidence in our professional therapeutic services throughout Ubud and Central Bali.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {safetyMeasures.map((category, index) => (
            <Card key={index} className="bg-card rounded-2xl border-border hover-scale h-full" data-testid={`safety-measure-card-${index}`}>
              <CardContent className="p-6 h-full flex flex-col">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="serif text-xl font-semibold mb-4 text-primary" data-testid={`safety-measure-title-${index}`}>
                  {category.title}
                </h3>
                
                <ul className="space-y-3 flex-grow">
                  {category.measures.map((measure, measureIndex) => (
                    <li key={measureIndex} className="text-sm text-muted-foreground flex items-start" data-testid={`safety-measure-${index}-${measureIndex}`}>
                      <CheckCircle className="w-4 h-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span>{measure}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-emerald-600 mr-3" />
              <h3 className="serif text-xl md:text-2xl font-bold text-emerald-800">
                100% Safe, Professional, & Ethical Services Guarantee
              </h3>
            </div>
            <p className="text-emerald-700 text-base md:text-lg">
              We guarantee exclusively professional, therapeutic, and ethical services with the highest standards of safety, hygiene, and client respect. Our comprehensive insurance coverage, professional certifications, and strict safety protocols ensure your complete peace of mind and optimal therapeutic experience. Contact us at homemassageubud.com or +62 811-2656-869 for any safety questions or specific accommodation needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
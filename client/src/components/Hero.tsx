import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import spaImage from "@assets/60363521082_1757316327941.webp";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookExperience = () => {
    openWhatsApp(generateGeneralInquiryMessage());
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 sm:pt-18 md:pt-20 lg:pt-24">
      {/* Beautiful Spa Background Image */}
      <div className="absolute inset-0">
        <img 
          src={spaImage}
          alt="Ubud massage - best massage Ubud Bali, professional in-villa massage services, traditional Balinese massage therapy delivered to your villa in Ubud, home massage Ubud by certified therapists"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-3 sm:px-4 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Main Heading */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0">
            Ubud Massage | Best In-Villa Massage Ubud Services
          </h1>
          
          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Professional Ubud massage services from 9 AM to 9 PM. Our certified Balinese massage therapists deliver premium massage Ubud treatments directly to your villa, hotel, or accommodation. Experience the best home massage Ubud offers – traditional Balinese, deep tissue, aromatherapy massage in your private space.
          </p>
          
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 sm:mb-8 px-3 sm:px-0">
            <Button 
              onClick={handleBookExperience}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider border-0 rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              data-testid="button-book-now"
            >
              Book Now via WhatsApp
            </Button>
            <Button 
              onClick={scrollToServices}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold uppercase tracking-wider rounded-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              data-testid="button-see-treatments"
            >
              See All Treatments
            </Button>
          </div>
          
          {/* Small bullet points */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-white/80 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mobile Wellness Specialists Arrive 15-45 Minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
              <span>Expert English Communication & Consultation</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
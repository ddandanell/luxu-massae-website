import { Instagram, Facebook } from "lucide-react";

const footerSections = [
  {
    title: 'Services',
    links: [
      'Bali Massage',
      'Aroma Therapy',
      'Deep Tissue Reset',
      'Hot Stone Ritual',
      'Thai Massage'
    ]
  },
  {
    title: 'Company',
    links: [
      'About Home Massage Ubud',
      'Our Therapists',
    ]
  },
  {
    title: 'Pages',
    links: [
      'Villa Partnerships',
      'Sustainability',
      'Blog'
    ]
  },
  {
    title: 'Support',
    links: [
      'FAQ',
      'Booking Policy',
      'Contact Us',
      'Reviews',
    ]
  }
];

export default function Footer() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToTherapists = () => {
    const element = document.getElementById('therapists');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const scrollToFAQ = () => {
    const element = document.getElementById('faq');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLinkClick = (sectionTitle: string, linkText: string) => {
    if (sectionTitle === 'Services') {
      scrollToServices();
    } else if (sectionTitle === 'Support') {
      if (linkText === 'Contact Us') {
        scrollToContact();
      } else if (linkText === 'FAQ') {
        scrollToFAQ();
      }
    } else if (sectionTitle === 'Company') {
      if (linkText === 'About Home Massage Ubud') {
        scrollToAbout();
      } else if (linkText === 'Our Therapists') {
        scrollToTherapists();
      }
    } else if (sectionTitle === 'Pages') {
      if (linkText === 'Villa Partnerships') {
        window.location.href = '/villa-partnerships';
      } else if (linkText === 'Sustainability') {
        window.location.href = '/sustainability';
      } else if (linkText === 'Blog') {
        window.location.href = '/blog';
      }
    }
  };

  return (
    <footer className="bg-secondary py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div data-testid="footer-brand">
            <div className="serif text-xl md:text-2xl font-bold text-primary mb-4" data-testid="footer-logo">
              Home Massage Ubud
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-4" data-testid="footer-description">
              Authentic Balinese massage delivered to your villa in Ubud. Professional therapists bring traditional healing and modern wellness directly to you.
            </p>
            <div className="text-sm text-muted-foreground mb-4">
              <p className="font-semibold text-primary">homemassageubud.com</p>
              <p>hello@homemassageubud.com</p>
            </div>
            <div className="flex space-x-3 md:space-x-4">
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-instagram">
                <Instagram size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-facebook">
                <Facebook size={20} />
              </button>
              <button className="text-muted-foreground hover:text-primary transition-colors" data-testid="footer-tripadvisor">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
              </button>
            </div>
          </div>
          
          {footerSections.map((section, sectionIndex) => (
            <div key={sectionIndex} data-testid={`footer-section-${sectionIndex}`}>
              <h4 className="text-sm md:text-base font-semibold mb-3 md:mb-4" data-testid={`footer-section-title-${sectionIndex}`}>
                {section.title}
              </h4>
              <ul className="space-y-1 md:space-y-2 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button 
                      onClick={() => handleLinkClick(section.title, link)}
                      className="hover:text-primary transition-colors text-left text-sm md:text-base"
                      data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
          <p className="text-xs md:text-sm" data-testid="footer-copyright">
            &copy; 2024 Home Massage Ubud | homemassageubud.com | Licensed Spa Services Ubud, Bali
          </p>
        </div>
      </div>
    </footer>
  );
}

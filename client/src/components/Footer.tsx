import { Instagram, Facebook } from "lucide-react";
import { Link } from "wouter";

const footerSections = [
  {
    title: 'Our Services',
    links: [
      { name: 'Traditional Balinese', href: '/services' },
      { name: 'Deep Tissue', href: '/services' },
      { name: 'Aromatherapy', href: '/services' },
      { name: 'Four Hands', href: '/services' },
      { name: 'Thai Massage', href: '/services' }
    ]
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about' },
      { name: 'Testimonials', href: '/testimonials' },
      { name: 'Blog', href: '/blog' }
    ]
  },
  {
    title: 'Booking',
    links: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Service Areas', href: '/contact' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'WhatsApp Book', href: 'https://wa.me/628112656869', external: true }
    ]
  },
  {
    title: 'Support',
    links: [
      { name: 'FAQ', href: '/#faq' },
      { name: 'Booking Policy', href: '/blog' },
      { name: 'Reviews', href: '/testimonials' },
      { name: 'Villa Partnerships', href: '/villa-partnerships' }
    ]
  }
];

export default function Footer() {
  const handleScrollToSection = (href: string) => {
    if (href.startsWith('/#')) {
      const elementId = href.substring(2);
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLinkClick = (link: any) => {
    if (link.external) {
      window.open(link.href, '_blank');
    } else if (link.href.startsWith('/#')) {
      handleScrollToSection(link.href);
    }
    // Regular navigation links will be handled by Link component
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
                    {link.external ? (
                      <button 
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                      >
                        {link.name}
                      </button>
                    ) : link.href.startsWith('/#') ? (
                      <button 
                        onClick={() => handleLinkClick(link)}
                        className="hover:text-primary transition-colors text-left text-sm md:text-base"
                        data-testid={`footer-link-${sectionIndex}-${linkIndex}`}
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link href={link.href}>
                        <span className="hover:text-primary transition-colors text-sm md:text-base">
                          {link.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border mt-8 md:mt-12 pt-6 md:pt-8 text-center text-muted-foreground">
          <div className="footer-partners mb-6">
            <h4 className="font-semibold text-primary mb-2">Trusted Massage Partners</h4>
            <p className="text-sm">
              Discover our sister sites:
              <a href="https://homemassagekuta.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Home Massage Kuta</a> &
              <a href="https://homemassageubud.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline mx-1">Home Massage Ubud</a>
            </p>
          </div>
          <p className="text-xs md:text-sm" data-testid="footer-copyright">
            &copy; 2024 Home Massage Ubud | homemassageubud.com | Licensed Spa Services Ubud, Bali
          </p>
        </div>
      </div>
    </footer>
  );
}

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Cookie, X } from 'lucide-react';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookie-consent');
    if (!hasConsent) {
      // Show banner after a small delay for better UX
      setTimeout(() => setShowBanner(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    
    // Enable Google Analytics or other tracking here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-sm">
      <Card className="bg-card border-border shadow-lg animate-in slide-in-from-bottom-2 duration-300">
        <div className="p-4 space-y-3">
          <div className="flex items-start gap-3">
            <Cookie className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm text-foreground">
                Cookie Consent
              </h3>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                We use cookies to enhance your experience on homemassageubud.com. 
                By continuing to browse, you agree to our use of cookies for analytics and marketing.
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-muted-foreground hover:text-foreground"
              onClick={handleDecline}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          
          <div className="flex gap-2 pt-1">
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-xs h-8"
            >
              Accept
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleDecline}
              className="flex-1 text-xs h-8"
            >
              Decline
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}

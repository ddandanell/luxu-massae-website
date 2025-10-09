import React from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Phone, MessageCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 flex items-center justify-center px-4">
      <Card className="w-full max-w-2xl text-center">
        <CardContent className="p-12">
          {/* Large 404 number */}
          <div className="text-9xl font-bold text-amber-600/20 mb-4">404</div>
          
          {/* Headline */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! This Page is Taking a Massage Break
          </h1>
          
          {/* Subheading */}
          <p className="text-lg text-gray-600 mb-8">
            The page you're looking for seems to have wandered off to find inner peace. 
            Let's help you get back to relaxation!
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </div>
          
          {/* Contact options */}
          <div className="border-t pt-8">
            <p className="text-gray-600 mb-4">
              Need help finding what you're looking for?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/628112656869" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="sm">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp Us
                </Button>
              </a>
              
              <a href="tel:+628112656869">
                <Button variant="outline" size="sm">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
          
          {/* Popular pages */}
          <div className="mt-8 pt-8 border-t">
            <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Link href="/services">
                <Button variant="ghost" size="sm">Our Services</Button>
              </Link>
              <Link href="/contact">
                <Button variant="ghost" size="sm">Contact Us</Button>
              </Link>
              <Link href="/pricing">
                <Button variant="ghost" size="sm">Pricing</Button>
              </Link>
              <Link href="/about">
                <Button variant="ghost" size="sm">About Us</Button>
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

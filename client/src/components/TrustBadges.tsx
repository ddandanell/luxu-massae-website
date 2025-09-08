import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Clock, CheckCircle, Star, Heart, Zap } from 'lucide-react';

interface TrustBadgeProps {
  variant?: 'default' | 'minimal' | 'detailed';
  className?: string;
}

export default function TrustBadges({ variant = 'default', className = '' }: TrustBadgeProps) {
  const badges = [
    {
      icon: Shield,
      text: 'Licensed & Insured',
      description: 'Full professional licensing and comprehensive insurance coverage',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      icon: Award,
      text: 'Certified Therapists',
      description: 'All therapists hold professional certifications and ongoing training',
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      icon: Users,
      text: '500+ Happy Clients',
      description: 'Trusted by hundreds of satisfied customers across Ubud',
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      icon: CheckCircle,
      text: '100% Satisfaction',
      description: 'Money-back guarantee if you\'re not completely satisfied',
      color: 'bg-green-50 text-green-700 border-green-200'
    },
    {
      icon: Clock,
      text: '24/7 Booking',
      description: 'Easy online booking and customer support available anytime',
      color: 'bg-orange-50 text-orange-700 border-orange-200'
    },
    {
      icon: Star,
      text: '4.9/5 Rating',
      description: 'Consistently high ratings from verified customer reviews',
      color: 'bg-yellow-50 text-yellow-700 border-yellow-200'
    }
  ];

  const securityBadges = [
    {
      icon: Shield,
      text: 'Safe & Secure',
      subtext: 'COVID-19 Protocols'
    },
    {
      icon: Heart,
      text: 'Professional Ethics',
      subtext: 'Therapeutic Only'
    },
    {
      icon: Zap,
      text: 'Instant Booking',
      subtext: 'WhatsApp Ready'
    }
  ];

  if (variant === 'minimal') {
    return (
      <div className={`flex flex-wrap gap-2 justify-center ${className}`}>
        {securityBadges.map((badge, index) => (
          <Badge key={index} variant="outline" className="flex items-center space-x-1 px-3 py-1">
            <badge.icon className="h-3 w-3" />
            <span className="text-xs">{badge.text}</span>
          </Badge>
        ))}
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ${className}`}>
        {badges.map((badge, index) => (
          <div key={index} className={`rounded-lg border p-4 ${badge.color}`}>
            <div className="flex items-center space-x-2 mb-2">
              <badge.icon className="h-5 w-5" />
              <span className="font-semibold text-sm">{badge.text}</span>
            </div>
            <p className="text-xs opacity-80">{badge.description}</p>
          </div>
        ))}
      </div>
    );
  }

  // Default variant
  return (
    <div className={`flex flex-wrap gap-3 justify-center items-center ${className}`}>
      {badges.slice(0, 4).map((badge, index) => (
        <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
          <div className={`p-1.5 rounded-full ${badge.color.split(' ')[0]} ${badge.color.split(' ')[1]}`}>
            <badge.icon className="h-3 w-3" />
          </div>
          <span className="font-medium">{badge.text}</span>
        </div>
      ))}
    </div>
  );
}

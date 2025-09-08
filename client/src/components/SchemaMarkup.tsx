import React from 'react';

interface SchemaMarkupProps {
  type: 'organization' | 'service' | 'review' | 'faq' | 'breadcrumb';
  data: any;
}

export default function SchemaMarkup({ type, data }: SchemaMarkupProps) {
  const generateSchema = () => {
    switch (type) {
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Home Massage Ubud',
          url: 'https://homemassageubud.com',
          logo: 'https://homemassageubud.com/logo.png',
          description: 'Professional in-villa massage services in Ubud, Bali. Licensed therapists providing traditional Balinese, deep tissue, and wellness treatments at your accommodation.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Ubud',
            addressRegion: 'Bali',
            addressCountry: 'Indonesia'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+62-811-2656-869',
            contactType: 'customer service',
            availableLanguage: ['English', 'Indonesian'],
            areaServed: ['Ubud', 'Tegallalang', 'Sanggingan', 'Campuhan', 'Penestanan']
          },
          sameAs: [
            'https://www.instagram.com/homemassageubud',
            'https://www.facebook.com/homemassageubud'
          ],
          priceRange: 'IDR 350,000 - IDR 1,200,000',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Massage Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Traditional Balinese Massage',
                  description: 'Ancient healing technique using acupressure and aromatherapy oils'
                },
                price: '350000',
                priceCurrency: 'IDR'
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Deep Tissue Massage',
                  description: 'Therapeutic massage for muscle tension and pain relief'
                },
                price: '400000',
                priceCurrency: 'IDR'
              }
            ]
          }
        };

      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: data.name,
          description: data.description,
          provider: {
            '@type': 'Organization',
            name: 'Home Massage Ubud',
            url: 'https://homemassageubud.com'
          },
          areaServed: {
            '@type': 'Place',
            name: 'Ubud, Bali, Indonesia'
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: data.name,
            itemListElement: [{
              '@type': 'Offer',
              price: data.price,
              priceCurrency: 'IDR',
              availability: 'https://schema.org/InStock'
            }]
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '500',
            bestRating: '5',
            worstRating: '1'
          }
        };

      case 'review':
        return {
          '@context': 'https://schema.org',
          '@type': 'Review',
          itemReviewed: {
            '@type': 'Service',
            name: 'Home Massage Ubud Services'
          },
          reviewRating: {
            '@type': 'Rating',
            ratingValue: data.rating,
            bestRating: '5'
          },
          author: {
            '@type': 'Person',
            name: data.author
          },
          reviewBody: data.review,
          datePublished: data.date
        };

      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.map((faq: any) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer
            }
          }))
        };

      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.map((item: any, index: number) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url
          }))
        };

      default:
        return {};
    }
  };

  const schema = generateSchema();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Heart, Leaf, Zap } from 'lucide-react';
import SchemaMarkup from '../components/SchemaMarkup';

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Balinese Massage: Ancient Healing for Modern Wellness',
    excerpt: 'Discover the centuries-old traditions of Balinese massage, its therapeutic benefits, and why it remains one of the most sought-after wellness treatments in Ubud.',
    author: 'Made Surya',
    authorTitle: 'Certified Balinese Massage Therapist',
    date: '2025-09-01',
    readTime: '8 min read',
    category: 'Traditional Healing',
    tags: ['Balinese Massage', 'Traditional Healing', 'Wellness', 'Ubud'],
    image: '/images/blog/balinese-massage.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Deep Tissue Massage: Your Ultimate Recovery Solution in Ubud',
    excerpt: 'Learn how deep tissue massage can help you recover from travel fatigue, hiking soreness, and everyday stress while enjoying your Bali vacation.',
    author: 'Dr. Kadek Wellness',
    authorTitle: 'Licensed Therapeutic Massage Specialist',
    date: '2025-08-28',
    readTime: '6 min read',
    category: 'Therapeutic Massage',
    tags: ['Deep Tissue', 'Recovery', 'Travel Wellness', 'Pain Relief'],
    image: '/images/blog/deep-tissue.jpg',
    featured: false
  },
  {
    id: 3,
    title: 'Aromatherapy Massage: Essential Oils for Emotional Balance in Bali',
    excerpt: 'Explore how premium essential oils combined with therapeutic massage can enhance your emotional well-being and spiritual journey in Ubud.',
    author: 'Ni Wayan Sari',
    authorTitle: 'Certified Aromatherapist & Spa Therapist',
    date: '2025-08-25',
    readTime: '7 min read',
    category: 'Aromatherapy',
    tags: ['Aromatherapy', 'Essential Oils', 'Emotional Healing', 'Spiritual Wellness'],
    image: '/images/blog/aromatherapy.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'Couples Massage in Ubud: Strengthening Bonds Through Shared Wellness',
    excerpt: 'Discover how couples massage experiences can deepen intimacy, reduce relationship stress, and create lasting memories in your Bali retreat.',
    author: 'Made & Ketut Spa Team',
    authorTitle: 'Certified Couples Therapy Specialists',
    date: '2025-08-22',
    readTime: '9 min read',
    category: 'Couples Wellness',
    tags: ['Couples Massage', 'Relationship Wellness', 'Romance', 'Bonding'],
    image: '/images/blog/couples-massage.jpg',
    featured: true
  },
  {
    id: 5,
    title: 'Prenatal Massage Safety: Supporting Expecting Mothers in Bali',
    excerpt: 'Essential safety guidelines and benefits of prenatal massage for expecting mothers traveling to Ubud, including when and how to enjoy therapeutic treatments.',
    author: 'Ibu Nyoman Prenatal Care',
    authorTitle: 'Certified Prenatal Massage Therapist',
    date: '2025-08-19',
    readTime: '10 min read',
    category: 'Prenatal Care',
    tags: ['Prenatal Massage', 'Pregnancy', 'Safety', 'Babymoon'],
    image: '/images/blog/prenatal-massage.jpg',
    featured: false
  }
];

export default function BlogNew() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Home Massage Ubud Wellness Blog',
    description: 'Expert insights on massage therapy, wellness treatments, and traditional Balinese healing practices in Ubud.',
    url: 'https://homemassageubud.com/blog',
    blogPost: blogPosts.map(post => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author
      },
      datePublished: post.date,
      image: `https://homemassageubud.com${post.image}`,
      url: `https://homemassageubud.com/blog/${post.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50">
      <SchemaMarkup type="organization" data={blogSchema} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-4 bg-amber-100 text-amber-800">
            Wellness & Healing Insights
          </Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Massage & Wellness
            <span className="text-amber-600"> Knowledge Hub</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Expert insights on therapeutic massage, traditional Balinese healing, 
            and wellness practices to enhance your understanding and experience 
            of holistic health in Ubud.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[16/9] bg-gradient-to-br from-amber-100 to-emerald-100"></div>
                  
                  <CardHeader>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl leading-tight hover:text-amber-600 transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <div>
                          <p className="text-sm font-medium">{post.author}</p>
                          <p className="text-xs text-gray-500">{post.authorTitle}</p>
                        </div>
                      </div>
                      
                      <Button variant="ghost" size="sm">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">All Articles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                <div className="aspect-[16/10] bg-gradient-to-br from-amber-100 to-emerald-100"></div>
                
                <CardHeader className="pb-2">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Badge variant="outline" className="text-xs">{post.category}</Badge>
                    <div className="flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg leading-tight hover:text-amber-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex flex-col justify-between h-full">
                  <div>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-4">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-amber-600" />
                      </div>
                      <span className="text-xs text-gray-600">{post.author}</span>
                    </div>
                    
                    <Button variant="ghost" size="sm" className="text-xs">
                      Read More
                      <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50">
            <CardContent className="p-8">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="p-3 bg-amber-100 rounded-full">
                  <Heart className="h-6 w-6 text-amber-600" />
                </div>
                <div className="p-3 bg-emerald-100 rounded-full">
                  <Leaf className="h-6 w-6 text-emerald-600" />
                </div>
                <div className="p-3 bg-blue-100 rounded-full">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience These Treatments?
              </h3>
              <p className="text-gray-600 mb-8">
                Transform your knowledge into wellness experience. Book your personalized 
                massage treatment and discover the healing power of traditional Balinese 
                therapy in your private Ubud accommodation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                  Book Treatment Now
                </Button>
                
                <a 
                  href="https://wa.me/6281126568690" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button size="lg" variant="outline">
                    Ask Our Experts
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

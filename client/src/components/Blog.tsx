import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, Heart, Leaf, Zap } from 'lucide-react';
import SchemaMarkup from './SchemaMarkup';

const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to Balinese Massage: Ancient Healing for Modern Wellness',
    excerpt: 'Discover the centuries-old traditions of Balinese massage, its therapeutic benefits, and why it remains one of the most sought-after wellness treatments in Ubud.',
    content: `
Balinese massage is more than just a relaxation technique—it's a sacred healing art that has been practiced for over 1,000 years. This ancient therapy combines acupressure, gentle stretching, aromatherapy, and reflexology to create a holistic treatment that heals both body and mind.

## Origins and Philosophy

Traditional Balinese massage originated from ancient Ayurvedic and Chinese medicinal practices, adapted to Indonesian healing traditions. The technique focuses on restoring balance to the body's energy systems while promoting deep relaxation and spiritual well-being.

## The Balinese Massage Technique

Our certified therapists use a combination of:
- **Long, flowing strokes** to improve circulation
- **Acupressure points** to release tension
- **Gentle stretching** to improve flexibility
- **Aromatherapy oils** for emotional balance

## Health Benefits

Research shows that regular Balinese massage can:
- Reduce stress hormones by up to 70%
- Improve sleep quality and duration
- Boost immune system function
- Alleviate chronic pain and muscle tension
- Enhance mental clarity and focus

## Why Choose In-Villa Balinese Massage in Ubud?

Experiencing authentic Balinese massage in the comfort of your private villa adds another dimension to this healing practice. Our licensed therapists bring centuries of tradition directly to your accommodation, creating a sacred healing space wherever you are.

*Book your authentic Balinese massage experience today and connect with this ancient healing tradition in the heart of Ubud.*
    `,
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
    content: `
After long flights, temple visits, and volcano hikes, your body deserves therapeutic attention. Deep tissue massage targets the deeper layers of muscle and connective tissue to provide lasting relief and accelerated recovery.

## What Makes Deep Tissue Different?

Unlike relaxation massage, deep tissue therapy uses:
- **Slower, more focused strokes**
- **Greater pressure application**
- **Targeted muscle group treatment**
- **Specific trigger point therapy**

## Perfect for Active Travelers

Ubud's adventure activities can leave you with:
- Tight calves from temple stairs
- Sore shoulders from camera carrying
- Lower back tension from long flights
- Neck stiffness from sleeping in new beds

## Our Therapeutic Approach

Our licensed therapists assess your specific needs and customize treatment to:
1. Identify problem areas
2. Apply appropriate pressure
3. Release muscle knots and adhesions
4. Improve range of motion
5. Accelerate recovery

## Recovery Benefits

Experience immediate improvement in:
- **Pain relief**: Reduction in chronic pain by 40-60%
- **Mobility**: Increased range of motion
- **Sleep**: Better quality rest after treatment
- **Energy**: Renewed vitality for your adventures

*Don't let muscle tension limit your Bali experience. Book deep tissue massage therapy today.*
    `,
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
    content: `
Aromatherapy massage combines the healing power of touch with the therapeutic properties of essential oils, creating a multi-sensory experience that addresses both physical and emotional well-being.

## The Science of Scent

Essential oils work through:
- **Olfactory system**: Direct connection to the limbic brain
- **Skin absorption**: Therapeutic compounds entering bloodstream
- **Respiratory benefits**: Improved breathing and oxygenation

## Our Premium Oil Selection

We use only the finest therapeutic-grade oils:

### Lavender
- Promotes deep relaxation
- Reduces anxiety and stress
- Improves sleep quality

### Eucalyptus
- Clears respiratory passages
- Energizes and refreshes
- Reduces muscle inflammation

### Frangipani (Plumeria)
- Sacred Balinese flower essence
- Emotional healing properties
- Spiritual connection enhancement

### Ylang-Ylang
- Balances emotions
- Reduces blood pressure
- Enhances romantic connection

## Emotional Benefits

Regular aromatherapy massage can:
- Reduce cortisol levels by 30%
- Improve mood and emotional stability
- Enhance meditation and mindfulness
- Support spiritual practice

## Perfect Ubud Experience

In the spiritual heart of Bali, aromatherapy massage becomes more than treatment—it's a sacred ritual that connects you with the island's healing energy and your own inner peace.

*Experience the transformative power of aromatherapy massage in your private Ubud sanctuary.*
    `,
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
    content: `
Couples massage offers more than synchronized relaxation—it creates shared experiences that strengthen emotional bonds while providing individual therapeutic benefits.

## The Psychology of Shared Wellness

Research shows couples who engage in wellness activities together experience:
- **Increased oxytocin production** (bonding hormone)
- **Synchronized breathing and heart rates**
- **Enhanced communication and intimacy**
- **Shared stress reduction benefits**

## Our Couples Massage Experience

### Synchronized Treatment
- Two therapists working in harmony
- Matching massage rhythms and techniques
- Coordinated aromatherapy experiences
- Simultaneous relaxation progression

### Romantic Enhancements
- Flower petal arrangements
- Candle lighting and ambiance
- Couples-focused essential oil blends
- Private consultation on wellness goals

## Popular Couples Treatments

### Traditional Balinese Couples Journey
90-minute synchronized traditional massage with:
- Sacred Balinese blessing ritual
- Matching aromatherapy oil selection
- Herbal tea ceremony conclusion
- Flower bath preparation

### Ultimate Romance Package
2-hour comprehensive experience including:
- Pre-massage consultation
- 90-minute couples massage
- Champagne and tropical fruit
- Private outdoor relaxation time

## Benefits for Relationships

Couples massage provides:
- **Stress relief**: Reduced cortisol levels in both partners
- **Connection**: Non-verbal bonding experience
- **Communication**: Shared relaxation promotes openness
- **Intimacy**: Physical and emotional closeness enhancement

## Creating Memories in Ubud

Your villa becomes a sacred space for connection. Our therapists create an atmosphere where couples can:
- Disconnect from technology together
- Focus entirely on each other's well-being
- Experience Balinese healing traditions as partners
- Create lasting memories of shared wellness

*Strengthen your bond with couples massage in the romantic setting of your private Ubud villa.*
    `,
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
    content: `
Pregnancy should never prevent you from enjoying the therapeutic benefits of professional massage, especially during your Bali babymoon. Our specialized prenatal massage protocols ensure safety while providing relief from pregnancy-related discomforts.

## Safety First: Our Prenatal Protocols

### Therapist Certification
All prenatal massage therapists have:
- Specialized prenatal massage training
- Anatomy and physiology certification
- Experience with high-risk pregnancies
- Current CPR and first aid certification

### Treatment Guidelines
We follow strict safety protocols:
- **First trimester**: Consultation required, gentle techniques only
- **Second trimester**: Full treatment options available
- **Third trimester**: Modified positioning, shorter sessions

## Prenatal Massage Benefits

### Physical Relief
- **Lower back pain**: 80% reduction reported
- **Swelling reduction**: Improved lymphatic drainage
- **Better sleep**: Enhanced comfort for rest
- **Circulation**: Increased blood and oxygen flow

### Emotional Support
- **Stress reduction**: Lower anxiety levels
- **Mood enhancement**: Improved emotional well-being
- **Connection**: Enhanced bonding with baby
- **Relaxation**: Better preparation for birth

## Specialized Techniques

### Side-Lying Position
Safe positioning that:
- Supports belly and back
- Maintains proper circulation
- Ensures comfort throughout treatment
- Allows full-body massage access

### Pregnancy-Safe Pressure Points
We avoid contraindicated areas while focusing on:
- Upper and lower back relief
- Shoulder and neck tension
- Leg and foot swelling
- Hip alignment support

## Travel Considerations

### When to Avoid Treatment
- First trimester complications
- High-risk pregnancy conditions
- Recent bleeding or spotting
- Severe morning sickness
- Doctor's specific restrictions

### Perfect Timing
Best prenatal massage timing:
- **16-32 weeks**: Optimal treatment window
- **Afternoon sessions**: After morning sickness subsides
- **Post-activity**: After walking or sightseeing
- **Pre-rest**: Before afternoon naps

## Babymoon Wellness

Ubud's peaceful environment enhances prenatal massage benefits:
- **Stress-free setting**: Natural relaxation environment
- **Private villa treatment**: Comfortable, familiar space
- **Partner support**: Couples can enjoy modified treatments together
- **Spiritual connection**: Bali's healing energy for mother and baby

*Enjoy safe, therapeutic prenatal massage during your Ubud babymoon with our certified specialists.*
    `,
    author: 'Ibu Nyoman Prenatal Care',
    authorTitle: 'Certified Prenatal Massage Therapist',
    date: '2025-08-19',
    readTime: '10 min read',
    category: 'Prenatal Care',
    tags: ['Prenatal Massage', 'Pregnancy', 'Safety', 'Babymoon'],
    image: '/images/blog/prenatal-massage.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'Hot Stone Therapy: Ancient Volcanic Healing in Modern Ubud',
    excerpt: 'Discover how volcanic stones from Mount Batur create therapeutic heat treatment that penetrates deep into muscles for ultimate relaxation and healing.',
    content: `
Hot stone massage combines the therapeutic benefits of heated volcanic stones with traditional massage techniques, creating a deeply penetrating treatment that has been used for healing across many cultures for thousands of years.

## The Power of Volcanic Stones

### Balinese Volcanic Heritage
Our stones are sourced from:
- **Mount Batur**: Sacred active volcano
- **Basalt composition**: Superior heat retention
- **Mineral-rich properties**: Natural healing elements
- **Spiritual significance**: Connection to Earth's energy

### Therapeutic Temperature
Stones are heated to optimal temperature:
- **130-145°F**: Therapeutic heat range
- **Gradual warming**: Comfortable temperature introduction
- **Consistent heat**: Maintains temperature throughout treatment
- **Safe application**: Professional temperature monitoring

## Hot Stone Massage Benefits

### Deep Muscle Relaxation
Heat therapy provides:
- **Increased circulation**: 50% improvement in blood flow
- **Muscle tension relief**: Deeper penetration than hands alone
- **Pain reduction**: Natural endorphin release
- **Flexibility enhancement**: Improved range of motion

### Stress Relief
The heat creates:
- **Nervous system calming**: Parasympathetic activation
- **Cortisol reduction**: Stress hormone decrease
- **Mental clarity**: Meditative relaxation state
- **Sleep improvement**: Enhanced rest quality

## Our Hot Stone Technique

### Stone Placement
Strategic positioning on:
- **Spine energy centers**: Chakra alignment
- **Shoulder blades**: Upper tension release
- **Palm and toe pressure points**: Reflexology benefits
- **Abdominal area**: Digestive system support

### Massage Integration
Therapists use heated stones as:
- **Extension of hands**: Deeper pressure application
- **Gliding tools**: Smooth, flowing movements
- **Pressure point focus**: Targeted tension release
- **Heat therapy**: Continuous warming treatment

## Perfect for Ubud Climate

### Balancing Tropical Humidity
Hot stone therapy:
- Provides dry heat contrast to humid air
- Enhances circulation in tropical climate
- Creates comfortable body temperature regulation
- Offers grounding earth energy connection

### Post-Activity Recovery
Ideal after Ubud activities:
- **Temple climbing**: Leg and calf relief
- **Rice field walking**: Lower back support
- **Cultural touring**: Full body restoration
- **Yoga practice**: Enhanced flexibility

## Spiritual Dimensions

### Balinese Earth Connection
Hot stone massage connects you with:
- **Panca Mahabhuta**: Five elements philosophy
- **Earth element grounding**: Stability and strength
- **Fire element activation**: Energy and transformation
- **Sacred volcanic energy**: Mountain healing power

### Meditation Enhancement
The treatment promotes:
- Deep meditative states
- Spiritual awakening
- Energy center activation
- Mind-body-spirit alignment

*Experience the ancient power of volcanic stone therapy in your private Ubud sanctuary.*
    `,
    author: 'Pak Wayan Stone Healer',
    authorTitle: 'Traditional Hot Stone Therapy Master',
    date: '2025-08-16',
    readTime: '11 min read',
    category: 'Hot Stone Therapy',
    tags: ['Hot Stone', 'Volcanic Healing', 'Traditional Therapy', 'Pain Relief'],
    image: '/images/blog/hot-stone.jpg',
    featured: false
  }
];

export default function Blog() {
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
                  href="https://wa.me/628112656869" 
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

const blogPosts = [
  {
    id: 'balinese-massage-techniques',
    title: 'Traditional Balinese Massage: Ancient Techniques for Modern Wellness',
    excerpt: 'Discover the centuries-old healing practices that make Balinese massage unique. Learn about pressure points, energy flow, and the spiritual aspects of traditional healing.',
    author: 'Dr. Kadek Sari',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Traditional Healing',
    featured: true
  },
  {
    id: 'villa-massage-benefits',
    title: 'Why In-Villa Massage is the Ultimate Luxury Experience in Ubud',
    excerpt: 'Explore the unique benefits of having professional massage therapy in your private villa setting. Privacy, comfort, and personalized service explained.',
    author: 'Made Suryani',
    date: '2024-01-10',
    readTime: '6 min read',
    category: 'Luxury Wellness'
  },
  {
    id: 'ubud-wellness-guide',
    title: 'Complete Wellness Guide to Ubud: Beyond the Massage Table',
    excerpt: 'Your comprehensive guide to wellness activities in Ubud. From yoga retreats to healing springs, discover how to create a holistic wellness journey.',
    author: 'Wayan Dharma',
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Travel & Wellness'
  },
  {
    id: 'essential-oils-guide',
    title: 'Essential Oils in Balinese Massage: Nature\'s Healing Pharmacy',
    excerpt: 'Learn about the traditional oils used in Balinese massage therapy. From frangipani to lemongrass, understand their therapeutic properties and benefits.',
    author: 'Ni Luh Komang',
    date: '2024-01-01',
    readTime: '5 min read',
    category: 'Natural Healing'
  },
  {
    id: 'pregnancy-massage-safety',
    title: 'Prenatal Massage in Bali: Safe Practices for Expecting Mothers',
    excerpt: 'Essential information for pregnant women seeking massage therapy in Ubud. Learn about safe techniques, benefits, and what to expect during treatment.',
    author: 'Dr. Kadek Sari',
    date: '2023-12-28',
    readTime: '7 min read',
    category: 'Health & Safety'
  },
  {
    id: 'couples-massage-romance',
    title: 'Romantic Couples Massage: Creating Intimate Moments in Paradise',
    excerpt: 'How to plan the perfect couples massage experience in your Ubud villa. Tips for creating romance, choosing treatments, and making memories together.',
    author: 'Made Suryani',
    date: '2023-12-25',
    readTime: '6 min read',
    category: 'Romance & Couples'
  }
];

const categories = [
  'All Articles',
  'Traditional Healing',
  'Luxury Wellness',
  'Travel & Wellness',
  'Natural Healing',
  'Health & Safety',
  'Romance & Couples'
];

export default function Blog() {
  return (
    <section id="blog" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="blog-title">
            Wellness Wisdom: Home Massage Ubud Blog
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="blog-description">
            Discover expert insights on Balinese massage, wellness practices, and making the most of your healing journey in Ubud. 
            Written by our certified therapists and wellness experts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12">
          {categories.map((category, index) => (
            <Badge 
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className={`cursor-pointer transition-colors ${
                index === 0 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-primary hover:text-primary-foreground'
              }`}
              data-testid={`category-filter-${index}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Featured Article */}
        {blogPosts.filter(post => post.featured).map((post, index) => (
          <Card key={post.id} className="bg-card rounded-2xl border-border mb-8 md:mb-12 overflow-hidden" data-testid="featured-article">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 p-6 md:p-8 lg:p-12 flex items-center">
                  <div>
                    <Badge className="bg-primary text-primary-foreground mb-4">
                      Featured Article
                    </Badge>
                    <h3 className="serif text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-4" data-testid="featured-title">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6" data-testid="featured-excerpt">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-6 space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <Button className="bg-primary hover:bg-accent text-primary-foreground">
                      Read Full Article <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary/50 to-secondary/20 p-6 md:p-8 lg:p-12 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
                      </svg>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* Recent Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPosts.filter(post => !post.featured).map((post, index) => (
            <Card key={post.id} className="bg-card rounded-2xl border-border hover-scale" data-testid={`blog-post-${index}`}>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline" className="text-primary border-primary text-xs">
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                
                <h3 className="serif text-lg md:text-xl font-semibold text-primary mb-3 line-clamp-2" data-testid={`post-title-${index}`}>
                  {post.title}
                </h3>
                
                <p className="text-sm md:text-base text-muted-foreground mb-4 line-clamp-3" data-testid={`post-excerpt-${index}`}>
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="w-3 h-3 mr-1" />
                    <span className="mr-3">{post.author}</span>
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                
                <Button 
                  variant="ghost" 
                  className="w-full mt-4 text-primary hover:bg-primary hover:text-primary-foreground"
                  data-testid={`read-more-${index}`}
                >
                  Read More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-primary/10 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="serif text-xl md:text-2xl font-bold text-primary mb-4">
              Stay Updated with Wellness Tips
            </h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest wellness insights, massage techniques, and exclusive offers from Home Massage Ubud. Visit homemassageubud.com for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border border-border bg-background text-foreground"
              />
              <Button className="bg-primary hover:bg-accent text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
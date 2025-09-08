import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";

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
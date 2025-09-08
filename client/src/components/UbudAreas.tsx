import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Leaf } from "lucide-react";
import { generateGeneralInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const ubudAreas = [
  {
    id: 'ubud-center',
    name: 'Ubud Center',
    title: 'Home Massage in Ubud Center',
    keywords: 'Monkey Forest, Jalan Raya Ubud, Hanoman Street, Dewi Sita, Jl. Suweta',
    description: 'Ubud Center is the beating heart of Bali\'s cultural capital, where ancient temples meet vibrant markets and world-class restaurants. Staying in the center puts you within walking distance of Monkey Forest Sanctuary, Sacred Monkey Forest, and the bustling Ubud Traditional Market. With villa massage services, you can experience authentic Balinese healing without stepping away from your hotel or villa on busy Jalan Raya Ubud or peaceful Hanoman Street. Our therapists navigate the center\'s narrow lanes to bring traditional massage, aromatherapy, and hot stone treatments directly to your accommodation. Whether you\'re staying near Dewi Sita Street or Jl. Suweta, enjoy deep tissue massage or couples treatments in complete privacy. After exploring Ubud\'s temples and art galleries, let our certified therapists restore your energy with personalized spa treatments in your villa. Book your home massage in Ubud Center today and experience the perfect blend of cultural immersion and wellness luxury.'
  },
  {
    id: 'penestanan',
    name: 'Penestanan',
    title: 'Home Massage in Penestanan, Ubud',
    keywords: 'artists village, rice fields, yoga retreats, private villas',
    description: 'Penestanan is one of Ubud\'s most charming neighborhoods, surrounded by emerald rice fields and hidden villas down narrow paths. Known as the artists\' village, Penestanan offers a peaceful escape just minutes from the center of Ubud. Many visitors choose this area for its private villas and yoga retreats, making it the perfect place to enjoy a relaxing massage without leaving your home. With our villa massage service, you don\'t need to walk to town or navigate the small lanes. Our therapists come directly to your villa, bringing premium oils, hot stones, and traditional Balinese techniques. Whether you want a deep tissue reset after a long day of exploring or a calming aromatherapy massage while listening to the sounds of the rice fields, we create the full spa experience in the comfort of your villa. The artistic energy of Penestanan combined with our authentic healing treatments creates an unforgettable wellness experience. Book your villa massage in Penestanan today and discover why this hidden gem is one of Ubud\'s favorite places for travelers who want both privacy and wellness.'
  },
  {
    id: 'sayan',
    name: 'Sayan',
    title: 'Luxury Villa Massage in Sayan, Ubud',
    keywords: 'Ayung River valley, luxury villas, Four Seasons, private estates',
    description: 'Sayan is Ubud\'s most exclusive neighborhood, perched dramatically along the Ayung River valley with some of Bali\'s most luxurious villas and resorts. Home to the iconic Four Seasons Resort and countless private estates, Sayan offers unparalleled privacy and natural beauty. The area\'s sophisticated villa massage services match the luxury of your accommodation perfectly. Our certified therapists specialize in serving Sayan\'s discerning guests, bringing five-star spa treatments directly to your villa terrace overlooking the lush valley. Experience signature Balinese massage, couples treatments, or therapeutic aromatherapy while listening to the gentle sounds of the Ayung River below. Sayan\'s exclusive villas provide the ideal setting for intimate spa experiences, whether you\'re celebrating a special occasion or simply indulging in ultimate relaxation. Our premium massage services complement the area\'s reputation for sophisticated hospitality and natural tranquility. From traditional healing techniques to modern wellness practices, we deliver personalized treatments that honor both Balinese traditions and international luxury standards. Book your exclusive villa massage in Sayan and elevate your Ubud experience to extraordinary heights.'
  },
  {
    id: 'nyuh-kuning',
    name: 'Nyuh Kuning',
    title: 'Peaceful Villa Massage in Nyuh Kuning, Ubud',
    keywords: 'behind Monkey Forest, peaceful village, traditional life, quiet villas',
    description: 'Nyuh Kuning lies peacefully behind the Sacred Monkey Forest, offering authentic village life just steps from Ubud\'s attractions. This traditional neighborhood provides a genuine Balinese experience with quiet lanes, local temples, and charming family-run guesthouses. Villa massage in Nyuh Kuning allows you to fully embrace the area\'s serene atmosphere without any distractions. Our therapists understand the special tranquility of this village and provide treatments that honor its peaceful energy. Enjoy traditional Balinese massage in your private accommodation while experiencing the authentic sounds of village life - roosters crowing, temple bells, and gentle conversations in Bahasa Indonesia. Nyuh Kuning\'s villa massage services focus on deep relaxation and cultural connection, using traditional techniques passed down through generations. Whether you choose aromatherapy with local essential oils or therapeutic deep tissue work, every treatment celebrates the area\'s connection to authentic Balinese healing traditions. The village\'s proximity to Monkey Forest makes it perfect for combining cultural exploration with restorative wellness. Book your peaceful villa massage in Nyuh Kuning and discover one of Ubud\'s most authentic and relaxing neighborhoods.'
  },
  {
    id: 'pengosekan',
    name: 'Pengosekan',
    title: 'Yoga & Wellness Massage in Pengosekan, Ubud',
    keywords: 'yoga studios, artsy area, wellness retreats, creative energy',
    description: 'Pengosekan is Ubud\'s creative and wellness hub, located south of the center and famous for its yoga studios, art galleries, and spiritual retreats. This artsy neighborhood attracts conscious travelers seeking transformation and healing, making it the perfect location for therapeutic villa massage services. Our massage therapists in Pengosekan specialize in treatments that complement the area\'s yoga and meditation practices, offering Thai massage, lymphatic drainage, and energy balancing techniques. The neighborhood\'s creative energy enhances every spa treatment, whether you\'re recovering from an intensive yoga teacher training or simply wanting to maintain your wellness routine while traveling. Pengosekan\'s villa massage services focus on mind-body connection, using breathing techniques and mindful touch that align with the area\'s spiritual atmosphere. Many guests combine morning yoga sessions with afternoon massage treatments, creating the perfect balance of active practice and restorative healing. Our therapists understand the unique needs of yoga practitioners and wellness seekers, providing personalized treatments that support your journey. Experience therapeutic massage in Pengosekan and discover why this neighborhood has become Ubud\'s premier destination for holistic wellness and creative inspiration.'
  },
  {
    id: 'petulu',
    name: 'Petulu',
    title: 'Nature Massage Retreat in Petulu, Ubud',
    keywords: 'heron birds, rice fields, nature sanctuary, peaceful retreat',
    description: 'Petulu is a magical village north of Ubud, famous for its thousands of white herons that return each evening to roost in the village trees. This natural sanctuary offers a unique setting for villa massage experiences surrounded by pristine rice fields and authentic rural life. Our massage services in Petulu take advantage of the area\'s incredible tranquility and connection to nature, providing treatments that restore both body and spirit. Experience traditional Balinese massage while listening to the gentle sounds of rice paddies and the calls of exotic birds returning home. Petulu\'s villa massage treatments focus on natural healing, using organic oils and traditional techniques that honor the village\'s deep connection to the natural world. The area\'s peaceful energy makes it ideal for couples massage, meditation-focused treatments, and therapeutic sessions designed to reduce stress and anxiety. Many guests combine their villa massage with evening heron watching, creating unforgettable memories of Bali\'s natural beauty. Our therapists in Petulu specialize in treatments that celebrate the area\'s unique ecosystem and rural charm. Book your nature-inspired villa massage in Petulu and experience one of Ubud\'s most magical and peaceful neighborhoods.'
  },
  {
    id: 'tegalalang',
    name: 'Tegalalang',
    title: 'Rice Terrace Villa Massage in Tegalalang, Ubud',
    keywords: 'rice terraces, boutique hotels, Instagram spot, scenic views',
    description: 'Tegalalang is world-famous for its spectacular rice terraces and boutique accommodations offering panoramic views of ancient agricultural landscapes. This scenic area north of Ubud provides the most Instagram-worthy backdrop for villa massage experiences, combining natural beauty with luxury wellness services. Our massage therapists in Tegalalang specialize in treatments that take full advantage of the area\'s breathtaking scenery, offering outdoor massage sessions overlooking the iconic rice terraces. Experience traditional Balinese healing while surrounded by centuries-old farming traditions and stunning valley views. Tegalalang\'s villa massage services focus on connection with nature, using the area\'s peaceful energy to enhance relaxation and restoration. Many boutique hotels and private villas in Tegalalang feature terraces and pavilions perfect for couples massage and aromatherapy treatments. The area\'s elevation provides cooler temperatures and fresh mountain air that enhances every spa experience. Our certified therapists understand how to incorporate Tegalalang\'s natural beauty into therapeutic treatments, creating memories that last long after your massage ends. Whether you choose hot stone therapy or traditional oil massage, every treatment celebrates the area\'s reputation as Bali\'s most beautiful massage destination. Book your rice terrace villa massage in Tegalalang today.'
  },
  {
    id: 'pejeng',
    name: 'Pejeng',
    title: 'Cultural Heritage Massage in Pejeng, Ubud',
    keywords: 'historic temples, traditional villages, cultural sites, local life',
    description: 'Pejeng is a historically rich area east of Ubud, home to ancient temples and traditional villages that preserve Bali\'s authentic cultural heritage. This area offers villa massage experiences deeply connected to Balinese spiritual traditions and healing practices passed down through generations. Our massage therapists in Pejeng specialize in traditional techniques that honor the area\'s sacred history, including temple-blessed oils and ancient healing methods. Experience authentic Balinese massage while staying near historic sites like Pura Penataran Sasih and the famous Moon of Pejeng bronze drum. The area\'s spiritual energy enhances every treatment, whether you choose traditional oil massage, hot stone therapy, or herbal compress treatments using locally sourced ingredients. Pejeng\'s villa massage services focus on cultural immersion and spiritual healing, providing treatments that connect you to Bali\'s ancient wellness traditions. Many guests combine their massage sessions with temple visits and cultural tours, creating comprehensive experiences of Balinese heritage. Our therapists understand the sacred significance of Pejeng\'s temples and incorporate respectful spiritual elements into their healing work. The area\'s authentic village atmosphere provides the perfect setting for transformative wellness experiences. Book your cultural heritage villa massage in Pejeng and discover Ubud\'s most spiritually significant neighborhood.'
  },
  {
    id: 'kedewatan',
    name: 'Kedewatan',
    title: 'Luxury Resort Massage in Kedewatan, Ubud',
    keywords: 'five-star resorts, Ayung River, luxury spas, exclusive villas',
    description: 'Kedewatan is an exclusive area northwest of Ubud, renowned for its five-star resorts and luxury villas overlooking the dramatic Ayung River valley. This sophisticated neighborhood attracts discerning travelers seeking world-class amenities and premium wellness services. Our villa massage treatments in Kedewatan match the area\'s exceptional standards, providing resort-quality spa experiences in the privacy of your luxury accommodation. Experience signature treatments used by Kedewatan\'s top resorts, including couples massage, hot stone therapy, and aromatherapy sessions using premium organic products. The area\'s stunning natural setting enhances every massage experience, with treatments often taking place on private terraces overlooking lush tropical valleys. Kedewatan\'s villa massage services cater to guests accustomed to five-star luxury, offering personalized treatments that exceed resort spa standards. Our certified therapists understand the sophisticated needs of Kedewatan\'s international clientele, providing multilingual service and customized wellness programs. Many luxury villas in Kedewatan feature dedicated spa pavilions and infinity pools, creating perfect settings for exclusive massage experiences. The area\'s reputation for exceptional hospitality extends to our premium villa massage services. Book your luxury resort-style villa massage in Kedewatan and experience Ubud\'s most exclusive wellness destination.'
  },
  {
    id: 'mas',
    name: 'Mas',
    title: 'Artisan Village Massage in Mas, Ubud',
    keywords: 'woodcarvers village, traditional crafts, cultural immersion, artisan community',
    description: 'Mas is a traditional woodcarving village south of Ubud, famous for its master artisans and authentic Balinese craftsmanship. This cultural area offers villa massage experiences that celebrate traditional healing arts alongside the village\'s renowned artistic heritage. Our massage therapists in Mas specialize in techniques that honor both artistic and healing traditions, providing treatments that connect you to Bali\'s creative spirit. Experience traditional massage while staying near master woodcarvers\' workshops and galleries showcasing centuries-old artistic techniques. The village\'s creative energy enhances every spa treatment, whether you choose traditional oil massage, therapeutic hot stone work, or cultural healing ceremonies. Mas villa massage services focus on artisan-quality attention to detail and traditional methods passed down through generations of healers. Many guests combine their massage sessions with woodcarving workshops and artisan visits, creating comprehensive cultural experiences. Our therapists understand the village\'s artistic traditions and incorporate creative elements into their healing work, using locally crafted tools and traditional techniques. The area\'s authentic village atmosphere provides intimate settings for personalized massage experiences away from tourist crowds. Mas offers unique opportunities to support local artisan communities while receiving world-class wellness treatments. Book your artisan village massage in Mas and discover Ubud\'s most authentic cultural and healing destination.'
  },
  {
    id: 'lodtunduh',
    name: 'Lodtunduh',
    title: 'Rice Field Villa Massage in Lodtunduh, Ubud',
    keywords: 'southern entry, rice field villas, peaceful retreat, nature immersion',
    description: 'Lodtunduh serves as the peaceful southern gateway to Ubud, featuring luxury villas nestled among working rice fields and traditional farming communities. This tranquil area offers villa massage experiences that fully embrace Bali\'s agricultural heritage and natural beauty. Our massage therapists in Lodtunduh specialize in treatments that incorporate the area\'s connection to nature, using the sounds and energy of rice paddies to enhance relaxation and healing. Experience traditional Balinese massage while surrounded by emerald rice fields and authentic village life, creating the perfect escape from modern stress. Lodtunduh\'s villa massage services focus on natural healing and agricultural rhythms, providing treatments that align with the area\'s peaceful farming culture. Many luxury villas in Lodtunduh feature private pavilions overlooking rice fields, creating ideal settings for couples massage and aromatherapy treatments. The area\'s elevation and open spaces provide fresh air and panoramic views that enhance every spa experience. Our certified therapists understand how to incorporate Lodtunduh\'s rural beauty into therapeutic treatments, offering sessions that celebrate Bali\'s agricultural traditions. Whether you choose morning massage sessions accompanied by sunrise over the rice fields or evening treatments with tropical sunset views, every experience connects you to the land\'s natural healing energy. Book your rice field villa massage in Lodtunduh today.'
  }
];

export default function UbudAreas() {
  return (
    <section id="ubud-areas" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="areas-title">
            Home Massage Ubud Services Across All Ubud Areas
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto px-4" data-testid="areas-description">
            We provide premium in-villa massage services throughout Ubud's diverse neighborhoods. 
            From luxury resorts in Sayan to peaceful rice fields in Lodtunduh, our certified therapists 
            bring authentic Balinese healing directly to your accommodation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ubudAreas.map((area) => (
            <Card key={area.id} className="bg-card rounded-2xl border-border hover-scale h-full" data-testid={`area-card-${area.id}`}>
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="serif text-xl font-semibold text-primary" data-testid={`area-name-${area.id}`}>
                      {area.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {area.keywords}
                    </p>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h4 className="font-semibold mb-3 text-lg" data-testid={`area-title-${area.id}`}>
                    {area.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed" data-testid={`area-description-${area.id}`}>
                    {area.description}
                  </p>
                </div>
                
                <div className="mt-6 pt-4 border-t border-border">
                  <Button 
                    onClick={() => openWhatsApp(generateGeneralInquiryMessage())}
                    className="w-full bg-primary hover:bg-accent text-primary-foreground"
                    data-testid={`button-book-${area.id}`}
                  >
                    Book Villa Massage in {area.name}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-secondary rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Leaf className="w-8 h-8 text-primary mr-3" />
              <h3 className="serif text-2xl font-semibold text-primary">Complete Ubud Coverage</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              No matter where you're staying in Ubud - from the bustling center to peaceful village retreats - 
              our certified therapists provide authentic Balinese massage services with the same professional 
              standards and cultural respect. We understand each area's unique character and adapt our treatments 
              to enhance your specific location's natural energy and atmosphere.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-primary/10 rounded-lg p-3">
                <strong className="text-primary">15-45 min</strong><br />
                Arrival Time
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <strong className="text-primary">All Areas</strong><br />
                Ubud Coverage
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <strong className="text-primary">24/7</strong><br />
                Booking Available
              </div>
              <div className="bg-primary/10 rounded-lg p-3">
                <strong className="text-primary">Licensed</strong><br />
                Therapists
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
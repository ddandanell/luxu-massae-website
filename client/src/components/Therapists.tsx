import { Card, CardContent } from "@/components/ui/card";
import placeholderImage from "@assets/No_image_available.svg_1757317277316.webp";

const therapists = [
  {
    id: 'ayu-lestari',
    name: 'Ayu Lestari',
    title: 'Traditional Temple Healer',
    experience: 'From Ubud, trained in traditional Balinese temple healing.',
    image: placeholderImage,
    specialties: ['Bali Massage', 'Energy Balancing']
  },
  {
    id: 'putri-anggraini',
    name: 'Putri Anggraini',
    title: 'Movement & Flow Specialist',
    experience: 'Former dancer, understands body flow and rhythm.',
    image: placeholderImage,
    specialties: ['Thai Massage', 'Body Stretching']
  },
  {
    id: 'dewi-kartika',
    name: 'Dewi Kartika',
    title: 'Herbalist Specialist',
    experience: 'Grew up in a family of herbalists.',
    image: placeholderImage,
    specialties: ['Aroma Therapy', 'Custom Oil Blends']
  },
  {
    id: 'made-sulastri',
    name: 'Made Sulastri',
    title: 'Luxury Resort Therapist',
    experience: 'Worked in 5-star resorts in Nusa Dua.',
    image: placeholderImage,
    specialties: ['Deep Tissue', 'Luxury Spa Techniques']
  },
  {
    id: 'ketut-ratna',
    name: 'Ketut Ratna',
    title: 'Healer Lineage',
    experience: 'Comes from a healer lineage in Karangasem.',
    image: placeholderImage,
    specialties: ['Lymphatic Drainage', 'Mindful Therapy']
  },
  {
    id: 'nyoman-saraswati',
    name: 'Nyoman Saraswati',
    title: 'Yoga Instructor Therapist',
    experience: 'Yoga instructor turned therapist.',
    image: placeholderImage,
    specialties: ['Thai Massage', 'Guided Breathing']
  },
  {
    id: 'komang-ayuni',
    name: 'Komang Ayuni',
    title: 'Stone Therapy Expert',
    experience: 'Expert in stone therapy, studied in Lombok.',
    image: placeholderImage,
    specialties: ['Hot Stone Ritual']
  },
  {
    id: 'wayan-indah',
    name: 'Wayan Indah',
    title: 'International Spa Trainer',
    experience: 'Spa trainer for cruise ships.',
    image: placeholderImage,
    specialties: ['Deep Tissue', 'Sports Massage']
  },
  {
    id: 'luh-purnama',
    name: 'Luh Purnama',
    title: 'Beauty & Skincare Specialist',
    experience: 'Passion for skincare and beauty.',
    image: placeholderImage,
    specialties: ['Bali Glow', 'Massage + Scrub']
  },
  {
    id: 'kadek-melati',
    name: 'Kadek Melati',
    title: 'Ayurvedic Practitioner',
    experience: 'Trained with Ayurvedic practitioners.',
    image: placeholderImage,
    specialties: ['Combination Massage', 'Herbal Compress']
  },
  {
    id: 'desak-putu-arini',
    name: 'Desak Putu Arini',
    title: 'Reflexology Specialist',
    experience: 'Reflexology specialist.',
    image: placeholderImage,
    specialties: ['Reflexology', 'Pressure Point Therapy']
  },
  {
    id: 'sri-yuliani',
    name: 'Sri Yuliani',
    title: 'Medical Massage Therapist',
    experience: 'Medical massage therapist from Surabaya.',
    image: placeholderImage,
    specialties: ['Recovery Massage', 'Tired Muscles']
  },
  {
    id: 'cahaya-wulandari',
    name: 'Cahaya Wulandari',
    title: 'Boutique Spa Expert',
    experience: 'Worked in boutique spas in Seminyak.',
    image: placeholderImage,
    specialties: ['Aroma Therapy', 'Relaxation Flow']
  },
  {
    id: 'melati-dewanti',
    name: 'Melati Dewanti',
    title: 'Pilates Trainer Therapist',
    experience: 'Pilates trainer turned therapist.',
    image: placeholderImage,
    specialties: ['Thai Massage', 'Alignment-Focused']
  },
  {
    id: 'rahayu-fitriani',
    name: 'Rahayu Fitriani',
    title: 'Women\'s Wellness Expert',
    experience: 'Known for her gentle touch, studied with midwives.',
    image: placeholderImage,
    specialties: ['Lymphatic Drainage', 'Women\'s Wellness']
  },
  {
    id: 'putu-ayudia',
    name: 'Putu Ayudia',
    title: 'Fitness & Recovery Specialist',
    experience: 'Fitness background.',
    image: placeholderImage,
    specialties: ['Deep Tissue', 'Post-Workout Recovery']
  },
  {
    id: 'kadek-anjani',
    name: 'Kadek Anjani',
    title: 'Traditional Herbs Expert',
    experience: 'Studied traditional herbs from her grandmother.',
    image: placeholderImage,
    specialties: ['Body Scrubs', 'Body Wraps']
  },
  {
    id: 'sekar-paramita',
    name: 'Sekar Paramita',
    title: 'Villa Experience Specialist',
    experience: 'Former hospitality worker in Bali villas.',
    image: placeholderImage,
    specialties: ['Massage Rituals', 'Calm Experiences']
  },
  {
    id: 'ni-luh-sinta',
    name: 'Ni Luh Sinta',
    title: 'Thai-Bali Fusion Expert',
    experience: 'Traveler who trained in Thailand.',
    image: placeholderImage,
    specialties: ['Thai Techniques', 'Bali Fusion']
  },
  {
    id: 'komang-dewinta',
    name: 'Komang Dewinta',
    title: 'Master of Rhythm & Flow',
    experience: 'A master of rhythm and flow. Signature full-body Bali massage, highly requested by guests.',
    image: placeholderImage,
    specialties: ['Signature Bali Massage', 'Full-Body Therapy']
  }
];

export default function Therapists() {
  return (
    <section id="therapists" className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="serif text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6" data-testid="therapists-title">
            Our Therapists: The Soul of Home Massage Ubud
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4" data-testid="therapists-description">
            Meet our exceptional team of 20 certified Balinese massage therapists. Each brings unique expertise, 
            traditional training, and a deep understanding of holistic wellness practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {therapists.map((therapist) => (
            <Card key={therapist.id} className="bg-card rounded-2xl p-4 md:p-6 text-center hover-scale border-border" data-testid={`therapist-card-${therapist.id}`}>
              <img 
                src={therapist.image}
                alt={`Professional portrait of ${therapist.name}, Balinese massage therapist`} 
                className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto mb-3 md:mb-4 object-cover object-center"
                data-testid={`therapist-image-${therapist.id}`}
              />
              <h3 className="serif text-lg md:text-xl font-semibold mb-1 md:mb-2 text-primary" data-testid={`therapist-name-${therapist.id}`}>
                {therapist.name}
              </h3>
              <p className="text-sm md:text-base text-accent mb-2 md:mb-3" data-testid={`therapist-title-${therapist.id}`}>
                {therapist.title}
              </p>
              <p className="text-muted-foreground text-xs md:text-sm mb-3 md:mb-4" data-testid={`therapist-experience-${therapist.id}`}>
                {therapist.experience}
              </p>
              <div className="flex justify-center flex-wrap gap-1 md:gap-2">
                {therapist.specialties.map((specialty, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/20 text-primary px-2 py-1 rounded text-xs"
                    data-testid={`therapist-specialty-${therapist.id}-${index}`}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
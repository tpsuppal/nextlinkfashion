import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Shirt, Baby, Briefcase, Zap, Layers, Award, Package, CheckCircle, Factory } from "lucide-react";

const productCategories = [
  {
    title: "Women's Apparel",
    icon: Shirt,
    description: "Dresses, tops, blouses, skirts, trousers, jackets, activewear",
    moq: "300-500 pcs/color",
    leadTime: "6-8 weeks",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Men's Apparel",
    icon: Briefcase,
    description: "Shirts, t-shirts, polos, trousers, jeans, jackets, hoodies",
    moq: "400-600 pcs/color",
    leadTime: "6-8 weeks",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&auto=format",
  },
  {
    title: "Children's Wear",
    icon: Baby,
    description: "Infants, toddlers, juniors - full range of kids' clothing",
    moq: "400-500 pcs/color",
    leadTime: "6-8 weeks",
    image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?w=600&h=400&fit=crop&auto=format",
  },
];

const technicalStrengths = [
  { title: "Complex Constructions", desc: "Multi-panel designs, intricate seaming, tailored fits", icon: Factory },
  { title: "Special Washes", desc: "Garment dye, stone wash, enzyme wash, vintage treatments", icon: Zap },
  { title: "Embellishments", desc: "Embroidery, appliqué, beading, rhinestones, sequins", icon: Award },
  { title: "Printing Techniques", desc: "Screen print, digital print, heat transfer, sublimation", icon: Layers },
  { title: "Sustainable Fabrics", desc: "Organic cotton, recycled polyester, Tencel, bamboo", icon: Package },
  { title: "Technical Fabrics", desc: "Performance knits, moisture-wicking, stretch denim", icon: CheckCircle },
];

const facilities = [
  { country: "India", capacity: "150K+ pcs/month", specialty: "Wovens, embroidery, hand-finishing" },
  { country: "China", capacity: "200K+ pcs/month", specialty: "High-volume knits, technical fabrics" },
  { country: "Bangladesh", capacity: "180K+ pcs/month", specialty: "Denim, woven basics, competitive pricing" },
  { country: "Vietnam", capacity: "120K+ pcs/month", specialty: "Activewear, sustainable production" },
];

export default function Capabilities() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Manufacturing Excellence
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Production Capabilities
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            From wovens to knits, basic tees to complex outerwear — our multi-country network delivers precision, scale, and speed for fashion retailers worldwide.
          </p>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Range</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive garment manufacturing across all categories with flexible MOQs and fast turnaround times.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-lg border border-black/5 group">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <cat.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-serif text-xl font-bold text-white">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white">
                  <p className="text-muted-foreground mb-4">{cat.description}</p>
                  <div className="flex justify-between text-sm border-t border-black/5 pt-3">
                    <span><span className="font-semibold">MOQ:</span> <span className="text-primary">{cat.moq}</span></span>
                    <span><span className="font-semibold">Lead Time:</span> <span className="text-primary">{cat.leadTime}</span></span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Strengths */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Technical Strengths</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Beyond basic manufacturing, we excel at complex processes that add value and differentiation to your collections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technicalStrengths.map((strength, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-black/5 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <strength.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-serif text-lg font-bold text-foreground mb-2">{strength.title}</h4>
                <p className="text-muted-foreground text-sm">{strength.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities & Locations */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Facilities & Locations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic manufacturing hubs across Asia, each optimized for specific product types and delivering total capacity of 650K+ pieces per month.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, i) => (
              <div key={i} className="bg-primary text-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-serif text-xl font-bold text-accent mb-2">{facility.country}</h4>
                <p className="text-white/80 text-sm mb-3">{facility.specialty}</p>
                <span className="text-xs font-semibold bg-white/10 rounded-full px-3 py-1">{facility.capacity}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-50 text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Scale Your Production?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Let's discuss your specific requirements, MOQs, and timelines. Our team is ready to support your next collection.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-white px-10 py-4 text-lg hover:bg-primary/90">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

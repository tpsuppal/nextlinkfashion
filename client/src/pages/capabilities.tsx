import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Package, Zap, Factory, Award, Shirt, Baby, Briefcase } from "lucide-react";
import ladiesImg from "@/assets/images/ladies-garments.jpg";
import mensImg from "@/assets/images/mens-garments.jpg";
import childrensImg from "@/assets/images/childrens-garments.jpg";
import qualityImg from "@/assets/images/quality-control.jpg";
import sustainImg from "@/assets/images/sustainability.jpg";
import globalImg from "@/assets/images/global-footprint.jpg";

const productCategories = [
  {
    title: "Women's Apparel",
    icon: Shirt,
    description: "Dresses, tops, blouses, skirts, trousers, jackets, activewear",
    moq: "300-500 pcs/color",
    leadTime: "6-8 weeks",
    image: ladiesImg
  },
  {
    title: "Men's Apparel",
    icon: Briefcase,
    description: "Shirts, t-shirts, polos, trousers, jeans, jackets, hoodies",
    moq: "400-600 pcs/color",
    leadTime: "6-8 weeks",
    image: mensImg
  },
  {
    title: "Children's Wear",
    icon: Baby,
    description: "Infants, toddlers, juniors - full range of kids' clothing",
    moq: "400-500 pcs/color",
    leadTime: "6-7 weeks",
    image: childrensImg
  }
];

const technicalStrengths = [
  { title: "Complex Constructions", desc: "Multi-panel designs, intricate seaming, tailored fits" },
  { title: "Special Washes", desc: "Garment dye, stone wash, enzyme wash, vintage treatments" },
  { title: "Embellishments", desc: "Embroidery, appliqué, beading, rhinestones, sequins" },
  { title: "Printing Techniques", desc: "Screen print, digital print, heat transfer, sublimation" },
  { title: "Sustainable Fabrics", desc: "Organic cotton, recycled polyester, Tencel, bamboo" },
  { title: "Technical Fabrics", desc: "Performance knits, moisture-wicking, stretch denim" }
];

const facilities = [
  { country: "India", capacity: "150K+ pcs/month", specialty: "Wovens, embroidery, hand-finishing" },
  { country: "China", capacity: "200K+ pcs/month", specialty: "High-volume knits, technical fabrics" },
  { country: "Bangladesh", capacity: "180K+ pcs/month", specialty: "Denim, woven basics, competitive pricing" },
  { country: "Vietnam", capacity: "120K+ pcs/month", specialty: "Activewear, sustainable production" }
];

export default function Capabilities() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent border border-accent/30">
            Manufacturing Excellence
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            Production Capabilities
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            From wovens to knits, basic tees to complex outerwear — our multi-country network delivers precision, scale, and speed for fashion retailers worldwide.
          </p>
        </div>
      </section>

      {/* Product Range */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Product Range</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive garment manufacturing across all categories with flexible MOQs and fast turnaround times.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {productCategories.map((cat, i) => (
              <div key={i} className="rounded-2xl overflow-hidden border border-border bg-card hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <cat.icon className="w-10 h-10 text-accent mb-3" />
                    <h3 className="text-2xl font-bold text-white mb-2">{cat.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4">{cat.description}</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between py-2 border-b border-border">
                      <span className="font-semibold">MOQ:</span>
                      <span className="text-muted-foreground">{cat.moq}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="font-semibold">Lead Time:</span>
                      <span className="text-muted-foreground">{cat.leadTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Strengths */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6">Technical Strengths</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Beyond basic manufacturing, we excel at complex processes that add value and differentiation to your collections.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {technicalStrengths.map((strength, i) => (
                  <div key={i} className="p-4 rounded-xl bg-background border border-border hover:border-accent/50 transition-colors">
                    <Zap className="w-6 h-6 text-accent mb-2" />
                    <h4 className="font-bold mb-1">{strength.title}</h4>
                    <p className="text-sm text-muted-foreground">{strength.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={qualityImg} alt="Quality Control" className="rounded-2xl shadow-lg aspect-square object-cover" />
              <img src={sustainImg} alt="Sustainable Production" className="rounded-2xl shadow-lg aspect-square object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities & Locations */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Facilities & Locations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Strategic manufacturing hubs across Asia, each optimized for specific product types and delivering total capacity of 650K+ pieces per month.
            </p>
          </div>
          <div className="max-w-5xl mx-auto space-y-4 mb-12">
            {facilities.map((facility, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow">
                <Factory className="w-12 h-12 text-accent flex-shrink-0" />
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-2xl font-bold mb-2">{facility.country}</h4>
                  <p className="text-muted-foreground">{facility.specialty}</p>
                </div>
                <div className="px-6 py-3 rounded-full bg-accent/10 text-accent font-bold whitespace-nowrap">
                  {facility.capacity}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={globalImg} alt="Global Manufacturing Footprint" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <Package className="w-14 h-14 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to Scale Your Production?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Let's discuss your specific requirements, MOQs, and timelines. Our team is ready to support your next collection.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-lg font-bold">
              Request a Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

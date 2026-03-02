import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PenTool, Scissors, Layers, CheckCircle, Share2, Palette } from "lucide-react";
import heroMfgImg from "@/assets/images/hero-manufacturing.jpg";

const services = [
  {
    title: "Trend Research & Moodboards",
    description: "Our designers monitor global fashion trends to provide inspired conceptual direction for your seasonal collections.",
    icon: Palette
  },
  {
    title: "Fabric & Trim Sourcing",
    description: "Access to a vast library of materials, including sustainable options, optimized for cost and quality.",
    icon: Layers
  },
  {
    title: "Tech Pack & Spec Development",
    description: "Detailed technical drawings and measurement charts ensuring precision in every garment construction.",
    icon: PenTool
  },
  {
    title: "Pattern Making & Grading",
    description: "Expert pattern engineering for optimal fit across all size ranges, from XS to Plus sizes.",
    icon: Scissors
  },
  {
    title: "Proto & SMS Development",
    description: "Rapid sample creation to validate design, fit, and construction before bulk production begins.",
    icon: CheckCircle
  }
];

const processSteps = [
  { step: "01", title: "Conceptualization", timeline: "Week 1", detail: "Sharing moodboards and initial design sketches." },
  { step: "02", title: "Tech Pack Design", timeline: "Week 1-2", detail: "Finalizing technical specifications and fabric choices." },
  { step: "03", title: "Pattern & Proto", timeline: "Week 2-3", detail: "Creating the first physical prototype for fit review." },
  { step: "04", title: "Fit & Refinement", timeline: "Week 4", detail: "Adjusting based on fit sessions to ensure perfection." },
  { step: "05", title: "Final Approval", timeline: "Week 5", detail: "Releasing final tech packs for bulk production." }
];

export default function DesignDevelopment() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroMfgImg}
            alt="Design Studio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="mb-6 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent border border-accent/30">
            In-House Design Studio
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6 text-white">
            Design Studio &ndash; From Concept to Sample in Weeks
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto mb-10 text-white/90">
            Next Link Fashion is not just a sewing facility&mdash;we are your strategic fashion design and product development partner. Our in-house team accelerates your journey from idea to shelf.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-10 text-base font-semibold">
              Book a Design Consultation
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Our Design Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive product development solutions tailored for global retailers and emerging fashion brands.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                <service.icon className="w-12 h-12 text-accent mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">The Design-to-Sample Workflow</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A transparent, efficient process designed to get your samples ready for market in record time.
            </p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {processSteps.map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-background border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-accent font-serif min-w-[60px] text-center">{item.step}</div>
                <div className="flex-1 text-center md:text-left">
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p className="text-muted-foreground">{item.detail}</p>
                </div>
                <div className="px-5 py-2 rounded-full bg-accent/10 text-accent font-semibold whitespace-nowrap text-sm border border-accent/20">
                  {item.timeline}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section - using local asset */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">Bringing Visions to Life</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-12">
            From initial concept sketches to production-ready garments—our design studio is where collections are born.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative group">
              <img
                src={heroMfgImg}
                alt="Collaborative Design Sessions"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <span className="text-white font-bold text-lg">Collaborative Design Sessions</span>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-video relative group bg-muted flex items-center justify-center">
              <div className="p-10 text-center">
                <Scissors className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Precision Fit Testing</h3>
                <p className="text-muted-foreground">Every prototype undergoes rigorous fit sessions before moving to production.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <Share2 className="w-14 h-14 mx-auto mb-8 opacity-80" />
          <h2 className="text-4xl font-bold font-serif mb-6">Ready to start your next collection?</h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            Share your concept deck or tech packs with us, and let's create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 h-16 text-lg font-bold">
              Upload Your Brief
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

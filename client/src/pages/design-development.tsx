import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { PenTool, Scissors, Layers, CheckCircle, Palette } from "lucide-react";
import heroMfgImg from "@/assets/images/hero-manufacturing.jpg";

const services = [
  { title: "Trend Research & Moodboards", description: "Our designers monitor global fashion trends to provide inspired conceptual direction for your seasonal collections.", icon: Palette },
  { title: "Fabric & Trim Sourcing", description: "Access to a vast library of materials, including sustainable options, optimized for cost and quality.", icon: Layers },
  { title: "Tech Pack & Spec Development", description: "Detailed technical drawings and measurement charts ensuring precision in every garment construction.", icon: PenTool },
  { title: "Pattern Making & Grading", description: "Expert pattern engineering for optimal fit across all size ranges, from XS to Plus sizes.", icon: Scissors },
  { title: "Proto & SMS Development", description: "Rapid sample creation to validate design, fit, and construction before bulk production begins.", icon: CheckCircle },
];

const processSteps = [
  { step: "01", title: "Conceptualization", timeline: "Week 1", detail: "Sharing moodboards and initial design sketches." },
  { step: "02", title: "Tech Pack Design", timeline: "Week 1-2", detail: "Finalizing technical specifications and fabric choices." },
  { step: "03", title: "Pattern & Proto", timeline: "Week 2-3", detail: "Creating the first physical prototype for fit review." },
  { step: "04", title: "Fit & Refinement", timeline: "Week 4", detail: "Adjusting based on fit sessions to ensure perfection." },
  { step: "05", title: "Final Approval", timeline: "Week 5", detail: "Releasing final tech packs for bulk production." },
];

export default function DesignDevelopment() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            In-House Design Studio
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Design & Development
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Next Link Fashion is not just a sewing facility—we are your strategic fashion design and product development partner. Our in-house team accelerates your journey from idea to shelf.
          </p>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-primary font-bold px-10 hover:bg-accent/90">
                Book a Design Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Design Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive product development solutions tailored for global retailers and emerging fashion brands.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">The Design-to-Sample Workflow</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A transparent, efficient process designed to get your samples ready for market in record time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm text-center">
                <div className="font-serif text-3xl font-bold text-accent mb-3">{item.step}</div>
                <h4 className="font-serif text-base font-bold text-foreground mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-xs mb-2">{item.detail}</p>
                <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-2 py-0.5">{item.timeline}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Bringing Visions to Life</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From initial concept sketches to production-ready garments—our design studio is where collections are born.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={heroMfgImg} alt="Collaborative Design Sessions" className="w-full h-80 object-cover" />
            </div>
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Precision Fit Testing</h3>
              <p className="text-muted-foreground">
                Every prototype undergoes rigorous fit sessions before moving to production. Our team ensures every seam, every measurement, and every detail meets your specifications exactly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your next collection?</h2>
          <p className="text-xl text-white/80 mb-8">
            Share your concept deck or tech packs with us, and let's create something extraordinary together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-primary font-bold px-10 hover:bg-accent/90">
              Upload Your Brief
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

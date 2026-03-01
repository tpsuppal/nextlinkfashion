import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero-worldmap.png";
import globalImg from "@/assets/images/global-footprint.jpg";
import certsImg from "@assets/image_1771842294019.png";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Apparel Manufacturing Facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <span className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1.5 text-sm font-medium text-accent border border-accent/30 animate-in fade-in slide-in-from-bottom-4 duration-700">
            Global Apparel Solutions
          </span>
          <h1 className="mb-6 font-serif text-5xl md:text-7xl font-bold text-white tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100 max-w-4xl text-balance">
            Your Trusted Apparel Manufacturing Partner
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Seamless design-to-delivery, anchored by multi-country manufacturing facilities and 15+ years of proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[200px] h-14 text-base font-semibold" data-testid="btn-partner-hero">
                Partner With Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm min-w-[200px] h-14 text-base" data-testid="btn-explore-hero">
                Explore Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl font-bold text-foreground mb-6">Our Global Footprint & Geographical Advantage</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Headquartered in the dynamic hub of Hong Kong, Next Link Fashion strategically leverages an expansive network of state-of-the-art production facilities across <strong className="text-primary font-semibold">India, China, Bangladesh, and Vietnam</strong>.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:border-accent/50 transition-colors group">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">Unparalleled Flexibility</h3>
                  <p className="text-sm text-muted-foreground">Adaptability to diverse production volumes and specific client requirements.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:border-accent/50 transition-colors group">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">Cost-Efficiency</h3>
                  <p className="text-sm text-muted-foreground">Optimized sourcing and manufacturing across regions to provide competitive pricing.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:border-accent/50 transition-colors group">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">Diverse Capabilities</h3>
                  <p className="text-sm text-muted-foreground">Access to specialized craftsmanship, unique fabrications, and advanced tech.</p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-black/5 hover:border-accent/50 transition-colors group">
                  <h3 className="font-serif text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">Resilient Supply Chain</h3>
                  <p className="text-sm text-muted-foreground">A robust and diversified network that ensures stability in a dynamic market.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl -rotate-3 transform-gpu"></div>
              <img 
                src={globalImg} 
                alt="Global map highlighting manufacturing bases" 
                className="relative z-10 rounded-2xl shadow-2xl object-cover w-full aspect-square md:aspect-[4/3] border border-white/50"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl z-20 border border-black/5 flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="font-serif font-bold text-2xl text-foreground">5</p>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Strategic Regions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-secondary/40 border-b border-black/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Globally Certified. Ethically Manufactured.</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-4xl mx-auto">
            We operate to the fashion industry's highest standards for sustainability, social compliance, and supply chain security. From GOTS-certified organic materials to C-TPAT-approved facilities, our multi-country manufacturing network ensures your garments are produced responsibly and clear customs without delay.
          </p>
          <div className="flex justify-center mb-10 opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-500">
             <img src={certsImg} alt="Certifications including GOTS, OEKO-TEX, BSCI, WRAP, C-TPAT" className="h-24 md:h-32 object-contain mix-blend-multiply" />
          </div>
          <Link href="/about">
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white h-12 px-8 text-base font-semibold" data-testid="btn-view-certs">
              View All Certifications
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-accent/20 blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-secondary/30 blur-3xl opacity-50"></div>
        
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Elevate your brand with a global partner</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Committed to quality, efficiency, and sustainability. Contact Next Link Fashion today to explore how our design-to-delivery expertise can meet your apparel sourcing needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-lg font-semibold" data-testid="btn-cta-bottom">
              Start a Conversation
            </Button>
          </Link>
        </div>

              {/* FAQ Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Common questions from B2B buyers about working with Next Link Fashion.
          </p>

          <div className="max-w-4xl mx-auto space-y-4 text-left">
            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">What are your minimum order quantities (MOQ)?</summary>
              <p className="mt-4 text-muted-foreground">Our MOQ typically starts at 500 pieces per style per color. For initial orders or sampling, we can discuss flexible arrangements to accommodate your business needs.</p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">What is your typical production lead time?</summary>
              <p className="mt-4 text-muted-foreground">Standard production lead time is 60-90 days from order confirmation, depending on order complexity and quantity. Rush orders can be accommodated with advance notice.</p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">Do you offer sample development services?</summary>
              <p className="mt-4 text-muted-foreground">Yes, we provide comprehensive sample development services including tech packs, first samples, fit samples, and pre-production samples. Turnaround time for samples is typically 2-3 weeks.</p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">Which certifications do your facilities hold?</summary>
              <p className="mt-4 text-muted-foreground">Our multi-country facilities are certified to GOTS (organic materials), OEKO-TEX Standard 100 (textile safety), BSCI (social compliance), WRAP (ethical manufacturing), and ISO 14001 (environmental management).</p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">Can you handle custom designs and private label production?</summary>
              <p className="mt-4 text-muted-foreground">Absolutely. Our in-house design team works closely with brands to develop custom collections, from concept sketches to final production. We offer full private label services including hang tags, packaging, and branding.</p>
            </details>

            <details className="bg-card p-6 rounded-lg border border-border">
              <summary className="font-semibold text-lg cursor-pointer hover:text-accent transition-colors">What payment terms do you offer?</summary>
              <p className="mt-4 text-muted-foreground">Standard payment terms are 30% deposit upon order confirmation and 70% balance before shipment. For established clients, we can discuss extended payment terms such as LC (Letter of Credit) or open account arrangements.</p>
            </details>
          </div>
        </div>
      </section>
      </section>
    </div>
  );
}

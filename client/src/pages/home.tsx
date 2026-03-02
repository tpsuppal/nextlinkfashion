import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, Globe2, ShieldCheck, Clock } from "lucide-react";
import heroImg from "@/assets/images/hero-manufacturing.jpg";
import globalImg from "@/assets/images/global-footprint.jpg";

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
            Your Apparel Manufacturing Partner for Global Fashion Retailers
          </h1>
          <p className="mb-10 max-w-2xl text-lg md:text-xl text-white/90 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
            Seamless design-to-delivery solutions powered by multi-country manufacturing facilities and 15+ years of proven expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 min-w-[200px] h-14 text-base font-semibold">
                Partner With Us
              </Button>
            </Link>
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm min-w-[200px] h-14 text-base font-semibold">
                View Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="py-12 bg-muted/50 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center space-y-2">
              <Clock className="w-8 h-8 text-accent" />
              <span className="font-bold text-lg">15+ Years</span>
              <p className="text-sm text-muted-foreground">Garment Manufacturing Expertise</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <Globe2 className="w-8 h-8 text-accent" />
              <span className="font-bold text-lg">Multi-Country</span>
              <p className="text-sm text-muted-foreground">India, China, Bangladesh, Vietnam</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-accent" />
              <span className="font-bold text-lg">Full Compliance</span>
              <p className="text-sm text-muted-foreground">OEKO-TEX, BSCI, WRAP Certified</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-accent" />
              <span className="font-bold text-lg">End-to-End</span>
              <p className="text-sm text-muted-foreground">Design to Quality Assurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-Page Blocks */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 font-serif">Design & Development Studio</h3>
              <p className="text-muted-foreground mb-6">Bring ideas to reality with trend research, tech packs, sampling, and fit development.</p>
              <Link href="/contact" className="text-accent font-semibold hover:underline">Learn More →</Link>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 font-serif">Manufacturing Capabilities</h3>
              <p className="text-muted-foreground mb-6">Wovens, knits, dresses, activewear – low MOQs, fast turns, complex tech packs welcome.</p>
              <Link href="/products" className="text-accent font-semibold hover:underline">View Categories →</Link>
            </div>
            <div className="p-8 rounded-2xl border border-border bg-card hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-4 font-serif">Quality & Compliance</h3>
              <p className="text-muted-foreground mb-6">Certified processes ensure every garment meets global retail standards and ethical requirements.</p>
              <Link href="/about" className="text-accent font-semibold hover:underline">Our Standards →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footprint Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 font-serif text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Our Global Footprint & Geographical Advantage
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Headquartered in the dynamic hub of Hong Kong, Next Link Fashion strategically leverages an expansive network of state-of-the-art production facilities across **India, China, Bangladesh, and Vietnam**.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Unparalleled Flexibility</h3>
                  <p className="text-muted-foreground">Adaptability to diverse production volumes and specific client requirements.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Cost-Efficiency</h3>
                  <p className="text-muted-foreground">Optimized sourcing and manufacturing across regions to provide competitive pricing.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Diverse Capabilities</h3>
                  <p className="text-muted-foreground">Access to specialized craftsmanship, unique fabrications, and advanced tech.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Resilient Supply Chain</h3>
                  <p className="text-muted-foreground">A robust and diversified network that ensures stability in a dynamic market.</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-square sm:aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={globalImg}
                alt="Global map highlighting manufacturing bases"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-8 left-8 bg-background/90 backdrop-blur-md p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-accent mb-1">5</div>
                <div className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Strategic Regions</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 font-serif text-4xl md:text-5xl font-bold tracking-tight">
            Elevate your brand with a global partner
          </h2>
          <p className="mb-10 max-w-2xl mx-auto text-lg opacity-90">
            Committed to quality, efficiency, and sustainability. Contact Next Link Fashion today to explore how our design-to-delivery expertise can meet your apparel sourcing needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 h-14 px-8 text-base font-semibold">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

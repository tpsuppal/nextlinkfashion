import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import teamImg from "@/assets/images/team-office.jpg";
import qcImg from "@/assets/images/quality-control.jpg";
import sustainImg from "@/assets/images/sustainability.jpg";
import certsImg from "@assets/image_1771842294019.png";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">About Next Link Fashion</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">
                15+ Years Crafting Success for Fashion Retailers Worldwide          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
                Next Link Fashion, headquartered in Hong Kong, is your dedicated partner in apparel manufacturing. With production facilities across India, China, Bangladesh, and Vietnam, we specialize in turning fashion brands' visions into high-quality, market-ready garments. Serving retailers and brands in the USA, Europe, and Asia, we deliver complete design-to-delivery solutions backed by full compliance with global retail standards.          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 w-full">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center md:text-left">Our Integrated Team & Expertise</h2>
            <p className="text-lg text-muted-foreground text-justify">
              A cross-functional team built to reduce sampling cycles, protect quality, and keep production on schedule—end to end.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-2"></div>
              <img src={teamImg} alt="Our integrated team" className="relative z-10 rounded-xl shadow-xl w-full object-cover aspect-video" />
            </div>
            
            <div className="order-1 lg:order-2">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Design & Product Development</h4>
                    <p className="mt-1 text-muted-foreground">Our creative teams translate global trends into market-ready designs, offering innovative solutions and custom developments.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22V12"/><path d="M12 12 2 15"/><path d="M12 12l10 3"/><path d="m15 5-3-3-3 3"/><path d="M12 2v5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Merchandising & Production</h4>
                    <p className="mt-1 text-muted-foreground">Dedicated merchandisers provide proactive communication, meticulous planning, and rigorous monitoring to ensure on-time delivery.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Logistics & Delivery</h4>
                    <p className="mt-1 text-muted-foreground">Our expert logistics professionals manage complex global shipping, ensuring efficient, secure, and timely delivery worldwide.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Section */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 w-full">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Quality Control & Assurance</h2>
            <p className="text-lg text-primary-foreground/90 text-justify">
              Quality is the bedrock of Next Link Fashion. Backed by GMP (Good Manufacturing Practice) and ISO 14001 certifications, our robust Quality Management System (QMS) is meticulously implemented across our multi-country facilities to ensure consistent, retail-ready garments.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                {[
                  { title: "Pre-Production Checks:", desc: "Rigorous inspection of raw materials, patterns, and samples before bulk production begins." },
                  { title: "In-Line Inspections:", desc: "Continuous monitoring of manufacturing processes to catch and correct variations instantly." },
                  { title: "Mid-Production Audits:", desc: "Comprehensive assessments at key stages to protect both product integrity and production timelines." },
                  { title: "Final Random Inspection (FRI):", desc: "Thorough AQL-standard inspections of finished goods prior to shipping." },
                  { title: "Accredited Lab Testing:", desc: "Partnerships with international testing labs to ensure full compliance with global safety standards, including OEKO-TEX® Standard 100." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <p className="text-primary-foreground/90 leading-relaxed"><strong className="text-white">{item.title}</strong> {item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <img src={qcImg} alt="Quality Control Inspector" className="rounded-xl shadow-2xl w-full object-cover aspect-video border-4 border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 w-full">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">Sustainability & Environmental Responsibility</h2>
            <p className="text-lg text-secondary-foreground/90 text-justify">
              We are deeply committed to fostering a sustainable future for the apparel industry. Our environmental and social responsibility initiatives are integral to our operations.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={sustainImg} alt="Sustainability" className="rounded-xl shadow-2xl w-full object-cover aspect-square md:aspect-video border-4 border-white/10" />
            </div>
            
            <div className="order-1 lg:order-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 h-full">
                  <h4 className="font-serif text-xl font-bold mb-2">Ethical Sourcing</h4>
                  <p className="text-sm text-secondary-foreground/80">Partnering exclusively with suppliers who uphold fair labor practices and safe working conditions.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 h-full">
                  <h4 className="font-serif text-xl font-bold mb-2">Eco-Friendly Production</h4>
                  <p className="text-sm text-secondary-foreground/80">Implementing processes that minimize our environmental footprint, including water conservation.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 h-full">
                  <h4 className="font-serif text-xl font-bold mb-2">Sustainable Materials</h4>
                  <p className="text-sm text-secondary-foreground/80">Actively promoting organic cotton, recycled fibers, and innovative eco-conscious materials.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20 h-full">
                  <h4 className="font-serif text-xl font-bold mb-2">Certifications</h4>
                  <p className="text-sm text-secondary-foreground/80">Our facilities are audited and certified against the industry's most rigorous standards — ensuring every order meets the compliance requirements.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 w-full">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-6 text-center md:text-left">Uncompromising Standards & Global Compliance</h2>
            <p className="text-lg text-muted-foreground text-justify leading-relaxed">
              We operate to the highest international standards for quality, ethical labor, and environmental sustainability. Our multi-country facilities are rigorously audited, ensuring your supply chain is secure, responsible, and ready for the world’s most demanding retail floors.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform rotate-2"></div>
              <img src={certsImg} alt="Certifications" className="relative z-10 rounded-xl shadow-xl w-full object-cover aspect-video bg-white/50 backdrop-blur-sm p-4 grayscale hover:grayscale-0 transition-all duration-500 border border-black/5 mix-blend-multiply" />
            </div>
            
            <div className="order-1 lg:order-2">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><circle cx="12" cy="12" r="4"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Sustainable & Material Integrity</h4>
                    <p className="mt-1 text-muted-foreground">Certified sourcing for organic, recycled, and eco-conscious apparel production.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Ethical Labor & Social Compliance</h4>
                    <p className="mt-1 text-muted-foreground">Strictly audited for fair wages, safe working environments, and responsible operations.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Quality, Security & Infrastructure</h4>
                    <p className="mt-1 text-muted-foreground">Rigorous quality management and globally recognized supply chain security for frictionless importing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

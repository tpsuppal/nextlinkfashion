import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import teamImg from "@/assets/images/team-office.jpg";
import qcImg from "@/assets/images/quality-control.jpg";
import sustainImg from "@/assets/images/sustainability.jpg";

export default function About() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="bg-primary/5 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">About Nextlink Fashion</span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">A Legacy Built on Trust and Precision</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            With over 15 years of unwavering commitment to excellence, Nextlink Fashion Inc Limited stands as a world-class leader in apparel manufacturing and supply.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute -inset-4 bg-accent/10 rounded-2xl transform -rotate-2"></div>
              <img src={teamImg} alt="Our integrated team" className="relative z-10 rounded-xl shadow-xl w-full object-cover aspect-video" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">Our Integrated Team & Expertise</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our strength lies in our highly skilled and collaborative team, dedicated to ensuring seamless operations and client satisfaction at every touchpoint.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Design & Product Development</h4>
                    <p className="mt-1 text-muted-foreground">Our creative teams translate global trends into market-ready designs, offering innovative solutions and custom developments.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M12 22V12"/><path d="M12 12 2 15"/><path d="M12 12l10 3"/><path d="m15 5-3-3-3 3"/><path d="M12 2v5"/></svg>
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">Merchandising & Production</h4>
                    <p className="mt-1 text-muted-foreground">Dedicated merchandisers provide proactive communication, meticulous planning, and rigorous monitoring to ensure on-time delivery.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Quality Control & Assurance</h2>
              <p className="text-lg text-primary-foreground/90 mb-8">
                Quality is the bedrock of Nextlink Fashion. Our robust Quality Management System (QMS) is meticulously implemented across the entire supply chain, ensuring unparalleled product integrity.
              </p>
              
              <div className="space-y-4">
                {[
                  "Pre-Production Checks: Rigorous inspection of raw materials, patterns, and samples.",
                  "In-Line Inspections: Continuous monitoring of manufacturing processes.",
                  "Mid-Production Audits: Comprehensive assessments at key stages.",
                  "Final Random Inspection (FRI): Thorough inspection of finished goods.",
                  "Accredited Lab Testing: Partnership with international testing labs."
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent mt-0.5 shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <p className="text-primary-foreground/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img src={qcImg} alt="Quality Control Inspector" className="rounded-xl shadow-2xl w-full object-cover aspect-video border-4 border-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <img src={sustainImg} alt="Sustainability" className="rounded-xl shadow-2xl w-full object-cover aspect-square md:aspect-video border-4 border-white/10" />
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">Sustainability & Environmental Responsibility</h2>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                We are deeply committed to fostering a sustainable future for the apparel industry. Our environmental and social responsibility initiatives are integral to our operations.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                  <h4 className="font-serif text-xl font-bold mb-2">Ethical Sourcing</h4>
                  <p className="text-sm text-secondary-foreground/80">Partnering exclusively with suppliers who uphold fair labor practices and safe working conditions.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                  <h4 className="font-serif text-xl font-bold mb-2">Eco-Friendly Production</h4>
                  <p className="text-sm text-secondary-foreground/80">Implementing processes that minimize our environmental footprint, including water conservation.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                  <h4 className="font-serif text-xl font-bold mb-2">Sustainable Materials</h4>
                  <p className="text-sm text-secondary-foreground/80">Actively promoting organic cotton, recycled fibers, and innovative eco-conscious materials.</p>
                </li>
                <li className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-white/20">
                  <h4 className="font-serif text-xl font-bold mb-2">Certifications</h4>
                  <p className="text-sm text-secondary-foreground/80">Adhering to international sustainability standards and relevant certifications.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
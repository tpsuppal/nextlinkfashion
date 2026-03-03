import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function QualityCompliance() {
  const certifications = [
    { name: 'OEKO-TEX Standard 100', icon: '✓', description: 'Ensures textiles are free from harmful substances and safe for human use.' },
    { name: 'BSCI', icon: '✓', description: 'Business Social Compliance Initiative - ethical labor practices and social compliance.' },
    { name: 'WRAP', icon: '✓', description: 'Worldwide Responsible Accredited Production - ethical manufacturing standards.' },
    { name: 'C-TPAT', icon: '✓', description: 'U.S. Customs security standards for supply chain integrity and cargo safety.' },
    { name: 'ISO 9001', icon: '✓', description: 'International quality management standards for consistent product excellence.' },
    { name: 'GOTS', icon: '✓', description: 'Global Organic Textile Standard - organic fibers processing and environmental responsibility.' },
  ];

  const qaProcess = [
    { step: '1', title: 'Inline Inspection', description: 'Real-time quality checks during production to catch issues early.' },
    { step: '2', title: 'Final AQL Checks', description: 'Comprehensive Acceptable Quality Level inspection before packing.' },
    { step: '3', title: 'Carton Inspection', description: 'Final verification of packaging, labeling, and shipment readiness.' },
    { step: '4', title: 'Documentation', description: 'Complete audit trail with test reports and compliance certificates.' },
  ];

  const sustainability = [
    { icon: '♻️', title: 'Recycled Fabrics', description: 'RPET polyester and recycled cotton options for eco-conscious collections.' },
    { icon: '💧', title: 'Water Treatment', description: 'Advanced wastewater treatment systems in all our production facilities.' },
    { icon: '🌱', title: 'Organic Materials', description: 'GOTS-certified organic cotton and sustainable fabric sourcing.' },
    { icon: '⚡', title: 'Energy Efficiency', description: 'LED lighting, efficient machinery, and renewable energy initiatives.' },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="bg-primary py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <span className="inline-block bg-accent/20 text-accent font-semibold text-sm px-4 py-1.5 rounded-full mb-6 tracking-wider uppercase">
            Certified Excellence
          </span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6">
            Quality & Compliance
          </h1>
          <p className="text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            Fully certified for global retail. Every garment meets the highest standards of quality, safety, and ethical manufacturing.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Global Certifications</h2>
            <p className="text-lg text-muted-foreground">Trusted by retailers worldwide for compliance and quality assurance</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-4 text-accent font-bold text-lg">{cert.icon}</div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">Audit & QA Process</h2>
            <p className="text-lg text-muted-foreground">Rigorous quality control at every stage of production</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaProcess.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mx-auto mb-4 font-bold text-xl">{item.step}</div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability/ESG */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">ESG & Sustainability</h2>
            <p className="text-lg text-muted-foreground">Committed to environmental responsibility and sustainable manufacturing</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sustainability.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">Why Compliance Matters</h2>
          <p className="text-lg text-muted-foreground mb-4">
            <strong>Global retail requires proven compliance.</strong> From major department stores to direct-to-consumer brands, buyers demand verified certifications, ethical audits, and traceable quality systems.
          </p>
          <p className="text-lg text-muted-foreground mb-4">
            Our multi-country facilities maintain all major retail compliance standards. We handle audit coordination, provide complete documentation, and ensure every garment meets your market's safety and ethical requirements.
          </p>
          <p className="text-lg text-muted-foreground">
            <strong>No surprises.</strong> We proactively manage compliance so your products clear customs smoothly and meet retailer standards on arrival.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Ready to Partner with a Certified Manufacturer?</h2>
          <p className="text-xl text-white/80 mb-8">Let's discuss your compliance requirements and quality standards.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-accent text-primary font-bold px-8 hover:bg-accent/90">Get in Touch</Button>
            </Link>
            <Link href="/capabilities">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">View Capabilities</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

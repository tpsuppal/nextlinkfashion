import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function QualityCompliance() {
  const certifications = [
    {
      name: 'OEKO-TEX Standard 100',
      icon: '✓',
      description: 'Ensures textiles are free from harmful substances and safe for human use.'
    },
    {
      name: 'BSCI',
      icon: '✓',
      description: 'Business Social Compliance Initiative - ethical labor practices and social compliance.'
    },
    {
      name: 'WRAP',
      icon: '✓',
      description: 'Worldwide Responsible Accredited Production - ethical manufacturing standards.'
    },
    {
      name: 'C-TPAT',
      icon: '✓',
      description: 'U.S. Customs security standards for supply chain integrity and cargo safety.'
    },
    {
      name: 'ISO 9001',
      icon: '✓',
      description: 'International quality management standards for consistent product excellence.'
    },
    {
      name: 'GOTS',
      icon: '✓',
      description: 'Global Organic Textile Standard - organic fibers processing and environmental responsibility.'
    }
  ];

  const qaProcess = [
    {
      step: '1',
      title: 'Inline Inspection',
      description: 'Real-time quality checks during production to catch issues early.'
    },
    {
      step: '2',
      title: 'Final AQL Checks',
      description: 'Comprehensive Acceptable Quality Level inspection before packing.'
    },
    {
      step: '3',
      title: 'Carton Inspection',
      description: 'Final verification of packaging, labeling, and shipment readiness.'
    },
    {
      step: '4',
      title: 'Documentation',
      description: 'Complete audit trail with test reports and compliance certificates.'
    }
  ];

  const sustainability = [
    {
      icon: '♻️',
      title: 'Recycled Fabrics',
      description: 'RPET polyester and recycled cotton options for eco-conscious collections.'
    },
    {
      icon: '💧',
      title: 'Water Treatment',
      description: 'Advanced wastewater treatment systems in all our production facilities.'
    },
    {
      icon: '🌱',
      title: 'Organic Materials',
      description: 'GOTS-certified organic cotton and sustainable fabric sourcing.'
    },
    {
      icon: '⚡',
      title: 'Energy Efficiency',
      description: 'LED lighting, efficient machinery, and renewable energy initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Quality & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Fully certified for global retail. Every garment meets the highest standards of quality, safety, and ethical manufacturing.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Certifications</h2>
            <p className="text-xl text-gray-600">Trusted by retailers worldwide for compliance and quality assurance</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-2 border-blue-100 hover:border-blue-500 transition-colors">
                <div className="text-4xl mb-4 text-blue-600">{cert.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Audit & QA Process</h2>
            <p className="text-xl text-gray-600">Rigorous quality control at every stage of production</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qaProcess.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability/ESG */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">ESG & Sustainability</h2>
            <p className="text-xl text-gray-600">Committed to environmental responsibility and sustainable manufacturing</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sustainability.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Compliance Matters</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                <strong>Global retail requires proven compliance.</strong> From major department stores to direct-to-consumer brands, buyers demand verified certifications, ethical audits, and traceable quality systems.
              </p>
              <p>
                Our multi-country facilities maintain all major retail compliance standards. We handle audit coordination, provide complete documentation, and ensure every garment meets your market's safety and ethical requirements.
              </p>
              <p>
                <strong>No surprises.</strong> We proactively manage compliance so your products clear customs smoothly and meet retailer standards on arrival.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with a Certified Manufacturer?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your compliance requirements and quality standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
                Get in Touch
              </Button>
            </Link>
            <Link href="/capabilities">
              <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8">
                View Capabilities
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

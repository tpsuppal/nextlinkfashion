import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('All');

  const categories = ['All', 'Womenswear', 'Menswear', 'Kidswear', 'Athleisure'];
  const seasons = ['All', 'Spring/Summer', 'Fall/Winter'];

  const portfolioItems = [
    {
      id: 1,
      category: 'Womenswear',
      season: 'Spring/Summer',
      title: "Women's Summer Dresses",
      description: 'Viscose prints, flowy silhouettes',
      moq: 'MOQ 500/color',
      image: 'women-dresses'
    },
    {
      id: 2,
      category: 'Womenswear',
      season: 'Fall/Winter',
      title: "Women's Outerwear",
      description: 'Tailored coats, wool blends',
      moq: 'MOQ 300/style',
      image: 'women-coats'
    },
    {
      id: 3,
      category: 'Womenswear',
      season: 'Spring/Summer',
      title: "Women's Tops & Blouses",
      description: 'Silk blends, modern cuts',
      moq: 'MOQ 600/color',
      image: 'women-tops'
    },
    {
      id: 4,
      category: 'Menswear',
      season: 'All',
      title: "Men's Shirts",
      description: 'Cotton and linen weaves, classic & slim fit',
      moq: 'MOQ 500/color',
      image: 'men-shirts'
    },
    {
      id: 5,
      category: 'Menswear',
      season: 'Fall/Winter',
      title: "Men's Outerwear",
      description: 'Jackets, parkas, technical fabrics',
      moq: 'MOQ 400/style',
      image: 'men-jackets'
    },
    {
      id: 6,
      category: 'Menswear',
      season: 'All',
      title: "Men's Denim",
      description: 'Stretch denim, multiple washes',
      moq: 'MOQ 600/wash',
      image: 'men-denim'
    },
    {
      id: 7,
      category: 'Kidswear',
      season: 'Spring/Summer',
      title: "Kids' Playwear",
      description: 'Durable cotton knits, fun prints',
      moq: 'MOQ 400/color',
      image: 'kids-play'
    },
    {
      id: 8,
      category: 'Kidswear',
      season: 'Fall/Winter',
      title: "Kids' Outerwear",
      description: 'Puffer jackets, fleece-lined',
      moq: 'MOQ 350/style',
      image: 'kids-coats'
    },
    {
      id: 9,
      category: 'Athleisure',
      season: 'All',
      title: 'Performance Leggings',
      description: 'Moisture-wicking, 4-way stretch',
      moq: 'MOQ 500/color',
      image: 'athleisure-leggings'
    },
    {
      id: 10,
      category: 'Athleisure',
      season: 'All',
      title: 'Sports Tops & Hoodies',
      description: 'Technical fabrics, quick-dry',
      moq: 'MOQ 400/color',
      image: 'athleisure-tops'
    },
    {
      id: 11,
      category: 'Athleisure',
      season: 'Spring/Summer',
      title: 'Activewear Sets',
      description: 'Seamless knits, matching sets',
      moq: 'MOQ 450/set',
      image: 'athleisure-sets'
    },
    {
      id: 12,
      category: 'Womenswear',
      season: 'All',
      title: "Women's Knitwear",
      description: 'Sweaters, cardigans, fine gauge',
      moq: 'MOQ 400/color',
      image: 'women-knits'
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    const categoryMatch = selectedCategory === 'All' || item.category === selectedCategory;
    const seasonMatch = selectedSeason === 'All' || item.season === selectedSeason || item.season === 'All';
    return categoryMatch && seasonMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Explore our diverse range of garments across categories. Each piece showcases our commitment to quality, design excellence, and manufacturing precision.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 bg-white border-b">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            {/* Category Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Filter by Category</label>
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === cat
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Season Filter */}
            <div className="flex-1">
              <label className="block text-sm font-semibold text-gray-700 mb-3">Filter by Season</label>
              <div className="flex flex-wrap gap-2">
                {seasons.map((season) => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedSeason === season
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 text-sm text-gray-600">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image Placeholder */}
                <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="text-6xl mb-4">👗</div>
                      <p className="text-gray-600 font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500 mt-2">Professional photography available</p>
                    </div>
                  </div>
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                  {/* Season Badge */}
                  {item.season !== 'All' && (
                    <div className="absolute top-4 right-4 bg-white text-gray-700 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.season}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">{item.moq}</span>
                    <Link href="/contact">
                      <Button size="sm" variant="outline" className="text-sm">
                        Inquire
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600">No items match your filters. Try selecting different options.</p>
            </div>
          )}
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔒 Client Confidentiality</h3>
            <p className="text-gray-700 mb-4">
              All garment images shown are representative samples or stock imagery. We respect our clients' intellectual property and never display branded products or private designs without explicit permission.
            </p>
            <p className="text-gray-700">
              <strong>Want to see full client case studies?</strong> Contact us to schedule a confidential portfolio review with signed NDAs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Bring Your Designs to Life?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your collection requirements, MOQs, and timelines. Our team is ready to support your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8">
                Start Your Project
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

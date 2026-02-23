import { Link } from "wouter";

export default function Blog() {
  const posts = [
    {
      id: 6,
      title: "AI in Fashion: From Predictive Analytics to Automated QC",
      excerpt: "How Nextlink Fashion is integrating artificial intelligence into our production lines to enhance quality assurance and predict trending styles before they peak.",
      date: "Feb 20, 2025",
      category: "Innovation",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Navigating the 2025 Global Trade Landscape in Apparel",
      excerpt: "An analysis of the new trade agreements and what they mean for cross-border garment manufacturing, tariffs, and supply chain timelines.",
      date: "Jan 15, 2025",
      category: "Logistics",
      readTime: "6 min read"
    },
    {
      id: 1,
      title: "The Future of Sustainable Fabrics in 2025",
      excerpt: "Explore how organic cotton, recycled fibers, and innovative new materials are reshaping the apparel manufacturing landscape and lowering environmental impact.",
      date: "Oct 12, 2024",
      category: "Sustainability",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Optimizing the Global Supply Chain Post-2020",
      excerpt: "How a multi-country presence across Asia provides resilience and flexibility against global market fluctuations and shipping delays.",
      date: "Sep 28, 2024",
      category: "Logistics",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Quality Control: Beyond the Final Random Inspection",
      excerpt: "An inside look into our robust Quality Management System and why in-line inspections are critical to reducing defect rates in high-volume orders.",
      date: "Sep 15, 2024",
      category: "Quality Assurance",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Trends in Men's Tailoring: Blending Comfort and Classic Elegance",
      excerpt: "Consumer demands are shifting. We discuss how modern fabric blends and updated fits are keeping men's formalwear relevant and comfortable.",
      date: "Aug 30, 2024",
      category: "Fashion Trends",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Industry Insights</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            News, trends, and expert perspectives from the forefront of global apparel manufacturing.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="group flex flex-col bg-white border border-black/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1" data-testid={`blog-post-${post.id}`}>
                <div className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4 text-sm">
                    <span className="text-accent font-semibold">{post.category}</span>
                    <span className="text-muted-foreground">&bull;</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    <Link href="#">{post.title}</Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-black/5">
                    <span className="text-sm font-medium text-foreground">{post.readTime}</span>
                    <Link href="#" className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-1">
                      Read Article <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
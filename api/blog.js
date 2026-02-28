// Mock blog data
const mockBlogPosts = [
  {
    id: 1,
    title: "Sustainable Fashion: The Future of Apparel Manufacturing",
    excerpt: "Explore how sustainable practices are reshaping the global apparel industry and what it means for manufacturers and consumers alike.",
    content: "The apparel manufacturing industry is undergoing a significant transformation as sustainability becomes a core focus for brands and manufacturers worldwide.",
    category: "Sustainability",
    readTime: "5 min read",
    publishedAt: new Date("2026-02-15"),
  },
  {
    id: 2,
    title: "Navigating Global Supply Chains in 2026",
    excerpt: "Understanding the complexities of multi-country manufacturing and how to optimize your supply chain for efficiency and resilience.",
    content: "With manufacturing facilities across India, China, Bangladesh, and Vietnam, managing a global supply chain requires sophisticated coordination and planning.",
    category: "Supply Chain",
    readTime: "6 min read",
    publishedAt: new Date("2026-02-10"),
  },
  {
    id: 3,
    title: "Quality Control in International Apparel Production",
    excerpt: "Best practices for maintaining consistent quality standards across multiple manufacturing locations and partners.",
    content: "Quality control is paramount in apparel manufacturing, especially when working with multiple facilities across different countries.",
    category: "Quality Assurance",
    readTime: "7 min read",
    publishedAt: new Date("2026-02-05"),
  },
  {
    id: 4,
    title: "The Rise of Technical Fabrics in Modern Apparel",
    excerpt: "How innovative materials are changing the landscape of fashion and performance wear manufacturing.",
    content: "Technical fabrics represent the cutting edge of apparel manufacturing, combining functionality with style for today's discerning consumers.",
    category: "Innovation",
    readTime: "5 min read",
    publishedAt: new Date("2026-01-30"),
  },
  {
    id: 5,
    title: "Digital Transformation in Apparel Manufacturing",
    excerpt: "Leveraging technology and automation to streamline production processes and improve efficiency in garment manufacturing.",
    content: "The apparel industry is embracing digital transformation with AI-driven design tools, automated cutting systems, and smart inventory management.",
    category: "Technology",
    readTime: "6 min read",
    publishedAt: new Date("2026-01-25"),
  },
  {
    id: 6,
    title: "Building Strong Partnerships with Apparel Manufacturers",
    excerpt: "Key strategies for developing successful long-term relationships with manufacturing partners across Asia.",
    content: "Success in the apparel business depends heavily on strong relationships with manufacturing partners who understand your vision and quality standards.",
    category: "Business Strategy",
    readTime: "8 min read",
    publishedAt: new Date("2026-01-20"),
  },
];

export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Return all blog posts
    res.json(mockBlogPosts);
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    res.status(500).json({ message: 'Failed to fetch blog posts' });
  }
}

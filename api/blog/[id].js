// Vercel serverless function: /api/blog/[id]
const mockBlogPosts = [
  {
    id: 1,
    title: "Sustainable Fashion: The Future of Apparel Manufacturing",
    excerpt: "Explore how sustainable practices are reshaping the global apparel industry and what it means for manufacturers and consumers alike.",
    content: "The apparel manufacturing industry is undergoing a significant transformation as sustainability becomes a core focus for brands and manufacturers worldwide.\n\nConsumers are increasingly demanding transparency in supply chains and environmentally responsible production methods. This shift is driving manufacturers to adopt greener practices across every stage of production.\n\nAt Next Link Fashion, we have integrated sustainable sourcing, energy-efficient manufacturing processes, and waste reduction initiatives across all our facilities in India, China, Bangladesh, and Vietnam.\n\nKey sustainable practices we have adopted include GOTS-certified organic cotton sourcing, water recycling systems in our dyeing and finishing units, solar energy integration in our Bangladesh facility, and zero-waste cutting room practices.\n\nThe business case for sustainability is also compelling. Brands that can demonstrate responsible sourcing command premium pricing and stronger customer loyalty. Retailers increasingly require OEKO-TEX, GOTS, and BSCI certifications before onboarding a new manufacturing partner.\n\nAs we look ahead, the future of apparel manufacturing will be defined by those who can balance speed-to-market with genuine environmental stewardship. Next Link Fashion is committed to leading this transformation for our brand partners globally.",
    category: "Sustainability",
    readTime: "5 min read",
    publishedAt: new Date("2026-02-15")
  },
  {
    id: 2,
    title: "Navigating Global Supply Chains in 2026",
    excerpt: "Understanding the complexities of multi-country manufacturing and how to optimize your supply chain for efficiency and resilience.",
    content: "With manufacturing facilities across India, China, Bangladesh, and Vietnam, managing a global supply chain requires sophisticated coordination and planning.\n\nIn 2026, brands face a complex landscape of geopolitical shifts, logistics disruptions, and evolving compliance requirements. The brands that thrive are those with diversified, resilient supply chains.\n\nA multi-country manufacturing strategy offers significant advantages. It reduces single-country risk, allows for category specialization by region, and provides flexibility to respond to changing tariff environments.\n\nFor example, Bangladesh remains highly competitive for basic and mid-tier woven garments, while Vietnam excels in technically complex activewear and outerwear. India offers strong capabilities in artisan craftsmanship, embroidery, and sustainable cotton products. China continues to lead in synthetic fabrics and technical textiles.\n\nNext Link Fashion's Hong Kong headquarters serves as the coordination hub, managing quality, compliance, logistics, and communication across all four manufacturing countries. This structure provides our brand partners with a single point of contact while benefiting from the full diversity of our production network.\n\nEffective supply chain management in today's environment requires real-time visibility, proactive communication, and contingency planning. Our dedicated merchandising teams ensure that every order is tracked from sampling through final delivery.",
    category: "Supply Chain",
    readTime: "6 min read",
    publishedAt: new Date("2026-02-10")
  },
  {
    id: 3,
    title: "Quality Control in International Apparel Production",
    excerpt: "Best practices for maintaining consistent quality standards across multiple manufacturing locations and partners.",
    content: "Quality control is paramount in apparel manufacturing, especially when working with multiple facilities across different countries.\n\nAt Next Link Fashion, our Quality Management System (QMS) is built on a five-stage inspection process that covers every order from raw material intake to final shipment.\n\nPre-Production: Before bulk production begins, our QC teams conduct rigorous inspection of all incoming fabrics and trims, verify pattern grading, and approve pre-production samples against the approved tech pack.\n\nIn-Line Inspections: During production, our inspectors are stationed on the factory floor to monitor stitching quality, measurement conformance, and assembly consistency in real time.\n\nMid-Production Audits: At the 30% and 60% production milestones, comprehensive audits assess workmanship, colour consistency, and compliance with buyer specifications.\n\nFinal Random Inspection (FRI): Upon completion, we conduct AQL 2.5 standard final inspections on all finished goods. This is the final gate before goods are approved for packing and shipment.\n\nAccredited Lab Testing: For compliance requirements, we partner with SGS, Bureau Veritas, and Intertek testing labs to provide OEKO-TEX, azo-free, and other chemical safety certifications.\n\nThis rigorous approach means our defect rate is consistently below 0.5%, and our on-time shipment performance exceeds 97%.",
    category: "Quality Assurance",
    readTime: "7 min read",
    publishedAt: new Date("2026-02-05")
  },
  {
    id: 4,
    title: "The Rise of Technical Fabrics in Modern Apparel",
    excerpt: "How innovative materials are changing the landscape of fashion and performance wear manufacturing.",
    content: "Technical fabrics represent one of the most exciting frontiers in modern apparel manufacturing. From moisture-wicking activewear to temperature-regulating outerwear, innovative materials are transforming what garments can do.\n\nThe global performance apparel market is projected to exceed $400 billion by 2028, driven by the athleisure trend, sports participation growth, and consumer demand for versatile garments that transition from gym to street.\n\nKey technical fabric innovations we work with include: recycled polyester from post-consumer plastic bottles, bio-based nylon derived from castor oil, aerogel-insulated outerwear for extreme temperature performance, graphene-enhanced fabrics for conductivity and heat regulation, and four-way stretch wovens for unrestrained movement.\n\nAt Next Link Fashion, our Vietnam facility has built particular expertise in technical sportswear and activewear construction. Our team includes specialized pattern makers and sewing operators trained in bonded seam construction, flatlock stitching, and laser-cut finishing.\n\nFor brands looking to enter the technical apparel space, we offer comprehensive product development services including fabric sourcing, prototype sampling, wear testing coordination, and full compliance certification for performance claims.",
    category: "Innovation",
    readTime: "5 min read",
    publishedAt: new Date("2026-01-30")
  },
  {
    id: 5,
    title: "Digital Transformation in Apparel Manufacturing",
    excerpt: "Leveraging technology and automation to streamline production processes and improve efficiency in garment manufacturing.",
    content: "The apparel industry is embracing digital transformation with AI-driven design tools, automated cutting systems, and smart inventory management.\n\nIndustry 4.0 technologies are reshaping every aspect of garment manufacturing. From 3D virtual sampling that reduces physical sample cycles by up to 60%, to AI-powered demand forecasting that minimizes overproduction, technology is creating significant competitive advantages.\n\nAt Next Link Fashion, our digital journey includes: 3D virtual prototyping using Clo3D and Browzwear, digital fabric libraries for faster material selection, automated spreading and cutting systems that reduce fabric waste by 8-12%, barcode-tracked production workflow for real-time order visibility, and digital QC reporting with photo documentation at each inspection stage.\n\nFor our brand partners, this means faster sampling cycles (our average first sample turnaround is now 14 days vs the industry standard of 21-28 days), greater accuracy in fit development, and complete transparency throughout the production process.\n\nThe brands that will lead the next decade of fashion are those investing in digital supply chain capabilities today. We are committed to continuing our technology investment to ensure our partners have access to the most efficient and transparent manufacturing partnership possible.",
    category: "Technology",
    readTime: "6 min read",
    publishedAt: new Date("2026-01-25")
  },
  {
    id: 6,
    title: "Building Strong Partnerships with Apparel Manufacturers",
    excerpt: "Key strategies for developing successful long-term relationships with manufacturing partners across Asia.",
    content: "Success in the apparel business depends heavily on strong relationships with manufacturing partners who understand your vision and quality standards.\n\nMany brands make the mistake of treating manufacturers as transactional vendors rather than strategic partners. The most successful brand-manufacturer relationships are built on transparency, shared investment in quality systems, and long-term commitment.\n\nHere are the key principles that define strong manufacturing partnerships:\n\nClear Communication: Provide detailed tech packs, clear quality standards, and realistic timelines. Ambiguity at the brief stage leads to costly sample revisions and delays.\n\nFair Commercial Terms: Manufacturers invest in dedicated capacity, skilled labor, and quality systems for their key accounts. Fair pricing that reflects true production costs enables your partner to invest in your business.\n\nConsistency and Volume Commitment: Annual volume commitments allow manufacturers to plan capacity, train specialized staff, and purchase raw materials at better prices — savings that flow back to your brand.\n\nShared Quality Standards: Invest time in aligning on quality expectations. Regular factory visits, joint QC reviews, and collaborative problem-solving build the mutual understanding that produces consistently excellent results.\n\nAt Next Link Fashion, our longest client relationships span over 10 years. We consider our brand partners as true business partners, and we invest accordingly in the people, systems, and capabilities that make those partnerships successful.",
    category: "Business Strategy",
    readTime: "8 min read",
    publishedAt: new Date("2026-01-20")
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { id } = req.query;
  const postId = parseInt(id);

  if (isNaN(postId)) {
    return res.status(400).json({ message: 'Invalid post ID' });
  }

  const post = mockBlogPosts.find(p => p.id === postId);

  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }

  res.status(200).json(post);
}

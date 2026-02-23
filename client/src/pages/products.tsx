import ladiesImg from "@assets/Photo_Ladieswear_1771833430339.avif";
import mensImg from "@/assets/images/mens-garments.jpg";
import childrensImg from "@/assets/images/childrens-garments.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Products() {
  const categories = [
    {
      id: "ladies",
      title: "Ladies' Garments",
      description: "Our extensive range of ladies' garments encompasses everything from contemporary casual wear to sophisticated formal attire. We specialize in blouses, dresses, skirts, trousers, outerwear, and knitwear, crafted with an emphasis on fit, fabric quality, and trending designs to meet the diverse needs of the modern woman.",
      image: ladiesImg,
      align: "right"
    },
    {
      id: "mens",
      title: "Men's Garments",
      description: "Nextlink Fashion offers a comprehensive collection of men's apparel, including shirts, trousers, jeans, t-shirts, polos, and jackets. We focus on combining classic elegance with modern comfort, utilizing premium fabrics and precision tailoring to produce garments that stand the test of time.",
      image: mensImg,
      align: "left"
    },
    {
      id: "childrens",
      title: "Children's Garments",
      description: "We understand the unique requirements for children's wear, prioritizing comfort, durability, and safety without compromising on playful and vibrant designs. Our range includes clothing for infants, toddlers, and juniors, ensuring high-quality, comfortable, and ethically produced garments for the youngest consumers.",
      image: childrensImg,
      align: "right"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-24">
      {/* Page Header */}
      <section className="bg-primary/5 py-24 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Our Product Categories</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Discover our comprehensive range of high-quality apparel. From elegant women's wear to durable children's clothing, we deliver excellence across every category.
          </p>
        </div>
      </section>

      {/* Categories */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-32">
        {categories.map((category, index) => (
          <div key={category.id} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center" data-testid={`category-section-${category.id}`}>
            <div className={`order-2 ${category.align === 'left' ? 'lg:order-2' : 'lg:order-1'}`}>
              <div className="relative">
                <div className={`absolute inset-0 bg-accent/10 rounded-2xl transform ${category.align === 'left' ? 'rotate-3 translate-x-4' : '-rotate-3 -translate-x-4'} -z-10`}></div>
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="rounded-2xl shadow-xl w-full object-cover aspect-[4/5] md:aspect-video lg:aspect-square border border-black/5" 
                />
              </div>
            </div>
            
            <div className={`order-1 flex flex-col justify-center ${category.align === 'left' ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2 lg:items-start lg:text-left'}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-serif font-bold text-xl mb-6">
                0{index + 1}
              </div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">{category.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
                {category.description}
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-12" data-testid={`btn-inquire-${category.id}`}>
                  Inquire About This Category
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
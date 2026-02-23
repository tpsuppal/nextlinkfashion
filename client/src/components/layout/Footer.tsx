import { Link } from "wouter";
import logoImg from "@assets/Screenshot_2026-02-23_at_7.30.41_PM_1771846243736.png";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="mb-6 flex items-center gap-3">
              <div className="bg-white rounded-xl inline-flex items-center justify-center overflow-hidden h-16 w-16">
                <img src={logoImg} alt="Nextlink Fashion" className="h-full w-full object-cover" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-accent">
                Next Link Fashion
              </span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/80 leading-relaxed font-medium">
              Headquartered in Hong Kong | Manufacturing across India, China, Bangladesh & Vietnam | GOTS | OEKO-TEX | BSCI | WRAP | ISO 14001 certified
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Quick Links</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Our Expertise</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Design & Product Development</li>
              <li>Ladies', Men's & Children's Wear</li>
              <li>Rigorous Quality Control</li>
              <li>Sustainable Production</li>
              <li>Global Logistics & Delivery</li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-serif text-lg font-semibold text-accent">Global Footprint</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li>Hong Kong (HQ)</li>
              <li>India</li>
              <li>China</li>
              <li>Bangladesh</li>
              <li>Vietnam</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Next Link Fashion. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-primary-foreground/60">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
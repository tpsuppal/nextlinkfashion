import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/image_1771847436240.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-white/80 backdrop-blur-md dark:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <img src={logoImg} alt="Nextlink Fashion" className="h-14 w-auto object-contain" style={{filter: "brightness(0) saturate(100%) invert(73%) sepia(52%) saturate(600%) hue-rotate(358deg) brightness(96%)"}} />
          <span className="font-serif text-2xl font-bold tracking-tight text-[#D4AF37]">
            Next Link Fashion
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-accent ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-primary text-white hover:bg-primary/90" data-testid="nav-contact-btn">
            Partner With Us
          </Button>
          </Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg font-medium transition-colors hover:text-accent ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 w-full bg-primary" data-testid="mobile-nav-contact-btn">
              Partner With Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

import { Link } from "wouter";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">Next Link Fashion collects information you provide directly to us, such as when you submit an inquiry through our contact form. This may include your name, company name, email address, and the details of your inquiry.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">We use the information we collect to respond to your inquiries, provide our services, communicate with you about our products and services, and improve our website. We do not sell or share your personal information with third parties for marketing purposes.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">Our website may use cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:nextlink@nextlinkhk.com" className="text-accent hover:underline">nextlink@nextlinkhk.com</a> or visit our <Link href="/contact" className="text-accent hover:underline">Contact page</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

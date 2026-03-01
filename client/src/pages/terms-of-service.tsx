import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Terms of Service</h1>
          <p className="text-xl text-muted-foreground">Last updated: January 2025</p>
        </div>
      </section>
      <section className="py-16 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">By accessing and using the Next Link Fashion website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">2. Use of Website</h2>
              <p className="text-muted-foreground leading-relaxed">This website is intended for B2B apparel buyers and brand owners seeking manufacturing and sourcing services. You agree to use the website only for lawful purposes and in a manner that does not infringe on the rights of others.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">3. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">All content on this website, including text, images, logos, and graphics, is the property of Next Link Fashion and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our prior written consent.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">4. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">Next Link Fashion shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website or the information contained herein. All business engagements are subject to separate contractual agreements.</p>
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">For questions about these Terms of Service, please contact us at <a href="mailto:nextlink@nextlinkhk.com" className="text-accent hover:underline">nextlink@nextlinkhk.com</a> or visit our <Link href="/contact" className="text-accent hover:underline">Contact page</Link>.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

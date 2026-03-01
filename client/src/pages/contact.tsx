import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    interest: "",
    message: "",
  });

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Failed to submit");
      }
      return res.json();
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you! Our team will get back to you within 24-48 hours.",
      });
      setFormData({ firstName: "", lastName: "", company: "", email: "", interest: "", message: "" });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <section className="bg-accent/10 py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-foreground mb-6">Partner With Us</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to elevate your brand with a global manufacturing partner? Reach out to our team in Hong Kong today.
          </p>
        </div>
      </section>

      <section className="py-20 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            <div className="lg:col-span-3 bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-black/5">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" value={formData.firstName} onChange={handleChange} required data-testid="input-firstname" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" value={formData.lastName} onChange={handleChange} required data-testid="input-lastname" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Your Brand Ltd." value={formData.company} onChange={handleChange} required data-testid="input-company" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" value={formData.email} onChange={handleChange} required data-testid="input-email" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">Primary Interest</Label>
                  <select id="interest" value={formData.interest} onChange={handleChange} required className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" data-testid="select-interest">
                    <option value="">Select a category...</option>
                    <option value="ladies">Ladies' Garments</option>
                    <option value="mens">Men's Garments</option>
                    <option value="childrens">Children's Garments</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message Details</Label>
                  <Textarea id="message" placeholder="Tell us about your production needs, volume, and timelines..." rows={5} value={formData.message} onChange={handleChange} required data-testid="input-message" />
                </div>
                
                <Button type="submit" disabled={mutation.isPending} className="w-full bg-primary text-white h-12 text-lg hover:bg-primary/90" data-testid="btn-submit-contact">
                  {mutation.isPending ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
            
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl shadow-lg">
                <h3 className="font-serif text-2xl font-bold mb-6 text-accent">Global Headquarters</h3>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <svg className="w-6 h-6 shrink-0 mt-1 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    <div>
                      <p className="font-bold">Next Link Fashion</p>
                      <p className="text-primary-foreground/80">Kowloon, Hong Kong</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <svg className="w-6 h-6 shrink-0 mt-1 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-primary-foreground/80"><a href="tel:+85237089460" className="text-primary-foreground/80 hover:text-white transition-colors">+852 3708 9460</a></p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <svg className="w-6 h-6 shrink-0 mt-1 text-accent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-primary-foreground/80"><a href="mailto:nextlink@nextlinkhk.com" className="text-primary-foreground/80 hover:text-white transition-colors">nextlink@nextlinkhk.com</a></p>                 </div>               </div>               <div className="flex gap-4 items-start">                 <svg className="w-6 h-6 shrink-0 mt-1 text-accent" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>                 <div>                   <p className="font-bold">WhatsApp</p>                   <a href="https://wa.me/85237089460" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-white transition-colors">+852 3708 9460</a>                 </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl border border-black/5">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">Production Facilities</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> India Factory Hub</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> China Manufacturing Center</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Bangladesh Production Base</li>
                  <li className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent"></div> Vietnam Garment Works</li>
                </ul>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

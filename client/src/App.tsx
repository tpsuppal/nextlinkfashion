import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import About from "@/pages/about";
import Products from "@/pages/products";
import Contact from "@/pages/contact";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog-post";
import PrivacyPolicy from "@/pages/privacy-policy";
import TermsOfService from "@/pages/terms-of-service";
import DesignDevelopment from "@/pages/design-development";
import Capabilities from "@/pages/capabilities";
import QualityCompliance from "@/pages/quality-compliance";

function Router() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/design-development" component={DesignDevelopment} />
          <Route path="/capabilities" component={Capabilities} />
                        <Route path="/quality-compliance" component={QualityCompliance} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:id" component={BlogPost} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms-of-service" component={TermsOfService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

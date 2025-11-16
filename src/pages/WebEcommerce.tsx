import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Globe, CheckCircle2, ShoppingCart, Smartphone, TrendingUp, Globe2 } from "lucide-react";

export default function WebEcommerce() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-2xl mb-6">
              <Globe className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Your Website Isn't Just a Brochure.<br />
              <span className="gradient-text">It's a Global Sales Engine.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stop losing customers to poorly designed websites. We build high-performance Shopify stores and custom web applications optimized for conversion, not just aesthetics.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Start Building Your Conversion Machine</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-6 text-center text-foreground">
              The Problem We Solve
            </h2>
            <Card className="p-8 bg-muted/50">
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  <strong>Your website looks nice, but it doesn't sell.</strong> Visitors land on your site, browse for 30 seconds, and leave without buying. Your checkout process is confusing. Your site is slow. You're not ranking on Google.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every day you wait is revenue you're leaving on the table. Your competitors are capturing customers that should be yours.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-4xl font-bold mb-12 text-center text-foreground">
            What's Included
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: ShoppingCart,
                title: "High-Performance Shopify Store Development",
                description: "Custom Shopify stores built for speed, conversion, and scalability. Mobile-optimized and ready to sell globally."
              },
              {
                icon: Globe,
                title: "Custom Web Application Builds",
                description: "Beyond eCommerce—we build custom web apps, portals, and platforms tailored to your unique business needs."
              },
              {
                icon: Globe2,
                title: "International eCommerce Solutions",
                description: "Multi-currency support, international shipping, and localization to sell to customers anywhere in the world."
              },
              {
                icon: TrendingUp,
                title: "Conversion Rate Optimization (CRO)",
                description: "A/B testing, heat mapping, and continuous optimization to turn more visitors into paying customers."
              }
            ].map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-secondary/10 p-3 rounded-lg flex-shrink-0">
                    <service.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center text-foreground">
              The Nexera Difference
            </h2>
            
            <div className="space-y-4">
              {[
                "Websites that load in under 2 seconds—Google and customers both love speed",
                "Mobile-first design that works flawlessly on every device",
                "SEO optimization built-in from day one for maximum visibility",
                "Seamless checkout experiences that reduce cart abandonment",
                "Analytics integration to track every sale and optimize performance",
                "Ongoing support and optimization as your business grows"
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-lg text-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 border-secondary/20">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-8 h-8 text-secondary" />
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Why Shopify?
                </h3>
              </div>
              <p className="text-lg text-foreground mb-4">
                Shopify powers over 4 million stores worldwide and processes billions in sales annually. It's the most reliable, scalable, and feature-rich eCommerce platform available.
              </p>
              <p className="text-muted-foreground">
                But out-of-the-box Shopify won't give you the competitive edge. That's where Nexera comes in—we customize, optimize, and elevate your store to deliver results that generic templates never could.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Build a Store That Sells?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book a free consultation and let's discuss your vision for a high-converting online store.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

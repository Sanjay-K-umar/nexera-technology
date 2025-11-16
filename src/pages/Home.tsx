import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { DataBackground } from "@/components/DataBackground";
import { Card } from "@/components/ui/card";
import { Database, Globe, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <DataBackground />
        
        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Stop Guessing.<br />
                <span className="gradient-text">Start Growing.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-xl">
                Nexera turns your business complexity into clarity. Your global partner for Data, Web, and Automation, based right here in the GTA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Your Free 15-Min Consultation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-full blur-3xl animate-pulse-slow" />
              <div className="relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-border">
                <div className="space-y-4">
                  {[
                    { icon: Database, text: "Custom Power BI Dashboards" },
                    { icon: Globe, text: "High-Performance Shopify Stores" },
                    { icon: Zap, text: "Automated Business Workflows" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-background/80 rounded-lg">
                      <div className="bg-secondary/10 p-2 rounded">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="font-medium text-foreground">{item.text}</span>
                      <CheckCircle2 className="w-5 h-5 text-secondary ml-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Transform Your Business
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three pillars of technology excellence to drive your growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={Database}
              title="Data & Analytics"
              description="Get clear insights from your messy data. Custom Power BI dashboards that transform spreadsheets into strategic decisions."
              link="/services/data-analytics"
            />
            <ServiceCard
              icon={Globe}
              title="Web & eCommerce"
              description="Build a Shopify store that actually converts. High-performance websites optimized for sales and international reach."
              link="/services/web-ecommerce"
            />
            <ServiceCard
              icon={Zap}
              title="Business Automation"
              description="Stop wasting time on manual tasks. Automated workflows that free your team to focus on what matters."
              link="/services/automation"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, transparent, and designed for results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Discover", description: "We learn your business & challenges" },
              { number: "02", title: "Design", description: "We build a custom solution" },
              { number: "03", title: "Deliver", description: "We implement, test, and launch" },
              { number: "04", title: "Support", description: "We're your long-term partner for growth" },
            ].map((step, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-5xl font-bold text-secondary/20 mb-4">{step.number}</div>
                <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <DataBackground />
        </div>
        
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Ready to Turn Complexity Into Clarity?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book a free 15-minute consultation and discover how we can transform your business.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

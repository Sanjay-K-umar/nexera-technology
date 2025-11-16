import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { ServiceCard } from "@/components/ServiceCard";
import { Database, Globe, Zap } from "lucide-react";

export default function Services() {
  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Three core pillars that transform businesses from overwhelmed to optimized. We don't just provide technology—we deliver strategic clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            icon={Database}
            title="Data & Analytics"
            description="Transform messy spreadsheets into strategic insights. Custom Power BI dashboards that give you clarity on your business performance."
            link="/services/data-analytics"
          />
          <ServiceCard
            icon={Globe}
            title="Web & eCommerce"
            description="Build high-converting Shopify stores and custom web applications. Your digital storefront optimized for global sales."
            link="/services/web-ecommerce"
          />
          <ServiceCard
            icon={Zap}
            title="Business Automation"
            description="Eliminate repetitive tasks and human error. Automated workflows that give you time back to focus on growth."
            link="/services/automation"
          />
        </div>

        {/* Why Choose Nexera */}
        <div className="bg-muted/30 rounded-2xl p-12 mb-16">
          <h2 className="font-heading text-3xl font-bold mb-8 text-center text-foreground">
            Why Choose Nexera?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Simplicity</div>
              <p className="text-muted-foreground">
                We make sophisticated technology simple and accessible for your team
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Transparency</div>
              <p className="text-muted-foreground">
                Clear communication, honest timelines, and no hidden costs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">Punctuality</div>
              <p className="text-muted-foreground">
                We deliver on time, every time. Your deadlines are our priority
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a free consultation and we'll help you identify the right solution.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

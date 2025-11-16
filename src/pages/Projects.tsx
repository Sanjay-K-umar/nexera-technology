import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Zap } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      icon: Zap,
      title: "Retail Automation Success",
      client: "GTA-Based Retail Brand",
      problem: "Wasting 20+ hours a week on manual order entry between Shopify, inventory, and shipping systems.",
      solution: "Built custom automation connecting Shopify directly to inventory and shipping software. Orders now flow automatically from purchase to fulfillment.",
      result: "95% reduction in manual data entry",
      metric: "$10k/month saved in labor costs",
      category: "Business Automation"
    },
    {
      id: 2,
      icon: TrendingUp,
      title: "Financial Dashboard Clarity",
      client: "Ontario Manufacturing Company",
      problem: "Executive team making decisions based on week-old Excel reports. No real-time visibility into cash flow or profitability.",
      solution: "Deployed custom Power BI dashboards integrating their ERP, accounting software, and sales data. Real-time KPIs accessible from any device.",
      result: "Real-time business intelligence",
      metric: "3-day reduction in reporting time",
      category: "Data & Analytics"
    },
    {
      id: 3,
      icon: ShoppingCart,
      title: "International eCommerce Expansion",
      client: "Canadian Wellness Brand",
      problem: "Shopify store wasn't optimized for international sales. High cart abandonment and poor mobile experience.",
      solution: "Complete Shopify store redesign with multi-currency support, international shipping optimization, and mobile-first checkout.",
      result: "180% increase in conversions",
      metric: "Expanded to 15 new countries",
      category: "Web & eCommerce"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Our Work, Your Results
          </h1>
          <p className="text-xl text-muted-foreground">
            Real businesses. Real challenges. Real results. See how we've helped companies across the GTA and beyond turn complexity into clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-secondary/10 p-4 rounded-xl flex-shrink-0">
                  <project.icon className="w-8 h-8 text-secondary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium text-secondary">{project.category}</span>
                      <h2 className="font-heading text-2xl font-bold text-foreground mt-1">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground">{project.client}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">The Problem:</h3>
                      <p className="text-muted-foreground">{project.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-2">The Nexera Solution:</h3>
                      <p className="text-muted-foreground">{project.solution}</p>
                    </div>

                    <div className="bg-secondary/5 p-6 rounded-lg border border-secondary/20">
                      <h3 className="font-semibold text-foreground mb-3">The Result:</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <div className="text-lg font-semibold text-secondary">{project.result}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-secondary rounded-full"></div>
                          <div className="text-lg font-semibold text-secondary">{project.metric}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-muted/30 rounded-2xl p-12">
          <h2 className="font-heading text-3xl font-bold mb-4 text-foreground">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            These results aren't special—they're what happens when you have the right technology partner. Let's discuss your project.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

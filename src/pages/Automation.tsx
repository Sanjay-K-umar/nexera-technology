import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Zap, CheckCircle2, Clock, Repeat, Link2, Workflow } from "lucide-react";

export default function Automation() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-2xl mb-6">
              <Zap className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Get Your Time Back.<br />
              <span className="gradient-text">Automate Everything Else.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stop wasting hours on repetitive tasks. We build intelligent automation workflows that eliminate manual work, reduce errors, and free your team to focus on growth.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Automate Your First Process</Link>
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
                  <strong>Your team is drowning in busy work.</strong> Someone's manually entering orders. Another person is copying data between systems. Someone else is sending the same emails over and over. Invoices are getting lost. Nothing talks to anything else.
                </p>
                <p className="text-lg text-muted-foreground">
                  These aren't just annoyances—they're expensive. Every hour spent on manual tasks is an hour not spent growing your business. And human error? It's costing you money and frustrating your customers.
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
                icon: Repeat,
                title: "Workflow Automation",
                description: "Automate invoicing, customer onboarding, order processing, and any repetitive business process that's eating your time."
              },
              {
                icon: Link2,
                title: "CRM & Software Integration",
                description: "Connect your tools so they talk to each other. No more manual data entry between platforms."
              },
              {
                icon: Workflow,
                title: "Automated Inventory & Order Management",
                description: "Real-time inventory updates, automated order routing, and seamless fulfillment processes."
              },
              {
                icon: Clock,
                title: "Custom Process Automation Tools",
                description: "Have a unique workflow? We build custom automation solutions tailored specifically to your business."
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
                "Save 10-40 hours per week on manual, repetitive tasks",
                "Eliminate human error and costly mistakes",
                "Scale operations without hiring more staff",
                "Improve customer satisfaction with faster response times",
                "Get real-time notifications when something needs attention",
                "Gain visibility into every step of your business processes"
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

      {/* Real-World Example */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-8 text-center text-foreground">
              Real-World Impact
            </h2>
            <Card className="p-8">
              <div className="space-y-4">
                <p className="text-lg text-foreground">
                  <strong>Client:</strong> GTA-Based Retail Brand
                </p>
                <p className="text-lg text-foreground">
                  <strong>The Problem:</strong> They were wasting 20+ hours a week manually entering orders from their Shopify store into their inventory system and shipping software.
                </p>
                <p className="text-lg text-foreground">
                  <strong>The Nexera Solution:</strong> We built a custom automation that connected their Shopify store directly to their inventory and shipping software. When an order comes in, it's automatically logged, inventory is updated, and shipping labels are generated.
                </p>
                <div className="bg-secondary/10 p-6 rounded-lg mt-6">
                  <p className="text-2xl font-bold text-secondary mb-2">95% reduction in manual data entry</p>
                  <p className="text-muted-foreground">Saving $10k/month in labor costs and virtually eliminating order errors</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book a free consultation and we'll identify the processes costing you the most time and money.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

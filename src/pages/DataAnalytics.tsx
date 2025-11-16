import { Link } from "react-router-dom";
import { Button } from "@/components/Button";
import { Card } from "@/components/ui/card";
import { Database, CheckCircle2, TrendingUp, BarChart3, FileSpreadsheet, Database as DatabaseIcon } from "lucide-react";

export default function DataAnalytics() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-secondary/10 rounded-2xl mb-6">
              <Database className="w-10 h-10 text-secondary" />
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Clarity is Your Greatest Asset
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Stop making decisions based on gut feeling and messy spreadsheets. Get real-time insights with custom Power BI dashboards that transform your data into strategic clarity.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get a Dashboard, Get Clarity</Link>
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
                  <strong>You're drowning in data but starving for insights.</strong> Your team spends hours creating reports manually. Your spreadsheets are a mess of formulas that break when anyone touches them. You're making million-dollar decisions based on incomplete information.
                </p>
                <p className="text-lg text-muted-foreground">
                  Meanwhile, your competitors are using real-time dashboards to spot trends, optimize operations, and grow faster than you.
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
                icon: TrendingUp,
                title: "Custom Power BI Dashboards",
                description: "Beautiful, interactive dashboards tailored to your business KPIs and decision-making needs"
              },
              {
                icon: FileSpreadsheet,
                title: "Automated Financial Reporting",
                description: "Stop spending hours on monthly reports. Get automated P&L statements, cash flow analysis, and budget tracking"
              },
              {
                icon: BarChart3,
                title: "Sales & Customer Data Analysis",
                description: "Understand your best customers, identify trends, and forecast future revenue with confidence"
              },
              {
                icon: DatabaseIcon,
                title: "CRM Data Integration",
                description: "Connect your CRM, accounting software, and spreadsheets into one unified view of your business"
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
                "Make data-driven decisions in minutes, not days",
                "Identify profit leaks and opportunities you're currently missing",
                "Impress investors and stakeholders with professional reporting",
                "Save 10-20 hours per week on manual data entry and reporting",
                "Access your business metrics from anywhere, on any device"
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

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Ready to See Your Data Clearly?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Book a free 15-minute consultation to discuss your data challenges and see how Power BI can transform your business.
          </p>
          <Button variant="hero" size="lg" asChild className="bg-secondary hover:bg-secondary/90">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}

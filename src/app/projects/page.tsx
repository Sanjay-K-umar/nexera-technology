import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, ShoppingCart, Zap, ArrowRight, FileSpreadsheet, BarChart3, Clock, DollarSign, ExternalLink } from "lucide-react";
import { LeadMagnet } from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "Case Studies & Success Stories | Excel, Power BI & Shopify Projects Ontario",
  description: "See how Nexera Technology has helped GTA businesses achieve real results. Detailed case studies in Excel automation, Power BI dashboards, and Shopify development.",
  keywords: [
    'Excel automation case study', 'Power BI dashboard case study Ontario',
    'Shopify success story Canada', 'business automation results GTA',
    'data analytics case study Toronto', 'Mississauga business success'
  ],
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  // Featured detailed case studies (with dedicated pages)
  const featuredCaseStudies = [
    {
      slug: "excel-automation-mississauga-retailer",
      title: "How We Saved a Mississauga Retailer 10+ Hours/Week with Excel Automation",
      client: "Multi-Location Retail Business",
      location: "Mississauga, ON",
      icon: FileSpreadsheet,
      color: "green",
      results: ["10+ hours saved weekly", "$2,400/month value", "Zero errors"],
      category: "Excel Automation"
    },
    {
      slug: "power-bi-dashboard-gta-restaurant",
      title: "GTA Restaurant Optimizes Delivery Performance with Power BI",
      client: "Restaurant & Delivery Business",
      location: "Greater Toronto Area",
      icon: BarChart3,
      color: "blue",
      results: ["23% faster delivery", "15% fewer refunds", "4.9 Google rating"],
      category: "Power BI Dashboard"
    },
    {
      slug: "shopify-ecommerce-brampton",
      title: "From Market Stall to $15K/Month: Brampton Shopify Success",
      client: "Handmade Fashion Brand",
      location: "Brampton, ON",
      icon: ShoppingCart,
      color: "purple",
      results: ["340% revenue growth", "$15K+ monthly", "2,000+ customers"],
      category: "Shopify Development"
    }
  ];

  // Quick overview projects (without dedicated pages)
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
      problem: "Shopify store wasn&apos;t optimized for international sales. High cart abandonment and poor mobile experience.",
      solution: "Complete Shopify store redesign with multi-currency support, international shipping optimization, and mobile-first checkout.",
      result: "180% increase in conversions",
      metric: "Expanded to 15 new countries",
      category: "Web & eCommerce"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Case Studies & Success Stories
          </h1>
          <p className="text-xl text-gray-600">
            Real businesses. Real challenges. Real results. See how we&apos;ve helped companies across the GTA and Ontario turn complexity into clarity.
          </p>
        </div>

        {/* Featured Case Studies with Dedicated Pages */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Case Studies</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {featuredCaseStudies.map((study) => (
              <Link key={study.slug} href={`/projects/${study.slug}`}>
                <Card className="p-6 h-full hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary">
                  <div className={`bg-${study.color}-100 p-3 rounded-lg w-fit mb-4`}>
                    <study.icon className={`h-6 w-6 text-${study.color}-600`} />
                  </div>
                  <span className="text-sm font-medium text-primary">{study.category}</span>
                  <h3 className="font-bold text-lg mt-1 mb-2 line-clamp-2">{study.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{study.client} • {study.location}</p>
                  <div className="space-y-2 mb-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 bg-${study.color}-600 rounded-full`}></div>
                        <span className="font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold text-sm">
                    Read Full Case Study <ExternalLink className="h-3 w-3" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Lead Magnet */}
        <div className="max-w-md mx-auto mb-16">
          <LeadMagnet />
        </div>

        {/* Quick Overview Projects */}
        <h2 className="text-2xl font-bold mb-8 text-center">More Success Stories</h2>
        <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-6">
                <div className="bg-blue-100 p-4 rounded-xl flex-shrink-0">
                  <project.icon className="w-8 h-8 text-blue-600" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-sm font-medium text-blue-600">{project.category}</span>
                      <h2 className="text-2xl font-bold mt-1">
                        {project.title}
                      </h2>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">The Problem:</h3>
                      <p className="text-gray-600">{project.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">The Nexera Solution:</h3>
                      <p className="text-gray-600">{project.solution}</p>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h3 className="font-semibold mb-3">The Result:</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <div className="text-lg font-semibold text-blue-600">{project.result}</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <div className="text-lg font-semibold text-blue-600">{project.metric}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center bg-gradient-to-br from-primary to-blue-900 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Your Success Story Could Be Next
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Book a free consultation and let&apos;s discuss how we can help your business grow.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

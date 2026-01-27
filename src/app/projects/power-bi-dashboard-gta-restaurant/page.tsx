import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, DollarSign, TrendingUp, CheckCircle2, BarChart3, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: Power BI Dashboard Helps GTA Restaurant Track Delivery Performance",
  description: "See how Nexera built a custom Power BI dashboard for a GTA restaurant to track delivery times, driver performance, and customer satisfaction across the Greater Toronto Area.",
  keywords: [
    'Power BI dashboard case study', 'restaurant analytics GTA', 'delivery tracking dashboard',
    'Power BI consultant Toronto', 'restaurant business intelligence', 'data visualization Mississauga',
    'custom dashboard development Ontario', 'small business analytics'
  ],
  alternates: {
    canonical: "/projects/power-bi-dashboard-gta-restaurant",
  },
  openGraph: {
    title: "Case Study: GTA Restaurant Optimizes Delivery with Power BI Dashboard",
    description: "How we helped a local restaurant track delivery times across the GTA and improve customer satisfaction.",
    url: "/projects/power-bi-dashboard-gta-restaurant",
    type: "article",
  },
};

export default function CaseStudyPowerBIRestaurant() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/projects" className="hover:text-primary">Projects</Link>
              <span>/</span>
              <span>Case Study</span>
            </div>
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-800 font-semibold mb-6">
              Power BI Dashboard • Restaurant/Delivery
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How a GTA Restaurant Used Power BI to Track Delivery Times and Boost Customer Satisfaction
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A fast-growing restaurant with delivery across the Greater Toronto Area had no visibility into their delivery performance. They were losing customers to complaints about late deliveries—but didn&apos;t know which drivers or areas were causing the problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Eye className="h-5 w-5 text-primary" />
                <span className="font-semibold">100% delivery visibility</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="font-semibold">23% faster delivery times</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <DollarSign className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">15% fewer refunds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The Challenge</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                <strong>The Client:</strong> A popular restaurant in the GTA specializing in Mediterranean cuisine. They had expanded from dine-in only to offering delivery across Mississauga, Brampton, Toronto, and surrounding areas. With 8 delivery drivers and over 200 deliveries per week, they were growing fast.
              </p>
              
              <p>
                <strong>The Problem:</strong> Growth was causing chaos. Customer complaints about late deliveries were increasing. The owner suspected certain drivers were slower than others, and certain areas (like downtown Toronto during rush hour) were problematic—but they had no data to prove it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #1: No Performance Data</h3>
                <p className="text-gray-600">
                  Delivery times were logged in a simple spreadsheet—when they were logged at all. There was no way to see trends, identify problem areas, or compare driver performance.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #2: Reactive, Not Proactive</h3>
                <p className="text-gray-600">
                  The only way they learned about delivery problems was through angry customer calls. By then, the damage was done—refunds issued, reviews posted, customers lost.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #3: Driver Accountability</h3>
                <p className="text-gray-600">
                  Some drivers seemed slower than others, but without data, the owner couldn&apos;t address performance issues or reward top performers fairly.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #4: Zone Optimization</h3>
                <p className="text-gray-600">
                  They didn&apos;t know which delivery zones were profitable. Some areas might be too far to serve efficiently, but they had no data to make that decision.
                </p>
              </Card>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-700 mb-2">
                &ldquo;I knew we had problems, but I was flying blind. Every decision was a guess. I needed to see what was actually happening with our deliveries across the GTA.&rdquo;
              </p>
              <cite className="text-gray-600">— Restaurant Owner, Mississauga</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution: A Custom Power BI Dashboard</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                We built a comprehensive Power BI dashboard that connected to their POS system and delivery tracking app. The dashboard gave them real-time visibility into every aspect of their delivery operations—broken down by driver, zone, time of day, and day of week.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Delivery Performance Overview</h3>
                    <p className="text-gray-600 mb-4">
                      A main dashboard showing total deliveries, average delivery time, on-time percentage, and customer satisfaction scores—all updating in real-time. The owner can see at a glance how today is going compared to last week.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Instant visibility into daily operations</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">GTA Zone Analysis</h3>
                    <p className="text-gray-600 mb-4">
                      A map visualization showing delivery times by area across the GTA. Color-coded zones reveal which neighborhoods are fastest to serve and which are problematic. Drill down to see specific addresses and their delivery history.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Identified 3 zones to stop serving (too far, not profitable)</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Driver Performance Scorecard</h3>
                    <p className="text-gray-600 mb-4">
                      Individual driver reports showing average delivery time, on-time percentage, customer ratings, and comparison to team average. Fair, data-driven performance reviews became possible.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Top performers identified and rewarded</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Time-of-Day Heatmap</h3>
                    <p className="text-gray-600 mb-4">
                      A visualization showing delivery times by hour and day of week. This revealed that Friday 6-8 PM was their worst window—too many orders, not enough drivers. They adjusted staffing accordingly.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Optimized driver scheduling for peak times</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Results (After 3 Months)</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">23%</div>
                <p className="text-lg">Faster average delivery time</p>
              </Card>
              
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">15%</div>
                <p className="text-lg">Reduction in refunds/complaints</p>
              </Card>
              
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">4.6→4.9</div>
                <p className="text-lg">Google review rating increase</p>
              </Card>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Key Decisions Enabled by the Dashboard:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Stopped serving 3 distant zones that had 45+ minute delivery times (redirected those customers to skip-the-dishes)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Added a driver specifically for Friday/Saturday evenings based on the heatmap data</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Identified and addressed performance issues with one underperforming driver (who improved significantly after seeing the data)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Started a &ldquo;Driver of the Month&rdquo; program using objective performance data</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-white pl-6 py-4 bg-white/10 rounded-r-lg">
              <p className="text-xl italic mb-2">
                &ldquo;For the first time, I can see my entire delivery operation in one screen. No more guessing. The dashboard literally pays for itself every month in saved refunds alone.&rdquo;
              </p>
              <cite className="text-blue-200">— Restaurant Owner, Mississauga</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Timeline & Investment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Project Timeline & Investment</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Timeline</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 1:</strong> Discovery & data audit</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 2:</strong> Dashboard design & mockups</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 3-4:</strong> Development & data connection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 5:</strong> Training & launch</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">ROI Summary</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Project investment:</span>
                    <span className="font-bold">$3,800</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Monthly refund savings:</span>
                    <span className="font-bold">~$600</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Estimated revenue from better reviews:</span>
                    <span className="font-bold">~$1,200/mo</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span>Payback period:</span>
                    <span className="font-bold text-primary">~2 months</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to See Your Business This Clearly?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Book a free 30-minute consultation. We&apos;ll discuss your data challenges and show you what a custom Power BI dashboard could reveal about your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/contact" className="flex items-center">
                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/services/power-bi-dashboards">
                Learn More About Power BI Services
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How a GTA Restaurant Used Power BI to Track Delivery Times",
            "description": "A case study on building a Power BI dashboard for delivery tracking across the Greater Toronto Area.",
            "author": {
              "@type": "Organization",
              "name": "Nexera Technology and Consultancy"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Nexera Technology and Consultancy",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "addressCountry": "CA"
              }
            },
            "about": {
              "@type": "Service",
              "name": "Power BI Dashboard Services",
              "areaServed": ["Mississauga", "Toronto", "Brampton", "GTA", "Ontario"]
            }
          }),
        }}
      />
    </div>
  );
}

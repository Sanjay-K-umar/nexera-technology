import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, HelpCircle, Phone, BarChart3, Building2, TrendingUp, Eye, Users, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Power BI Consultant Near Me | Dashboards Mississauga, Toronto, GTA | Hire Expert",
  description: "Need a Power BI consultant? Hire a local Power BI expert in Mississauga for custom dashboards, reports, and data visualization. Serving Toronto & GTA businesses. Free consultation!",
  keywords: [
    'Power BI consultant near me', 'Power BI expert near me', 'hire Power BI developer',
    'Power BI dashboard', 'Power BI help', 'Power BI consultant Mississauga',
    'Power BI developer Toronto', 'Power BI services GTA', 'custom Power BI dashboard',
    'business intelligence consultant', 'data visualization expert Ontario',
    'Power BI report builder', 'Power BI training', 'Power BI cost'
  ],
  alternates: {
    canonical: "/power-bi-consultant",
  },
  openGraph: {
    title: "Need a Power BI Consultant? Local Expert in Mississauga & GTA",
    description: "Custom Power BI dashboards and data visualization for Ontario businesses. Free consultation.",
    url: "/power-bi-consultant",
  },
};

export default function PowerBIConsultantPage() {
  const dashboardTypes = [
    {
      icon: DollarSign,
      title: "Sales & Revenue Dashboard",
      description: "See your sales performance in real-time. Track revenue, top products, sales by region, and trends over time.",
      features: ["Revenue tracking", "Product performance", "Sales team metrics", "Forecasting"],
      bestFor: "Retail, eCommerce, B2B Sales"
    },
    {
      icon: Building2,
      title: "Executive KPI Dashboard",
      description: "One-page view of your entire business. All the metrics your leadership team needs at a glance.",
      features: ["Key metrics summary", "Department comparisons", "Goal tracking", "Trend analysis"],
      bestFor: "Business Owners, Executives, Managers"
    },
    {
      icon: Users,
      title: "Operations Dashboard",
      description: "Track inventory, delivery times, resource utilization, and operational efficiency in real-time.",
      features: ["Inventory levels", "Process efficiency", "Resource tracking", "Bottleneck detection"],
      bestFor: "Manufacturing, Logistics, Service Businesses"
    },
    {
      icon: TrendingUp,
      title: "Marketing Analytics Dashboard",
      description: "Understand what's working. Track campaigns, customer acquisition costs, and marketing ROI.",
      features: ["Campaign performance", "Customer acquisition", "Channel comparison", "ROI tracking"],
      bestFor: "Marketing Teams, Agencies, eCommerce"
    }
  ];

  const faqs = [
    {
      q: "What is Power BI and do I need it?",
      a: "Power BI turns your business data into visual dashboards you can actually understand. If you're spending hours making reports in Excel, or you can't easily answer 'how's the business doing?' - you probably need it."
    },
    {
      q: "How much does a Power BI dashboard cost?",
      a: "Simple dashboards start around $1,500. More complex projects with multiple data sources typically range from $3,000-$8,000. I provide a detailed quote after understanding your needs."
    },
    {
      q: "I don't have Power BI. What do I need?",
      a: "You'll need a Power BI Pro license ($10/user/month) or Premium. I'll help you figure out which option makes sense and can include setup in the project."
    },
    {
      q: "What data can you connect to Power BI?",
      a: "Almost anything! Excel, Google Sheets, QuickBooks, Shopify, SQL databases, Salesforce, Google Analytics, and hundreds more. If you have the data, we can visualize it."
    },
    {
      q: "How long does it take to build a dashboard?",
      a: "Typically 2-4 weeks depending on complexity. Simple dashboards can be done in a week. Complex multi-source projects take longer."
    },
    {
      q: "Will you teach me how to use it?",
      a: "Absolutely! Every project includes training so you can read, filter, and navigate your dashboards confidently. I also teach you how to make basic modifications."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <BarChart3 className="h-5 w-5" />
              <span className="font-medium">Microsoft Power BI Expert</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Power BI Consultant? Get Dashboards That Actually Help You Decide.
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Local Power BI expert in Mississauga helping Ontario businesses see their data clearly. Stop guessing - start knowing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Dashboard Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects/power-bi-dashboard-gta-restaurant">See Example Dashboard</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Tired of Spreadsheet Chaos?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <p className="text-gray-600">Spending hours every week making the same reports</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <p className="text-gray-600">Can't answer simple business questions quickly</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <p className="text-gray-600">Data lives in 5 different places that don't talk to each other</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 text-sm">✗</span>
                    </div>
                    <p className="text-gray-600">Making decisions based on gut feeling, not data</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6">A Power BI Dashboard Fixes This</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Reports update automatically - no more manual work</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Answer any question in seconds with interactive filters</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">All your data sources combined into one view</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">Make confident decisions backed by real numbers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Dashboards I Build</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Every dashboard is custom-built for your specific business needs. Here are some common types:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {dashboardTypes.map((dash, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <dash.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{dash.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{dash.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {dash.features.map((feature, i) => (
                        <span key={i} className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-500">
                    <strong>Best for:</strong> {dash.bestFor}
                  </p>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Need something different? Let's talk about what you need.</p>
              <Button asChild variant="outline">
                <Link href="/contact">Describe Your Dashboard Needs</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How We Work Together</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Discovery Call (Free)</h3>
                  <p className="text-gray-600">We discuss what questions you want to answer, what data you have, and what decisions you need to make. I&apos;ll tell you if Power BI is the right solution.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Data Audit & Design</h3>
                  <p className="text-gray-600">I review your data sources, design the dashboard layout, and show you a mockup before we build anything. You approve the design before work begins.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Build & Iterate</h3>
                  <p className="text-gray-600">I build the dashboard, connecting your data sources and creating the visualizations. You see progress weekly and can request changes.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Training & Launch</h3>
                  <p className="text-gray-600">I train you and your team on using the dashboard. You&apos;ll know how to read it, filter data, and answer your own questions confidently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Power BI Questions Answered</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                    {faq.q}
                  </h3>
                  <p className="text-gray-600 ml-7">{faq.a}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to See Your Business Clearly?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. I&apos;ll learn about your data challenges and show you what a dashboard could do for you.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Power BI Consulting & Dashboard Services",
            "description": "Custom Power BI dashboard development and business intelligence consulting.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Nexera Technology and Consultancy",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mississauga",
                "addressRegion": "ON",
                "addressCountry": "CA"
              }
            },
            "areaServed": ["Mississauga", "Toronto", "Brampton", "Oakville", "GTA", "Ontario"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Power BI Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Basic Power BI Dashboard"}, "price": "1500", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Power BI Dashboard"}, "price": "3000", "priceCurrency": "CAD"}
              ]
            }
          }),
        }}
      />
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, FileSpreadsheet, Clock, DollarSign, HelpCircle, Zap, AlertTriangle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Excel Help Near Me | Fix Excel Fast | Mississauga, Toronto, GTA | Same Day",
  description: "Excel not working? Get instant Excel help from a local expert! Fix formulas, VBA errors, slow files, corrupted spreadsheets. Same-day service in Mississauga, Toronto & GTA. From $75.",
  keywords: [
    // Near Me (Highest Priority)
    'Excel help near me', 'Excel expert near me', 'Excel consultant near me', 'spreadsheet help near me',
    // Problem-Based (High Intent)
    'fix Excel spreadsheet', 'Excel formula not working', 'Excel file corrupted', 'Excel running slow',
    'VBA macro error', 'Excel crashing', 'Excel formulas broken', 'fix slow Excel',
    // Location-Based
    'Excel help Mississauga', 'Excel consultant Toronto', 'Excel expert GTA', 'Excel fix Brampton',
    // Service-Based
    'Excel repair service', 'Excel troubleshooting', 'Excel data recovery', 'Excel template creation'
  ],
  alternates: {
    canonical: "/excel-help",
  },
  openGraph: {
    title: "Need Excel Help? Local Expert Available Today | From $75",
    description: "Quick Excel fixes - formulas, VBA, slow files. Same-day service in Mississauga, Toronto & GTA.",
    url: "/excel-help",
  },
};

export default function ExcelHelpPage() {
  const commonProblems = [
    {
      problem: "Excel formulas not working or showing errors",
      solution: "Formula audit and fix - usually 30 minutes",
      price: "From $75"
    },
    {
      problem: "Spreadsheet is extremely slow or crashing",
      solution: "File optimization and cleanup",
      price: "From $150"
    },
    {
      problem: "VBA macro stopped working or has errors",
      solution: "Debug and repair macro code",
      price: "From $100"
    },
    {
      problem: "Need to combine data from multiple files",
      solution: "Data consolidation and automation",
      price: "From $200"
    },
    {
      problem: "Excel file corrupted or won't open",
      solution: "File recovery and data extraction",
      price: "From $100"
    },
    {
      problem: "Need a custom report or template",
      solution: "Custom Excel solution built for you",
      price: "From $300"
    }
  ];

  const faqs = [
    {
      q: "How fast can you help with my Excel problem?",
      a: "For urgent issues, I offer same-day service. Most problems can be diagnosed within 30 minutes of our call. Simple fixes are often done within hours."
    },
    {
      q: "Do you work remotely or come to my location?",
      a: "Both! Most Excel problems can be solved remotely via screen share - it's faster and cheaper for you. For complex projects or training, I can come to your Mississauga, Toronto, or GTA location."
    },
    {
      q: "How much does Excel help cost?",
      a: "It depends on the complexity. Simple formula fixes start at $75. Most projects fall between $100-$500. I always provide a free quote before starting any work."
    },
    {
      q: "Can you help with Google Sheets too?",
      a: "Yes! I work with both Excel and Google Sheets. The skills transfer well, and I can even help you migrate between them."
    },
    {
      q: "What if my problem is really complex?",
      a: "I love complex problems! If your spreadsheet needs serious work - like building a whole inventory system or automating your entire reporting process - that's my specialty. Let's talk about what you need."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero - Urgent Help Style */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Clock className="h-5 w-5" />
              <span className="font-medium">Same-Day Excel Help Available</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excel Problems? Get Expert Help Today.
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Local Excel expert in Mississauga serving the entire GTA. Whether your formulas are broken, your file is slow, or you need something custom built - I can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold text-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Help Now - Free Quote
                </Link>
              </Button>
            </div>
            <p className="text-green-200 mt-4 text-sm">Usually respond within 1 hour during business hours</p>
          </div>
        </div>
      </section>

      {/* Common Problems I Fix */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Common Excel Problems I Fix</h2>
            <p className="text-gray-600 text-center mb-12">
              Tell me what's wrong - I've probably fixed it hundreds of times before.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {commonProblems.map((item, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold mb-2">{item.problem}</h3>
                      <p className="text-gray-600 text-sm mb-3">{item.solution}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-semibold">{item.price}</span>
                        <Link href="/contact" className="text-primary text-sm hover:underline flex items-center">
                          Get Quote <ArrowRight className="h-3 w-3 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-600 mb-4">Don't see your problem listed?</p>
              <Button asChild variant="outline">
                <Link href="/contact">Describe Your Issue - I'll Help</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Call Me Instead of Googling for Hours?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Save Hours of Frustration</h3>
                <p className="text-gray-600">
                  What takes you 4 hours of YouTube tutorials, I fix in 30 minutes. Your time is worth more than that.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Actually Fixed, Not Band-Aided</h3>
                <p className="text-gray-600">
                  I don't just make it work - I fix the root cause so the problem doesn't come back tomorrow.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Learn While I Fix</h3>
                <p className="text-gray-600">
                  I explain what I'm doing so you understand your spreadsheet better. No black box magic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
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
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Fix Your Excel Problem?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Send me a message describing your issue. I'll get back to you within an hour with a free quote.
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Get Free Quote Now <ArrowRight className="ml-2 h-5 w-5" />
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
            "name": "Excel Help & Support Services",
            "description": "Expert Excel help for formula fixes, VBA debugging, file optimization, and custom spreadsheet solutions.",
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
              "name": "Excel Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Excel Formula Fix"}, "price": "75", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Excel File Optimization"}, "price": "150", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "VBA Macro Repair"}, "price": "100", "priceCurrency": "CAD"}
              ]
            }
          }),
        }}
      />
    </div>
  );
}

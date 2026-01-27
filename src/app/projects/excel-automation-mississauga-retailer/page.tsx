import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, DollarSign, TrendingUp, CheckCircle2, FileSpreadsheet, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: How We Saved a Mississauga Retailer 10+ Hours/Week with Excel Automation",
  description: "Learn how Nexera helped a Mississauga retail business automate their inventory tracking and reporting, saving them over 10 hours of manual Excel work every week. Real results, real ROI.",
  keywords: [
    'Excel automation case study', 'Mississauga business automation', 'retail Excel automation',
    'inventory tracking automation', 'Excel consultant Mississauga', 'small business automation GTA',
    'VBA macros retail', 'Excel reporting automation Ontario'
  ],
  alternates: {
    canonical: "/projects/excel-automation-mississauga-retailer",
  },
  openGraph: {
    title: "Case Study: Mississauga Retailer Saves 10+ Hours/Week with Excel Automation",
    description: "How we helped a local retail business automate their spreadsheets and reclaim their time.",
    url: "/projects/excel-automation-mississauga-retailer",
    type: "article",
  },
};

export default function CaseStudyExcelRetailer() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/projects" className="hover:text-primary">Projects</Link>
              <span>/</span>
              <span>Case Study</span>
            </div>
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full text-green-800 font-semibold mb-6">
              Excel Automation • Retail
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              How We Saved a Mississauga Retailer 10+ Hours Every Week with Excel Automation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A local retail business was drowning in spreadsheets. Their inventory tracking, sales reporting, and supplier ordering consumed over 12 hours of manual work every week. Here&apos;s how we fixed it.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Clock className="h-5 w-5 text-primary" />
                <span className="font-semibold">10+ hours saved weekly</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span className="font-semibold">$26,000+ annual savings</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">ROI in 8 weeks</span>
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
                <strong>The Client:</strong> A family-owned retail store in Mississauga with 15 years in business, selling home goods and seasonal products across the GTA. They had grown from a single location to managing inventory across two stores and an online presence.
              </p>
              
              <p>
                <strong>The Problem:</strong> Success brought complexity. What started as a simple Excel file for tracking inventory had grown into a monster—17 interconnected spreadsheets with over 3,000 SKUs, multiple suppliers, and seasonal demand fluctuations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #1: Weekly Inventory Count</h3>
                <p className="text-gray-600">
                  Every Monday, the owner spent 4+ hours manually updating inventory counts from both stores into a master spreadsheet. Errors were common, and stock discrepancies cost them sales.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #2: Supplier Ordering</h3>
                <p className="text-gray-600">
                  Determining what to reorder meant checking stock levels across multiple files, comparing to sales velocity, and manually creating purchase orders. This took 3+ hours every week.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #3: Sales Reporting</h3>
                <p className="text-gray-600">
                  Monthly sales reports for the accountant required exporting data from POS, cleaning it in Excel, categorizing by department, and creating summaries. A full day&apos;s work, done every month.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #4: Broken Formulas</h3>
                <p className="text-gray-600">
                  Years of copy-pasting had created formula errors throughout the spreadsheets. The owner didn&apos;t trust the numbers anymore and was making decisions based on gut feeling.
                </p>
              </Card>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-700 mb-2">
                &ldquo;I was spending my Sundays doing data entry instead of being with my family. I knew there had to be a better way, but I didn&apos;t know where to start.&rdquo;
              </p>
              <cite className="text-gray-600">— Store Owner, Mississauga</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                After our free Excel audit, we identified the core issues and proposed a phased automation approach. The goal: transform 12+ hours of manual work into 30 minutes of oversight.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Consolidated Master Inventory System</h3>
                    <p className="text-gray-600 mb-4">
                      We rebuilt their inventory tracking from the ground up. One master file with proper data validation, automatic calculations, and clear categorization. Connected to their POS system via automated data imports.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Eliminated manual inventory updates</span>
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
                    <h3 className="text-xl font-bold mb-2">Smart Reorder Alert System</h3>
                    <p className="text-gray-600 mb-4">
                      We built a VBA-powered system that analyzes sales velocity, current stock, and lead times to automatically flag items that need reordering. One-click generates purchase orders formatted for each supplier.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Reduced stockouts by 80%</span>
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
                    <h3 className="text-xl font-bold mb-2">Automated Sales Reporting</h3>
                    <p className="text-gray-600 mb-4">
                      Monthly reports now generate automatically. Click one button and get a complete sales analysis by department, product category, and profit margin—formatted and ready for the accountant.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">8 hours of monthly reporting → 5 minutes</span>
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
                    <h3 className="text-xl font-bold mb-2">Error-Proof Data Validation</h3>
                    <p className="text-gray-600 mb-4">
                      We implemented data validation rules throughout the system. Dropdown menus for product categories, automatic formatting, and formula protection ensure data stays clean and accurate.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Data errors reduced to near zero</span>
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
            <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <Clock className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">12 → 1.5</div>
                <p className="text-lg">Hours per week on spreadsheets</p>
              </Card>
              
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">$26K+</div>
                <p className="text-lg">Annual time savings (at $50/hr)</p>
              </Card>
              
              <Card className="p-8 bg-white/10 border-white/20 text-center">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
                <div className="text-5xl font-bold mb-2">80%</div>
                <p className="text-lg">Reduction in stockouts</p>
              </Card>
            </div>

            <blockquote className="border-l-4 border-white pl-6 py-4 bg-white/10 rounded-r-lg">
              <p className="text-xl italic mb-2">
                &ldquo;I got my weekends back. The automation paid for itself in less than two months. Now I actually enjoy looking at my numbers because I can trust them.&rdquo;
              </p>
              <cite className="text-blue-200">— Store Owner, Mississauga</cite>
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
                    <span><strong>Week 1:</strong> Audit & planning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 2-3:</strong> System development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 4:</strong> Testing & training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span><strong>Week 5+:</strong> Support & refinement</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">ROI Breakdown</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Project investment:</span>
                    <span className="font-bold">$4,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Weekly time savings:</span>
                    <span className="font-bold">10.5 hours</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Annual savings (at $50/hr):</span>
                    <span className="font-bold text-green-600">$27,300</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span>Payback period:</span>
                    <span className="font-bold text-primary">8 weeks</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Is Excel Eating Your Time Too?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Get a free Excel audit and see exactly how much time (and money) you could save with automation. No commitment required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/contact" className="flex items-center">
                Get Your Free Excel Audit <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
              <Link href="/services/excel-automation">
                Learn More About Our Services
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
            "headline": "How We Saved a Mississauga Retailer 10+ Hours/Week with Excel Automation",
            "description": "A case study on automating Excel spreadsheets for a retail business in Mississauga, Ontario.",
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
              "name": "Excel Automation Services",
              "areaServed": ["Mississauga", "GTA", "Ontario"]
            }
          }),
        }}
      />
    </div>
  );
}

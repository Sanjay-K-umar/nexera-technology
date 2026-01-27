import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, HelpCircle, Phone, Database, FileSpreadsheet, Zap, AlertTriangle, Trash2, RefreshCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Cleanup Services | Fix Messy Data Mississauga, Toronto, GTA | Excel, CSV, Database",
  description: "Need help cleaning up messy data? Local data cleanup expert in Mississauga. Fix duplicates, formatting issues, merge files, and organize your data. Excel, CSV, database cleanup. Free quote!",
  keywords: [
    'data cleanup services', 'data cleaning near me', 'fix messy data',
    'Excel data cleanup', 'remove duplicates Excel', 'data formatting help',
    'merge Excel files', 'data quality services', 'clean up spreadsheet',
    'data consultant Mississauga', 'data cleanup Toronto', 'fix database GTA',
    'messy spreadsheet fix', 'data migration help', 'CSV cleanup'
  ],
  alternates: {
    canonical: "/data-cleanup",
  },
  openGraph: {
    title: "Messy Data? Get Professional Cleanup | Mississauga & GTA",
    description: "Transform chaotic spreadsheets into clean, usable data. Excel, CSV, and database cleanup services.",
    url: "/data-cleanup",
  },
};

export default function DataCleanupPage() {
  const cleanupServices = [
    {
      icon: Trash2,
      problem: "Duplicate Records",
      description: "Same customer listed 5 times? Same product with different spellings? I'll find and merge all duplicates while preserving important data.",
      example: "Customer database had 10,000 records, but only 6,500 unique customers"
    },
    {
      icon: RefreshCcw,
      problem: "Inconsistent Formatting",
      description: "Phone numbers in 10 different formats? Dates that Excel doesn't recognize? Names in ALL CAPS? I'll standardize everything.",
      example: "\"416-555-1234\", \"(416) 555-1234\", \"4165551234\" → one format"
    },
    {
      icon: FileSpreadsheet,
      problem: "Multiple Files to Merge",
      description: "Data spread across 50 Excel files? Need to combine reports from different systems? I'll consolidate into one clean master file.",
      example: "Monthly reports from 3 years → one comprehensive dataset"
    },
    {
      icon: Database,
      problem: "Missing or Incomplete Data",
      description: "Empty fields, partial records, data in wrong columns? I'll identify gaps, fix structure, and help you complete critical missing info.",
      example: "40% of records missing postal codes → recovered 90% from addresses"
    },
    {
      icon: AlertTriangle,
      problem: "Data Quality Errors",
      description: "Impossible values, typos, wrong categories, outdated information? I'll audit your data and fix the errors.",
      example: "Found 200 products with negative inventory (impossible!)"
    },
    {
      icon: Zap,
      problem: "Prepare for Import/Migration",
      description: "Moving to a new system? Data needs to be in a specific format? I'll transform your data to match exactly what the new system requires.",
      example: "Cleaned 50,000 records for Salesforce import"
    }
  ];

  const faqs = [
    {
      q: "How do you clean data?",
      a: "I use a combination of Excel, Power Query, Python, and specialized data tools. First I analyze your data to understand the problems, then I write rules/scripts to fix them systematically. I don't just randomly edit cells - I apply consistent logic across the entire dataset."
    },
    {
      q: "How much does data cleanup cost?",
      a: "It depends on the size and messiness of your data. Small projects (single file, straightforward issues) start around $200. Larger projects with complex issues typically range $500-$2,000. I provide a quote after seeing a sample of your data."
    },
    {
      q: "Will you mess up my original data?",
      a: "Never! I always work on a copy. Your original data stays untouched until you approve the cleaned version. I also document every change so you can see exactly what was done."
    },
    {
      q: "How long does data cleanup take?",
      a: "Simple cleanups can be done in a day or two. More complex projects typically take 1-2 weeks. I'll give you a timeline after reviewing your data."
    },
    {
      q: "Can you help me prevent future data mess?",
      a: "Yes! After cleaning your data, I can set up templates, validation rules, and processes to keep it clean going forward. Prevention is easier than cure."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Database className="h-5 w-5" />
              <span className="font-medium">Data Cleanup Expert</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Messy Data? I&apos;ll Fix It.
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Duplicates, formatting nightmares, files that won&apos;t merge, data that makes no sense - I&apos;ve seen it all. Let me turn your data chaos into clean, usable information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold text-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Data Assessment
                </Link>
              </Button>
            </div>
            <p className="text-orange-200 mt-4 text-sm">Send me a sample file and I&apos;ll tell you what it needs</p>
          </div>
        </div>
      </section>

      {/* What I Clean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Common Data Problems I Fix</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Whatever your data nightmare, I&apos;ve probably fixed it before. Here are the most common issues I solve:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {cleanupServices.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-lg flex-shrink-0">
                      <service.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.problem}</h3>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <div className="bg-gray-50 p-2 rounded text-xs text-gray-500 italic">
                        Example: {service.example}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">How Data Cleanup Works</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Send Me a Sample</h3>
                  <p className="text-gray-600">Email me a sample of your data (or the whole file if it&apos;s not sensitive). I&apos;ll analyze it and identify all the issues that need fixing.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Get a Quote & Plan</h3>
                  <p className="text-gray-600">I&apos;ll send you a detailed breakdown of what needs to be done, how long it will take, and how much it will cost. No surprises.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">I Clean Your Data</h3>
                  <p className="text-gray-600">I work on a copy of your data, applying systematic fixes. I document everything so you know exactly what changed.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="bg-orange-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Review & Deliver</h3>
                  <p className="text-gray-600">You review the cleaned data. If anything needs adjustment, I fix it. Once you&apos;re happy, you get the final clean file.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">I Work With All Data Formats</h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Excel (.xlsx, .xls)", "CSV Files", "Google Sheets", "Access Database", "SQL Database", "JSON/XML", "QuickBooks Export", "CRM Exports", "ERP Data", "Text Files"].map((format) => (
                <span key={format} className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
                  {format}
                </span>
              ))}
            </div>
            
            <p className="text-gray-500 mt-6">Don&apos;t see your format? Ask me - I probably work with it too.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Data Cleanup Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
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
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Clean Up Your Data?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Send me your messy data and I&apos;ll tell you exactly what it needs and how much it will cost to fix. No commitment required.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-700 hover:bg-orange-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Send Your Data for Free Assessment <ArrowRight className="ml-2 h-5 w-5" />
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
            "name": "Data Cleanup & Quality Services",
            "description": "Professional data cleanup services including duplicate removal, formatting standardization, and data migration preparation.",
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
            "areaServed": ["Mississauga", "Toronto", "Brampton", "Oakville", "GTA", "Ontario"]
          }),
        }}
      />
    </div>
  );
}

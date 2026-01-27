import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BarChart3, FileSpreadsheet, ShoppingCart, MapPin, Phone, Clock, Star, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Excel & Power BI Services Toronto | Data Consultant Toronto ON",
  description: "Toronto's trusted Excel automation and Power BI dashboard consultant. Serving businesses across Downtown Toronto, North York, Scarborough, and Etobicoke. Free consultation available.",
  keywords: [
    'Excel consultant Toronto', 'Power BI Toronto', 'data analyst Toronto',
    'Excel automation Toronto Ontario', 'business intelligence Toronto',
    'dashboard consultant North York', 'Excel expert Scarborough',
    'data visualization Toronto', 'hire Excel consultant Toronto'
  ],
  alternates: {
    canonical: "/toronto",
  },
  openGraph: {
    title: "Excel & Power BI Services Toronto | Local Data Consultant",
    description: "Toronto businesses trust Nexera for Excel automation, Power BI dashboards, and data analytics. Serving the entire GTA.",
    url: "/toronto",
    type: "website",
  },
};

export default function TorontoPage() {
  const torontoNeighborhoods = [
    "Downtown Toronto", "North York", "Scarborough", "Etobicoke", 
    "York", "East York", "Yorkville", "The Annex", "Liberty Village",
    "King West", "Financial District", "Leslieville", "The Beaches"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-blue-200 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Serving Toronto & the GTA</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excel & Power BI Consulting Services in Toronto
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Toronto businesses trust Nexera Technology for expert Excel automation, Power BI dashboards, and data analytics solutions. We help companies across the GTA make smarter decisions with their data.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Toronto Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects">View Toronto Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="font-semibold">5.0 Google Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-blue-600" />
              <span className="font-semibold">50+ Toronto Businesses Served</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Same-Day Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Toronto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services for Toronto Businesses</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Whether you&apos;re a startup in Liberty Village or an enterprise in the Financial District, we have solutions tailored to Toronto&apos;s competitive business landscape.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <FileSpreadsheet className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Excel Automation Toronto</h3>
                <p className="text-gray-600 mb-4">
                  Transform your manual spreadsheet tasks into automated workflows. We help Toronto businesses save 10+ hours per week with custom Excel solutions.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Custom macros & VBA
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Automated reporting
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Data consolidation
                  </li>
                </ul>
                <Link href="/services/excel-automation" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Power BI Dashboards Toronto</h3>
                <p className="text-gray-600 mb-4">
                  Turn your data into visual insights with custom Power BI dashboards. Perfect for Toronto companies needing real-time business intelligence.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Custom visualizations
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Real-time dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Multi-source integration
                  </li>
                </ul>
                <Link href="/services/power-bi-dashboards" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Shopify Development Toronto</h3>
                <p className="text-gray-600 mb-4">
                  Launch or upgrade your Toronto ecommerce business with a professional Shopify store. Custom development for brands ready to scale.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Custom themes
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Local SEO optimization
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Payment integration
                  </li>
                </ul>
                <Link href="/services/web-ecommerce" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Toronto Businesses Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Toronto Businesses Choose Nexera</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Local GTA Understanding</h3>
                  <p className="text-gray-600">
                    We understand Toronto&apos;s business landscape—from the fast-paced Financial District to the creative startups in Liberty Village. Our solutions are tailored for GTA challenges.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fast Turnaround</h3>
                  <p className="text-gray-600">
                    Toronto businesses move fast, and so do we. Most projects are completed within 2-4 weeks. Need it faster? We offer rush delivery options.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">In-Person & Remote Options</h3>
                  <p className="text-gray-600">
                    Prefer face-to-face meetings? We&apos;re happy to meet at your Toronto office. Or work 100% remotely—whatever suits your team best.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-yellow-100 text-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Proven Results</h3>
                  <p className="text-gray-600">
                    Our Toronto clients have seen average time savings of 15+ hours/week and ROI within 2 months. See our case studies for specific examples.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Toronto Areas We Serve</h2>
            <p className="text-gray-600 text-center mb-8">
              We provide Excel, Power BI, and web development services to businesses across all Toronto neighborhoods:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {torontoNeighborhoods.map((neighborhood) => (
                <span 
                  key={neighborhood}
                  className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {neighborhood}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-center mt-6 text-sm">
              Plus all surrounding GTA areas including Mississauga, Brampton, Markham, and Vaughan
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Toronto Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Book a free consultation and let&apos;s discuss how we can help your Toronto business save time, reduce errors, and make better decisions with your data.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Book Free Toronto Consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Nexera Technology - Toronto",
            "description": "Excel automation, Power BI dashboards, and web development services for Toronto businesses.",
            "url": "https://nexeratechnology.com/toronto",
            "areaServed": {
              "@type": "City",
              "name": "Toronto",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Ontario"
              }
            },
            "serviceArea": [
              "Downtown Toronto", "North York", "Scarborough", "Etobicoke",
              "York", "East York", "Financial District", "Liberty Village"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Toronto Business Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Excel Automation Toronto"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Power BI Dashboards Toronto"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Shopify Development Toronto"
                  }
                }
              ]
            }
          }),
        }}
      />
    </div>
  );
}

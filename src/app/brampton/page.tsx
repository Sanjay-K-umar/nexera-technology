import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BarChart3, FileSpreadsheet, ShoppingCart, MapPin, Phone, Clock, Star, Building2, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Excel & Power BI Services Brampton | Data Consultant Brampton ON",
  description: "Brampton's trusted Excel automation and Power BI dashboard consultant. Local data analytics services for businesses across Brampton, Caledon, and Peel Region. Free consultation.",
  keywords: [
    'Excel consultant Brampton', 'Power BI Brampton', 'data analyst Brampton',
    'Excel automation Brampton Ontario', 'business intelligence Brampton',
    'dashboard consultant Peel Region', 'Excel expert Brampton',
    'Shopify development Brampton', 'hire data consultant Brampton'
  ],
  alternates: {
    canonical: "/brampton",
  },
  openGraph: {
    title: "Excel & Power BI Services Brampton | Local Data Consultant",
    description: "Brampton businesses trust Nexera for Excel automation, Power BI dashboards, and data analytics. Serving all of Peel Region.",
    url: "/brampton",
    type: "website",
  },
};

export default function BramptonPage() {
  const bramptonAreas = [
    "Downtown Brampton", "Bramalea", "Heart Lake", "Springdale",
    "Castlemore", "Gore Meadows", "Mount Pleasant", "Fletchers Creek",
    "Credit Valley", "Sandalwood", "Queen Street Corridor"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-orange-100 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Serving Brampton & Peel Region</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excel & Power BI Consulting Services in Brampton
            </h1>
            <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
              Brampton businesses choose Nexera Technology for expert Excel automation, Power BI dashboards, and Shopify development. We help local companies work smarter, not harder.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Brampton Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects">View Success Stories</Link>
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
              <Building2 className="h-5 w-5 text-orange-600" />
              <span className="font-semibold">Local Peel Region Business</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Quick 2-Week Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Brampton Businesses Need Data Solutions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Why Brampton Businesses Need Better Data Solutions</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Brampton is one of Canada&apos;s fastest-growing cities, with a diverse economy spanning logistics, manufacturing, retail, and services. Competition is fierce—businesses that leverage data have the edge.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-l-4 border-l-orange-500">
                <h3 className="font-bold text-lg mb-3">The Brampton Logistics Challenge</h3>
                <p className="text-gray-600">
                  With major distribution centers and logistics companies, Brampton businesses handle massive amounts of shipping and inventory data. Manual tracking leads to costly errors and delays.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500">
                <h3 className="font-bold text-lg mb-3">Growing Retail Competition</h3>
                <p className="text-gray-600">
                  Brampton&apos;s diverse population means diverse shopping needs. Local retailers need data insights to understand customer preferences and optimize inventory.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500">
                <h3 className="font-bold text-lg mb-3">Small Business Scaling</h3>
                <p className="text-gray-600">
                  Many Brampton entrepreneurs start businesses from home. As they grow, manual processes break down. Automation is essential for scaling without hiring.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-orange-500">
                <h3 className="font-bold text-lg mb-3">Multi-Location Management</h3>
                <p className="text-gray-600">
                  Businesses with locations across Brampton, Mississauga, and the GTA struggle to consolidate data. A unified dashboard brings everything together.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Brampton */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services for Brampton Businesses</h2>
            <p className="text-gray-600 text-center mb-12">
              Tailored solutions for Brampton&apos;s unique business landscape
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <FileSpreadsheet className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Excel Automation Brampton</h3>
                <p className="text-gray-600 mb-4">
                  Stop wasting time on repetitive spreadsheet tasks. Our custom Excel solutions automate inventory tracking, reporting, payroll, and more.
                </p>
                <div className="bg-green-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-green-700">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Average client saves 12+ hours/week</span>
                  </div>
                </div>
                <Link href="/services/excel-automation" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <BarChart3 className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Power BI Dashboards Brampton</h3>
                <p className="text-gray-600 mb-4">
                  See your entire Brampton operation in one place. Real-time dashboards for sales, inventory, operations, and customer analytics.
                </p>
                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-blue-700">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Decisions in minutes, not days</span>
                  </div>
                </div>
                <Link href="/services/power-bi-dashboards" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Shopify Development Brampton</h3>
                <p className="text-gray-600 mb-4">
                  Take your Brampton business online with a professional Shopify store. Custom design, local SEO, and everything you need to sell 24/7.
                </p>
                <div className="bg-purple-50 p-3 rounded-lg mb-4">
                  <div className="flex items-center gap-2 text-purple-700">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">Reach customers beyond Brampton</span>
                  </div>
                </div>
                <Link href="/services/web-ecommerce" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Advantage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Local Brampton Advantage</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">We Know Brampton</h3>
                  <p className="text-gray-600">
                    We understand the Brampton market—the logistics corridor, the diverse retail landscape, the growing professional services sector. Our solutions fit local needs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Fast Local Support</h3>
                  <p className="text-gray-600">
                    Same-day phone or video consultations. We can be at your Brampton office for in-person meetings when needed.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Building2 className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Small Business Focus</h3>
                  <p className="text-gray-600">
                    We specialize in helping Brampton small businesses—not big corporations. Our pricing and approach are designed for local entrepreneurs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Proven Local Results</h3>
                  <p className="text-gray-600">
                    We&apos;ve helped dozens of Brampton and Peel Region businesses save time and money. Ask us for local references.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Brampton Areas We Serve</h2>
            <p className="text-gray-600 text-center mb-8">
              We provide services to businesses across all Brampton neighborhoods:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {bramptonAreas.map((area) => (
                <span 
                  key={area}
                  className="bg-orange-50 text-orange-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-center mt-6 text-sm">
              Plus Caledon, Bolton, and surrounding Peel Region communities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Brampton Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
            Book a free consultation and discover how Excel automation, Power BI dashboards, or a professional Shopify store can help your Brampton business thrive.
          </p>
          <Button asChild size="lg" className="bg-white text-orange-600 hover:bg-orange-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Book Free Brampton Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
            "name": "Nexera Technology - Brampton",
            "description": "Excel automation, Power BI dashboards, and Shopify development for Brampton businesses.",
            "url": "https://nexeratechnology.com/brampton",
            "areaServed": {
              "@type": "City",
              "name": "Brampton",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Ontario"
              }
            },
            "serviceArea": [
              "Downtown Brampton", "Bramalea", "Heart Lake", "Springdale",
              "Castlemore", "Gore Meadows", "Mount Pleasant", "Credit Valley"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Brampton Business Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Excel Automation Brampton"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Power BI Dashboards Brampton"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Shopify Development Brampton"
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

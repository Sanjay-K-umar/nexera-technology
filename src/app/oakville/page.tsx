import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, BarChart3, FileSpreadsheet, ShoppingCart, MapPin, Phone, Clock, Star, Building2, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Excel & Power BI Services Oakville | Data Consultant Oakville ON",
  description: "Oakville's trusted Excel automation and Power BI dashboard consultant. Professional data analytics services for businesses in Oakville, Burlington, and Halton Region. Free consultation.",
  keywords: [
    'Excel consultant Oakville', 'Power BI Oakville', 'data analyst Oakville',
    'Excel automation Oakville Ontario', 'business intelligence Oakville',
    'dashboard consultant Halton', 'Excel expert Burlington',
    'Shopify development Oakville', 'hire data consultant Oakville'
  ],
  alternates: {
    canonical: "/oakville",
  },
  openGraph: {
    title: "Excel & Power BI Services Oakville | Local Data Consultant",
    description: "Oakville businesses trust Nexera for Excel automation, Power BI dashboards, and data analytics. Serving Halton Region.",
    url: "/oakville",
    type: "website",
  },
};

export default function OakvillePage() {
  const oakvilleAreas = [
    "Downtown Oakville", "Bronte", "Glen Abbey", "River Oaks",
    "Clearview", "Eastlake", "Palermo", "Joshua Creek",
    "Iroquois Ridge", "West Oak Trails", "Old Oakville"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-teal-100 mb-4">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">Serving Oakville & Halton Region</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Excel & Power BI Consulting Services in Oakville
            </h1>
            <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
              Oakville&apos;s premier professionals and businesses trust Nexera Technology for sophisticated Excel automation, Power BI dashboards, and data-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-bold">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Oakville Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects">View Case Studies</Link>
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
              <Briefcase className="h-5 w-5 text-teal-600" />
              <span className="font-semibold">Professional Service Standards</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="font-semibold">Responsive Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Oakville Business Landscape */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Data Solutions for Oakville&apos;s Business Community</h2>
            <p className="text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Oakville is home to corporate headquarters, thriving professional services, and successful small businesses. In this competitive environment, data-driven decision making isn&apos;t optional—it&apos;s essential.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-center gap-3 mb-3">
                  <Building2 className="h-6 w-6 text-teal-600" />
                  <h3 className="font-bold text-lg">Corporate & Enterprise</h3>
                </div>
                <p className="text-gray-600">
                  Oakville hosts regional headquarters for major companies. We help corporate teams build executive dashboards and automate reporting processes that scale.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="h-6 w-6 text-teal-600" />
                  <h3 className="font-bold text-lg">Professional Services</h3>
                </div>
                <p className="text-gray-600">
                  Accountants, consultants, and financial advisors in Oakville need sophisticated data tools. We build custom solutions for professional service firms.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-center gap-3 mb-3">
                  <ShoppingCart className="h-6 w-6 text-teal-600" />
                  <h3 className="font-bold text-lg">Retail & Boutique</h3>
                </div>
                <p className="text-gray-600">
                  Downtown Oakville&apos;s boutique retail scene is unique. We help local retailers compete with big chains through smart inventory management and ecommerce.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-teal-500">
                <div className="flex items-center gap-3 mb-3">
                  <Users className="h-6 w-6 text-teal-600" />
                  <h3 className="font-bold text-lg">Healthcare & Wellness</h3>
                </div>
                <p className="text-gray-600">
                  Oakville&apos;s healthcare and wellness sector is growing. We help clinics and practices track patient metrics, manage scheduling data, and optimize operations.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services for Oakville */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Our Services for Oakville Businesses</h2>
            <p className="text-gray-600 text-center mb-12">
              Professional-grade solutions tailored for Oakville&apos;s sophisticated business community
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <FileSpreadsheet className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Excel Automation Oakville</h3>
                <p className="text-gray-600 mb-4">
                  Transform complex financial models, reporting systems, and data workflows into automated, error-free processes. Perfect for Oakville&apos;s professional services sector.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Financial modeling automation
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    Executive reporting
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
                <h3 className="text-xl font-bold mb-3">Power BI Dashboards Oakville</h3>
                <p className="text-gray-600 mb-4">
                  Executive-level dashboards that provide instant visibility into your business. Designed for boardrooms, management meetings, and strategic decision-making.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Executive dashboards
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    KPI tracking
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    Multi-department views
                  </li>
                </ul>
                <Link href="/services/power-bi-dashboards" className="text-primary font-semibold flex items-center hover:underline">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <ShoppingCart className="h-12 w-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold mb-3">Shopify & Web Development</h3>
                <p className="text-gray-600 mb-4">
                  Premium ecommerce solutions for Oakville boutiques and retailers. Beautiful, professional stores that match the quality of your products.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Premium design
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Local SEO
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-purple-600" />
                    Conversion optimization
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

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Oakville Professionals Choose Nexera</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="bg-teal-100 text-teal-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Star className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Professional Standards</h3>
                  <p className="text-gray-600">
                    We understand Oakville&apos;s professional community expects excellence. Our work meets the highest standards of quality, reliability, and confidentiality.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Respectful of Your Time</h3>
                  <p className="text-gray-600">
                    We know your time is valuable. Consultations are focused, project timelines are clear, and communication is efficient and professional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Local & Accessible</h3>
                  <p className="text-gray-600">
                    While we serve the entire GTA, we offer in-person meetings in Oakville for clients who prefer face-to-face consultations. We&apos;re just a call away.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-purple-100 text-purple-600 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Enterprise-Level Capability</h3>
                  <p className="text-gray-600">
                    We deliver solutions that match corporate standards but with personalized service and small-business pricing. The best of both worlds.
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
            <h2 className="text-3xl font-bold mb-4 text-center">Oakville Areas We Serve</h2>
            <p className="text-gray-600 text-center mb-8">
              We provide services to businesses across all Oakville neighborhoods:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {oakvilleAreas.map((area) => (
                <span 
                  key={area}
                  className="bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="text-gray-500 text-center mt-6 text-sm">
              Plus Burlington, Milton, and surrounding Halton Region communities
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Professional Data Solutions?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-teal-100">
            Book a complimentary consultation and discover how we can help your Oakville business make smarter, data-driven decisions.
          </p>
          <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-teal-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Book Free Oakville Consultation <ArrowRight className="ml-2 h-5 w-5" />
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
            "name": "Nexera Technology - Oakville",
            "description": "Professional Excel automation, Power BI dashboards, and web development for Oakville businesses.",
            "url": "https://nexeratechnology.com/oakville",
            "areaServed": {
              "@type": "City",
              "name": "Oakville",
              "containedIn": {
                "@type": "AdministrativeArea",
                "name": "Ontario"
              }
            },
            "serviceArea": [
              "Downtown Oakville", "Bronte", "Glen Abbey", "River Oaks",
              "Clearview", "Eastlake", "Palermo", "Joshua Creek"
            ],
            "priceRange": "$$",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Oakville Business Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Excel Automation Oakville"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Power BI Dashboards Oakville"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Web Development Oakville"
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

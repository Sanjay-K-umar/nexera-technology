import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, HelpCircle, Phone, ShoppingCart, Palette, Rocket, Settings, TrendingUp, CreditCard } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopify Expert Near Me | Build Shopify Store Mississauga, Toronto, GTA | Custom Development",
  description: "Need a Shopify expert? Build or fix your Shopify store with a local expert in Mississauga. Custom themes, store setup, migration, and optimization. Serving Toronto & GTA. Free consultation!",
  keywords: [
    'Shopify expert near me', 'Shopify developer near me', 'build Shopify store',
    'Shopify store setup', 'Shopify help', 'Shopify designer Mississauga',
    'Shopify developer Toronto', 'Shopify consultant GTA', 'custom Shopify theme',
    'Shopify migration', 'Shopify store not selling', 'fix Shopify store',
    'Shopify SEO help', 'Shopify conversion optimization', 'start online store Ontario'
  ],
  alternates: {
    canonical: "/shopify-expert",
  },
  openGraph: {
    title: "Need a Shopify Expert? Local Developer in Mississauga & GTA",
    description: "Custom Shopify stores, theme development, and optimization. Free consultation available.",
    url: "/shopify-expert",
  },
};

export default function ShopifyExpertPage() {
  const services = [
    {
      icon: Rocket,
      title: "New Shopify Store Setup",
      description: "Starting from scratch? I'll build you a complete, professional Shopify store ready to sell.",
      includes: ["Theme selection & customization", "Product setup (up to 50)", "Payment & shipping config", "Basic SEO setup"],
      price: "From $1,500",
      timeline: "2-3 weeks"
    },
    {
      icon: Palette,
      title: "Custom Theme Design",
      description: "Make your store stand out with a custom design that matches your brand perfectly.",
      includes: ["Unique homepage design", "Custom product pages", "Mobile optimization", "Brand consistency"],
      price: "From $2,500",
      timeline: "3-4 weeks"
    },
    {
      icon: TrendingUp,
      title: "Store Optimization",
      description: "Store not converting? I'll analyze and fix what's stopping people from buying.",
      includes: ["Conversion audit", "Speed optimization", "Checkout improvements", "A/B testing setup"],
      price: "From $800",
      timeline: "1-2 weeks"
    },
    {
      icon: Settings,
      title: "Shopify Fixes & Support",
      description: "Something broken or not working right? Quick fixes and ongoing support available.",
      includes: ["Bug fixes", "App issues", "Theme problems", "Feature additions"],
      price: "From $150",
      timeline: "1-3 days"
    }
  ];

  const faqs = [
    {
      q: "How much does a Shopify store cost to build?",
      a: "A basic but professional store starts around $1,500. More complex stores with custom features typically range from $2,500-$5,000. I always provide a detailed quote before starting."
    },
    {
      q: "I already have a store but it's not selling. Can you help?",
      a: "Absolutely! This is actually one of my specialties. I'll audit your store, identify what's blocking conversions (it's usually 2-3 key issues), and fix them. Most stores see improvement within weeks."
    },
    {
      q: "Can you help me move from WooCommerce/Etsy/Square to Shopify?",
      a: "Yes! I handle full migrations including products, customers, order history, and SEO redirects. I make sure you don't lose Google rankings in the process."
    },
    {
      q: "Do I need to pay for Shopify separately?",
      a: "Yes, Shopify charges their own monthly fee ($29-$299/month depending on plan). My fees are for building/customizing your store - the Shopify subscription is separate."
    },
    {
      q: "How long does it take to build a Shopify store?",
      a: "A basic store takes 2-3 weeks. Custom designs take 3-4 weeks. I'll give you a specific timeline based on your requirements."
    },
    {
      q: "Will you teach me how to manage my store?",
      a: "Yes! Every project includes a training session. I'll show you how to add products, fulfill orders, and manage day-to-day operations. You won't be dependent on me forever."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <ShoppingCart className="h-5 w-5" />
              <span className="font-medium">Shopify Partner & Expert</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Shopify Expert? Let&apos;s Build Your Online Store.
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Local Shopify expert in Mississauga helping businesses across the GTA sell online. From brand new stores to fixing ones that aren&apos;t converting - I&apos;ve got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-bold text-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Store Consultation
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects/shopify-ecommerce-brampton">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Shopify Services</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Whether you&apos;re starting fresh or need help with an existing store, I offer complete Shopify solutions.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <service.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 mb-2">Includes:</p>
                    <ul className="space-y-1">
                      {service.includes.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-purple-600 font-bold text-lg">{service.price}</span>
                      <span className="text-gray-500 text-sm ml-2">• {service.timeline}</span>
                    </div>
                    <Link href="/contact" className="text-primary font-medium text-sm hover:underline flex items-center">
                      Get Quote <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">What You Get When You Work With Me</h2>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">100%</div>
                <p className="text-gray-600 text-sm">Custom to Your Brand</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">Mobile</div>
                <p className="text-gray-600 text-sm">Optimized & Fast</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">SEO</div>
                <p className="text-gray-600 text-sm">Built-In From Day 1</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl font-bold text-purple-600 mb-2">Training</div>
                <p className="text-gray-600 text-sm">You&apos;ll Know How to Run It</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Shopify Questions Answered</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-purple-600 flex-shrink-0 mt-1" />
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
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Book a free consultation. We&apos;ll discuss your products, your goals, and I&apos;ll show you exactly what your store could look like.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-purple-50 font-bold">
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
            "name": "Shopify Expert & Development Services",
            "description": "Professional Shopify store development, custom themes, and optimization services.",
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
              "name": "Shopify Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Shopify Store Setup"}, "price": "1500", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Custom Shopify Theme"}, "price": "2500", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Store Optimization"}, "price": "800", "priceCurrency": "CAD"}
              ]
            }
          }),
        }}
      />
    </div>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, HelpCircle, Phone, Globe, Palette, Smartphone, Search, Zap, ShoppingCart, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Developer Near Me | Build Website Mississauga, Toronto, GTA | Affordable Prices",
  description: "Need a website? Local web developer in Mississauga building professional websites for small businesses. Custom design, fast loading, mobile-friendly. Serving Toronto & GTA. Free quote!",
  keywords: [
    'website developer near me', 'web developer near me', 'build website',
    'small business website', 'website designer Mississauga', 'affordable web design',
    'web developer Toronto', 'website builder GTA', 'custom website Ontario',
    'business website cost', 'professional website design', 'local web designer',
    'website for my business', 'need a website', 'create website for small business'
  ],
  alternates: {
    canonical: "/website-developer",
  },
  openGraph: {
    title: "Need a Website? Local Developer in Mississauga & GTA | Affordable Prices",
    description: "Professional websites for small businesses. Custom design, mobile-friendly, SEO included. Free consultation.",
    url: "/website-developer",
  },
};

export default function WebsiteDeveloperPage() {
  const websiteTypes = [
    {
      icon: Building2,
      title: "Business Website",
      description: "Professional online presence for your company. Show what you do, build credibility, and get found on Google.",
      pages: "5-10 pages",
      features: ["About, Services, Contact", "Mobile responsive", "Contact form", "Google-friendly SEO"],
      price: "From $1,200",
      timeline: "2-3 weeks"
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Store",
      description: "Sell products online with a full-featured store. Shopify, WooCommerce, or custom solutions.",
      pages: "Full store",
      features: ["Product catalog", "Secure checkout", "Payment processing", "Inventory management"],
      price: "From $2,000",
      timeline: "3-4 weeks"
    },
    {
      icon: Palette,
      title: "Portfolio / Personal",
      description: "Showcase your work beautifully. Perfect for freelancers, artists, photographers, and consultants.",
      pages: "3-5 pages",
      features: ["Gallery/portfolio", "About & bio", "Contact form", "Social integration"],
      price: "From $800",
      timeline: "1-2 weeks"
    },
    {
      icon: Globe,
      title: "Landing Page",
      description: "Single focused page to promote a product, service, or capture leads. High converting design.",
      pages: "1 page",
      features: ["Conversion focused", "Lead capture", "Fast loading", "A/B testable"],
      price: "From $500",
      timeline: "1 week"
    }
  ];

  const faqs = [
    {
      q: "How much does a website cost?",
      a: "Simple business websites start around $1,200. E-commerce stores start around $2,000. I always provide a detailed quote based on your specific needs - no surprises."
    },
    {
      q: "How long does it take to build a website?",
      a: "Most business websites take 2-3 weeks. Simple landing pages can be done in a week. Complex e-commerce stores take 3-4 weeks. I'll give you a specific timeline upfront."
    },
    {
      q: "Do I have to pay for hosting separately?",
      a: "Yes, hosting is typically $10-50/month depending on the platform. I'll recommend the best option for your needs and can set it up for you."
    },
    {
      q: "Will my website work on phones?",
      a: "Absolutely! Every website I build is mobile-responsive. Over 60% of visitors browse on phones, so mobile-friendly design is non-negotiable."
    },
    {
      q: "Can you help my website show up on Google?",
      a: "Yes! Every website includes basic SEO setup. For businesses wanting to rank higher locally, I offer additional SEO services to help you get found."
    },
    {
      q: "Will I be able to update the website myself?",
      a: "Yes! I build on platforms that let you make simple updates (text, images, blog posts). I also provide training so you're not dependent on me for every small change."
    },
    {
      q: "What if I already have a website but it needs work?",
      a: "I do website redesigns and updates too! Whether you need a visual refresh, better mobile experience, or improved SEO - I can help."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6">
              <Globe className="h-5 w-5" />
              <span className="font-medium">Local Web Developer</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Website? Let&apos;s Build Your Online Presence.
            </h1>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Local web developer in Mississauga creating professional websites for small businesses across the GTA. Affordable prices, quick turnaround, no tech headaches.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold text-lg">
                <Link href="/contact" className="flex items-center">
                  <Phone className="mr-2 h-5 w-5" />
                  Get Free Website Quote
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/projects">See My Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need a Website */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Your Business Needs a Website in 2026</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Get Found on Google</h3>
                <p className="text-gray-600">
                  When someone searches for your services, you need to show up. No website = invisible to most potential customers.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Build Credibility</h3>
                <p className="text-gray-600">
                  Customers check your website before calling. A professional site makes them trust you before you even speak.
                </p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Work 24/7</h3>
                <p className="text-gray-600">
                  Your website answers questions and captures leads while you sleep. It&apos;s your hardest-working employee.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types & Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-center">Website Options & Pricing</h2>
            <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
              Choose the type that fits your needs. Every website is custom-designed - these are starting points.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {websiteTypes.map((type, idx) => (
                <Card key={idx} className="p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-indigo-100 p-3 rounded-lg">
                      <type.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl">{type.title}</h3>
                      <p className="text-gray-500 text-sm">{type.pages}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  
                  <div className="mb-4">
                    <ul className="space-y-1">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <span className="text-indigo-600 font-bold text-lg">{type.price}</span>
                      <span className="text-gray-500 text-sm ml-2">• {type.timeline}</span>
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

      {/* What's Included */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">What&apos;s Included in Every Website</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4">
                <Smartphone className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Mobile-Responsive Design</h3>
                  <p className="text-gray-600 text-sm">Looks great on phones, tablets, and computers</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4">
                <Search className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Basic SEO Setup</h3>
                  <p className="text-gray-600 text-sm">Optimized for Google from day one</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4">
                <Zap className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Fast Loading Speed</h3>
                  <p className="text-gray-600 text-sm">Optimized images and clean code</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4">
                <CheckCircle2 className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Contact Form</h3>
                  <p className="text-gray-600 text-sm">Easy way for customers to reach you</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4">
                <Globe className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Social Media Links</h3>
                  <p className="text-gray-600 text-sm">Connect all your online presence</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 p-4">
                <Palette className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-1">Custom Design</h3>
                  <p className="text-gray-600 text-sm">Matches your brand, not a generic template</p>
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
            <h2 className="text-3xl font-bold mb-12 text-center">Website Questions Answered</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-bold text-lg mb-2 flex items-start gap-2">
                    <HelpCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-1" />
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
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Website?</h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Tell me about your business and I&apos;ll send you a free quote within 24 hours. No obligation, no pressure.
          </p>
          <Button asChild size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 font-bold">
            <Link href="/contact" className="flex items-center">
              Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
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
            "name": "Website Development Services",
            "description": "Professional website design and development for small businesses.",
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
              "name": "Website Services",
              "itemListElement": [
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Business Website"}, "price": "1200", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "E-Commerce Store"}, "price": "2000", "priceCurrency": "CAD"},
                {"@type": "Offer", "itemOffered": {"@type": "Service", "name": "Landing Page"}, "price": "500", "priceCurrency": "CAD"}
              ]
            }
          }),
        }}
      />
    </div>
  );
}

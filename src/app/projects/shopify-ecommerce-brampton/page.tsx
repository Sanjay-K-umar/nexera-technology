import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, DollarSign, TrendingUp, CheckCircle2, ShoppingCart, Zap, Users, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study: Shopify Store Launch for Brampton Fashion Brand | Web Development Ontario",
  description: "See how Nexera built a custom Shopify store for a Brampton fashion brand, increasing online sales by 340% in the first 6 months with custom development and SEO optimization.",
  keywords: [
    'Shopify expert Brampton', 'Shopify development Ontario', 'ecommerce website Toronto',
    'Shopify store setup GTA', 'custom Shopify theme', 'fashion ecommerce Canada',
    'Shopify SEO optimization', 'web development Mississauga'
  ],
  alternates: {
    canonical: "/projects/shopify-ecommerce-brampton",
  },
  openGraph: {
    title: "Case Study: Brampton Fashion Brand Launches Successful Shopify Store",
    description: "How we helped a local fashion brand go from zero online presence to $15K/month in online sales.",
    url: "/projects/shopify-ecommerce-brampton",
    type: "article",
  },
};

export default function CaseStudyShopifyFashion() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <Link href="/projects" className="hover:text-primary">Projects</Link>
              <span>/</span>
              <span>Case Study</span>
            </div>
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full text-purple-800 font-semibold mb-6">
              Shopify Development • Fashion/Retail
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From Market Stall to $15K/Month: How We Built a Shopify Empire for a Brampton Fashion Brand
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A Brampton entrepreneur selling handmade jewelry and accessories at local markets wanted to expand online. With no technical skills and a tight budget, she came to us for help launching her first ecommerce store.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span className="font-semibold">340% revenue growth</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <ShoppingCart className="h-5 w-5 text-purple-600" />
                <span className="font-semibold">$15K+ monthly revenue</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="font-semibold">2,000+ customers</span>
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
                <strong>The Client:</strong> Maya runs &ldquo;Lotus & Stone&rdquo;—a handmade jewelry brand based in Brampton. She started selling at local markets and pop-up shops, building a loyal following with her unique, bohemian-style pieces. Her Instagram had 3,500 followers, but she was losing sales because people couldn&apos;t buy online.
              </p>
              
              <p>
                <strong>The Problem:</strong> Maya was leaving money on the table. People would see her products on Instagram, DM her to buy, but the manual process was messy—missed messages, payment confusion, shipping errors. She knew she needed a proper online store but didn&apos;t know where to start.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #1: Manual Order Processing</h3>
                <p className="text-gray-600">
                  Orders came through Instagram DMs, Facebook Messenger, and text messages. Maya was tracking everything in a notebook, sometimes missing orders or making shipping mistakes.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #2: Payment Hassles</h3>
                <p className="text-gray-600">
                  She was accepting e-transfers, which meant waiting for payments, manually checking her bank, and sometimes dealing with failed transfers or scams.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #3: No Brand Presence</h3>
                <p className="text-gray-600">
                  Without a professional website, Maya couldn&apos;t be found on Google. Potential customers searching for &ldquo;handmade jewelry Brampton&rdquo; or &ldquo;boho jewelry Canada&rdquo; would never find her.
                </p>
              </Card>
              
              <Card className="p-6 border-l-4 border-l-red-500">
                <h3 className="font-bold text-lg mb-3">Pain Point #4: Limited Scale</h3>
                <p className="text-gray-600">
                  Markets are weather-dependent and limited to weekends. Maya was capping her income because she could only sell when and where she was physically present.
                </p>
              </Card>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 py-4 bg-gray-50 rounded-r-lg mb-8">
              <p className="text-lg italic text-gray-700 mb-2">
                &ldquo;I knew I was losing sales. People would message me at 2 AM wanting to buy, but I&apos;d be asleep. By morning, they&apos;d lost interest or bought from someone else. I needed a store that worked 24/7.&rdquo;
              </p>
              <cite className="text-gray-600">— Maya, Lotus & Stone Founder, Brampton</cite>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Solution: A Complete Shopify Storefront</h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p>
                We built Maya a complete Shopify store that matched her brand aesthetic, automated her operations, and positioned her for growth. This wasn&apos;t just a template—it was a custom solution designed specifically for her business.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Custom Brand-Aligned Theme</h3>
                    <p className="text-gray-600 mb-4">
                      We customized a premium Shopify theme to match Maya&apos;s bohemian aesthetic—warm colors, earthy tones, flowing fonts that reflected her handmade, artisan brand. The site immediately felt like &ldquo;her&rdquo; to her existing followers.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Instagram followers immediately recognized the brand</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Product Photography & Catalog Setup</h3>
                    <p className="text-gray-600 mb-4">
                      We helped Maya photograph her 50+ products properly, optimize images for fast loading, and write compelling product descriptions with relevant keywords. Each product got its own SEO-optimized page.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Products now rank for &ldquo;handmade boho earrings Canada&rdquo;</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Payment & Shipping Automation</h3>
                    <p className="text-gray-600 mb-4">
                      Set up Shopify Payments for instant credit card processing (no more e-transfers!), integrated Canada Post rates, and configured automatic shipping notifications. Orders now process themselves.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Zero payment issues since launch</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">SEO & Local Optimization</h3>
                    <p className="text-gray-600 mb-4">
                      We optimized every page for Google search—meta titles, descriptions, image alt tags, and structured data. Created content targeting &ldquo;Brampton handmade jewelry&rdquo; and &ldquo;Canadian boho accessories&rdquo; searches.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">Now on page 1 for 12+ relevant keywords</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Instagram Shopping Integration</h3>
                    <p className="text-gray-600 mb-4">
                      We connected the Shopify store to Instagram Shopping, allowing customers to buy directly from her posts and stories. This turned her social following into a direct sales channel.
                    </p>
                    <div className="flex items-center gap-2 text-green-600">
                      <CheckCircle2 className="h-5 w-5" />
                      <span className="font-medium">35% of sales now come directly from Instagram</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">The Results (After 6 Months)</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <TrendingUp className="h-10 w-10 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">340%</div>
                <p className="text-sm">Revenue growth</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <DollarSign className="h-10 w-10 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">$15K+</div>
                <p className="text-sm">Monthly revenue</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <Users className="h-10 w-10 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">2,000+</div>
                <p className="text-sm">Total customers</p>
              </Card>
              
              <Card className="p-6 bg-white/10 border-white/20 text-center">
                <Globe className="h-10 w-10 mx-auto mb-3" />
                <div className="text-4xl font-bold mb-2">12</div>
                <p className="text-sm">Page 1 keywords</p>
              </Card>
            </div>

            <div className="bg-white/10 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-bold mb-4">Business Transformation:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Went from $3,500/month (markets only) to $15,000/month (80% online)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Now ships across Canada—no longer limited to GTA customers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Reduced order processing time from 30 minutes to 2 minutes (automated)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Instagram following grew from 3,500 to 8,200 (store credibility boosted social presence)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Now considering hiring first employee to handle fulfillment</span>
                </li>
              </ul>
            </div>

            <blockquote className="border-l-4 border-white pl-6 py-4 bg-white/10 rounded-r-lg">
              <p className="text-xl italic mb-2">
                &ldquo;I went from stressed, handling orders in my DMs at midnight, to running a real business. The store works while I sleep. Last month I made more than I ever did at a weekend market—and I didn&apos;t have to leave my house. Nexera changed my life.&rdquo;
              </p>
              <cite className="text-purple-200">— Maya, Lotus & Stone Founder</cite>
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
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>Week 1:</strong> Brand discovery & theme selection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>Week 2:</strong> Theme customization & product setup</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>Week 3:</strong> Payment, shipping & integrations</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>Week 4:</strong> SEO optimization & training</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    <span><strong>Week 5:</strong> Soft launch & Instagram integration</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">ROI Summary</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span>Project investment:</span>
                    <span className="font-bold">$4,200</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pre-launch monthly revenue:</span>
                    <span className="font-bold">$3,500</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Month 6 monthly revenue:</span>
                    <span className="font-bold">$15,400</span>
                  </li>
                  <li className="flex justify-between border-t pt-3">
                    <span>Additional monthly profit:</span>
                    <span className="font-bold text-purple-600">~$9,000+</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Payback period:</span>
                    <span className="font-bold text-green-600">&lt; 1 month</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Your Business Online?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-purple-100">
            Whether you&apos;re selling at markets, through social media, or just have a great product idea—we can build you a professional Shopify store that works 24/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="font-bold">
              <Link href="/contact" className="flex items-center">
                Get Your Free Store Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              <Link href="/services/web-ecommerce">
                Learn More About Shopify Services
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
            "headline": "From Market Stall to $15K/Month: Shopify Success Story",
            "description": "A case study on building a successful Shopify store for a Brampton fashion brand.",
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
              "name": "Shopify Development Services",
              "areaServed": ["Brampton", "Mississauga", "Toronto", "GTA", "Ontario"]
            }
          }),
        }}
      />
    </div>
  );
}

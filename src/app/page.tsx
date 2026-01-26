import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart3, ShoppingCart, Zap, CheckCircle } from 'lucide-react'
import { HeroRotator } from '@/components/HeroRotator'
import { BeforeAfter } from '@/components/BeforeAfter'
import { ServiceCard } from '@/components/ServiceCard'

export const metadata: Metadata = {
  title: 'Hire Tech Consultant Ontario | Power BI, Excel & Web Development Services',
  description: 'Looking for a technology consultant in Mississauga or GTA? Hire an expert for Power BI dashboards, Excel automation, and custom web development. Personal service, affordable rates, and real ROI for small businesses.',
  keywords: [
    'hire technology consultant Ontario', 'small business tech consultant Mississauga', 'data analytics consultant',
    'Excel automation expert', 'Power BI developer near me', 'Shopify expert Ontario',
    'business process automation consultant', 'affordable IT consulting GTA'
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Nexera Technology | Data Services, Web Development & Automation Near Me',
    description: 'Leading provider of data services, web development, and business automation in Mississauga, GTA.',
    url: '/',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Interactive Demos */}
      <HeroRotator />

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Small Businesses Helped</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-gray-600">Hours Saved Annually</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-4xl font-bold text-primary mb-2">GTA</div>
              <div className="text-gray-600">Local & Global Service</div>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Personal Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Consultant Touch Section */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50 border-b">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">🎯 Personal Service, Not Agency Runaround</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Work Directly With an Expert Who Gets Results</h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            When you hire Nexera, you&apos;re not just another ticket in an agency queue. You work directly with an expert consultant dedicated to understanding <strong>your</strong> business challenges.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Whether you need a custom <strong>Power BI dashboard</strong> to finally see your numbers clearly, <strong>Excel automation</strong> to stop wasting hours on manual work, or a <strong>Shopify store</strong> that actually converts visitors into customers—I deliver solutions that <strong>pay for themselves</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg">
              <Link href="/contact">
                🚀 Get Your Free Quote <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/services">
                See What I Can Do For You
              </Link>
            </Button>
          </div>
          <p className="text-gray-500 text-sm mt-4">⏱️ Most quotes delivered within 24 hours</p>
        </div>
      </section>

      {/* Before & After Interactive Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              From Chaos to Clarity
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
              See how we transform messy spreadsheets into beautiful, automated dashboards
            </p>
          </div>
          
          <BeforeAfter />
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              How We Help You Grow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three powerful ways to transform your small business and compete with the big players
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<BarChart3 className="h-12 w-12" />}
              title="Data & Analytics"
              description="Turn your messy data into clear, actionable insights with custom dashboards and automated reports."
              services={[
                'Custom Power BI Dashboards',
                'Excel Automation & Consulting',
                'Automated Monthly Reporting',
              ]}
              link="/services/power-bi-dashboards"
              delay="0.1s"
            />

            <ServiceCard
              icon={<ShoppingCart className="h-12 w-12" />}
              title="Web & eCommerce"
              description="Get your business online fast with professional websites and Shopify stores that actually convert."
              services={[
                'Shopify Store Setup & Design',
                'Custom Website Development',
                'Performance & SEO Optimization',
              ]}
              link="/services/web-ecommerce"
              delay="0.2s"
            />

            <ServiceCard
              icon={<Zap className="h-12 w-12" />}
              title="Business Automation"
              description="Stop wasting time on repetitive tasks. Automate your workflows and focus on growing your business."
              services={[
                'Workflow Automation',
                'Inventory & Order Management',
                'CRM & Email Integration',
              ]}
              link="/services/excel-automation"
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Are You Struggling With...
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Spending hours on manual data entry every week',
                'Losing sales because your website looks outdated',
                'Missing important business insights hidden in spreadsheets',
                'Customers going to competitors with better online presence',
                'Wasting time on repetitive tasks that could be automated',
                'Not knowing which products or services are actually profitable',
              ].map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle className="h-6 w-6 flex-shrink-0 mt-1" />
                  <p className="text-lg">{problem}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-xl mb-6">
                You&apos;re not alone. <strong>These are the exact problems we solve for small businesses every single day.</strong>
              </p>
              <p className="text-lg mb-8 text-blue-200">
                💡 The best part? Most of our clients see results within the first week.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold shadow-lg">
                <Link href="/contact">
                  Yes, I Want to Fix This → <ArrowRight className="ml-2" />
                </Link>
              </Button>
              <p className="text-blue-200 text-sm mt-4">Free consultation • No commitment • Real solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Focus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving Mississauga & the GTA
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're a local technology consultancy that understands the unique challenges 
              of small businesses in Ontario. Whether you're in Mississauga, Toronto, 
              Brampton, or anywhere in the GTA, we're here to help you compete and grow.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              <strong>Remote Services Available:</strong> We also serve clients across Canada 
              and internationally, bringing the same level of expertise and personalized service 
              to businesses worldwide.
            </p>
            <Button asChild size="lg">
              <Link href="/about">
                Learn More About Us <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Competitors Are Already Online.<br/>Are You Ready to Catch Up?
          </h2>
          <p className="text-xl mb-4 max-w-2xl mx-auto">
            Every day you wait is another day customers go to your competition.
          </p>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-blue-200">
            Book a free, no-pressure consultation and let&apos;s build a plan to get your business growing.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-6 font-bold shadow-lg animate-pulse">
            <Link href="/contact">
              🚀 Get My Free Quote Now <ArrowRight className="ml-2" />
            </Link>
          </Button>
          <p className="text-blue-200 text-sm mt-4">📞 Response within 24 hours • No sales pressure • Real solutions</p>
        </div>
      </section>
    </>
  )
}

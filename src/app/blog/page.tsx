import { Metadata } from 'next'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Clock, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Small Business Growth Blog | Nexera Technology Mississauga GTA',
  description: 'Expert insights on Excel automation, Power BI, Shopify, and business automation for small businesses in Mississauga, GTA, and Ontario. Practical tips to save time and grow.',
  keywords: ['small business blog', 'Excel automation tips', 'Power BI tutorials', 'Shopify guide', 'business automation GTA'],
  alternates: {
    canonical: '/blog',
  },
}

const blogPosts = [
  {
    slug: 'excel-automation-small-business',
    title: 'Stop Drowning in Spreadsheets: How Excel Automation Saves Small Businesses Hours Every Week',
    excerpt: 'Are you spending hours every week on manual Excel tasks? Discover how Excel automation with VBA macros and formulas can save 10+ hours weekly for small businesses.',
    category: 'Data & Analytics',
    date: 'November 10, 2025',
    readTime: '8 min read',
    keywords: 'Excel automation, small business productivity, VBA macros'
  },
  {
    slug: 'shopify-ultimate-launchpad',
    title: 'Why Shopify is the Ultimate Launchpad for Your Online Store',
    excerpt: 'Choosing between Shopify, WordPress, or custom development? Learn why we recommend Shopify for small businesses in Mississauga and the GTA looking to get online fast.',
    category: 'Web & eCommerce',
    date: 'November 8, 2025',
    readTime: '10 min read',
    keywords: 'Shopify vs WordPress, online store setup, ecommerce platform'
  },
  {
    slug: 'business-automation-guide',
    title: 'The 10 Hours You\'re Wasting: A Guide to Business Automation',
    excerpt: 'Discover the repetitive tasks that are eating up your time and how workflow automation can give you back 10+ hours every week to focus on growing your business.',
    category: 'Business Automation',
    date: 'November 5, 2025',
    readTime: '12 min read',
    keywords: 'business process automation, workflow efficiency, time savings'
  },
  {
    slug: 'power-bi-vs-excel',
    title: 'Power BI vs. Excel: When Is It Time to Upgrade?',
    excerpt: 'Excel is great for data entry, but Power BI is built for understanding your business. Learn when its time to upgrade and what youll gain.',
    category: 'Data & Analytics',
    date: 'November 2, 2025',
    readTime: '9 min read',
    keywords: 'Power BI consultant, business intelligence, Excel vs Power BI'
  },
  {
    slug: 'business-dashboard-importance',
    title: 'The One Screen Your Business Needs: The Power of a Central Dashboard',
    excerpt: 'Imagine seeing all your business metrics—sales, marketing, operations—in one place, updated in real-time. Discover how a central dashboard transforms decision-making.',
    category: 'Data & Analytics',
    date: 'October 28, 2025',
    readTime: '7 min read',
    keywords: 'business dashboard, KPI tracking, data visualization'
  },
]

export default function BlogPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Small Business Growth Insights
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Practical tips on Excel automation, Power BI, Shopify, and business automation 
              to help your small business in Mississauga and the GTA save time and grow.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 group">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Stop reading and start doing. Book a free consultation and discover 
            how we can help your small business save time and grow.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Book Free Consultation <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  )
}

import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'
  
  const currentDate = new Date().toISOString()

  // Core pages
  const routes = [
    '',
    '/about',
    '/services',
    '/projects',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Service pages
  const servicePages = [
    '/services/power-bi-dashboards',
    '/services/excel-automation',
    '/services/data-reporting',
    '/services/shopify-development',
    '/services/website-development',
    '/services/website-optimization',
    '/services/workflow-automation',
    '/services/inventory-management',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  // Blog posts
  const blogPosts = [
    '/blog/excel-automation-small-business',
    '/blog/shopify-ultimate-launchpad',
    '/blog/business-automation-guide',
    '/blog/power-bi-vs-excel',
    '/blog/business-dashboard-importance',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...servicePages, ...blogPosts]
}

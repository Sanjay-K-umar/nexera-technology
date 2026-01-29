import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/static/',
          // Block legacy Shopify/eCommerce paths
          '/collections/',
          '/products/',
          '/checkout',
          '/checkout/',
          '/cart',
          '/cart/',
          '/account',
          '/account/',
          // Block legacy WordPress/CMS paths
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/customer-cabinet',
          '/pages/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

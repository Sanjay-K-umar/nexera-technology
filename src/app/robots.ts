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
          '/private/',
          // Block legacy Shopify/eCommerce paths
          '/collections/',
          '/products/',
          '/checkout',
          '/checkout/',
          '/cart',
          '/cart/',
          '/account',
          '/account/',
          '/login',
          '/register',
          // Block legacy WordPress/CMS paths
          '/wp-admin/',
          '/wp-content/',
          '/wp-includes/',
          '/wp-login.php',
          '/customer-cabinet',
          '/pages/',
        ],
      },
      // Google (priority)
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      // Social media bots (allow all for rich sharing)
      {
        userAgent: ['Twitterbot', 'facebookexternalhit', 'LinkedInBot', 'WhatsApp', 'Slackbot'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}

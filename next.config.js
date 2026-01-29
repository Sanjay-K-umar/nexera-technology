/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
        ],
      },
    ]
  },
  // SEO Redirects - Block legacy/junk pages & consolidate domain
  async redirects() {
    return [
      // Legacy Shopify/eCommerce paths
      {
        source: '/collections/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/checkout',
        destination: '/',
        permanent: true,
      },
      {
        source: '/checkout/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cart/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/account',
        destination: '/',
        permanent: true,
      },
      {
        source: '/account/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/customer-cabinet',
        destination: '/',
        permanent: true,
      },
      // Legacy WordPress/CMS paths
      {
        source: '/pages/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs/:path*',
        destination: '/blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

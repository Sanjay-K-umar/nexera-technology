import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'),
  title: {
    default: 'Nexera Tech | Data, Web & Automation Services | GTA',
    template: '%s | Nexera Tech'
  },
  description: 'Expert Power BI dashboards, Excel automation, Shopify stores & web development in Mississauga, GTA. Free consultation!',
  keywords: [
    'Nexera', 'Nexera Technology', 'Nexera Tech',
    // High-Intent Power BI
    'hire Power BI consultant Ontario', 'Power BI dashboard services Mississauga', 'Power BI developer for small business Ontario', 'Power BI consulting services GTA', 'Power BI price Ontario', 'Power BI expert near me',
    // High-Intent Excel
    'Excel automation services Ontario', 'Excel automation consultant GTA', 'VBA macros services Mississauga', 'business process automation Excel Ontario', 'hire Excel expert near me', 'automate Excel workflows',
    // High-Intent Web & Shopify
    'hire web developer Mississauga', 'Shopify expert Mississauga', 'Shopify store development Ontario', 'custom web development services Ontario', 'small business web design services',
    // Consultant & ROI
    'business analytics consultant Ontario', 'small business technology consultant Mississauga', 'affordable BI consulting', 'data analytics consultant GTA'
  ],
  authors: [{ name: 'Nexera Technology and Consultancy' }],
  creator: 'Nexera Technology and Consultancy',
  publisher: 'Nexera Tech & Co',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com',
    siteName: 'Nexera Technology and Consultancy | Nexera Tech & Co',
    title: 'Nexera Technology | Data Services, Web Development & Automation Near Me | Mississauga',
    description: 'Nexera Tech & Co - Expert data services, web development services, and business automation near you. Serving Mississauga, Brampton, Toronto, GTA, and Ontario.',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Nexera Technology and Consultancy - Data Services & Web Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexera Technology | Data Services & Web Development Near Me',
    description: 'Nexera Tech & Co - Expert data services, web development, and automation in Mississauga, GTA, Ontario.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'}/og-image.jpg`],
    creator: '@nexeratech',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'viIsy3FzbgJU6KgQDT_fJUuqEG5mv7oNokJXQ6Be49I',
  },
  other: {
    'msvalidate.01': '7A894259F3BE456A2687D8CCC26ED5E5',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="msvalidate.01" content="7A894259F3BE456A2687D8CCC26ED5E5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'}/#organization`,
              name: 'Nexera Technology and Consultancy',
              alternateName: ['Nexera Tech & Co', 'Nexera Tech', 'Nexera Technology'],
              legalName: 'Nexera Technology and Consultancy',
              description: 'Leading provider of data services, web development services, and business automation solutions near Mississauga, GTA. Expert Excel automation, Power BI dashboards, Shopify stores, and workflow automation for small businesses.',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com',
              telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1-647-XXX-XXXX',
              email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@nexeratechnco.com',
              logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'}/logo.png`,
              image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratechnco.com'}/og-image.jpg`,
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mississauga',
                addressRegion: 'ON',
                postalCode: 'L5B',
                addressCountry: 'CA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.5890,
                longitude: -79.6441,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Mississauga',
                },
                {
                  '@type': 'City',
                  name: 'Brampton',
                },
                {
                  '@type': 'City',
                  name: 'Toronto',
                },
                {
                  '@type': 'City',
                  name: 'Oakville',
                },
                {
                  '@type': 'City',
                  name: 'Burlington',
                },
                {
                  '@type': 'State',
                  name: 'Ontario',
                },
                {
                  '@type': 'Country',
                  name: 'Canada',
                },
              ],
              serviceArea: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 43.5890,
                  longitude: -79.6441,
                },
                geoRadius: '100000',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Technology Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Data Services',
                      description: 'Power BI dashboards, data analytics, business intelligence, and data visualization services',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Web Development Services',
                      description: 'Custom website development, Shopify stores, eCommerce solutions, and web design',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Business Automation',
                      description: 'Excel automation, workflow automation, process automation, and VBA programming',
                    },
                  },
                ],
              },
              sameAs: [
                // Add social media links here when available
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                bestRating: '5',
                worstRating: '1',
                reviewCount: '27',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

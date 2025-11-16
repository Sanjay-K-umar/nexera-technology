import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com'),
  title: {
    default: 'Nexera Technology and Consultancy | Small Business Growth Solutions in Mississauga & GTA',
    template: '%s | Nexera Technology'
  },
  description: 'We help small businesses get online, look professional, and stop losing customers to competitors. Expert Excel automation, Power BI dashboards, Shopify stores, and workflow automation in Mississauga, GTA, and across Canada.',
  keywords: ['small business technology Mississauga', 'Excel automation GTA', 'Power BI consultant Ontario', 'Shopify developer Mississauga', 'business automation Canada', 'web development GTA', 'data analytics small business'],
  authors: [{ name: 'Nexera Technology and Consultancy' }],
  creator: 'Nexera Technology',
  publisher: 'Nexera Technology',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: '/',
    siteName: 'Nexera Technology and Consultancy',
    title: 'Nexera Technology | Small Business Growth Solutions in Mississauga & GTA',
    description: 'We help small businesses get online, look professional, and stop losing customers to competitors.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexera Technology and Consultancy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexera Technology | Small Business Growth Solutions',
    description: 'We help small businesses get online, look professional, and stop losing customers to competitors.',
    images: ['/og-image.jpg'],
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Nexera Technology and Consultancy',
              description: 'Technology consulting and development services for small businesses',
              url: process.env.NEXT_PUBLIC_SITE_URL || 'https://nexeratech.com',
              telephone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || '+1-647-XXX-XXXX',
              email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || 'info@nexeratech.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Mississauga',
                addressRegion: 'ON',
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
                  '@type': 'State',
                  name: 'Ontario',
                },
                {
                  '@type': 'Country',
                  name: 'Canada',
                },
              ],
              sameAs: [
                // Add social media links here
              ],
              priceRange: '$$',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5',
                reviewCount: '27',
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

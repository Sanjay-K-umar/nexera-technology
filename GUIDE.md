# Nexera Technology - Complete Website Guide

> **Website:** https://nexeratechnco.com  
> **Hosting:** Vercel (auto-deploys on git push)  
> **Framework:** Next.js 14 + TypeScript + Tailwind CSS

---

## Table of Contents
1. [Quick Start](#1-quick-start)
2. [Project Structure](#2-project-structure)
3. [Development](#3-development)
4. [Deployment](#4-deployment)
5. [SEO Configuration](#5-seo-configuration)
6. [Google Search Console](#6-google-search-console)
7. [Google Business Profile](#7-google-business-profile)
8. [Facebook & Google Ads](#8-facebook--google-ads)
9. [Environment Variables](#9-environment-variables)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Quick Start

```bash
# Clone and install
git clone https://github.com/Sanjay-K-umar/nexera-technology.git
cd nexera-technology
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy (auto on git push, or manual)
git add .
git commit -m "Your changes"
git push
```

---

## 2. Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (metadata, fonts, analytics)
│   ├── page.tsx            # Homepage
│   ├── robots.ts           # Dynamic robots.txt
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── about/
│   ├── blog/
│   ├── contact/
│   ├── projects/
│   └── services/
├── components/             # Reusable components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── LeadMagnet.tsx
│   └── ui/                 # shadcn/ui components
├── hooks/                  # Custom React hooks
└── lib/                    # Utilities

public/
├── og-image.jpg            # Social sharing image (1200x630)
├── robots.txt              # Static robots.txt
├── site.webmanifest        # PWA manifest
└── favicon.ico

next.config.js              # Next.js config (redirects, headers)
vercel.json                 # Vercel config (www redirect)
```

---

## 3. Development

### Running Locally
```bash
npm run dev
# Opens http://localhost:3000
```

### Creating New Pages
Pages are created in `src/app/` using file-based routing:
- `src/app/new-page/page.tsx` → `/new-page`

### Adding Components
```tsx
// Import shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
```

### Styling
- Use Tailwind CSS classes
- Global styles in `src/app/globals.css`
- Component styles inline with Tailwind

---

## 4. Deployment

### Vercel (Current Setup)
Your site auto-deploys when you push to GitHub:

```bash
git add .
git commit -m "Description of changes"
git push
```

Vercel builds and deploys automatically (~1-2 minutes).

### Manual Deploy (if needed)
```bash
npm i -g vercel
vercel --prod
```

### Environment Variables
Set in Vercel Dashboard → Settings → Environment Variables:
```
NEXT_PUBLIC_SITE_URL=https://nexeratechnco.com
NEXT_PUBLIC_BUSINESS_EMAIL=info@nexeratechnco.com
```

---

## 5. SEO Configuration

### Current SEO Setup
| File | Purpose |
|------|---------|
| `src/app/layout.tsx` | Global metadata, Open Graph, structured data |
| `src/app/robots.ts` | Dynamic robots.txt generation |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `public/robots.txt` | Static robots.txt backup |
| `next.config.js` | Redirects, security headers |
| `vercel.json` | www → non-www redirect |

### Page SEO Template
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Nexera Tech',
  description: 'Description with keywords (150-160 chars)',
  keywords: ['keyword1', 'keyword2'],
  alternates: {
    canonical: '/page-url',
  },
  openGraph: {
    title: 'Title for Social Sharing',
    description: 'Description for social sharing',
    url: '/page-url',
  },
}
```

### Redirects (in next.config.js)
All legacy/junk URLs redirect to appropriate pages:
- `/collections/*` → `/`
- `/products/*` → `/services`
- `/checkout`, `/cart`, `/account` → `/`
- `/wp-admin/*`, `/wp-login.php` → `/`
- Common misspellings handled

### Blocked Paths (robots.txt)
- `/api/`, `/admin/`, `/_next/static/`
- Legacy Shopify: `/collections/`, `/products/`, `/checkout`, `/cart`
- Legacy WordPress: `/wp-admin/`, `/wp-content/`
- Tracking params: `?utm_*`, `?fbclid=`, `?gclid=`

---

## 6. Google Search Console

### Setup
1. Go to https://search.google.com/search-console
2. Add Property → URL prefix → `https://nexeratechnco.com`
3. Verify (HTML tag already in layout.tsx)

### Submit Sitemap
1. Sitemaps → Add → `sitemap.xml` → Submit

### Request Indexing
URL Inspection → Enter URL → Request Indexing

**Priority Pages:**
- Homepage `/`
- `/services`, `/contact`, `/about`
- `/services/power-bi-dashboards`
- `/services/excel-automation`
- `/services/web-ecommerce`
- `/blog` and blog posts

### Monitor Weekly
- Check "Pages" for indexing errors
- Review "Performance" for search queries
- Fix any "Not indexed" issues

---

## 7. Google Business Profile

### Setup (Critical for Local SEO)
1. Go to https://business.google.com
2. Create: "Nexera Technology and Consultancy"

### Fill Out Everything
- **Category:** Business Consultant + Web Designer + Data Analytics
- **Address:** Mississauga (or service-area business)
- **Services:** Excel Automation, Power BI, Shopify, Web Development
- **Hours:** Business hours
- **Description:** Include keywords naturally

### Upload Photos
- Professional headshot
- Dashboard screenshots
- Before/after project examples

### Post Weekly
Updates tell Google you're active:
- "New blog post about Excel automation"
- "Just completed a Power BI dashboard for a GTA client"

### Get Reviews
Ask satisfied clients for Google reviews - this is huge for local ranking!

---

## 8. Facebook & Google Ads

### Recommended Budget
Start with $30-50/day split between platforms.

### Facebook Ads Targeting
- **Location:** Mississauga, Brampton, Toronto (25km radius)
- **Age:** 30-60
- **Job Titles:** Business Owner, Manager, CEO, Operations Manager
- **Interests:** Business Intelligence, Microsoft Excel, Small Business

### Ad Copy Tips
1. **Problem-Focused:** "Drowning in spreadsheets?"
2. **Benefit-Focused:** "See your entire business on one screen"
3. **Social Proof:** "GTA business owner saved 15 hours weekly"

### Google Ads Keywords
- "Power BI consultant Mississauga"
- "Excel automation GTA"
- "Shopify developer Toronto"
- "small business data services Ontario"

### Landing Pages
Create dedicated landing pages for each ad campaign for better conversion.

---

## 9. Environment Variables

### Required Variables
```env
NEXT_PUBLIC_SITE_URL=https://nexeratechnco.com
NEXT_PUBLIC_BUSINESS_EMAIL=info@nexeratechnco.com
NEXT_PUBLIC_BUSINESS_PHONE=+1-647-XXX-XXXX
```

### Set in Vercel
Dashboard → Project → Settings → Environment Variables

### Local Development
Create `.env.local` file (not committed to git):
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

---

## 10. Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Changes Not Showing
1. Check Vercel deployment status
2. Clear browser cache (Ctrl+Shift+R)
3. Wait 1-2 minutes for CDN propagation

### 404 Errors in Search Console
- Most are redirected via `next.config.js`
- Use URL Inspection → Request Removal for stubborn ones

### Social Sharing Shows Wrong Preview
1. Verify `og-image.jpg` exists in `/public`
2. Clear cache:
   - Facebook: https://developers.facebook.com/tools/debug/
   - LinkedIn: https://www.linkedin.com/post-inspector/
   - Twitter: https://cards-dev.twitter.com/validator

### Mobile Issues
- 84% of traffic is mobile - always test on real devices
- Ensure buttons are at least 44x44px
- Form inputs need 16px+ font to prevent iOS zoom

---

## Quick Reference

| Task | Command/URL |
|------|-------------|
| Run locally | `npm run dev` |
| Build | `npm run build` |
| Deploy | `git push` |
| Vercel Dashboard | https://vercel.com |
| Search Console | https://search.google.com/search-console |
| Business Profile | https://business.google.com |
| Facebook Debugger | https://developers.facebook.com/tools/debug/ |

---

## Contact

**Email:** info@nexeratechnco.com  
**Website:** https://nexeratechnco.com

---

*Last Updated: January 2026*

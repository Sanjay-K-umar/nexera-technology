# 🚀 QUICK START - Nexera Next.js Migration

## One-Command Setup

```powershell
.\setup-nextjs.ps1
```

That's it! This script will:
- ✅ Backup old configurations
- ✅ Activate Next.js files
- ✅ Install dependencies
- ✅ Create directory structure

## Start Development

```powershell
npm run dev
```

Open: **http://localhost:3000**

## What's Working Right Now

✅ Homepage with hero video & before/after slider
✅ Power BI Dashboards service page (full content)
✅ Excel Automation service page (full content)
✅ Blog hub with 5 post previews
✅ Auto-generated sitemap & robots.txt
✅ All SEO metadata and schema markup

## What to Do Next

### This Week:
1. Create 6 remaining service pages (copy `services/power-bi-dashboards/page.tsx` as template)
2. Write 5 blog posts (copy structure, add 1000+ words each)
3. Update `.env.local` with real contact info
4. Add hero video to `public/videos/` or use animated fallback (already works)

### Before Launch:
- Run `npm run build` to test production build
- Deploy to Vercel: `npm i -g vercel` then `vercel`
- Submit sitemap to Google Search Console

## File Structure (Key Files)

```
setup-nextjs.ps1          ← Run this first
README-NEXTJS.md          ← Full documentation
SETUP-GUIDE.md            ← Detailed instructions
.env.local.example        ← Copy to .env.local

src/app/
  page.tsx                ← Homepage ✅
  layout.tsx              ← Root layout with SEO ✅
  sitemap.ts              ← Auto sitemap ✅
  robots.ts               ← Auto robots.txt ✅
  
  services/
    power-bi-dashboards/  ← Complete example ✅
    excel-automation/     ← Complete example ✅
    [6 more to create]    ← Use template 📝
  
  blog/
    page.tsx              ← Blog hub ✅
    [5 posts to create]   ← Use template 📝
```

## Commands Reference

```powershell
# Development
npm run dev              # Start dev server (port 3000)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run linting

# Deployment
vercel                   # Deploy to Vercel
```

## Environment Variables

Edit `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://nexeratech.com
NEXT_PUBLIC_BUSINESS_EMAIL=info@nexeratechnco.com
NEXT_PUBLIC_BUSINESS_PHONE=+1-289-625-8007
```

## Service Page Template

Copy `src/app/services/power-bi-dashboards/page.tsx` and modify:

1. Update metadata (title, description, keywords)
2. Change H1 headline
3. Update problem statements (4-6 pain points)
4. List your service benefits
5. Describe your 4-step process
6. Add results/testimonials
7. Include industry-specific use cases
8. Add FAQ section (5-7 questions)
9. Update schema markup

Each page should be 1000+ words for SEO.

## Blog Post Template

Structure each blog post:

```typescript
export const metadata = {
  title: '[SEO Title] | Nexera Technology',
  description: '[150 char description with keywords]',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
}

export default function BlogPost() {
  return (
    <>
      {/* Hero with title */}
      {/* Introduction (problem) */}
      {/* 5-7 main sections */}
      {/* Real-world examples */}
      {/* Actionable tips */}
      {/* Strong CTA */}
    </>
  )
}
```

## Troubleshooting

**TypeScript errors?**
```powershell
rm -rf node_modules
rm package-lock.json
npm install
```

**Port 3000 in use?**
```powershell
Get-Process -Id (Get-NetTCPConnection -LocalPort 3000).OwningProcess | Stop-Process -Force
```

**Images not loading?**
- Put in `public/images/filename.jpg`
- Use `/images/filename.jpg` in code (not `../public/`)

## SEO Checklist

- [x] Dynamic metadata per page
- [x] Sitemap.xml auto-generated
- [x] Robots.txt configured
- [x] LocalBusiness schema (homepage)
- [x] Service schema (service pages)
- [x] Location keywords (Mississauga, GTA, Ontario)
- [ ] Google Analytics configured (after deployment)
- [ ] Google Search Console setup (after deployment)
- [ ] Submit sitemap to search engines (after deployment)

## Need More Help?

📖 **Full Documentation**: `README-NEXTJS.md`
📋 **Setup Guide**: `SETUP-GUIDE.md`
🔧 **Technical Details**: `MIGRATION-GUIDE.md`

---

**Ready?** Run `.\setup-nextjs.ps1` and start with `npm run dev` 🚀

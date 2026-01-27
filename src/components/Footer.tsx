import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Image 
                src="/logo.png" 
                alt="Nexera Technology and Consultancy" 
                width={160} 
                height={53}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              We help small businesses get online, look professional, and stop losing customers to competitors.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Nexeratechnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/nexera_tech_n_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/nexeratechnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://x.com/nexeratechnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@nexeratechnco"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a
                href="https://share.google/bgihHXBaHUKsW00mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Google Business Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                  aria-hidden="true"
                  role="img"
                >
                  <title>Google</title>
                  <path d="M21.35,11.1H12v3.8h5.6c-0.5,2.6-2.8,4.5-5.6,4.5c-3.3,0-6-2.7-6-6c0-3.3,2.7-6,6-6c1.5,0,2.8,0.5,3.8,1.5l2.8-2.8C16.9,4.4,14.6,3.5,12,3.5c-4.7,0-8.5,3.8-8.5,8.5s3.8,8.5,8.5,8.5c4.9,0,8.5-3.5,8.5-8.5C20.5,11.6,20.5,11.3,20.5,11.1z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick Links">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Our Services">
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/power-bi-dashboards" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Power BI Dashboards
                </Link>
              </li>
              <li>
                <Link href="/services/excel-automation" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Excel Automation
                </Link>
              </li>
              <li>
                <Link href="/services/web-ecommerce" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Shopify Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-ecommerce" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/excel-automation" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  Workflow Automation
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" aria-hidden="true" />
                <span className="text-sm text-primary-foreground/80">
                  Mississauga, Ontario<br />Serving GTA & Global
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} aria-hidden="true" />
                <a href="tel:+12896258007" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  +1 289 625 8007
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} aria-hidden="true" />
                <a href="mailto:info@nexeratechnco.com" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  info@nexeratechnco.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors"
              >
                <span>Get Free Quote</span> <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Nexera Technology and Consultancy. All rights reserved. | Mississauga, GTA, Ontario, Canada
          </p>
        </div>
      </div>
    </footer>
  )
}

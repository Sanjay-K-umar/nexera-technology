import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react'

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
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/nexera_tech_n_co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
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
          </div>

          {/* Services */}
          <div>
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
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Mississauga, Ontario<br />Serving GTA & Global
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+12896258007" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  +1 289 625 8007
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:info@nexeratechnco.com" className="text-sm text-primary-foreground/80 hover:text-white transition-colors">
                  info@nexeratechnco.com
                </a>
              </li>
            </ul>
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

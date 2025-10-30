'use client'

import { Instagram, Linkedin, Twitter, Youtube, Mail } from 'lucide-react'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'

const footerLinks = {
  platform: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'For Freelancers', href: '#founding-creator' },
    { label: 'Pricing', href: '#founding-creator' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: 'mailto:hello@vdogate.com' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Freelancer Agreement', href: '#' },
  ],
}

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/vdogate', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/vdogate', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/vdogate', label: 'Twitter' },
  { Icon: Youtube, href: 'https://youtube.com/@vdogate', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-black text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* About Column - Wider */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative w-[160px] h-[45px]">
                <Image
                  src={BRAND_LOGO.paths.primary}
                  alt="VDOgate"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
            <p className="text-white/70 mb-6 text-base leading-relaxed max-w-sm">
              India's Platform for Freelancers. No ads, no algorithm, no commission on your services. ₹3,000/month for direct client access.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-portal-primary transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-portal-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-portal-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-portal-light transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <a
              href="mailto:hello@vdogate.com"
              className="inline-flex items-center gap-2 text-white/70 hover:text-portal-light transition-colors duration-200 text-sm"
            >
              <Mail className="w-4 h-4" />
              hello@vdogate.com
            </a>

            <p className="text-white/50 text-xs">
              © 2025 VDOgate. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

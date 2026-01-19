'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'

export default function LiveEventsFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 md:py-12 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-4">
            <Link href="/" className="relative w-[100px] h-[28px]">
              <Image
                src={BRAND_LOGO.paths.primary}
                alt="VDOgate"
                fill
                className="object-contain object-left"
              />
            </Link>
            <span className="text-slate-500 text-sm">
              © {currentYear} VDOgate
            </span>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Payout & Tax Policy
            </a>
            <a
              href="mailto:hello@vdogate.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Contact / Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

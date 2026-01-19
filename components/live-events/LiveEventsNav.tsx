'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'

export default function LiveEventsNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative w-[120px] md:w-[140px] h-[32px] md:h-[38px]">
          <Image
            src={BRAND_LOGO.paths.primary}
            alt="VDOgate"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* CTA Button */}
        <a
          href="https://app.vdogate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-300"
        >
          Go Live Now
        </a>
      </div>
    </nav>
  )
}

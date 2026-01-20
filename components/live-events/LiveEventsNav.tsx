'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'
import { ChevronRight } from 'lucide-react'

export default function LiveEventsNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm">
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

        {/* Right side - Explore Events + Go Live */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Explore Events link */}
          <Link
            href="#"
            className="hidden sm:flex text-gray-700 hover:text-purple-600 font-medium text-sm md:text-base transition-colors"
          >
            Explore Events
          </Link>

          {/* Go Live CTA Button - Yellow/Orange gradient matching the design */}
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 rounded-full font-bold text-sm shadow-lg shadow-yellow-400/30 hover:shadow-xl hover:shadow-yellow-400/40 hover:scale-[1.03] transition-all duration-300"
          >
            Go Live
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </nav>
  )
}

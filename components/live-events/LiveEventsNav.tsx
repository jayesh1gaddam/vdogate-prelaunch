'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'
import { Sparkle } from '@/components/ui/DecorativeAccent'

export default function LiveEventsNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b-4 border-playful-yellow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with sparkle */}
        <div className="flex items-center gap-2">
          <Link href="/" className="relative w-[120px] md:w-[140px] h-[32px] md:h-[38px]">
            <Image
              src={BRAND_LOGO.paths.primary}
              alt="VDOgate"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
          <Sparkle color="yellow" size="sm" className="hidden md:block animate-pulse" />
        </div>

        {/* CTA Button - Yellow playful style */}
        <a
          href="https://app.vdogate.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group px-5 md:px-6 py-2 md:py-2.5 bg-playful-yellow text-playful-purple-dark rounded-full font-bold text-sm shadow-playful-yellow hover:shadow-lg hover:scale-[1.05] hover:bg-playful-yellow-light transition-all duration-300"
        >
          <span className="group-hover:animate-playful-wiggle inline-block">Go Live Now</span>
        </a>
      </div>
    </nav>
  )
}

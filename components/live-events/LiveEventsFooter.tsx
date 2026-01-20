'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'
import { WaveDivider } from '@/components/ui/PlayfulBlob'

export default function LiveEventsFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-white">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full overflow-hidden">
        <WaveDivider color="purple" className="h-16 md:h-24" />
      </div>

      <div className="bg-playful-purple pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo and Copyright */}
            <div className="flex items-center gap-4">
              <Link href="/" className="relative w-[100px] h-[28px]">
                <Image
                  src={BRAND_LOGO.paths.primary}
                  alt="VDOgate"
                  fill
                  className="object-contain object-left brightness-0 invert"
                />
              </Link>
              <span className="text-white/70 text-sm">
                © {currentYear} VDOgate
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link
                href="/terms"
                className="text-white/80 hover:text-playful-yellow transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-white/80 hover:text-playful-yellow transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-playful-yellow transition-colors font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

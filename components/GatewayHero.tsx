'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND_LOGO } from '@/lib/brand'

export default function GatewayHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
      {/* Simple Navigation */}
      <nav className="px-6 md:px-12 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-[140px] md:w-[160px] h-[40px] md:h-[45px]">
            <Image
              src={BRAND_LOGO.paths.primary}
              alt="VDOgate"
              fill
              className="object-contain"
              priority
            />
          </Link>

          {/* Get Started CTA */}
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 md:px-12 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-neutral-600 mb-2">
              One Platform. Two Sides.
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Freelancers showcase. Buyers discover. Everyone wins.
            </h2>
          </div>

          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {/* Freelancer Card */}
            <Link
              href="/freelancers"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-amber-500 p-6 md:p-8 min-h-[400px] md:min-h-[480px] flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/90 text-lg md:text-xl font-light mb-1">
                  India's Platform for
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
                  India's Freelancers
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  Make money from your skills
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-6">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-orange-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-3 text-white text-sm font-medium">
                    <span className="font-bold">500+</span> Freelancers joining
                  </p>
                </div>
              </div>

              {/* Graphic Image */}
              <div className="absolute right-0 bottom-0 w-[60%] h-[70%] pointer-events-none">
                <Image
                  src="/images/Mask group.png"
                  alt="Freelancer profiles"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto pt-6">
                <span className="inline-flex items-center gap-2 px-8 py-3 bg-white text-orange-600 rounded-full font-semibold text-base shadow-lg group-hover:shadow-xl group-hover:gap-3 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>

            {/* Services Card */}
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-500 p-6 md:p-8 min-h-[400px] md:min-h-[480px] flex flex-col hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/90 text-lg md:text-xl font-light mb-1">
                  India's Platform for
                </p>
                <h3 className="text-white text-3xl md:text-4xl font-bold mb-3">
                  India's Services
                </h3>
                <p className="text-white/80 text-base md:text-lg">
                  Free for buyers & viewers, always.
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-6">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={40} height={40} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-3 text-white text-sm font-medium">
                    <span className="font-bold">500+</span> Freelancers joining
                  </p>
                </div>
              </div>

              {/* Graphic Image */}
              <div className="absolute right-0 bottom-0 w-[60%] h-[70%] pointer-events-none">
                <Image
                  src="/images/Mask group-1.png"
                  alt="Discover services"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto pt-6">
                <span className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full font-semibold text-base shadow-lg group-hover:shadow-xl group-hover:gap-3 transition-all duration-300">
                  Discover Services
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Subtle divider line */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
      </div>
    </div>
  )
}

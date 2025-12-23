'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND_LOGO } from '@/lib/brand'

export default function GatewayHero() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 flex flex-col">
      {/* Simple Navigation */}
      <nav className="px-6 md:px-12 py-4 flex-shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-[120px] md:w-[140px] h-[35px] md:h-[40px]">
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
            className="px-5 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Main Content - Flex grow to fill remaining space */}
      <main className="flex-1 px-6 md:px-12 flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto w-full">
          {/* Headline - Left aligned */}
          <div className="text-left mb-6 md:mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-neutral-600 mb-1">
              One Platform. Two Sides.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Freelancers showcase. Buyers discover. Everyone wins.
            </h2>
          </div>

          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {/* Freelancer Card */}
            <Link
              href="/freelancers"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 p-5 md:p-6 h-[280px] md:h-[320px] lg:h-[360px] flex flex-col hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/90 text-base md:text-lg font-light mb-0.5">
                  India's Platform for
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  India's Freelancers
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Make money from your skills
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-orange-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-2 text-white text-xs font-medium">
                    <span className="font-bold">500+</span> Freelancers joining
                  </p>
                </div>
              </div>

              {/* Graphic Image */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[65%] pointer-events-none">
                <Image
                  src="/images/Mask group.png"
                  alt="Freelancer profiles"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-orange-600 rounded-full font-semibold text-sm shadow-lg group-hover:shadow-xl group-hover:gap-3 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Services Card */}
            <Link
              href="/services"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-5 md:p-6 h-[280px] md:h-[320px] lg:h-[360px] flex flex-col hover:shadow-2xl hover:scale-[1.01] transition-all duration-300"
            >
              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/90 text-base md:text-lg font-light mb-0.5">
                  India's Platform for
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">
                  India's Services
                </h3>
                <p className="text-white/80 text-sm md:text-base">
                  Free for buyers & viewers, always.
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-4">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={32} height={32} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-2 text-white text-xs font-medium">
                    <span className="font-bold">500+</span> Freelancers joining
                  </p>
                </div>
              </div>

              {/* Graphic Image */}
              <div className="absolute right-0 bottom-0 w-[55%] h-[65%] pointer-events-none">
                <Image
                  src="/images/Mask group-1.png"
                  alt="Discover services"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center gap-2 px-6 py-2.5 bg-white text-blue-600 rounded-full font-semibold text-sm shadow-lg group-hover:shadow-xl group-hover:gap-3 transition-all duration-300">
                  Discover Services
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Subtle divider line at bottom */}
      <div className="flex-shrink-0 px-6 md:px-12 pb-4">
        <div className="max-w-7xl mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />
        </div>
      </div>
    </div>
  )
}

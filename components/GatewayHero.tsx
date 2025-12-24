'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND_LOGO } from '@/lib/brand'

export default function GatewayHero() {
  return (
    <div className="h-screen overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white flex flex-col">
      {/* Navigation */}
      <nav className="px-6 md:px-12 lg:px-20 py-5 flex-shrink-0">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative w-[130px] md:w-[150px] h-[38px] md:h-[42px]">
            <Image
              src={BRAND_LOGO.paths.primary}
              alt="VDOgate"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Get Started CTA */}
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full font-semibold text-sm shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 transition-all duration-300"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 px-6 md:px-12 lg:px-20 flex flex-col justify-center overflow-hidden pb-8">
        <div className="max-w-[1400px] mx-auto w-full">
          {/* Headline */}
          <div className="text-left mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl lg:text-[42px] font-light text-gray-400 mb-1 tracking-tight">
              One Platform. Two Sides.
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-[38px] font-bold bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent tracking-tight">
              Freelancers showcase. Buyers discover. Everyone wins.
            </h2>
          </div>

          {/* Two Cards Grid */}
          <div className="grid md:grid-cols-2 gap-5 lg:gap-8">
            {/* Freelancer Card */}
            <Link
              href="/freelancers"
              className="group relative rounded-[28px] bg-gradient-to-br from-orange-500 via-orange-400 to-amber-400 p-6 md:p-8 h-[320px] md:h-[380px] lg:h-[420px] flex flex-col shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              {/* Graphic Image - Background layer */}
              <div className="absolute right-0 bottom-0 w-[55%] md:w-[50%] h-[70%] md:h-[75%]">
                <Image
                  src="/images/Mask group.png"
                  alt="Freelancer profiles"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/80 text-lg md:text-xl font-normal mb-1">
                  India's Platform for
                </p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold mb-3 leading-tight">
                  India's Freelancers
                </h3>
                <p className="text-white/70 text-base md:text-lg font-light">
                  Make money from your skills
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-6 bg-white/20 backdrop-blur-sm rounded-full py-2 px-3 w-fit">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-orange-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-3 text-white text-sm font-medium">
                    <span className="font-bold">500+</span> Freelancers joining
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-orange-500 rounded-full font-semibold text-base shadow-xl shadow-black/10 group-hover:shadow-2xl group-hover:gap-3 transition-all duration-300">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>

            {/* Buyers Card */}
            <Link
              href="/buyers"
              className="group relative rounded-[28px] bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 p-6 md:p-8 h-[320px] md:h-[380px] lg:h-[420px] flex flex-col shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-500 overflow-hidden"
            >
              {/* Graphic Image - Background layer */}
              <div className="absolute right-0 bottom-0 w-[55%] md:w-[50%] h-[70%] md:h-[75%]">
                <Image
                  src="/images/Mask group-1.png"
                  alt="Discover services"
                  fill
                  className="object-contain object-right-bottom"
                  priority
                />
              </div>

              {/* Content */}
              <div className="relative z-10 flex-1">
                <p className="text-white/80 text-lg md:text-xl font-normal mb-1">
                  India's Platform for
                </p>
                <h3 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold mb-3 leading-tight">
                  India's Buyers
                </h3>
                <p className="text-white/70 text-base md:text-lg font-light">
                  Free for buyers & viewers, always.
                </p>

                {/* Avatar Stack */}
                <div className="flex items-center mt-6 bg-white/20 backdrop-blur-sm rounded-full py-2 px-3 w-fit">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="" width={36} height={36} className="object-cover w-full h-full" />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-blue-600 border-2 border-white shadow-md flex items-center justify-center">
                      <span className="text-white text-[10px] font-bold">+500</span>
                    </div>
                  </div>
                  <p className="ml-3 text-white text-sm font-medium">
                    <span className="font-bold">500+</span> Buyers discovering
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="relative z-10 mt-auto">
                <span className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-500 rounded-full font-semibold text-base shadow-xl shadow-black/10 group-hover:shadow-2xl group-hover:gap-3 transition-all duration-300">
                  Find Freelancers
                  <ArrowRight className="w-5 h-5" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Subtle divider line at bottom */}
      <div className="flex-shrink-0 px-6 md:px-12 lg:px-20 pb-4">
        <div className="max-w-[1400px] mx-auto">
          <div className="h-px bg-gradient-to-r from-transparent via-orange-300/40 to-transparent" />
        </div>
      </div>
    </div>
  )
}

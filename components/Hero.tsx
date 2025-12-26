'use client'

import { motion } from 'framer-motion'
import HeroCarousel from './HeroCarousel'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 pt-24 pb-12">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Static Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-orange-200/20 to-amber-200/20" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-bl from-rose-200/20 to-orange-200/20" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-center lg:text-left space-y-5 md:space-y-6"
            >
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight"
              >
                <span className="text-brand-black font-light">India's Platform for</span>
                <br />
                <span className="text-gradient font-semibold">The World of Freelancers</span>
              </motion.h1>

              {/* Subheadline - Tightened */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base md:text-lg text-neutral-gray leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Upload videos. Get discovered by buyers. Connect directly. Host paid live events.
                <br />
                <span className="font-semibold text-brand-black">No Ads • No Algorithm • No Commission</span>
              </motion.p>

              {/* Avatar Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/makeup.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '55% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/gym.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/chef.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/teacher.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '45% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-sm">+500</div>
                </div>
                <p className="text-sm text-neutral-gray">
                  <span className="text-portal-primary font-semibold">500+</span> freelancers joining
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Carousel Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

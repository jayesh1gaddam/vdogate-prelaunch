'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

const floatAnimation = {
  y: [0, -8, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
}

export default function LiveEventsHero() {
  return (
    <section className="min-h-screen pt-24 pb-8 relative overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large purple gradient orb - top left */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            x: [0, 15, 0],
            transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const }
          }}
          className="absolute -top-20 -left-20 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl"
        />

        {/* Yellow/amber gradient orb - top right */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -15, 0],
            transition: { duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
          }}
          className="absolute top-10 right-[10%] w-64 h-64 bg-amber-200/35 rounded-full blur-3xl"
        />

        {/* Pink gradient orb - middle left */}
        <motion.div
          animate={{
            y: [0, -15, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }
          }}
          className="absolute top-1/3 -left-10 w-48 h-48 bg-pink-200/30 rounded-full blur-3xl"
        />

        {/* Orange gradient orb - bottom right */}
        <motion.div
          animate={{
            y: [0, 18, 0],
            x: [0, -10, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }
          }}
          className="absolute bottom-20 right-[5%] w-56 h-56 bg-orange-200/30 rounded-full blur-3xl"
        />

        {/* Small sky blue orb - center */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            x: [0, 8, 0],
            transition: { duration: 4.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1.5 }
          }}
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-sky-200/25 rounded-full blur-2xl"
        />

        {/* Small mint orb - bottom left */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 0.8 }
          }}
          className="absolute bottom-32 left-[15%] w-40 h-40 bg-emerald-200/25 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[70vh]">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm font-semibold tracking-wide">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                LIVE EVENTS PLATFORM
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              <span className="text-gray-900">Easy to </span>
              <span className="hero-gradient-text">Host.</span>
              <br />
              <span className="text-gray-900">Easy to </span>
              <span className="hero-gradient-text">Earn.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-base md:text-lg lg:text-xl text-gray-600 max-w-md mx-auto lg:mx-0 mb-4 leading-relaxed"
            >
              Earn through live sessions. Create events, sell tickets, or invite attendees for free.
            </motion.p>

            {/* Price highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.25 }}
              className="text-base md:text-lg text-gray-700 mb-8"
            >
              <span className="text-purple-600 font-bold text-xl md:text-2xl">₹299</span>
              <span className="text-gray-500"> per live event. No monthly subscriptions. No commitments.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://app.vdogate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:scale-[1.02] transition-all duration-300"
              >
                Create a Live Event
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-full font-semibold text-lg hover:border-purple-300 hover:text-purple-600 transition-all duration-300"
              >
                See How It Works
              </a>
            </motion.div>
          </div>

          {/* Right column - Hero Image with floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="relative order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              {/* Hero Image with feather effect */}
              <div className="relative aspect-square hero-image-container">
                {/* Soft feather overlay for extra blending */}
                <div className="absolute inset-0 z-[1] pointer-events-none hero-feather-mask" />
                <Image
                  src="/hero_vec.png"
                  alt="VDOgate Live Events - Host live sessions and earn"
                  fill
                  className="object-contain drop-shadow-lg"
                  priority
                  style={{
                    filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.15))'
                  }}
                />

                {/* 85% Card - Top Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...springTransition, delay: 0.5 }}
                  className="absolute -left-4 sm:-left-8 lg:-left-12 top-[15%] z-10"
                >
                  <motion.div
                    animate={floatAnimation}
                    className="glass-card-purple rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-xl"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-purple-700">85%</div>
                      <div className="text-purple-600/70 text-[10px] sm:text-xs">Earnings to you</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* ₹299 Card - Bottom Left */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...springTransition, delay: 0.6 }}
                  className="absolute -left-2 sm:-left-6 lg:-left-8 bottom-[20%] z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      transition: {
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: 0.5
                      }
                    }}
                    className="glass-card-yellow rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-xl"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                        <circle cx="12" cy="8" r="3"/>
                        <circle cx="7" cy="14" r="2.5"/>
                        <circle cx="17" cy="14" r="2.5"/>
                        <circle cx="12" cy="18" r="2"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-yellow-700">₹299</div>
                      <div className="text-yellow-600/70 text-[10px] sm:text-xs">Per event</div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* 7 Days Card - Right Side */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ ...springTransition, delay: 0.7 }}
                  className="absolute -right-4 sm:-right-8 lg:-right-10 top-[40%] z-10"
                >
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      transition: {
                        duration: 2.8,
                        repeat: Infinity,
                        ease: "easeInOut" as const,
                        delay: 1
                      }
                    }}
                    className="glass-card-coral rounded-2xl p-3 sm:p-4 flex items-center gap-2 sm:gap-3 shadow-xl"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="text-lg sm:text-xl font-bold text-orange-700">7 Days</div>
                      <div className="text-orange-600/70 text-[10px] sm:text-xs">Settlement</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function LiveEventsHero() {
  return (
    <section className="min-h-screen pt-24 pb-8 relative overflow-hidden">
      {/* Background gradient - lavender to white */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-100/80 via-purple-50/50 to-white" />

      {/* Decorative glow effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-yellow-300/25 rounded-full blur-[100px] translate-x-1/3" />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-purple-400/20 rounded-full blur-[80px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-200 rounded-full text-purple-600 text-sm font-semibold">
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
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.15]"
            >
              <span className="hero-gradient-text">Go Live.</span>{' '}
              <span className="text-gray-800">Build</span>
              <br />
              <span className="text-gray-800 italic">Your Audience.</span>
              <br />
              <span className="hero-gradient-text">Earn in Real-Time.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Host live classes, workshops, launches, or shows. Sell tickets or go free. Get paid directly.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="mb-4"
            >
              <a
                href="https://app.vdogate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                Create Live Event – ₹299
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Caption */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="text-gray-500 text-sm"
            >
              No subscription • Pay per event
            </motion.p>
          </div>

          {/* Right column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            {/* Hero graphic container */}
            <div className="relative w-full max-w-lg lg:max-w-xl">
              {/* Placeholder for hero image - replace with actual image when available */}
              <div className="relative aspect-square">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 via-transparent to-yellow-400/30 rounded-full blur-2xl scale-110" />

                {/* Hero image - using the provided image path */}
                <Image
                  src="/hero-live-events.png"
                  alt="VDOgate Live Events - Host live sessions and earn"
                  fill
                  className="object-contain relative z-10"
                  priority
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />

                {/* Fallback placeholder if no image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-[500px] bg-gradient-to-b from-purple-100 to-purple-50 rounded-[3rem] border-4 border-purple-200 shadow-2xl flex items-center justify-center">
                    <div className="text-center p-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-purple-600 font-medium text-sm">Live Stream</p>
                      <p className="text-purple-400 text-xs mt-1">1124 watching</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Cards - Glassmorphic */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...springTransition, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 lg:mt-0"
        >
          {/* 85% Card */}
          <div className="glass-card-purple rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z"/>
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-700">85%</div>
              <div className="text-purple-600/70 text-sm">Earnings go directly to you</div>
            </div>
          </div>

          {/* ₹299 Card */}
          <div className="glass-card-yellow rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z"/>
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-700">₹299</div>
              <div className="text-yellow-600/70 text-sm">Pay per event</div>
            </div>
          </div>

          {/* 7 Days Card */}
          <div className="glass-card-coral rounded-2xl p-6 flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zM9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm-8 4H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2z"/>
              </svg>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-700">7 Days</div>
              <div className="text-orange-600/70 text-sm">Fast settlement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

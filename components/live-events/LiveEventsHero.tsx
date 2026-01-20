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
    <section className="min-h-screen pt-24 pb-8 relative overflow-hidden bg-white">

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        {/* Main hero content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-4 items-center min-h-[70vh]">
          {/* Left column - Text content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
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

          {/* Right column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="relative aspect-square">
                <Image
                  src="/hero_vec.png"
                  alt="VDOgate Live Events - Host live sessions and earn"
                  fill
                  className="object-contain"
                  priority
                />
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
          <div className="glass-card-purple rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5 hygiene16L3 5l5.5 3 L12 2l3.5 6L21 5l-2 11H5zm2.3-2h9.4l1.2-6.5-3.3 1.8L12 5.3l-2.6 4-3.3-1.8L7.3 14z"/>
                <path d="M12 17c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4z"/>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-700">85%</div>
              <div className="text-purple-600/70 text-sm">Earnings go directly to you</div>
            </div>
          </div>

          {/* ₹299 Card */}
          <div className="glass-card-yellow rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="9" cy="8" r="2"/>
                <circle cx="15" cy="8" r="2"/>
                <circle cx="12" cy="14" r="3"/>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-700">₹299</div>
              <div className="text-yellow-600/70 text-sm">Pay per event</div>
            </div>
          </div>

          {/* 7 Days Card */}
          <div className="glass-card-coral rounded-2xl p-5 flex items-center gap-4">
            <div className="w-11 h-11 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"/>
              </svg>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-700">7 Days</div>
              <div className="text-orange-600/70 text-sm">Fast settlement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

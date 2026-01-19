'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { SunBlob, CloudBlob } from '@/components/ui/PlayfulBlob'
import { Sparkle, Star } from '@/components/ui/DecorativeAccent'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function LiveEventsHero() {
  return (
    <section className="min-h-screen pt-24 pb-16 relative overflow-hidden bg-white flex items-center">
      {/* Decorative blob shapes */}
      <div className="absolute top-20 right-0 md:right-10 w-48 md:w-72 lg:w-96 opacity-80 pointer-events-none">
        <SunBlob color="yellow" animate className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-0 md:left-10 w-40 md:w-56 lg:w-72 opacity-60 pointer-events-none">
        <CloudBlob color="purple" animate className="w-full h-full" />
      </div>

      {/* Small decorative elements */}
      <div className="absolute top-40 left-20 hidden lg:block">
        <Star color="yellow" size="md" />
      </div>
      <div className="absolute bottom-40 right-20 hidden lg:block">
        <Sparkle color="purple" size="lg" />
      </div>
      <div className="absolute top-1/2 right-1/4 hidden md:block">
        <Sparkle color="orange" size="sm" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Main content - takes 3 columns */}
          <div className="lg:col-span-3 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
                <span className="w-2 h-2 bg-playful-purple rounded-full animate-pulse" />
                LIVE EVENTS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-black mb-6 tracking-tight leading-[1.1]"
            >
              Easy to{' '}
              <span className="text-playful-purple">Host.</span>
              <br />
              Easy to{' '}
              <span className="relative inline-block">
                <span className="text-playful-orange">Earn.</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round">
                  <path d="M2,8 Q30,2 60,8 Q90,14 118,6" />
                </svg>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-xl mx-auto lg:mx-0 mb-4"
            >
              Earn through live sessions. Create events, sell tickets, or invite attendees for free.
            </motion.p>

            {/* Price highlight */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="text-base md:text-lg text-gray-700 mb-8"
            >
              <span className="text-playful-purple font-bold text-2xl md:text-3xl">₹299</span>
              <span className="text-gray-500"> per live event. No subscriptions. No commitments.</span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://app.vdogate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-playful-purple text-white rounded-full font-bold text-lg shadow-playful hover:shadow-playful-lg hover:scale-[1.03] transition-all duration-300 btn-shine"
              >
                Create a Live Event – ₹299
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-playful-yellow/20 border-2 border-playful-yellow text-playful-purple-dark rounded-full font-bold text-lg hover:bg-playful-yellow/40 transition-all duration-300"
              >
                See How It Works
                <ChevronDown className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          {/* Stats bento cards - takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...springTransition, delay: 0.5 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {/* 85% Card - Large */}
            <div className="col-span-2 bg-playful-purple rounded-3xl p-6 text-center playful-card-hover">
              <div className="text-5xl md:text-6xl font-bold text-white mb-2">85%</div>
              <div className="text-white/80 font-medium">Earnings to you</div>
            </div>

            {/* ₹299 Card */}
            <div className="bg-playful-yellow rounded-3xl p-5 text-center playful-card-hover">
              <div className="text-3xl md:text-4xl font-bold text-playful-purple-dark mb-1">₹299</div>
              <div className="text-playful-purple-dark/70 text-sm font-medium">Per event</div>
            </div>

            {/* 7 Days Card */}
            <div className="bg-playful-orange/20 border-2 border-playful-orange rounded-3xl p-5 text-center playful-card-hover">
              <div className="text-3xl md:text-4xl font-bold text-playful-orange mb-1">7 days</div>
              <div className="text-playful-orange/70 text-sm font-medium">Settlement</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-playful-purple/30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-playful-purple rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

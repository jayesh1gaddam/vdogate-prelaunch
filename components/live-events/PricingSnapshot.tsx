'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { SunBlob } from '@/components/ui/PlayfulBlob'
import { Star, Confetti } from '@/components/ui/DecorativeAccent'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function PricingSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-playful-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 opacity-50 pointer-events-none hidden lg:block">
        <SunBlob color="yellow" animate className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 left-10 hidden lg:block">
        <Star color="purple" size="lg" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
            Simple, transparent{' '}
            <span className="text-playful-gradient">pricing</span>
          </h2>
        </motion.div>

        {/* Bento Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Pricing Card - Purple */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="lg:col-span-2 bg-playful-purple rounded-3xl p-8 text-white shadow-playful-lg"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Create a live event</h3>
                <p className="text-white/70">One-time fee per event</p>
              </div>
              <div className="px-6 py-3 bg-playful-yellow rounded-2xl">
                <span className="text-4xl md:text-5xl font-bold text-playful-purple-dark">₹299</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white/90">Choose your earning model:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-playful-mint rounded-full" />
                    <span className="font-bold">Paid tickets</span>
                  </div>
                  <p className="text-playful-yellow font-semibold">Starting from ₹99/hour</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/10 border border-white/20">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-playful-pink rounded-full" />
                    <span className="font-bold">Free / Sponsored</span>
                  </div>
                  <p className="text-playful-yellow font-semibold">₹25 per attendee</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Earnings Highlight - Yellow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="bg-playful-yellow rounded-3xl p-8 text-center relative overflow-hidden shadow-playful-yellow"
          >
            {/* Confetti decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-30">
              <Confetti />
            </div>

            <div className="relative z-10">
              <p className="text-playful-purple-dark/70 font-bold mb-2">Your Earnings</p>
              <div className="text-6xl md:text-7xl font-bold text-playful-purple-dark mb-2">85%</div>
              <p className="text-playful-purple-dark/70">After platform fee</p>
            </div>
          </motion.div>

          {/* Platform Fee Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="bg-white rounded-3xl p-6 border-2 border-gray-200 shadow-playful-card"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-brand-black mb-1">Platform fee</h4>
                <p className="text-gray-500 text-sm">From ticket earnings</p>
              </div>
              <div className="text-3xl font-bold text-gray-400">15%</div>
            </div>
          </motion.div>

          {/* Settlement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="lg:col-span-2 bg-playful-mint rounded-3xl p-6 text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Settlement in ~7 days</h4>
                  <p className="text-white/70 text-sm">Statutory deductions (TDS/TCS ~1-2%)</p>
                </div>
              </div>
              <a
                href="https://app.vdogate.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-playful-mint rounded-full font-bold hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Calendar, Ticket, Share2, Wallet, Check, Gift } from 'lucide-react'
import { CloudBlob } from '@/components/ui/PlayfulBlob'
import { Sparkle } from '@/components/ui/DecorativeAccent'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function HowItWorksLive() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-40 opacity-40 pointer-events-none hidden lg:block">
        <CloudBlob color="yellow" animate className="w-full h-full" />
      </div>
      <div className="absolute bottom-20 left-0 w-32 opacity-30 pointer-events-none hidden lg:block">
        <CloudBlob color="purple" animate className="w-full h-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
            Four simple steps to
            <br />
            <span className="text-playful-gradient">
              start earning
            </span>
          </h2>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Step 1 - Create Event (Purple) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="relative p-6 md:p-8 rounded-3xl bg-playful-purple text-white shadow-playful-lg playful-card-hover"
          >
            <div className="flex items-start gap-4 mb-5">
              {/* Creative Step Number */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center border-2 border-white/40 shadow-lg">
                  <span className="text-3xl font-black text-white drop-shadow-sm">1</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-playful-yellow rounded-full animate-pulse"></div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-playful-purple" />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white">Create a Live Event</h3>
              <span className="px-3 py-1 bg-playful-yellow text-playful-purple-dark rounded-full font-bold text-lg">
                ₹299
              </span>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {['One-time fee per event', 'Set date, time and event details', 'Create tickets and get a shareable link', 'No subscriptions or recurring charges'].map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-white/90">
                  <Check className="w-5 h-5 text-playful-yellow mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Step 2 - Choose Earning Model (Yellow) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="relative p-6 md:p-8 rounded-3xl bg-playful-yellow shadow-playful-yellow playful-card-hover"
          >
            <div className="flex items-start gap-4 mb-5">
              {/* Creative Step Number */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-playful-purple/90 to-playful-purple flex items-center justify-center border-2 border-playful-purple shadow-lg">
                  <span className="text-3xl font-black text-white drop-shadow-sm">2</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-playful-orange rounded-full animate-pulse"></div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-playful-purple flex items-center justify-center flex-shrink-0">
                <Ticket className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-sm">Choose How You Earn</h3>
            <p className="text-white/80 mb-5 drop-shadow-sm">Pick one model per event</p>

            <div className="grid grid-cols-1 gap-4">
              {/* Option A */}
              <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-white/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-playful-mint flex items-center justify-center">
                    <Ticket className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white drop-shadow-sm">Paid Tickets</h4>
                    <p className="text-sm text-white/80">Starting from ₹99/hour</p>
                  </div>
                </div>
              </div>

              {/* Option B */}
              <div className="p-4 rounded-2xl bg-white/30 backdrop-blur-sm border-2 border-white/40">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-playful-pink flex items-center justify-center">
                    <Gift className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white drop-shadow-sm">Free / Sponsored</h4>
                    <p className="text-sm text-white/80">You pay ₹25 per attendee</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 - Share (Orange) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-3xl bg-playful-orange text-white shadow-lg playful-card-hover"
          >
            <div className="flex items-start gap-4 mb-5">
              {/* Creative Step Number */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center border-2 border-white/40 shadow-lg">
                  <span className="text-3xl font-black text-white drop-shadow-sm">3</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-playful-yellow rounded-full animate-pulse"></div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                <Share2 className="w-7 h-7 text-playful-orange" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Share Your Event</h3>
            <p className="text-white/80 mb-4">Share your event link on:</p>
            <div className="flex flex-wrap gap-2">
              {['Instagram', 'WhatsApp', 'YouTube', 'Communities', 'Mailing lists'].map((platform) => (
                <span key={platform} className="px-4 py-2 bg-white/20 rounded-full text-white font-medium text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Step 4 - Host & Earn (Mint/Green) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.3 }}
            className="relative p-6 md:p-8 rounded-3xl bg-playful-mint text-white shadow-lg playful-card-hover"
          >
            <div className="flex items-start gap-4 mb-5">
              {/* Creative Step Number */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-white/30 to-white/10 flex items-center justify-center border-2 border-white/40 shadow-lg">
                  <span className="text-3xl font-black text-white drop-shadow-sm">4</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-playful-yellow rounded-full animate-pulse"></div>
              </div>
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center flex-shrink-0">
                <Wallet className="w-7 h-7 text-playful-mint" />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Host & Earn</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-white/20 text-center">
                <div className="text-3xl font-bold mb-1">85%</div>
                <p className="text-sm text-white/80">Earnings to you</p>
              </div>
              <div className="p-4 rounded-2xl bg-white/10 text-center">
                <div className="text-3xl font-bold mb-1">15%</div>
                <p className="text-sm text-white/80">Platform fee</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10">
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-playful-yellow" />
                  Statutory deductions (TDS/TCS ~1% each)
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-playful-yellow" />
                  <span className="font-semibold">Settlement in ~7 days</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

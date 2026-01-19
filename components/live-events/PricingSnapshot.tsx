'use client'

import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingSnapshot() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-6">
            TRANSPARENT PRICING
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Simple, transparent pricing
          </h2>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900/80 border border-slate-700 overflow-hidden"
        >
          {/* Event Creation Fee */}
          <div className="p-6 md:p-8 border-b border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-1">
                  Create a live event
                </h3>
                <p className="text-slate-400">One-time fee per event</p>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-emerald-400">
                ₹299
              </div>
            </div>
          </div>

          {/* Earning Models */}
          <div className="p-6 md:p-8 border-b border-slate-700">
            <h4 className="text-lg font-semibold text-white mb-4">Choose your earning model:</h4>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full" />
                  <span className="text-white font-medium">Paid tickets</span>
                </div>
                <span className="text-emerald-400 font-semibold">Starting from ₹99/hour</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-violet-400 rounded-full" />
                  <span className="text-white font-medium">Free / Sponsored tickets</span>
                </div>
                <span className="text-violet-400 font-semibold">₹25 per attendee</span>
              </div>
            </div>
          </div>

          {/* Platform Fee */}
          <div className="p-6 md:p-8 border-b border-slate-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Platform fee</h4>
                <p className="text-slate-400">Deducted from ticket earnings</p>
              </div>
              <div className="text-2xl md:text-3xl font-bold text-slate-300">
                15%
              </div>
            </div>
          </div>

          {/* Your Earnings */}
          <div className="p-6 md:p-8 border-b border-slate-700 bg-emerald-500/5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-emerald-400 mb-1">Your earnings</h4>
                <p className="text-slate-400">After platform fee</p>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                85%
              </div>
            </div>
          </div>

          {/* Statutory Deductions */}
          <div className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Statutory deductions</h4>
                <p className="text-slate-400">TDS and/or TCS as applicable</p>
              </div>
              <div className="text-xl md:text-2xl font-semibold text-slate-400">
                ~1-2%
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-[1.02] transition-all duration-300"
          >
            Create a Live Event – ₹299
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

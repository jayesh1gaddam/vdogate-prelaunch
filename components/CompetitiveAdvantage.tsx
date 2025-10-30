'use client'

import { motion } from 'framer-motion'
import { Check, X, Rocket, Award, Star, Zap } from 'lucide-react'

const comparison = [
  { feature: 'Revenue Share', vdogate: '85% to creators', competitors: '~55% (after ads)' },
  { feature: 'Discovery', vdogate: 'Category + Location Search', competitors: 'Algorithm-dependent' },
  { feature: 'Professional Tools', vdogate: 'Booking, leads, dashboard', competitors: 'DMs and hoping' },
  { feature: 'Audience Ownership', vdogate: 'Direct connections', competitors: 'Platform owns relationship' },
  { feature: 'Business Focus', vdogate: 'Built for monetization', competitors: 'Built for engagement' },
]

const foundingBenefits = [
  { icon: Award, text: 'Lifetime 95% revenue share (vs standard 90%)' },
  { icon: Star, text: 'Premium profile badge' },
  { icon: Zap, text: 'Priority in search results' },
  { icon: Rocket, text: 'Free featured listing (3 months)' },
]

export default function CompetitiveAdvantage() {
  return (
    <section className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-neutral-background">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            Why Creators Choose <span className="text-gradient">VDOgate</span>
          </h2>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 bg-gradient-to-r from-portal-primary to-portal-lighter p-6">
            <div className="text-white font-semibold text-lg">Feature</div>
            <div className="text-white font-semibold text-lg text-center">VDOgate</div>
            <div className="text-white font-semibold text-lg text-center">Social Platforms</div>
          </div>

          {/* Table Rows */}
          {comparison.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`grid grid-cols-3 gap-4 p-6 ${
                index !== comparison.length - 1 ? 'border-b border-neutral-gray-lighter' : ''
              }`}
            >
              <div className="font-medium text-neutral-black">{row.feature}</div>
              <div className="flex items-center justify-center gap-2 text-gate-blue font-semibold text-center">
                <Check className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">{row.vdogate}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-neutral-gray text-center">
                <X className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm md:text-base">{row.competitors}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Founding Creator Callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-portal-primary to-portal-dark rounded-3xl p-8 md:p-10 text-white relative overflow-hidden border border-white/20 shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            </div>

            {/* Glassy floating elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 backdrop-blur-md rounded-full border border-white/20" />
            <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 rotate-12" />
            <div className="absolute top-1/2 left-10 w-16 h-16 bg-white/10 backdrop-blur-md rounded-xl border border-white/20 -rotate-6" />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-lg">
                  <Rocket className="w-6 h-6 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-headline-md bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-lg">Founding Creator Advantage</h3>
              </div>

              <p className="text-lg mb-6 text-white/95 drop-shadow-md">First 500 creators get:</p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {foundingBenefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-3 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
                      <div className="w-9 h-9 bg-white/30 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0 border border-white/40 shadow-md">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-base text-white/95 drop-shadow-md">{benefit.text}</p>
                    </div>
                  )
                })}
              </div>

              <div className="flex justify-center">
                <button
                  onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/95 backdrop-blur-md text-portal-primary rounded-xl font-semibold text-lg hover:bg-white transition-all duration-300 hover:scale-105 shadow-xl border border-white/50"
                >
                  Claim Your Founding Spot
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

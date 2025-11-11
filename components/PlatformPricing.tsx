'use client'

import { motion } from 'framer-motion'
import PricingCard from './ui/pricing-card'
import PricingAddons from './ui/pricing-addons'

export default function PlatformPricing() {
  return (
    <section id="platform-pricing" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-neutral-50">
      {/* Lightweight Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-br from-emerald-200/20 to-green-300/20 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-bl from-cyan-200/15 to-blue-300/15 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full blur-3xl bg-gradient-to-tr from-teal-200/15 to-emerald-300/15 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '25s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 bg-gradient-to-r from-emerald-100 to-green-100 border border-emerald-200 rounded-full">
              <span className="text-sm font-bold text-emerald-700 uppercase tracking-wide">Platform Pricing</span>
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto">
            Built for freelancers, by people who understand the value of your work
          </p>
        </motion.div>

        {/* Context Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-base md:text-lg text-neutral-gray leading-relaxed mb-6">
            Yet most depend on social media where algorithms and ad budgets limit opportunity.
          </p>
          <p className="text-base md:text-lg font-semibold text-brand-black leading-relaxed mb-8">
            VDOgate is built for this moment — India's own platform that values skill over ad spend.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <PricingCard />

        {/* Optional Add-Ons */}
        <PricingAddons />
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Video, Eye, Database, Sparkles } from 'lucide-react'

const addons = [
  {
    icon: Video,
    title: 'Additional Video Upload Minutes (Storage)',
    description: 'Increase portfolio Videos beyond 40 minutes',
    pricing: '₹100 per additional 40 minutes',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Eye,
    title: 'Additional Viewer Delivery / Watch-Time',
    description: 'Increase viewer consumption beyond 4,000 mins',
    pricing: '₹150 per additional 1,000 minutes',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Database,
    title: 'Additional Storage',
    description: 'Retain more video content permanently',
    pricing: 'Pricing aligned with capacity usage model',
    color: 'from-green-400 to-emerald-500',
    bgColor: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
  },
]

export default function PricingAddons() {
  return (
    <div className="mt-16 md:mt-20">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="inline-block mb-4"
        >
          <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-indigo-100 border border-purple-200 rounded-full">
            <span className="text-sm font-bold text-purple-700 uppercase tracking-wide">ADD-ONS (OPTIONAL — PAY ONLY AS YOU GROW)</span>
          </div>
        </motion.div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
          Expand Your Income Opportunities
        </h3>
        <p className="text-base md:text-lg text-neutral-gray max-w-2xl mx-auto mb-6">
          Add-ons allow scaling without forcing all subscribers to pay higher fixed pricing.
        </p>
      </motion.div>

      {/* Addons Grid */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
        {addons.map((addon, index) => {
          const Icon = addon.icon
          return (
            <motion.div
              key={index}
              className={`relative group bg-gradient-to-br ${addon.bgColor} rounded-2xl border-2 ${addon.borderColor} p-6 md:p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Background Gradient Orb */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${addon.color} opacity-20 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />

              {/* Icon */}
              <motion.div
                className={`relative z-10 w-14 h-14 rounded-xl bg-gradient-to-br ${addon.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="w-7 h-7 text-white" />
              </motion.div>

              {/* Content */}
              <div className="relative z-10">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                  {addon.title}
                </h4>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                  {addon.description}
                </p>
                <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-gray-200">
                  <p className="text-sm font-bold text-gray-900">{addon.pricing}</p>
                </div>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Why Add-Ons Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="max-w-4xl mx-auto mb-10"
      >
        <div className="glass bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-indigo-200/40 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Why Add-Ons?</h4>
          </div>

          <ul className="space-y-3">
            {[
              'Keep subscription cost low',
              'Support high-growth creators only when needed',
              'No forced upgrades',
              'No penalties for growing fast'
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-base text-neutral-gray-dark">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 pt-6 border-t border-indigo-200">
            <p className="text-center text-lg font-bold text-indigo-900 italic">
              Start with essentials. Expand only when success demands.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="text-center max-w-4xl mx-auto"
      >
        <p className="text-sm md:text-base text-neutral-gray-dark leading-relaxed mb-4">
          All add-ons require the base <span className="font-bold text-emerald-600">₹2,999/month subscription</span> • Use as needed to maximize your income
        </p>
        <p className="text-sm md:text-base text-neutral-gray">
          <span className="font-semibold text-brand-black">Pre-launch registration is free</span> - Followed by one month free trial
        </p>
      </motion.div>
    </div>
  )
}

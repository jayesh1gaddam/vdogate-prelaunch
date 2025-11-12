'use client'

import { motion } from 'framer-motion'
import { Video, Ticket } from 'lucide-react'

const addons = [
  {
    icon: Video,
    title: 'Live Events*',
    description: 'Host live workshops, webinars, or training sessions for your audience',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50',
    borderColor: 'border-purple-200',
  },
  {
    icon: Ticket,
    title: 'Ticketed Shows*',
    description: 'Organize paid performances, exhibitions, or shows and sell tickets directly',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
    borderColor: 'border-blue-200',
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
            <span className="text-sm font-bold text-purple-700 uppercase tracking-wide">Additional Features (Add-Ons)</span>
          </div>
        </motion.div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
          Expand Your Income Opportunities
        </h3>
        <p className="text-base md:text-lg text-neutral-gray max-w-2xl mx-auto">
          Unlock additional features at affordable prices to grow your business
        </p>
      </motion.div>

      {/* Addons Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {addon.description}
                </p>
              </div>

              {/* Hover Shine Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Bottom Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-10 text-center max-w-4xl mx-auto"
      >
        <p className="text-sm md:text-base text-neutral-gray-dark leading-relaxed mb-4">
          All add-ons require the base <span className="font-bold text-emerald-600">₹2,999/month subscription</span> • Use one or both to maximize your income
        </p>
        <p className="text-sm md:text-base text-neutral-gray">
          <span className="font-semibold text-brand-black">Pre-launch registration is free</span> - Followed by one month free trial
        </p>
      </motion.div>
    </div>
  )
}

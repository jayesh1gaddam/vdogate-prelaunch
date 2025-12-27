'use client'

import { motion } from 'framer-motion'
import { Search, Video, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react'

const buyerSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse by Category & Location',
    description: 'Find the right freelancer for your needs',
    detail: 'Search for freelancers in your city or across India (even online), filtered by the service category you need.',
  },
  {
    number: '02',
    icon: Video,
    title: 'Watch Video Profiles',
    description: 'See real skills before you decide',
    detail: 'Preview freelancer skills through their video portfolios before making any commitment.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect Directly',
    description: 'No middlemen, no platform fees',
    detail: 'Reach out to your chosen freelancer and discuss your requirements directly.',
  },
]

const activeColor = { from: 'from-blue-500', to: 'to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' }

export default function HowItWorksBuyers() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-blue-50/30">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f603_1px,transparent_1px),linear-gradient(to_bottom,#3b82f603_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs - Optimized with CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-blue-200/30 to-cyan-200/20 animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-cyan-200/20 to-blue-200/20 animate-pulse" style={{ animationDuration: '18s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/50 border rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Simple & Free for Buyers</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 tracking-tight">
            How <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">VDOgate</span> Works
          </h2>

          <p className="text-lg md:text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            Find and hire trusted freelancers in 3 simple steps.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {buyerSteps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white rounded-3xl p-8 shadow-elevation-2 border border-neutral-gray-lighter hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-2">
                  {/* Number Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${activeColor.from} ${activeColor.to} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 150 }}
                    className={`relative w-14 h-14 bg-gradient-to-br ${activeColor.from} ${activeColor.to} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                    <Icon className="w-7 h-7 text-white relative z-10" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-brand-black mb-4 leading-tight">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-neutral-gray-dark leading-relaxed mb-4">
                    {step.description}
                  </p>

                  {/* Detail with Icon */}
                  <div className={`flex items-start gap-3 p-4 ${activeColor.bg} rounded-xl border ${activeColor.border}`}>
                    <CheckCircle2 className={`w-5 h-5 ${activeColor.text} flex-shrink-0 mt-0.5`} />
                    <p className="text-sm text-neutral-gray-dark leading-relaxed">
                      {step.detail}
                    </p>
                  </div>

                  {/* Decorative Bottom Accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                    className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeColor.from} ${activeColor.to} rounded-b-3xl`}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

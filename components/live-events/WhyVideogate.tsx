'use client'

import { motion } from 'framer-motion'
import { CreditCard, Sliders, ToggleLeft, Share, Clock, Sparkles } from 'lucide-react'

const benefits = [
  {
    icon: CreditCard,
    title: 'No monthly subscriptions',
    description: 'Pay per event, not per month. No recurring charges.'
  },
  {
    icon: Sliders,
    title: 'Full control over pricing',
    description: 'Set your own ticket prices. Earn what you deserve.'
  },
  {
    icon: ToggleLeft,
    title: 'Paid or free events',
    description: 'Host paid tickets or sponsored events. Your choice.'
  },
  {
    icon: Share,
    title: 'No algorithms',
    description: 'No reach restrictions. You control distribution.'
  },
  {
    icon: Clock,
    title: 'Fast settlements',
    description: 'Get paid within 7 days after your event.'
  },
  {
    icon: Sparkles,
    title: 'Simple platform',
    description: 'Create events in minutes. No technical skills needed.'
  }
]

export default function WhyVideogate() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-t from-indigo-500/10 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
            WHY VDOGATE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            You focus on your live session.
            <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              We handle tickets and payments.
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-6 h-6 text-emerald-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm md:text-base">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { IndianRupee, Check, Info, Sparkles, Video, Eye, MessageSquare, TrendingUp } from 'lucide-react'
import AnimatedCounter from './animated-counter'

export default function PricingCard() {

  const entitlements = [
    {
      icon: Video,
      category: 'Video Portfolio',
      color: 'from-purple-500 to-indigo-600',
      items: [
        'Upload up to 80 minutes of video each month',
        'Videos stored & visible for 2 months',
        'If total remains within 80 minutes, videos are never purged',
        'Exceeding 80 minutes auto-removes only the oldest video'
      ]
    },
    {
      icon: TrendingUp,
      category: 'Discovery',
      color: 'from-orange-500 to-amber-600',
      items: [
        'Based on category & location (online / offline / hybrid)',
        'No algorithms, no suppression, no ad boosting, no sponsorships'
      ]
    },
    {
      icon: Eye,
      category: 'Viewer Delivery',
      color: 'from-blue-500 to-cyan-600',
      items: ['4,000 minutes of viewer watch time of your videos per month']
    },
    {
      icon: MessageSquare,
      category: 'Earnings & Communication',
      color: 'from-green-500 to-emerald-600',
      items: [
        'Direct buyer- seller contact',
        'Zero commission to VDOgate on direct services'
      ]
    }
  ]

  return (
    <div className="relative">
      {/* Lightweight Static Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-emerald-200/20 to-green-300/20 animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-3xl bg-gradient-to-tl from-orange-200/15 to-amber-300/15 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      {/* Main Pricing Card */}
      <motion.div
        className="relative max-w-4xl mx-auto group"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Simple Border Gradient */}
        <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-500 opacity-75" />

        {/* Card Content */}
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-100/50 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200/50 rounded-full mb-6"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-bold text-emerald-700">₹2,999/month, All core features included</span>
          </motion.div>

          <p className="text-base text-neutral-gray mb-6">No hidden fees. No forced upgrades.</p>

          {/* Main Price Display */}
          <div className="mb-8 relative z-10">
            <motion.div
              className="flex items-baseline justify-center gap-2 mb-3"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
            >
              <IndianRupee className="w-10 h-10 md:w-12 md:h-12 text-emerald-600 mb-2" />
              <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                <AnimatedCounter to={2999} duration={2000} />
              </span>
              <span className="text-2xl md:text-3xl font-semibold text-gray-600">/month</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-3 text-lg text-emerald-700"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <span className="font-medium">Just</span>
              <div className="px-4 py-2 bg-emerald-100 rounded-xl border-2 border-emerald-200">
                <span className="font-bold">₹100/day</span>
              </div>
              <span className="font-medium">to reach the world</span>
            </motion.div>
          </div>

          {/* Subscriber Entitlements */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-6 text-center">Subscriber Entitlements</h3>

            <div className="space-y-6">
              {entitlements.map((entitlement, index) => {
                const Icon = entitlement.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="border-l-4 border-emerald-500 pl-6 py-3"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${entitlement.color} rounded-xl flex items-center justify-center shadow-md`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-lg font-bold text-brand-black">{entitlement.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {entitlement.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-2 text-sm text-neutral-gray-dark">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Live Events Pricing */}
          <motion.div
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <h4 className="text-lg font-bold text-purple-900 mb-4 text-center flex items-center justify-center gap-2">
              <span className="text-3xl font-black text-purple-600">+</span>
              <span>Live Events</span>
            </h4>
            <div className="flex items-center justify-between">
              <div className="text-center flex-1">
                <p className="text-sm text-purple-700 font-medium mb-1">You keep</p>
                <p className="text-3xl font-bold text-green-700">85%</p>
              </div>
              <div className="w-px h-12 bg-purple-300"></div>
              <div className="text-center flex-1">
                <p className="text-sm text-purple-700 font-medium mb-1">VDOgate fee</p>
                <p className="text-3xl font-bold text-purple-900">15%</p>
              </div>
            </div>
          </motion.div>

          {/* Bottom Notice */}
          <motion.div
            className="bg-gradient-to-r from-emerald-50 via-green-50 to-emerald-50 border-l-4 border-emerald-500 rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
          >
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-emerald-900 mb-1">
                  Pre-launch Registration is 100% Free
                </p>
                <p className="text-sm text-emerald-700">
                  Lock in your profile now. Subscription begins only after platform launch. No hidden fees, ever.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </div>
  )
}

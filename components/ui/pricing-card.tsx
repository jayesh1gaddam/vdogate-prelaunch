'use client'

import { motion } from 'framer-motion'
import { IndianRupee, Check, Info, Sparkles } from 'lucide-react'
import AnimatedCounter from './animated-counter'

export default function PricingCard() {

  const features = [
    { icon: Check, text: 'Fair Pricing — Keep What You Earn', highlight: '' },
    { icon: Check, text: 'Zero Commission on Services', highlight: '' },
    { icon: Check, text: 'Searchable by Category & Location', highlight: '' },
    { icon: Check, text: 'Video Profile Showcase', highlight: '' },
    { icon: Check, text: 'Direct Client Connections', highlight: '' },
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
        className="relative max-w-2xl mx-auto group"
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
            <span className="text-sm font-bold text-emerald-700">Simple, Transparent Pricing</span>
          </motion.div>

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
              <span className="font-medium">to reach all of India</span>
            </motion.div>
          </div>

          {/* Features List */}
          <div className="space-y-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50/50 transition-colors duration-200 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Check className="w-4 h-4 text-emerald-600" />
                </div>
                <span className="text-base text-gray-700 font-medium">
                  {feature.highlight ? (
                    <>
                      {feature.text.split(feature.highlight)[0]}
                      <span className="text-emerald-600 font-bold">{feature.highlight}</span>
                      {feature.text.split(feature.highlight)[1]}
                    </>
                  ) : (
                    feature.text
                  )}
                </span>
              </motion.div>
            ))}
          </div>

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

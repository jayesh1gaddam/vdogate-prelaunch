'use client'

import { motion } from 'framer-motion'
import { Users, Ticket, Video, MessageCircle } from 'lucide-react'

export default function LiveEvents() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-neutral-background via-white to-portal-primary/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-portal-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-portal-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-4">
            Platform Pricing
          </h2>
          <p className="text-base md:text-lg text-neutral-gray max-w-3xl mx-auto">
            Simple, transparent pricing for freelancers
          </p>
        </motion.div>

        {/* Main Pricing Card - Platform Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-[0.2px] border-portal-primary/30">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-portal-gradient rounded-2xl mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-2">
                Freelancer Subscription
              </h3>
              <div className="text-5xl md:text-6xl font-bold text-portal-primary mb-2">
                ₹3,000<span className="text-2xl text-neutral-gray">/month</span>
              </div>
              <p className="text-base text-neutral-gray-dark">Approximately ₹100/day</p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {[
                'Profile listing by category & location',
                'Upload unlimited skills videos',
                'Connect directly with clients',
                'Get discovered fairly — no ads needed',
                'No commission on your services',
                'Keep 100% of what you earn from clients',
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-neutral-gray-dark">{feature}</span>
                </div>
              ))}
            </div>

            {/* Highlight Box */}
            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border-[0.2px] border-green-200 text-center">
              <p className="text-base md:text-lg font-bold text-green-800 mb-2">
                No Commission on Your Services
              </p>
              <p className="text-sm text-green-700">
                Keep 100% of what you earn from clients • Only pay the monthly subscription
              </p>
            </div>
          </div>
        </motion.div>

        {/* Add-Ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-2">
              Additional Features (Add-Ons)
            </h3>
            <p className="text-sm md:text-base text-neutral-gray">
              Expand your income opportunities with these optional features
            </p>
          </div>

          {/* Add-Ons Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Live Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-[0.2px] border-purple-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Video className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-black mb-2">
                Live Events*
              </h4>
              <p className="text-sm text-neutral-gray-dark">
                Host live workshops, webinars, or training sessions for your audience
              </p>
            </motion.div>

            {/* Ticketed Shows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border-[0.2px] border-blue-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <Ticket className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-black mb-2">
                Ticketed Shows*
              </h4>
              <p className="text-sm text-neutral-gray-dark">
                Organize paid performances, exhibitions, or shows and sell tickets directly
              </p>
            </motion.div>

            {/* 1-to-1 Customer Chat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-[0.2px] border-orange-200 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-brand-black mb-2">
                1-to-1 Customer Chat*
              </h4>
              <p className="text-sm text-neutral-gray-dark">
                Offer personalized consultations, coaching sessions, or meetings with customers
              </p>
            </motion.div>
          </div>

          {/* Add-Ons Note */}
          <div className="mt-6 text-center">
            <p className="text-xs md:text-sm text-neutral-gray-dark">
              All add-ons require the base ₹3,000/month subscription • Use one, two, or all three to maximize your income
            </p>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-10"
        >
          <p className="text-sm md:text-base text-neutral-gray-dark">
            <span className="font-semibold text-brand-black">Pre-launch registration is free.</span> Subscription begins only once the platform goes live.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

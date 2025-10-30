'use client'

import { motion } from 'framer-motion'
import { Calendar, Users, DollarSign, Zap, Ticket } from 'lucide-react'

export default function LiveEvents() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-pink-400 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 border border-purple-300 rounded-full mb-6"
          >
            <Ticket className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">New Feature</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Host <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Paid Live Events</span>
          </h2>
          <p className="text-xl text-neutral-gray max-w-3xl mx-auto">
            Earn from Every Ticket
          </p>
          <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto mt-2">
            Freelancers and influencers can conduct live sessions, workshops, or events for their audiences directly on the platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Calendar className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-black mb-3">Schedule Events</h3>
            <p className="text-neutral-gray text-sm">
              Create and schedule live workshops, webinars, or training sessions for your audience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-7 h-7 text-pink-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-black mb-3">Bring Your Followers</h3>
            <p className="text-neutral-gray text-sm">
              Invite your social media followers to attend paid events on VDOgate platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-brand-black mb-3">Earn from Tickets</h3>
            <p className="text-neutral-gray text-sm">
              Set your ticket price and earn directly. Platform fee: ₹500 activation + 15% of sales
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Premium Glass Card */}
          <div className="relative bg-white rounded-3xl p-1 shadow-2xl overflow-hidden">
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-3xl" />

            {/* Inner Content */}
            <div className="relative bg-white rounded-3xl p-8 md:p-12">
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500 rounded-full blur-3xl" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg"
                  >
                    <Zap className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-2">
                    Simple, Transparent Pricing
                  </h3>
                  <p className="text-lg text-neutral-gray">No hidden fees, no surprises</p>
                </div>

                {/* Fee Structure Grid */}
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                  {/* Activation Fee */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200"
                  >
                    <div className="text-center">
                      <div className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-3">
                        One-Time Setup
                      </div>
                      <div className="text-5xl font-bold text-purple-700 mb-2">₹500</div>
                      <div className="text-sm text-neutral-gray-dark">Per event activation</div>
                    </div>
                  </motion.div>

                  {/* Plus Symbol */}
                  <div className="flex items-center justify-center">
                    <div className="w-12 h-12 bg-neutral-background rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-neutral-gray">+</span>
                    </div>
                  </div>

                  {/* Platform Fee */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border-2 border-pink-200"
                  >
                    <div className="text-center">
                      <div className="text-sm font-semibold text-pink-600 uppercase tracking-wide mb-3">
                        Platform Fee
                      </div>
                      <div className="text-5xl font-bold text-pink-700 mb-2">15%</div>
                      <div className="text-sm text-neutral-gray-dark">On ticket sales only</div>
                    </div>
                  </motion.div>
                </div>

                {/* Example Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200"
                >
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                      <div className="text-sm font-semibold text-green-700 mb-1">Example: Event with 100 tickets at ₹500 each</div>
                      <div className="text-xs text-neutral-gray-dark">Total Revenue: ₹50,000 • Platform Fee: ₹8,000 (₹500 + 15% of ₹50,000)</div>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="text-3xl font-bold text-green-700">₹42,000</div>
                      <div className="text-sm text-green-600 font-semibold">You Keep (84%)</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <div className="text-center">
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Ticket className="w-6 h-6" />
                    Plan Your First Event
                  </motion.button>
                  <p className="text-sm text-neutral-gray mt-4">
                    No upfront commitment • Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

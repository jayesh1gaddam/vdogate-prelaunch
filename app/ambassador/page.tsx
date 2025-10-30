'use client'

import { motion } from 'framer-motion'
import { Users, Target, Gift, Award, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function AmbassadorPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container-custom max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-300 rounded-full mb-6"
          >
            <Sparkles className="w-5 h-5 text-orange-600" />
            <span className="text-sm font-semibold text-orange-700">VDOgate Revolution</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6"
          >
            Join the <span className="bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">VDOgate Revolution</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl text-neutral-gray mb-4"
          >
            Empower India's Freelancers
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg text-neutral-gray-dark max-w-3xl mx-auto"
          >
            India has over 50 million freelancers struggling to be discovered. The VDOgate Revolution empowers them — and you can be part of it.
          </motion.p>
        </div>
      </section>

      {/* Role Section */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
                Your Role as an Ambassador
              </h2>
              <p className="text-lg text-neutral-gray mb-6">
                As a VDOgate Student Ambassador, you'll digitally introduce freelancers and influencers to the platform, helping them showcase their skills and start earning.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-gray-dark">100% digital outreach (no fieldwork required)</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-gray-dark">Flexible working hours that fit your schedule</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <p className="text-neutral-gray-dark">Comprehensive training and support provided</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-3xl p-8 md:p-10 text-white shadow-2xl"
            >
              <Gift className="w-16 h-16 mb-6 drop-shadow-lg" />
              <h3 className="text-3xl font-bold mb-4">Your Rewards</h3>
              <div className="text-5xl font-bold mb-2">₹4,800</div>
              <p className="text-xl mb-6">for every paying freelancer you help onboard</p>
              <p className="text-sm opacity-90">
                All details will be mentioned in your Official Offer Letter upon selection
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">150</div>
              <p className="text-lg text-neutral-gray">Ambassadors Selected</p>
              <p className="text-sm text-neutral-gray-dark mt-1">Nationwide</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-lg text-neutral-gray">Digital Outreach</p>
              <p className="text-sm text-neutral-gray-dark mt-1">No fieldwork</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">₹4,800</div>
              <p className="text-lg text-neutral-gray">Per Onboarding</p>
              <p className="text-sm text-neutral-gray-dark mt-1">Unlimited earning potential</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-brand-black mb-6"
          >
            Ready to Make an Impact?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-neutral-gray mb-8"
          >
            You help freelancers discover the Platform. Together, we build India's Freelance Revolution.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-orange-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
          >
            Join the Revolution
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm text-neutral-gray mt-6"
          >
            Limited-time registration • 150 positions available nationwide
          </motion.p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

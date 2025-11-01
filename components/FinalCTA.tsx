'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-black via-portal-primary to-portal-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-1/4 w-96 h-96 bg-vdo-orange/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gate-blue/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Join VDOgate Before Launch
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-3xl mx-auto">
            Be among the first freelancers to showcase your skills on India's platform built for India's talent
          </p>
          <p className="text-base md:text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            Pre-launch registration is free • Limited spots available • Subscription begins only after platform launch
          </p>

          {/* Dual CTA */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Freelancers CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold mb-4 text-brand-black">For Freelancers</h3>
              <p className="text-base md:text-lg text-neutral-gray-dark mb-6">
                Register now for free early access
              </p>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Free pre-launch registration',
                  'Early access to platform features',
                  'No commission on your services',
                  'Fair discovery by category & location',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-sm md:text-base text-neutral-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Join the Platform – Free Pre-Launch Registration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Users CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-2xl font-bold text-white mb-4">For Customers</h3>
              <p className="text-base md:text-lg text-white/90 mb-6">
                Discover talented freelancers through authentic video profiles
              </p>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Browse by category & location',
                  'Watch skills videos before hiring',
                  'Connect directly with freelancers',
                  'No platform fees for customers',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vdo-orange flex-shrink-0" />
                    <span className="text-sm md:text-base text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled
                className="w-full px-8 py-4 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl font-semibold text-lg cursor-not-allowed opacity-60 relative"
              >
                Browse Freelancers
                <span className="absolute -top-2 -right-2 bg-vdo-orange text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

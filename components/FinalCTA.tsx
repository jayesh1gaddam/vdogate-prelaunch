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
          <h2 className="text-headline-lg md:text-display-md mb-6 text-white">
            Your Gateway to Creator Success <br className="hidden md:block" />
            <span className="text-vdo-orange">Starts Here</span>
          </h2>

          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Join the founding creator program and be part of India's creator revolution
          </p>

          {/* Dual CTA */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Creators CTA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 md:p-10"
            >
              <h3 className="text-headline-md mb-4">For Creators</h3>
              <p className="text-body-lg text-neutral-gray-dark mb-6">
                Join the Founding Creator Program
                <br />
                <span className="text-sm">Limited to first 500 creators</span>
              </p>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  '95% lifetime revenue share',
                  'Premium profile badge',
                  'Launch day advantage',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gate-blue flex-shrink-0" />
                    <span className="text-body-md text-neutral-gray-dark">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group"
              >
                Apply as Founding Creator
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
              <h3 className="text-headline-md text-white mb-4">For Learners</h3>
              <p className="text-body-lg text-white/90 mb-6">
                Be the first to discover amazing creators
                <br />
                <span className="text-sm">Get notified when we launch</span>
              </p>

              <ul className="space-y-3 mb-8 text-left">
                {[
                  'Video-first creator profiles',
                  'Verified professionals',
                  'Easy booking & payments',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-vdo-orange flex-shrink-0" />
                    <span className="text-body-md text-white/90">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open('mailto:hello@vdogate.com?subject=Join Waitlist', '_blank')}
                className="w-full px-8 py-4 bg-white/20 backdrop-blur border border-white/30 text-white rounded-xl font-semibold text-lg hover:bg-white/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
              >
                Join Waitlist
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

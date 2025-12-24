'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Video, MapPin, MessageSquare, Shield, Sparkles } from 'lucide-react'
import Link from 'next/link'

export default function BuyerFinalCTA() {
  const benefits = [
    { icon: Video, text: 'Watch skills videos before hiring' },
    { icon: MapPin, text: 'Browse by category & location' },
    { icon: MessageSquare, text: 'Connect directly with freelancers' },
    { icon: CheckCircle2, text: 'No platform fees - free forever' },
    { icon: Shield, text: 'Verified profiles with real work samples' }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise-cta">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise-cta)" opacity="0.05" />
        </svg>
      </div>

      {/* Static Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-[32px] blur-xl" />

            {/* Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-[32px] p-8 md:p-12 lg:p-16 border border-white/10 shadow-2xl">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">Start Your Search Today</span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6"
              >
                Ready to Find Your{' '}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Perfect Freelancer?
                </span>
              </motion.h2>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg md:text-xl text-blue-200/80 text-center mb-10 max-w-2xl mx-auto"
              >
                Join thousands of buyers who found skilled freelancers through video portfolios.
                No fees, no middlemen, just direct connections.
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
              >
                {benefits.slice(0, 3).map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium text-white/90">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Additional Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-4 mb-10"
              >
                {benefits.slice(3).map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium text-white/80">{benefit.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="https://app.vdogate.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Start Discovering Freelancers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <Link
                  href="/freelancers"
                  className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-xl font-semibold text-base md:text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  I'm a Freelancer
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              {/* Trust Note */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="text-center text-sm text-blue-300/60 mt-8"
              >
                Free to browse and connect. No credit card required.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

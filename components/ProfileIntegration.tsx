'use client'

import { motion } from 'framer-motion'
import { Share2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const platforms = [
  { name: 'Upwork', logo: '/images/platforms/upwork.svg' },
  { name: 'Freelancer', logo: '/images/platforms/freelancer.svg' },
  { name: 'Fiverr', logo: '/images/platforms/fiverr.svg' },
  { name: 'LinkedIn', logo: '/images/platforms/linkedin.svg' },
]

const benefits = [
  'Add your VDOgate profile link to proposals',
  'Let clients see your real work before they hire',
  'Stand out from text-only profiles',
  'Build trust with video proof of skills',
]

export default function ProfileIntegration() {
  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b03_1px,transparent_1px),linear-gradient(to_bottom,#f7682b03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-orange-200/30 to-amber-200/20 animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-amber-200/20 to-orange-200/20 animate-pulse" style={{ animationDuration: '18s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-full mb-6"
          >
            <Share2 className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-bold text-orange-800 uppercase tracking-wide">Profile Integration</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            Share Your Video Profile <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">Everywhere</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            Use your VDOgate portfolio to stand out on other freelancing platforms
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Platform Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-center text-sm font-semibold text-neutral-gray mb-6 uppercase tracking-wide">
              Share on popular platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {platforms.map((platform, index) => (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group flex flex-col items-center gap-2"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl shadow-lg border border-neutral-200 flex items-center justify-center p-3 group-hover:shadow-xl group-hover:border-orange-200 transition-all duration-300">
                    <div className="w-full h-full relative">
                      <div className="w-full h-full bg-gradient-to-br from-orange-100 to-amber-100 rounded-xl flex items-center justify-center">
                        <span className="text-orange-600 font-bold text-xs md:text-sm">{platform.name.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs md:text-sm font-medium text-neutral-gray group-hover:text-orange-600 transition-colors">
                    {platform.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border-2 border-orange-200/40 shadow-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
                <ExternalLink className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                How It Works
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-white/80 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-neutral-gray-dark">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Example URL */}
            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-4 md:p-6 border border-orange-200">
              <p className="text-sm text-orange-700 font-medium mb-2">Your shareable profile link:</p>
              <div className="flex items-center gap-2 bg-white rounded-lg px-4 py-3 border border-orange-200">
                <span className="text-sm md:text-base font-mono text-neutral-gray-dark truncate">
                  vdogate.com/profile/<span className="text-orange-600 font-semibold">yourname</span>
                </span>
                <Share2 className="w-4 h-4 text-orange-500 flex-shrink-0" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-800">
                Let your work speak for itself on every platform
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

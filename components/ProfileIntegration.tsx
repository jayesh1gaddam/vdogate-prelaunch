'use client'

import { motion } from 'framer-motion'
import { Share2, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react'

// Official platform logos as SVG components
const UpworkLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <path d="M42.4 19.6c-4.1 0-7.3 2.7-8.6 7-2.1-3.2-3.7-7-4.6-10.2h-5.1v14.3c0 2.4-2 4.3-4.3 4.3s-4.3-1.9-4.3-4.3V16.4h-5.1v14.3c0 5.2 4.2 9.4 9.4 9.4s9.4-4.2 9.4-9.4v-2.4c.9 1.9 2 3.9 3.4 5.7l-2.9 13.6h5.2l2.1-9.9c1.6 1 3.5 1.6 5.5 1.6 5.5 0 10-4.5 10-10.1-.1-5.4-4.6-9.6-10.1-9.6zm0 14.6c-1.8 0-3.6-.8-5.1-2l.4-1.9v-.1c.4-2.1 1.5-5.7 4.7-5.7 2.7 0 4.9 2.2 4.9 4.9 0 2.6-2.2 4.8-4.9 4.8z" fill="#14A800"/>
  </svg>
)

const FreelancerLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <path d="M28 8L8 18v20l20 10 20-10V18L28 8z" fill="#29B2FE"/>
    <path d="M28 8L8 18l20 10 20-10L28 8z" fill="#0E76A8"/>
    <path d="M28 38v10l20-10V18L28 28v10z" fill="#29B2FE" fillOpacity="0.7"/>
    <text x="20" y="32" fill="white" fontSize="12" fontWeight="bold">F</text>
  </svg>
)

const FiverrLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="40" height="40" rx="8" fill="#1DBF73"/>
    <path d="M18 35V25h3v-4h-3v-1c0-1.1.9-2 2-2h2v-4h-3c-3.3 0-6 2.7-6 6v1h-2v4h2v10h5zm10-14v14h-5V21h5zm-2.5-7c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM32 35V21h4l1 2c1-1.5 2.5-2.5 4.5-2.5v5c-2.5 0-4.5 1.5-4.5 4v5.5h-5z" fill="white"/>
  </svg>
)

const LinkedInLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="40" height="40" rx="4" fill="#0A66C2"/>
    <path d="M20 24v14h-4V24h4zm-2-6.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5 1.1-2.5 2.5-2.5zM24 38h4v-7.5c0-2 1.5-3 3-3s2.5 1 2.5 3V38h4v-8c0-3.5-2.5-6-6-6-1.7 0-3 .7-3.5 1.5V24h-4v14z" fill="white"/>
  </svg>
)

const IndeedLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="40" height="40" rx="4" fill="#2164F3"/>
    <path d="M28 16c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zm0 20c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="white"/>
    <circle cx="28" cy="28" r="4" fill="white"/>
  </svg>
)

const NaukriLogo = () => (
  <svg viewBox="0 0 56 56" fill="none" className="w-full h-full">
    <rect x="8" y="8" width="40" height="40" rx="4" fill="#0C5FB3"/>
    <text x="14" y="36" fill="white" fontSize="16" fontWeight="bold">N</text>
    <circle cx="38" cy="18" r="4" fill="#FF5722"/>
  </svg>
)

const platforms = [
  { name: 'Upwork', Logo: UpworkLogo, bgColor: 'bg-white' },
  { name: 'Freelancer', Logo: FreelancerLogo, bgColor: 'bg-white' },
  { name: 'Fiverr', Logo: FiverrLogo, bgColor: 'bg-white' },
  { name: 'LinkedIn', Logo: LinkedInLogo, bgColor: 'bg-white' },
  { name: 'Indeed', Logo: IndeedLogo, bgColor: 'bg-white' },
  { name: 'Naukri', Logo: NaukriLogo, bgColor: 'bg-white' },
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
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
              {platforms.map((platform, index) => {
                const Logo = platform.Logo
                return (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="group flex flex-col items-center gap-2"
                  >
                    <div className={`w-14 h-14 md:w-16 md:h-16 ${platform.bgColor} rounded-2xl shadow-lg border border-neutral-200 flex items-center justify-center p-2 group-hover:shadow-xl group-hover:border-orange-200 group-hover:scale-110 transition-all duration-300`}>
                      <Logo />
                    </div>
                    <span className="text-xs md:text-sm font-medium text-neutral-gray group-hover:text-orange-600 transition-colors">
                      {platform.name}
                    </span>
                  </motion.div>
                )
              })}
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

'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Search, Video, MessageSquare, CheckCircle2, Star, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20 pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Static Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-blue-300/20 to-cyan-200/20" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-bl from-cyan-200/20 to-blue-300/20" />
      </div>

      <div className="container-custom relative z-10 w-full py-12 md:py-20">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-center lg:text-left space-y-6 md:space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Free for buyers, always</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] tracking-tight"
              >
                <span className="text-brand-black font-light">Discover</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">
                  Skilled Freelancers
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-lg md:text-xl text-neutral-gray leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
              >
                Watch video portfolios. See real skills before you hire.
                <br />
                <span className="font-semibold text-brand-black">Browse by category & location. Connect directly.</span>
              </motion.p>

              {/* How It Works Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
              >
                {[
                  { icon: Search, text: 'Browse by category', color: 'from-blue-500 to-blue-600' },
                  { icon: Video, text: 'Watch video profiles', color: 'from-cyan-500 to-cyan-600' },
                  { icon: MessageSquare, text: 'Connect directly', color: 'from-indigo-500 to-indigo-600' },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-brand-black">{step.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Value Props */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                {[
                  'No platform fees',
                  'Direct communication',
                  'Verified video profiles',
                ].map((prop, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-sm font-medium text-neutral-gray-dark">{prop}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
              >
                <a
                  href="https://app.vdogate.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base md:text-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Start Discovering
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/freelancers"
                  className="px-8 py-4 bg-white border border-blue-200 text-blue-600 rounded-xl font-semibold text-base md:text-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  I'm a Freelancer
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-cyan-100/20 to-blue-200/30 rounded-3xl blur-2xl" />

                {/* Image */}
                <div className="relative">
                  <Image
                    src="/images/Mask group-1.png"
                    alt="Discover Services"
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-black">4.9 Rating</p>
                      <p className="text-xs text-neutral-gray">500+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-semibold text-brand-black">Verified Profiles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

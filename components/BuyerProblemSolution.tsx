'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, CheckCircle2, X, Sparkles, Star, TrendingUp } from 'lucide-react'

export default function BuyerProblemSolution() {
  const problemPoints = [
    { icon: AlertCircle, text: "Can't evaluate skills from text profiles", delay: 0.1 },
    { icon: TrendingDown, text: 'No way to verify claims before hiring', delay: 0.2 },
    { icon: X, text: 'Platform fees add to your costs', delay: 0.3 },
    { icon: Users, text: 'Middlemen slow down communication', delay: 0.4 },
    { icon: AlertCircle, text: 'Random listings, no local filtering', delay: 0.5 }
  ]

  const solutionPoints = [
    { icon: CheckCircle2, text: 'Watch video portfolios, see real skills', delay: 0.1 },
    { icon: CheckCircle2, text: 'Verified profiles with authentic work samples', delay: 0.2 },
    { icon: CheckCircle2, text: '100% free for buyers, forever', delay: 0.3 },
    { icon: CheckCircle2, text: 'Direct contact - no middlemen', delay: 0.4 },
    { icon: CheckCircle2, text: 'Browse by category AND location', delay: 0.5 }
  ]

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/20">
      {/* Static Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-100/20 via-transparent to-transparent" />

      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f606_1px,transparent_1px),linear-gradient(to_bottom,#3b82f606_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Static Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-blue-300/20 to-cyan-200/15" />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-cyan-300/20 to-blue-200/15" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-indigo-300/15 to-blue-200/10" />
      </div>

      {/* Static Floating Badges - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-20 right-10">
          <div className="glass bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-brand-black">Verified Profiles</span>
          </div>
        </div>
        <div className="absolute top-40 left-10">
          <div className="glass bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-semibold text-brand-black">100% Free</span>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6"
          >
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">VDOgate</span> Changes Everything
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 text-lg md:text-xl text-neutral-gray leading-relaxed"
          >
            <p>
              Buyers struggle to evaluate skills from text profiles and random listings.
            </p>
            <p>
              Platform fees and middlemen add friction to every hire.
            </p>
            <p className="font-semibold text-brand-black">
              VDOgate solves this with video portfolios, direct contact, and zero fees.
            </p>
          </motion.div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 relative items-stretch">
          {/* Static Divider Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent" />

          {/* LEFT: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group cursor-pointer h-full hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Static Border Glow */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent" />
            </div>

            {/* Problem Card */}
            <div className="relative glass bg-gradient-to-br from-white via-red-50/40 to-orange-50/30 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[380px] md:min-h-[500px] lg:min-h-[550px] h-full">
              {/* Static Warning Pattern */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.03)_10px,rgba(239,68,68,0.03)_20px)]" />

              {/* Static Glow Orb */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <AlertCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700">Problems Buyers Face</h3>
                </motion.div>

                {/* Problem Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {problemPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + item.delay, duration: 0.4 }}
                      className="relative group/item hover:translate-x-2 hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="relative flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-red-100/60 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-neutral-gray-dark">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative group cursor-pointer h-full hover:scale-[1.02] hover:-translate-y-1 transition-transform duration-300"
          >
            {/* Static Border Glow */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent" />
            </div>

            {/* Solution Card */}
            <div className="relative glass bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/40 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[380px] md:min-h-[500px] lg:min-h-[550px] h-full">
              {/* Success Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.08),transparent_70%)]" />

              {/* Static Glow Orb */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-blue-500/25 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="relative w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/40 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">The VDOgate Solution</h3>
                </motion.div>

                {/* Solution Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {solutionPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + item.delay, duration: 0.4 }}
                      className="relative group/item hover:-translate-x-2 hover:scale-[1.02] transition-transform duration-200"
                    >
                      <div className="relative flex items-center gap-4 p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-green-100/60 hover:shadow-xl transition-shadow duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-brand-black">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="mt-auto p-5 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl border border-blue-200/60 shadow-md"
                >
                  <p className="text-sm md:text-base text-center leading-relaxed">
                    <span className="font-bold text-blue-700">Video portfolios + Direct contact</span>
                    <br />
                    <span className="text-brand-black">make hiring decisions simple and confident.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

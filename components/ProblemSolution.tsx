'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, CheckCircle2, X, Sparkles, Star, TrendingUp } from 'lucide-react'

export default function ProblemSolution() {
  const problemPoints = [
    { icon: AlertCircle, text: 'Visibility depends on followers & paid ads', delay: 0.1 },
    { icon: TrendingDown, text: 'Algorithms suppress reach', delay: 0.2 },
    { icon: X, text: 'High commissions reduce earnings', delay: 0.3 },
    { icon: Users, text: 'Buyers can\'t evaluate skill from text', delay: 0.4 },
    { icon: X, text: 'No direct contact', delay: 0.5 },
    { icon: AlertCircle, text: 'No transparency, no trust', delay: 0.6 }
  ]

  const solutionPoints = [
    { icon: CheckCircle2, text: 'Skill-based discovery, not trend based', delay: 0.1 },
    { icon: CheckCircle2, text: 'No ads, no algorithms, no boosting or suppression', delay: 0.2 },
    { icon: CheckCircle2, text: 'Zero commission on direct services', delay: 0.3 },
    { icon: CheckCircle2, text: 'Video-first identity, real proof builds trust', delay: 0.4 },
    { icon: CheckCircle2, text: 'Direct communication, no middlemen', delay: 0.5 },
    { icon: CheckCircle2, text: 'Host Live Events to earn instantly', delay: 0.6 }
  ]

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/20">
      {/* Static Background Layers - No animations */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/20 via-transparent to-transparent" />

      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b06_1px,transparent_1px),linear-gradient(to_bottom,#f7682b06_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Static Gradient Orbs - No Framer Motion animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/15" />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-purple-300/20 to-indigo-200/15" />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-rose-300/15 to-pink-200/10" />
      </div>

      {/* Static Floating Badges - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <div className="absolute top-20 right-10">
          <div className="glass bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4 text-portal-primary" />
            <span className="text-xs font-semibold text-brand-black">Premium Quality</span>
          </div>
        </div>
        <div className="absolute top-40 left-10">
          <div className="glass bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-portal-primary" />
            <span className="text-xs font-semibold text-brand-black">10x Growth</span>
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
            VDOgate Changes Everything
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-4 text-lg md:text-xl text-neutral-gray leading-relaxed"
          >
            <p>
              Freelancers struggle with visibility, commissions, algorithms and marketing costs.
            </p>
            <p>
              While Buyers struggle to trust text-only profiles and random listings.
            </p>
            <p className="font-semibold text-brand-black">
              VDOgate solves both sides fairly and transparently.
            </p>
          </motion.div>
        </div>

        {/* Problem vs Solution Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 relative items-stretch">
          {/* Static Divider Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-portal-primary/30 to-transparent" />

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
            <div className="relative glass bg-gradient-to-br from-white via-red-50/40 to-orange-50/30 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[420px] md:min-h-[600px] lg:min-h-[680px] h-full">
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
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700">Problems faced by Freelancers</h3>
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
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent" />
            </div>

            {/* Solution Card */}
            <div className="relative glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[420px] md:min-h-[600px] lg:min-h-[680px] h-full">
              {/* Success Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.08),transparent_70%)]" />

              {/* Static Glow Orb */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-portal-primary/25 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <div className="relative w-14 h-14 bg-portal-gradient rounded-2xl flex items-center justify-center shadow-2xl shadow-portal-primary/40 group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">The VDOgate Solution</h3>
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
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="mt-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/60 shadow-md"
                >
                  <p className="text-sm md:text-base text-center leading-relaxed">
                    Your <span className="font-bold text-green-700">skills, portfolio, and location</span>
                    <br />
                    <span className="text-brand-black">determine your visibility — not your ad budget.</span>
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

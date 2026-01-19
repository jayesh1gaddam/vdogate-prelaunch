'use client'

import { motion } from 'framer-motion'
import { BookOpen, Dumbbell, Mic, Rocket, Megaphone } from 'lucide-react'

const useCases = [
  {
    icon: BookOpen,
    title: 'Live workshops & masterclasses',
    color: 'indigo'
  },
  {
    icon: Dumbbell,
    title: 'Coaching & training sessions',
    color: 'violet'
  },
  {
    icon: Mic,
    title: 'Performances & talks',
    color: 'purple'
  },
  {
    icon: Rocket,
    title: 'Product demos & launches',
    color: 'pink'
  },
  {
    icon: Megaphone,
    title: 'Affiliate or sponsored sessions',
    color: 'rose'
  }
]

const colorClasses = {
  indigo: 'from-indigo-500/20 to-indigo-600/20 border-indigo-500/20 text-indigo-400',
  violet: 'from-violet-500/20 to-violet-600/20 border-violet-500/20 text-violet-400',
  purple: 'from-purple-500/20 to-purple-600/20 border-purple-500/20 text-purple-400',
  pink: 'from-pink-500/20 to-pink-600/20 border-pink-500/20 text-pink-400',
  rose: 'from-rose-500/20 to-rose-600/20 border-rose-500/20 text-rose-400'
}

export default function WhatYouCanHost() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-6">
            USE CASES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl mx-auto">
            If people will attend a live session —
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
              you can host it here.
            </span>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-6 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-violet-500/30 hover:bg-slate-800 transition-all duration-300 text-center"
            >
              {/* Icon */}
              <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${colorClasses[useCase.color as keyof typeof colorClasses]} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <useCase.icon className={`w-7 h-7 ${colorClasses[useCase.color as keyof typeof colorClasses].split(' ').pop()}`} />
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-semibold text-white leading-snug">
                {useCase.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

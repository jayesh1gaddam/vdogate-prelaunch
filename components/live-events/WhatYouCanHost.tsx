'use client'

import { motion } from 'framer-motion'
import { BookOpen, Dumbbell, Mic, Rocket, Megaphone } from 'lucide-react'

const useCases = [
  {
    icon: BookOpen,
    title: 'Live workshops & masterclasses',
    bgColor: 'bg-playful-purple',
    shadowColor: 'shadow-purple-500/30'
  },
  {
    icon: Dumbbell,
    title: 'Coaching & training sessions',
    bgColor: 'bg-playful-yellow',
    textDark: true,
    shadowColor: 'shadow-yellow-500/30'
  },
  {
    icon: Mic,
    title: 'Performances & talks',
    bgColor: 'bg-playful-orange',
    shadowColor: 'shadow-orange-500/30'
  },
  {
    icon: Rocket,
    title: 'Product demos & launches',
    bgColor: 'bg-playful-pink',
    shadowColor: 'shadow-pink-500/30'
  },
  {
    icon: Megaphone,
    title: 'Affiliate or sponsored sessions',
    bgColor: 'bg-playful-mint',
    shadowColor: 'shadow-emerald-500/30'
  }
]

// Triple the items for seamless infinite loop
const tripleUseCases = [...useCases, ...useCases, ...useCases]

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function WhatYouCanHost() {
  return (
    <section className="py-10 md:py-14 bg-playful-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-orange/10 border-2 border-playful-orange/30 rounded-full text-playful-orange text-sm font-bold mb-6">
            USE CASES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight max-w-3xl mx-auto">
            If people will attend a live session
            <br />
            <span className="text-playful-gradient">
              you can host it here.
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Infinite Carousel - Full Width */}
      <div className="relative overflow-hidden">
        {/* Gradient fade masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-playful-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-playful-cream to-transparent z-10 pointer-events-none" />

        {/* Animated carousel track */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex gap-4 md:gap-6 animate-marquee py-4"
        >
          {tripleUseCases.map((useCase, index) => (
            <div
              key={`${useCase.title}-${index}`}
              className={`marquee-pill flex-shrink-0 flex items-center gap-3 px-6 py-4 rounded-full ${useCase.bgColor} shadow-lg ${useCase.shadowColor} cursor-pointer`}
            >
              <useCase.icon
                className={`w-6 h-6 ${useCase.textDark ? 'text-playful-purple-dark' : 'text-white'}`}
                strokeWidth={2.5}
              />
              <span className={`font-bold text-base md:text-lg whitespace-nowrap ${useCase.textDark ? 'text-playful-purple-dark' : 'text-white'}`}>
                {useCase.title}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

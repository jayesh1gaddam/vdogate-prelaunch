'use client'

import { motion } from 'framer-motion'
import { BookOpen, Dumbbell, Mic, Rocket, Megaphone } from 'lucide-react'
import { Sparkle } from '@/components/ui/DecorativeAccent'

const useCases = [
  {
    icon: BookOpen,
    title: 'Live workshops & masterclasses',
    bgColor: 'bg-playful-purple',
    hoverBg: 'hover:bg-playful-purple-dark'
  },
  {
    icon: Dumbbell,
    title: 'Coaching & training sessions',
    bgColor: 'bg-playful-yellow',
    hoverBg: 'hover:bg-playful-yellow-dark',
    textDark: true
  },
  {
    icon: Mic,
    title: 'Performances & talks',
    bgColor: 'bg-playful-orange',
    hoverBg: 'hover:bg-playful-orange/90'
  },
  {
    icon: Rocket,
    title: 'Product demos & launches',
    bgColor: 'bg-playful-pink',
    hoverBg: 'hover:bg-playful-pink/90'
  },
  {
    icon: Megaphone,
    title: 'Affiliate or sponsored sessions',
    bgColor: 'bg-playful-mint',
    hoverBg: 'hover:bg-playful-mint/90'
  }
]

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function WhatYouCanHost() {
  return (
    <section className="py-20 md:py-28 bg-playful-cream relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 hidden lg:block">
        <Sparkle color="purple" size="sm" />
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <Sparkle color="orange" size="md" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-orange/10 border-2 border-playful-orange/30 rounded-full text-playful-orange text-sm font-bold mb-6">
            USE CASES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight max-w-3xl mx-auto">
            If people will attend a live session —
            <br />
            <span className="text-playful-gradient">
              you can host it here.
            </span>
          </h2>
        </motion.div>

        {/* Use Cases as colorful tags */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className={`group flex items-center gap-3 px-6 py-4 rounded-full ${useCase.bgColor} ${useCase.hoverBg} shadow-lg cursor-pointer transition-all duration-300`}
            >
              <useCase.icon className={`w-6 h-6 ${useCase.textDark ? 'text-playful-purple-dark' : 'text-white'}`} />
              <span className={`font-bold text-base md:text-lg ${useCase.textDark ? 'text-playful-purple-dark' : 'text-white'}`}>
                {useCase.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

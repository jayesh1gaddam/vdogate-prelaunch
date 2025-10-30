'use client'

import { motion } from 'framer-motion'
import { Megaphone, TrendingDown, Wrench } from 'lucide-react'

const problems = [
  {
    icon: Megaphone,
    title: 'Lost in the Noise',
    description: 'Great creators struggle to reach the right audience on social platforms',
  },
  {
    icon: TrendingDown,
    title: 'Revenue Uncertainty',
    description: 'Algorithm changes destroy months of hard work overnight',
  },
  {
    icon: Wrench,
    title: 'No Professional Tools',
    description: 'Freelancers lack dedicated platforms to showcase services professionally',
  },
]

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-neutral-background">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            The Algorithm Shouldn't Control Your Income
          </h2>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-vdo-orange/10 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-vdo-orange" />
                </div>
                <h3 className="text-headline-sm mb-3">{problem.title}</h3>
                <p className="text-body-md text-neutral-gray-dark">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Solution Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 md:p-12 shadow-portal-sm border border-portal-primary/10">
            <p className="text-xl md:text-2xl font-semibold text-neutral-black leading-relaxed">
              VDOgate is the professional gateway where your talent meets opportunity —{' '}
              <span className="text-gradient">algorithm-free</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

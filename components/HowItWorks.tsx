'use client'

import { motion } from 'framer-motion'
import { Video, Search, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Video,
    title: 'Create Your Video Profile',
    description: 'Upload intro videos, showcase your work, set your services',
  },
  {
    number: '02',
    icon: Search,
    title: 'Get Discovered',
    description: 'Appear in location + category searches. No algorithms, just real discovery',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow Your Business',
    description: 'Secure bookings, accept payments, build your reputation',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-white">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            Your Gateway to Creator Success in{' '}
            <span className="text-gradient">3 Steps</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter" />

          <div className="grid md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <div className="bg-neutral-background rounded-2xl pt-2 px-8 pb-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10">
                    {/* Step Number */}
                    <div className="text-right text-8xl md:text-9xl font-bold bg-gradient-to-b from-portal-primary/30 via-portal-primary/15 to-portal-primary/5 bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(70,61,199,0.15)] leading-none -mb-20">
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className="w-16 h-16 bg-portal-gradient rounded-2xl flex items-center justify-center mb-2 shadow-portal-sm">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-headline-sm mb-2">{step.title}</h3>
                    <p className="text-body-md text-neutral-gray-dark">
                      {step.description}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-portal-gradient rounded-full border-4 border-white shadow-lg z-20" />
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-body-lg text-neutral-gray-dark mb-6">
            Join hundreds of creators building their success story
          </p>
          <button
            onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, IndianRupee } from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'

const steps = [
  {
    number: '01',
    icon: Video,
    title: 'Showcase Your Skills',
    description: 'Upload short videos that highlight what you do best — whether you teach, train, design, or coach online, offline, or hybrid.',
    detail: 'Present your talent through videos and make your work visible to potential clients.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Get Discovered by Category & Location',
    description: 'VDOgate automatically lists you under your chosen category and region, so clients nearby or across India can easily find you.',
    detail: 'No algorithms. No ads. Just fair visibility for every freelancer.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '03',
    icon: IndianRupee,
    title: 'Earn from Your Clients',
    description: 'Earn directly from your clients. No fees or commission to be paid to the platform.',
    detail: 'Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
]

export default function HowItWorks() {
  const timelineData = steps.map((step) => {
    const Icon = step.icon
    return {
      title: step.title,
      content: (
        <div>
          <div className={`${step.bgColor} rounded-2xl p-8 border ${step.borderColor} hover:shadow-xl transition-all duration-300`}>
            {/* Step Number */}
            <div className={`text-right text-6xl md:text-7xl font-bold bg-gradient-to-b ${step.color} bg-clip-text text-transparent opacity-20 leading-none -mb-16`}>
              {step.number}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <p className="text-lg md:text-xl text-neutral-gray-dark mb-3 leading-relaxed">
              {step.description}
            </p>
            <p className="text-base text-neutral-gray italic">
              {step.detail}
            </p>
          </div>
        </div>
      ),
    }
  })

  return (
    <section id="how-it-works" className="pt-4 pb-8 md:pt-6 md:pb-12 lg:pt-8 lg:pb-16 relative overflow-hidden bg-gradient-to-b from-white via-orange-50/20 to-white">
      {/* Subtle Wave Pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 Q 25 25, 50 50 T 100 50" stroke="#F7682B" strokeWidth="0.5" fill="none" opacity="0.1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-pattern)" />
        </svg>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-tr from-rose-100/20 to-orange-100/20 rounded-full blur-3xl" />
      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8 container-custom"
      >
        <h2 className="text-headline-lg md:text-display-md mb-4">
          Your Gateway to Freelancer Success in{' '}
          <span className="text-gradient">3 Steps</span>
        </h2>
      </motion.div>

      {/* Timeline */}
      <Timeline data={timelineData} />

      {/* Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-8 max-w-3xl mx-auto container-custom"
      >
        <p className="text-lg md:text-xl text-neutral-gray leading-relaxed mb-8">
          Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.
        </p>
        <button
          onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
        >
          Join the Platform – Free Pre-Launch Registration
        </button>
      </motion.div>
    </section>
  )
}

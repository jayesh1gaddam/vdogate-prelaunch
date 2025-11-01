'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, IndianRupee, ArrowRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Video,
    title: 'Showcase Your Skills',
    description: 'Upload short videos that highlight what you do best — whether you teach, train, design, or coach online, offline, or hybrid.',
    detail: 'Present your talent through videos and make your work visible to potential clients.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Get Discovered by Category & Location',
    description: 'VDOgate automatically lists you under your chosen category and region, so clients nearby or across India can easily find you.',
    detail: 'No algorithms. No ads. Just fair visibility for every freelancer.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: '03',
    icon: IndianRupee,
    title: 'Earn from Your Clients',
    description: 'Earn directly from your clients. No fees or commission to be paid to the platform.',
    detail: 'Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
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
            Your Gateway to Freelancer Success in{' '}
            <span className="text-gradient">3 Steps</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500" />

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
                  <div className={`${step.bgColor} rounded-2xl pt-2 px-8 pb-8 border ${step.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative z-10`}>
                    {/* Step Number */}
                    <div className={`text-right text-8xl md:text-9xl font-bold bg-gradient-to-b ${step.color} bg-clip-text text-transparent opacity-20 leading-none -mb-20`}>
                      {step.number}
                    </div>

                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-headline-sm mb-3 text-brand-black">{step.title}</h3>
                    <p className="text-body-md text-neutral-gray-dark mb-3">
                      {step.description}
                    </p>
                    <p className="text-sm text-neutral-gray italic">
                      {step.detail}
                    </p>
                  </div>

                  {/* Connector Dot */}
                  <div className={`hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br ${step.color} rounded-full border-[0.2px] border-white shadow-lg z-20`} />

                  {/* Arrow Connector */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-24 right-0 transform translate-x-1/2 z-30">
                      <ArrowRight className="w-5 h-5 text-neutral-gray" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 max-w-3xl mx-auto"
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
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Play, Compass, Calendar, PieChart, BarChart3, Shield } from 'lucide-react'

const features = [
  {
    icon: Play,
    title: 'Video-First Profiles',
    description: 'Showcase your talent through powerful video introductions',
    color: 'from-portal-primary to-portal-light',
  },
  {
    icon: Compass,
    title: 'Smart Discovery',
    description: 'Category + location filters help customers find exactly what they need',
    color: 'from-gate-blue to-gate-blue-light',
  },
  {
    icon: Calendar,
    title: 'Secure Bookings',
    description: 'Integrated scheduling and Razorpay payments',
    color: 'from-vdo-orange to-vdo-orange-dark',
  },
  {
    icon: PieChart,
    title: '90% Revenue Share',
    description: 'Keep what you earn. We take just 10% — lowest in the industry',
    color: 'from-portal-light to-portal-lighter',
  },
  {
    icon: BarChart3,
    title: 'Professional Dashboard',
    description: 'Track earnings, manage bookings, analyze performance',
    color: 'from-gate-blue-light to-portal-primary',
  },
  {
    icon: Shield,
    title: 'Trust & Safety',
    description: 'Verified profiles, ratings, and secure communication',
    color: 'from-vdo-orange-dark to-portal-light',
  },
]

export default function Features() {
  return (
    <section id="features" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-neutral-background">
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
            Built for <span className="text-gradient">Professional Freelancers</span>
          </h2>
          <p className="text-body-lg text-neutral-gray-dark max-w-2xl mx-auto">
            Everything you need to build, grow, and monetize your freelance business
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-headline-sm mb-3">{feature.title}</h3>
                <p className="text-body-md text-neutral-gray-dark">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

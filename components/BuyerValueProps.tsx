'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, MessageSquare } from 'lucide-react'

export default function BuyerValueProps() {
  const valueProps = [
    {
      icon: Video,
      title: 'See Real Work',
      description: 'Watch video portfolios before hiring',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Find Local or Global',
      description: 'Browse by category and location',
      color: 'from-cyan-500 to-cyan-600',
    },
    {
      icon: MessageSquare,
      title: 'Connect Directly',
      description: 'Message freelancers instantly',
      color: 'from-indigo-500 to-indigo-600',
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-custom">
        {/* Value Props Grid - Compact */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center p-5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-10 h-10 bg-gradient-to-br ${prop.color} rounded-xl flex items-center justify-center shadow-sm mx-auto mb-3`}>
                <prop.icon className="w-5 h-5 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-base font-semibold text-brand-black mb-1">
                {prop.title}
              </h3>
              <p className="text-sm text-neutral-gray">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

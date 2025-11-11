'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Shield, Users, Zap } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Fair Pricing',
    description: 'Transparent costs, no surprises',
    color: 'from-emerald-400 to-green-500',
    bgColor: 'from-emerald-50 to-green-50',
  },
  {
    icon: Shield,
    title: 'Zero Commission',
    description: 'No hidden fees, ever',
    color: 'from-blue-400 to-cyan-500',
    bgColor: 'from-blue-50 to-cyan-50',
  },
  {
    icon: Users,
    title: 'Direct Connections',
    description: 'Connect with clients directly',
    color: 'from-purple-400 to-indigo-500',
    bgColor: 'from-purple-50 to-indigo-50',
  },
  {
    icon: Zap,
    title: 'Instant Visibility',
    description: 'Get discovered immediately',
    color: 'from-orange-400 to-amber-500',
    bgColor: 'from-orange-50 to-amber-50',
  },
]

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
      {features.map((feature, index) => {
        const Icon = feature.icon
        return (
          <motion.div
            key={index}
            className={`relative group bg-gradient-to-br ${feature.bgColor} p-6 rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            {/* Background Gradient Orb */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />

            {/* Icon */}
            <motion.div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="w-6 h-6 text-white" />
            </motion.div>

            {/* Content */}
            <h3 className="text-lg font-bold text-gray-900 mb-1 relative z-10">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600 relative z-10">
              {feature.description}
            </p>

            {/* Hover Shine Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}

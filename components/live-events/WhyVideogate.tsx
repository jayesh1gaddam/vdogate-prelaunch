'use client'

import { motion } from 'framer-motion'
import { CreditCard, Sliders, ToggleLeft, Share, Clock, Sparkles } from 'lucide-react'
import { Star } from '@/components/ui/DecorativeAccent'

const benefits = [
  {
    icon: CreditCard,
    title: 'No monthly subscriptions',
    description: 'Pay per event, not per month. No recurring charges.',
    color: 'purple'
  },
  {
    icon: Sliders,
    title: 'Full control over pricing',
    description: 'Set your own ticket prices. Earn what you deserve.',
    color: 'yellow'
  },
  {
    icon: ToggleLeft,
    title: 'Paid or free events',
    description: 'Host paid tickets or sponsored events. Your choice.',
    color: 'orange'
  },
  {
    icon: Share,
    title: 'No algorithms',
    description: 'No reach restrictions. You control distribution.',
    color: 'pink'
  },
  {
    icon: Clock,
    title: 'Fast settlements',
    description: 'Get paid within 7 days after your event.',
    color: 'mint'
  },
  {
    icon: Sparkles,
    title: 'Simple platform',
    description: 'Create events in minutes. No technical skills needed.',
    color: 'sky'
  }
]

const colorMap = {
  purple: { bg: 'bg-purple-100', icon: 'bg-playful-purple', text: 'text-purple-700' },
  yellow: { bg: 'bg-yellow-100', icon: 'bg-playful-yellow', text: 'text-yellow-700' },
  orange: { bg: 'bg-orange-100', icon: 'bg-playful-orange', text: 'text-orange-700' },
  pink: { bg: 'bg-pink-100', icon: 'bg-playful-pink', text: 'text-pink-700' },
  mint: { bg: 'bg-emerald-100', icon: 'bg-playful-mint', text: 'text-emerald-700' },
  sky: { bg: 'bg-sky-100', icon: 'bg-playful-sky', text: 'text-sky-700' }
}

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function WhyVideogate() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 hidden lg:block">
        <Star color="yellow" size="lg" />
      </div>
      <div className="absolute bottom-20 left-20 hidden lg:block">
        <Star color="purple" size="md" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-mint/20 border-2 border-playful-mint/40 rounded-full text-emerald-600 text-sm font-bold mb-6">
            WHY VDOGATE
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight max-w-3xl mx-auto">
            You focus on your live session.
            <br />
            <span className="text-playful-gradient">
              We handle tickets and payments.
            </span>
          </h2>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit, index) => {
            const colors = colorMap[benefit.color as keyof typeof colorMap]
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: index * 0.1 }}
                className={`group relative p-6 md:p-8 rounded-3xl ${colors.bg} shadow-playful-card hover:shadow-lg transition-all duration-300 playful-card-hover`}
              >
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl ${colors.icon} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold ${colors.text} mb-2`}>
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

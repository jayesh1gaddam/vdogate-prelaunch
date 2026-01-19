'use client'

import { motion } from 'framer-motion'
import { Briefcase, Youtube, GraduationCap, Mic2, Store } from 'lucide-react'
import { Sparkle } from '@/components/ui/DecorativeAccent'

const audiences = [
  {
    icon: Briefcase,
    title: 'Freelancers & Consultants',
    description: 'Host paid consultations and workshops',
    color: 'yellow',
    bgColor: 'bg-yellow-100',
    iconBg: 'bg-playful-yellow',
    textColor: 'text-yellow-700'
  },
  {
    icon: Youtube,
    title: 'Influencers & YouTubers',
    description: 'Monetize your audience with live sessions',
    color: 'purple',
    bgColor: 'bg-purple-100',
    iconBg: 'bg-playful-purple',
    textColor: 'text-purple-700'
  },
  {
    icon: GraduationCap,
    title: 'Coaches, Trainers & Educators',
    description: 'Teach and train through live classes',
    color: 'orange',
    bgColor: 'bg-orange-100',
    iconBg: 'bg-playful-orange',
    textColor: 'text-orange-700'
  },
  {
    icon: Mic2,
    title: 'Artists, Speakers & Performers',
    description: 'Perform and speak to paying audiences',
    color: 'pink',
    bgColor: 'bg-pink-100',
    iconBg: 'bg-playful-pink',
    textColor: 'text-pink-700'
  },
  {
    icon: Store,
    title: 'Brands & Affiliate Marketers',
    description: 'Demo products and drive sales live',
    color: 'sky',
    bgColor: 'bg-sky-100',
    iconBg: 'bg-playful-sky',
    textColor: 'text-sky-700'
  }
]

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-28 bg-playful-cream relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 right-10 hidden lg:block">
        <Sparkle color="purple" size="md" />
      </div>
      <div className="absolute bottom-20 left-10 hidden lg:block">
        <Sparkle color="yellow" size="sm" />
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
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
            BUILT FOR CREATORS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black tracking-tight">
            Built for anyone who wants to
            <br />
            <span className="text-playful-gradient">
              earn through live sessions
            </span>
          </h2>
        </motion.div>

        {/* Audience Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: index * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-3xl ${audience.bgColor} border-2 border-transparent hover:border-white/50 shadow-playful-card hover:shadow-lg transition-all duration-300 playful-card-hover ${
                index === 3 ? 'sm:col-span-1 lg:col-start-1' : ''
              } ${index === 4 ? 'sm:col-span-1 lg:col-start-2' : ''}`}
            >
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${audience.iconBg} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className={`text-lg md:text-xl font-bold ${audience.textColor} mb-2`}>
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

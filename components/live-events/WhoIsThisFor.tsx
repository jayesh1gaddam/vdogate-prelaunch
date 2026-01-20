'use client'

import { motion } from 'framer-motion'
import { Briefcase, Youtube, GraduationCap, Mic2, Store } from 'lucide-react'

const audiences = [
  {
    icon: Briefcase,
    title: 'Freelancers & Consultants',
    description: 'Host paid consultations and workshops',
    bgColor: 'bg-gradient-to-br from-yellow-100 to-yellow-50',
    iconBg: 'bg-gradient-to-br from-yellow-400 to-amber-500',
    titleColor: 'text-amber-600',
    hoverBorder: 'hover:border-yellow-300'
  },
  {
    icon: Youtube,
    title: 'Influencers & YouTubers',
    description: 'Monetize your audience with live sessions',
    bgColor: 'bg-gradient-to-br from-purple-100 to-purple-50',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
    titleColor: 'text-purple-600',
    hoverBorder: 'hover:border-purple-300'
  },
  {
    icon: GraduationCap,
    title: 'Coaches, Trainers & Educators',
    description: 'Teach and train through live classes',
    bgColor: 'bg-gradient-to-br from-orange-100 to-orange-50',
    iconBg: 'bg-gradient-to-br from-orange-400 to-orange-500',
    titleColor: 'text-orange-600',
    hoverBorder: 'hover:border-orange-300'
  },
  {
    icon: Mic2,
    title: 'Artists, Speakers & Performers',
    description: 'Perform and speak to paying audiences',
    bgColor: 'bg-gradient-to-br from-pink-100 to-pink-50',
    iconBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
    titleColor: 'text-pink-600',
    hoverBorder: 'hover:border-pink-300'
  },
  {
    icon: Store,
    title: 'Brands & Affiliate Marketers',
    description: 'Demo products and drive sales live',
    bgColor: 'bg-gradient-to-br from-sky-100 to-sky-50',
    iconBg: 'bg-gradient-to-br from-sky-400 to-cyan-500',
    titleColor: 'text-sky-600',
    hoverBorder: 'hover:border-sky-300'
  }
]

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

const floatAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut" as const
  }
}

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-28 bg-playful-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const }
          }}
          className="absolute top-20 left-[10%] w-32 h-32 bg-purple-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }
          }}
          className="absolute top-40 right-[15%] w-40 h-40 bg-yellow-200/40 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -12, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" as const, delay: 0.5 }
          }}
          className="absolute bottom-20 left-[20%] w-24 h-24 bg-pink-200/30 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, 10, 0],
            transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }
          }}
          className="absolute bottom-40 right-[10%] w-36 h-36 bg-sky-200/30 rounded-full blur-2xl"
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full text-orange-600 text-sm font-bold mb-6 shadow-sm"
          >
            BUILT FOR CREATORS
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight">
            Built for anyone who wants to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">
              earn through live sessions
            </span>
          </h2>
        </motion.div>

        {/* Cards Layout - Top Row (3 cards) */}
        <div className="flex flex-col items-center gap-5 md:gap-6">
          {/* Top Row - 3 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 w-full">
            {audiences.slice(0, 3).map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-6 md:p-8 rounded-3xl ${audience.bgColor} border-2 border-transparent ${audience.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/30 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon with float animation on hover */}
                  <motion.div
                    whileHover={floatAnimation}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${audience.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold ${audience.titleColor} mb-2`}>
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row - 2 Cards Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 w-full max-w-3xl">
            {audiences.slice(3, 5).map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: (index + 3) * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-6 md:p-8 rounded-3xl ${audience.bgColor} border-2 border-transparent ${audience.hoverBorder} shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer`}
              >
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-white/0 group-hover:bg-white/30 transition-all duration-300" />

                <div className="relative z-10">
                  {/* Icon with float animation on hover */}
                  <motion.div
                    whileHover={floatAnimation}
                    className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${audience.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <audience.icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={2} />
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-lg md:text-xl font-bold ${audience.titleColor} mb-2`}>
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

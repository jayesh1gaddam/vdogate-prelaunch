'use client'

import { motion } from 'framer-motion'
import { Briefcase, Youtube, GraduationCap, Mic2, Store } from 'lucide-react'

const audiences = [
  {
    icon: Briefcase,
    title: 'Freelancers & Consultants',
    description: 'Host paid consultations and workshops'
  },
  {
    icon: Youtube,
    title: 'Influencers & YouTubers',
    description: 'Monetize your audience with live sessions'
  },
  {
    icon: GraduationCap,
    title: 'Coaches, Trainers & Educators',
    description: 'Teach and train through live classes'
  },
  {
    icon: Mic2,
    title: 'Artists, Speakers & Performers',
    description: 'Perform and speak to paying audiences'
  },
  {
    icon: Store,
    title: 'Brands & Affiliate Marketers',
    description: 'Demo products and drive sales live'
  }
]

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-400 text-sm font-medium mb-6">
            BUILT FOR CREATORS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Built for anyone who wants to
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              earn through live sessions
            </span>
          </h2>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 md:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-800/50 transition-all duration-300 ${
                index === 3 ? 'sm:col-span-1 lg:col-start-1' : ''
              } ${index === 4 ? 'sm:col-span-1 lg:col-start-2' : ''}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-500/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <audience.icon className="w-6 h-6 md:w-7 md:h-7 text-indigo-400" />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm md:text-base">
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

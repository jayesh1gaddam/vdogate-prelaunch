'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, MessageSquare, CheckCircle2, Sparkles } from 'lucide-react'

export default function BuyerValueProps() {
  const valueProps = [
    {
      icon: Video,
      title: 'See Real Work',
      description: 'Watch video portfolios before hiring — no guesswork, no surprises',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      icon: MapPin,
      title: 'Find Local or Global',
      description: 'Browse by category AND location — online, offline, or hybrid services',
      color: 'from-cyan-500 to-cyan-600',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      icon: MessageSquare,
      title: 'Connect Directly',
      description: 'No middlemen, no delays — direct communication with freelancers',
      color: 'from-indigo-500 to-indigo-600',
      shadowColor: 'shadow-indigo-500/20'
    }
  ]

  const benefits = [
    'No platform fees',
    'Verified video profiles',
    'Real skill demonstration',
    '100% free for buyers'
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f606_1px,transparent_1px),linear-gradient(to_bottom,#3b82f606_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-800">Why Choose VDOgate</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6"
          >
            Hire with{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Confidence
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-gray leading-relaxed"
          >
            Stop guessing from text profiles. See real skills in action before you hire.
          </motion.p>
        </div>

        {/* Value Props Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl ${prop.shadowColor} border border-blue-100/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full`}>
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${prop.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <prop.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                  {prop.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  {prop.description}
                </p>

                {/* Bottom Accent Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${prop.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-blue-100 shadow-sm"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-brand-black">{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

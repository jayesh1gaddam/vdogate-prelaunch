'use client'

import { motion } from 'framer-motion'
import { Shield, Wallet, Globe, Zap, Video, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react'

export default function BuyerBenefits() {
  const benefits = [
    {
      icon: Shield,
      title: 'Verified Profiles',
      description: 'Every freelancer has video proof of skills - no fake claims, no surprises',
      color: 'from-blue-500 to-blue-600',
      shadowColor: 'shadow-blue-500/20'
    },
    {
      icon: Wallet,
      title: 'No Hidden Fees',
      description: 'Browse, connect, hire - all completely free. Zero platform fees for buyers',
      color: 'from-green-500 to-emerald-600',
      shadowColor: 'shadow-green-500/20'
    },
    {
      icon: Globe,
      title: 'Local & Global',
      description: 'Find talent in your city or worldwide. Filter by online, offline, or hybrid services',
      color: 'from-cyan-500 to-blue-600',
      shadowColor: 'shadow-cyan-500/20'
    },
    {
      icon: Zap,
      title: 'Instant Connection',
      description: 'Message freelancers directly. No middlemen, no delays, no friction',
      color: 'from-indigo-500 to-purple-600',
      shadowColor: 'shadow-indigo-500/20'
    }
  ]

  const features = [
    { icon: Video, text: 'Video portfolios' },
    { icon: MapPin, text: 'Location filtering' },
    { icon: MessageSquare, text: 'Direct messaging' },
    { icon: CheckCircle2, text: 'Verified profiles' }
  ]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f606_1px,transparent_1px),linear-gradient(to_bottom,#3b82f606_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Static Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6"
          >
            Everything Buyers Need,{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              All in One Place
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-gray leading-relaxed"
          >
            VDOgate gives you all the tools to find, evaluate, and hire the perfect freelancer
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className={`relative bg-white rounded-3xl p-8 shadow-xl ${benefit.shadowColor} border border-blue-100/60 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full`}>
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                  {benefit.title}
                </h3>
                <p className="text-neutral-gray leading-relaxed">
                  {benefit.description}
                </p>

                {/* Bottom Accent Bar */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.color} rounded-b-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <feature.icon className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-800">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

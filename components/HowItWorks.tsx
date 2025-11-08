'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, IndianRupee, Search, Users, MessageSquare, ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react'
import { useState } from 'react'

const freelancerSteps = [
  {
    number: '01',
    icon: Video,
    title: 'Showcase Your Skills',
    description: 'Upload short videos that highlight what you do best — whether you teach, train, design, or coach online, offline, or hybrid.',
    detail: 'Present your talent through videos and make your work visible to potential clients.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Get Discovered by Category & Location',
    description: 'VDOgate automatically lists you under your chosen category and region, so clients nearby or across India can easily find you.',
    detail: 'No algorithms. No ads. Just fair visibility for every freelancer.',
  },
  {
    number: '03',
    icon: IndianRupee,
    title: 'Earn from Your Clients',
    description: 'Earn directly from your clients. No fees or commission to be paid to the platform.',
    detail: 'Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.',
  },
]

const customerSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse by Category & Location',
    description: 'Search for freelancers in your city or across India, filtered by the service category you need.',
    detail: 'Find verified professionals near you with authentic video profiles.',
  },
  {
    number: '02',
    icon: Users,
    title: 'Watch Video Profiles',
    description: 'Preview freelancer skills through their video portfolios before making any commitment.',
    detail: 'See their work, understand their expertise, and make informed decisions.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect Directly',
    description: 'Reach out to your chosen freelancer and discuss your project requirements directly.',
    detail: 'No middleman. No platform fees. Direct communication for transparent collaboration.',
  },
]

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState<'freelancers' | 'customers'>('freelancers')

  const activeSteps = activeTab === 'freelancers' ? freelancerSteps : customerSteps
  const activeColor = activeTab === 'freelancers'
    ? { from: 'from-orange-500', to: 'to-amber-500', bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    : { from: 'from-blue-500', to: 'to-cyan-500', bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' }

  return (
    <section id="how-it-works" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-neutral-50 via-white to-orange-50/30">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b03_1px,transparent_1px),linear-gradient(to_bottom,#f7682b03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs - Optimized with CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-orange-200/30 to-amber-200/20 animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 animate-pulse" style={{ animationDuration: '18s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200/50 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-semibold text-orange-800">Simple & Transparent Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 tracking-tight">
            How <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">VDOgate</span> Works
          </h2>

          <p className="text-lg md:text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            Simple steps for Freelancers and Customers
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-center mb-16"
        >
          <div className="inline-flex bg-white rounded-2xl p-2 shadow-elevation-2 border border-neutral-gray-lighter">
            <button
              onClick={() => setActiveTab('freelancers')}
              className={`relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                activeTab === 'freelancers'
                  ? 'text-white'
                  : 'text-neutral-gray-dark hover:text-brand-black'
              }`}
            >
              {activeTab === 'freelancers' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl shadow-portal-sm"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Video className="w-5 h-5" />
                For Freelancers
              </span>
            </button>

            <button
              onClick={() => setActiveTab('customers')}
              className={`relative px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                activeTab === 'customers'
                  ? 'text-white'
                  : 'text-neutral-gray-dark hover:text-brand-black'
              }`}
            >
              {activeTab === 'customers' && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/30"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Search className="w-5 h-5" />
                For Customers
              </span>
            </button>
          </div>
        </motion.div>

        {/* Steps Grid */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {activeSteps.map((step, index) => {
              const Icon = step.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Connection Line (except last card) */}
                  {index < activeSteps.length - 1 && (
                    <div className="hidden md:block absolute top-20 left-full w-8 h-0.5 bg-gradient-to-r from-neutral-300 to-transparent z-0" />
                  )}

                  {/* Card */}
                  <div className="relative h-full bg-white rounded-3xl p-8 shadow-elevation-2 border border-neutral-gray-lighter hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-2">
                    {/* Number Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 200 }}
                      className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br ${activeColor.from} ${activeColor.to} rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-300`}
                    >
                      {step.number}
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 150 }}
                      className={`relative w-20 h-20 bg-gradient-to-br ${activeColor.from} ${activeColor.to} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-2xl" />
                      <Icon className="w-10 h-10 text-white relative z-10" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-brand-black mb-4 leading-tight">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-neutral-gray-dark leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Detail with Icon */}
                    <div className={`flex items-start gap-3 p-4 ${activeColor.bg} rounded-xl border ${activeColor.border}`}>
                      <CheckCircle2 className={`w-5 h-5 ${activeColor.text} flex-shrink-0 mt-0.5`} />
                      <p className="text-sm text-neutral-gray-dark leading-relaxed">
                        {step.detail}
                      </p>
                    </div>

                    {/* Decorative Bottom Accent */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
                      className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${activeColor.from} ${activeColor.to} rounded-b-3xl`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-white rounded-3xl p-8 md:p-12 shadow-elevation-3 border border-orange-200/40 overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.05),transparent_70%)]" />
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-amber-300/20 to-transparent rounded-full blur-3xl" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full mb-6"
              >
                <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
                <span className="text-sm font-semibold text-orange-800">Everything You Need in One Platform</span>
              </motion.div>

              <p className="text-lg md:text-xl text-neutral-gray-dark leading-relaxed mb-8 max-w-3xl mx-auto">
                Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span className="relative z-10">Join the Platform – Free Pre-Launch Registration</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-gray"
              >
                <Sparkles className="w-4 h-4 text-orange-500" />
                <span>Join 500+ freelancers already registered</span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

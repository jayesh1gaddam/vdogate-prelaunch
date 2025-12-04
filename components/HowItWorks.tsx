'use client'

import { motion } from 'framer-motion'
import { Video, MapPin, IndianRupee, Search, Users, MessageSquare, ArrowRight, Sparkles, CheckCircle2, Star } from 'lucide-react'
import { useState } from 'react'

const freelancerSteps = [
  {
    number: '01',
    icon: Video,
    title: 'Upload Videos',
    description: 'Show real skill and build trust',
    detail: 'Upload videos that showcase your authentic work and expertise.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Get Discovered',
    description: 'By category & location (online / offline / hybrid)',
    detail: 'Clients find you based on your skills, location, and service type.',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect Directly',
    description: 'No middlemen, no commission',
    detail: 'Direct communication with clients. Zero platform fees on services.',
  },
  {
    number: '04',
    icon: IndianRupee,
    title: 'Host Paid Live Events',
    description: 'Monetize instantly',
    detail: 'Earn through live workshops, training, and coaching sessions.',
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
    <section id="how-it-works" className={`relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-neutral-50 via-white ${activeTab === 'freelancers' ? 'to-orange-50/30' : 'to-blue-50/30'}`}>
      {/* Premium Background Elements */}
      <div className={`absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] ${activeTab === 'freelancers' ? 'from-orange-100/20' : 'from-blue-100/20'} via-transparent to-transparent`} />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b03_1px,transparent_1px),linear-gradient(to_bottom,#f7682b03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Orbs - Optimized with CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-10 w-64 h-64 rounded-full blur-3xl ${activeTab === 'freelancers' ? 'bg-gradient-to-br from-orange-200/30 to-amber-200/20' : 'bg-gradient-to-br from-blue-200/30 to-cyan-200/20'} animate-pulse`} style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-blue-200/20 to-cyan-200/20 animate-pulse" style={{ animationDuration: '18s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className={`inline-flex items-center gap-2 px-4 py-2 ${activeTab === 'freelancers' ? 'bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200/50' : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200/50'} border rounded-full mb-6`}
          >
            <Sparkles className={`w-4 h-4 ${activeTab === 'freelancers' ? 'text-orange-600' : 'text-blue-600'}`} />
            <span className={`text-sm font-semibold ${activeTab === 'freelancers' ? 'text-orange-800' : 'text-blue-800'}`}>Simple & Transparent Process</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 tracking-tight">
            How <span className={`bg-gradient-to-r ${activeTab === 'freelancers' ? 'from-orange-500 to-amber-500' : 'from-blue-500 to-cyan-500'} bg-clip-text text-transparent`}>VDOgate</span> Works
          </h2>

          <p className="text-lg md:text-xl text-neutral-gray max-w-2xl mx-auto leading-relaxed">
            Lifetime free for customers. Easy earnings for freelancers.
          </p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col items-center mb-16"
        >
          <p className="text-xs font-semibold text-neutral-gray mb-3">Choose your path:</p>
          <div
            className="flex flex-col sm:flex-row gap-3 w-full max-w-xl px-4"
            role="tablist"
            aria-label="How it works tabs"
          >
            <motion.button
              onClick={() => setActiveTab('freelancers')}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md overflow-hidden ${activeTab === 'freelancers'
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-orange-500/30'
                : 'bg-white text-neutral-gray-dark border-2 border-orange-200 hover:border-orange-400 shadow-neutral-gray-lighter/50'
                }`}
              role="tab"
              aria-selected={activeTab === 'freelancers'}
              id="tab-freelancers"
              aria-controls="panel-freelancers"
              tabIndex={activeTab === 'freelancers' ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'ArrowRight' || e.key === 'End') {
                  setActiveTab('customers')
                  document.getElementById('tab-customers')?.focus()
                } else if (e.key === 'Home') {
                  setActiveTab('freelancers')
                  document.getElementById('tab-freelancers')?.focus()
                }
              }}
            >
              {activeTab === 'freelancers' && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Video className="w-4 h-4" />
                <span className="flex flex-col items-start">
                  <span>For Freelancers</span>
                  <span className={`text-[10px] font-normal ${activeTab === 'freelancers' ? 'text-white/90' : 'text-neutral-gray'}`}>
                    Showcase & Earn
                  </span>
                </span>
              </span>
              {activeTab === 'freelancers' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>

            <motion.button
              onClick={() => setActiveTab('customers')}
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`relative flex-1 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md overflow-hidden ${activeTab === 'customers'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-blue-500/30'
                : 'bg-white text-neutral-gray-dark border-2 border-blue-200 hover:border-blue-400 shadow-neutral-gray-lighter/50'
                }`}
              role="tab"
              aria-selected={activeTab === 'customers'}
              id="tab-customers"
              aria-controls="panel-customers"
              tabIndex={activeTab === 'customers' ? 0 : -1}
              onKeyDown={(e) => {
                if (e.key === 'ArrowLeft' || e.key === 'Home') {
                  setActiveTab('freelancers')
                  document.getElementById('tab-freelancers')?.focus()
                } else if (e.key === 'End') {
                  setActiveTab('customers')
                  document.getElementById('tab-customers')?.focus()
                }
              }}
            >
              {activeTab === 'customers' && (
                <motion.div
                  layoutId="activeBorder"
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                <span className="flex flex-col items-start">
                  <span>For Customers</span>
                  <span className={`text-[10px] font-normal ${activeTab === 'customers' ? 'text-white/90' : 'text-neutral-gray'}`}>
                    Find & Hire
                  </span>
                </span>
              </span>
              {activeTab === 'customers' && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-1.5 right-1.5 w-4 h-4 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <CheckCircle2 className="w-3 h-3 text-white" />
                </motion.div>
              )}
            </motion.button>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12 mb-8"
        >
          <p className="text-xl md:text-2xl font-semibold text-brand-black">
            One platform. Two sides. <span className="text-gradient">Freelancers showcase. Buyers discover. Everyone wins.</span>
          </p>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className={`relative bg-gradient-to-br from-white ${activeTab === 'freelancers' ? 'via-orange-50/30 border-orange-200/40' : 'via-blue-50/30 border-blue-200/40'} to-white rounded-3xl p-8 md:p-12 shadow-elevation-3 border overflow-hidden`}>
            {/* Background Decoration */}
            <div className={`absolute inset-0 ${activeTab === 'freelancers' ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.05),transparent_70%)]' : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_70%)]'}`} />
            <div className={`absolute top-0 right-0 w-40 h-40 ${activeTab === 'freelancers' ? 'bg-gradient-to-br from-orange-300/20' : 'bg-gradient-to-br from-blue-300/20'} to-transparent rounded-full blur-3xl`} />
            <div className={`absolute bottom-0 left-0 w-40 h-40 ${activeTab === 'freelancers' ? 'bg-gradient-to-tl from-amber-300/20' : 'bg-gradient-to-tl from-cyan-300/20'} to-transparent rounded-full blur-3xl`} />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border ${activeTab === 'freelancers' ? 'border-orange-200' : 'border-blue-200'} rounded-full mb-6`}
              >
                <Star className={`w-4 h-4 ${activeTab === 'freelancers' ? 'text-orange-600 fill-orange-600' : 'text-blue-600 fill-blue-600'}`} />
                <span className={`text-sm font-semibold ${activeTab === 'freelancers' ? 'text-orange-800' : 'text-blue-800'}`}>Everything You Need in One Platform</span>
              </motion.div>

              <p className="text-lg md:text-xl text-neutral-gray-dark leading-relaxed mb-8 max-w-3xl mx-auto">
                {activeTab === 'freelancers'
                  ? "One platform. Two sides. Freelancers showcase. Buyers discover. Everyone wins."
                  : "Find talented professionals who are ready to deliver quality work — browse authentic video portfolios and hire with confidence, completely free."}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                className={`group relative px-8 py-4 ${activeTab === 'freelancers' ? 'bg-gradient-to-r from-orange-500 to-amber-500 shadow-orange-500/30 hover:shadow-orange-500/40' : 'bg-gradient-to-r from-blue-500 to-cyan-500 shadow-blue-500/30 hover:shadow-blue-500/40'} text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2`}
              >
                <span className="relative z-10">
                  {activeTab === 'freelancers'
                    ? 'Activate 30-days freelancer trial'
                    : 'Start finding freelancers now'}
                </span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-gray"
              >
                <Sparkles className={`w-4 h-4 ${activeTab === 'freelancers' ? 'text-orange-500' : 'text-blue-500'}`} />
                <span>
                  {activeTab === 'freelancers'
                    ? 'Join 500+ freelancers already registered'
                    : 'Trusted by businesses across India'}
                </span>
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div >
    </section >
  )
}

'use client'

import { motion } from 'framer-motion'
import { Video, Users, Wallet, Calendar, Shield, Zap, Heart, Target, CheckCircle } from 'lucide-react'
import LiveEventsNav from './LiveEventsNav'
import LiveEventsFooter from './LiveEventsFooter'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function LiveEventsAbout() {
  return (
    <div className="min-h-screen bg-white">
      <LiveEventsNav />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 bg-gradient-to-br from-playful-purple/5 via-white to-playful-yellow/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-playful-purple rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-playful-yellow rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
              ABOUT VDOGATE LIVE EVENTS
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-brand-black">
              Earn Through{' '}
              <span className="text-playful-gradient">Live Sessions</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              VDOgate Live Events is a platform that lets creators, educators, and professionals
              host paid live sessions and earn directly from their audience. No subscriptions,
              no complex setups — just create, share, and earn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What is VDOgate Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              What is VDOgate <span className="text-playful-gradient">Live Events?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="bg-gradient-to-br from-playful-purple/5 to-playful-purple/10 rounded-3xl p-8 border-2 border-playful-purple/20"
            >
              <div className="w-14 h-14 bg-playful-purple rounded-2xl flex items-center justify-center mb-6">
                <Video className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">A Live Events Platform</h3>
              <p className="text-gray-600 leading-relaxed">
                VDOgate Live Events is a simple, creator-friendly platform for hosting paid live sessions.
                Whether you're a yoga instructor, business coach, makeup artist, or educator —
                you can monetize your expertise through live events without any technical hassle.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="bg-gradient-to-br from-playful-yellow/5 to-playful-yellow/10 rounded-3xl p-8 border-2 border-playful-yellow/20"
            >
              <div className="w-14 h-14 bg-playful-yellow rounded-2xl flex items-center justify-center mb-6">
                <Wallet className="w-7 h-7 text-playful-purple-dark" />
              </div>
              <h3 className="text-2xl font-bold text-brand-black mb-4">Simple Pricing, Fair Earnings</h3>
              <p className="text-gray-600 leading-relaxed">
                Pay just ₹299 per event to create a live session. Sell tickets at your own price
                and keep up to 90% of your earnings. No monthly subscriptions, no recurring charges,
                no hidden fees — you only pay when you host.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is it for Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-playful-cream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Who is VDOgate <span className="text-playful-gradient">For?</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              VDOgate Live Events is built for anyone who wants to share their skills and earn from it.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Educators & Coaches',
                description: 'Teachers, tutors, business coaches, life coaches, and career mentors who want to conduct paid workshops and training sessions.',
                color: 'playful-purple'
              },
              {
                icon: Heart,
                title: 'Fitness & Wellness',
                description: 'Yoga instructors, fitness trainers, nutritionists, and wellness coaches looking to host online classes for paying students.',
                color: 'playful-mint'
              },
              {
                icon: Zap,
                title: 'Creative Professionals',
                description: 'Makeup artists, photographers, artists, musicians, and craftspeople who want to teach their skills through live masterclasses.',
                color: 'playful-orange'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className={`w-14 h-14 bg-${item.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* What Live Events Enable Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              What Can You Do With <span className="text-playful-gradient">Live Events?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { text: 'Host paid workshops and masterclasses', icon: Video },
              { text: 'Conduct group training sessions', icon: Users },
              { text: 'Run live Q&A and consultation calls', icon: Calendar },
              { text: 'Offer sponsored or free events (pay ₹25/attendee)', icon: Heart },
              { text: 'Receive payments directly with ~7-day settlement', icon: Wallet },
              { text: 'Set your own ticket prices (starting ₹99/hr)', icon: Target },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.05 }}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-playful-purple/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-playful-purple/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-playful-purple" />
                  </div>
                  <p className="text-gray-700 font-medium">{item.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Transparency Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-playful-purple via-playful-purple to-playful-purple-dark text-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparent, Creator-Friendly Pricing
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              No surprises, no hidden fees. Here's exactly what you pay and what you earn.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Event Fee */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">Event Creation Fee</h3>
              <div className="text-5xl font-bold text-playful-yellow mb-2">₹299</div>
              <p className="text-white/70">per live event</p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-playful-yellow flex-shrink-0" />
                  No monthly subscriptions
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-playful-yellow flex-shrink-0" />
                  Pay only when you host
                </li>
                <li className="flex items-center gap-3 text-white/90">
                  <CheckCircle className="w-5 h-5 text-playful-yellow flex-shrink-0" />
                  No commitment required
                </li>
              </ul>
            </motion.div>

            {/* Revenue Share */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20"
            >
              <h3 className="text-xl font-bold mb-4">Your Earnings (Tiered)</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-xl p-4">
                  <p className="text-sm text-white/70 mb-1">Tickets below ₹199</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-playful-yellow">85%</span>
                    <span className="text-white/70">you keep</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">15% platform fee</p>
                </div>
                <div className="bg-white/20 rounded-xl p-4 border border-playful-yellow/30">
                  <div className="flex items-center justify-between mb-1">
                    <p className="text-sm text-white/70">Tickets ₹199 & above</p>
                    <span className="px-2 py-0.5 bg-playful-yellow text-playful-purple-dark text-xs font-bold rounded-full">Best Value</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-playful-yellow">90%</span>
                    <span className="text-white/70">you keep</span>
                  </div>
                  <p className="text-sm text-white/60 mt-1">Only 10% platform fee</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...springTransition, delay: 0.2 }}
            className="text-center text-white/70 mt-8 text-sm"
          >
            Settlement in ~7 days. Statutory deductions (TDS/TCS ~1-2%) apply as per government regulations.
          </motion.p>
        </div>
      </section>

      {/* Why VDOgate Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
              Why Choose <span className="text-playful-gradient">VDOgate?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'No Platform Lock-in',
                description: 'Share your event link anywhere — Instagram, WhatsApp, YouTube. Your audience, your reach.'
              },
              {
                icon: Zap,
                title: 'Simple Setup',
                description: 'Create an event in minutes. Set your price, date, and time. Get a shareable link instantly.'
              },
              {
                icon: Wallet,
                title: 'Fast Payouts',
                description: 'Receive your earnings within ~7 days after your event. No waiting for weeks or months.'
              },
              {
                icon: Target,
                title: 'Fair Pricing',
                description: 'Keep up to 90% of your ticket sales. The more you charge, the more you keep.'
              },
              {
                icon: Users,
                title: 'Built for Indian Creators',
                description: 'Pricing in INR, UPI payments, compliance with Indian tax regulations. Made for India.'
              },
              {
                icon: Heart,
                title: 'Creator-First Approach',
                description: 'We succeed when you succeed. Our platform is designed to maximize your earnings.'
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springTransition, delay: index * 0.05 }}
                  className="p-6 rounded-2xl bg-gray-50 hover:bg-playful-purple/5 transition-colors"
                >
                  <div className="w-12 h-12 bg-playful-purple/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-playful-purple" />
                  </div>
                  <h3 className="text-lg font-bold text-brand-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-playful-cream">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-6">
              Ready to Start Earning?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Create your first live event today. It takes just a few minutes to set up,
              and you can start selling tickets immediately.
            </p>
            <a
              href="https://app.vdogate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/35 hover:scale-[1.02] transition-all duration-300"
            >
              Create a Live Event — ₹299
            </a>
          </motion.div>
        </div>
      </section>

      <LiveEventsFooter />
    </div>
  )
}

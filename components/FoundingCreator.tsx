'use client'

import { motion } from 'framer-motion'
import { Award, Star, Users, Sparkles, TrendingUp, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { fadeInUp, scaleIn } from '@/lib/animations'

const benefits = [
  { icon: Award, title: 'Lifetime Premium Benefits', desc: 'Exclusive founding member perks', iconColor: 'text-yellow-400', bgColor: 'bg-yellow-400/20', hoverBg: 'group-hover:bg-yellow-400/30' },
  { icon: Users, title: 'Community Building', desc: 'Join freelancer community', iconColor: 'text-pink-400', bgColor: 'bg-pink-400/20', hoverBg: 'group-hover:bg-pink-400/30' },
  { icon: Star, title: 'Early Revenue Opportunity', desc: 'Launch day advantages', iconColor: 'text-green-400', bgColor: 'bg-green-400/20', hoverBg: 'group-hover:bg-green-400/30' },
]

export default function FoundingCreator() {
  return (
    <section id="founding-creator" className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-rose-50/30 via-orange-50/40 to-amber-50/30">
      {/* Premium Gradient Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#F7682B" />
              <line x1="10" y1="10" x2="40" y2="10" stroke="#F7682B" strokeWidth="1" />
              <circle cx="40" cy="10" r="2" fill="#F7682B" />
              <line x1="10" y1="10" x2="10" y2="40" stroke="#F7682B" strokeWidth="1" />
              <circle cx="10" cy="40" r="2" fill="#F7682B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Static Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 to-rose-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-orange-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-portal-primary/10 to-portal-light/10 border-[0.2px] border-portal-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-portal-primary" />
            <span className="text-brand-black font-semibold">Limited 500 Seats Only</span>
            <TrendingUp className="w-5 h-5 text-portal-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-black">
            Become a Founding Freelancer
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto mb-8">
            Join the exclusive group of early adopters. Limited to first 500 freelancers.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-6 mb-10"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 cursor-pointer group hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-[0.2px] border-neutral-gray-lighter"
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-portal-primary to-portal-light rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-black mb-1">{benefit.title}</h3>
                      <p className="text-neutral-gray-dark text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>

          {/* Community Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-portal-primary/5 to-portal-light/10 border-[0.2px] border-portal-primary/30 rounded-2xl p-8 relative overflow-hidden mb-10"
          >
            <div className="relative z-10 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-6 h-6 text-portal-primary" />
                <span className="text-3xl font-bold text-brand-black">500</span>
                <Star className="w-6 h-6 text-vdo-orange" />
              </div>
              <p className="text-lg font-semibold text-brand-black mb-1">Founding Freelancers Only</p>
              <p className="text-sm text-neutral-gray-dark">Secure your spot in India's premium freelancer platform</p>

              {/* Community Avatar Stack */}
              <div className="flex justify-center items-center my-6">
                <div className="flex -space-x-3">
                  {[
                    { color: 'from-purple-400 to-purple-600', image: '/yoga.webp' },
                    { color: 'from-pink-400 to-rose-600', image: '/makeup.webp' },
                    { color: 'from-orange-400 to-red-600', image: '/chef.webp' },
                    { color: 'from-green-400 to-emerald-600', image: '/teacher.webp' },
                    { color: 'from-blue-400 to-cyan-600', image: '/gym.webp' },
                    { color: 'from-indigo-400 to-violet-600', image: '/photograper.webp' },
                  ].map((person, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + idx * 0.1, duration: 0.3 }}
                      className={`w-12 h-12 bg-gradient-to-br ${person.color} rounded-full flex items-center justify-center border-3 border-white shadow-md hover:scale-110 hover:z-10 transition-transform cursor-pointer overflow-hidden`}
                    >
                      <Image src={person.image} alt="Freelancer" width={48} height={48} className="object-cover w-full h-full" />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 0.3 }}
                    className="w-12 h-12 bg-gradient-to-br from-portal-primary to-portal-light rounded-full flex items-center justify-center text-white text-xs font-bold border-3 border-white shadow-md"
                  >
                    +163
                  </motion.div>
                </div>
              </div>

              {/* Progress indicator */}
              <div className="max-w-md mx-auto">
                <div className="w-full bg-neutral-gray-lighter rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '34%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-portal-primary to-vdo-orange rounded-full"
                  />
                </div>
                <p className="text-xs text-neutral-gray mt-2">170 spots claimed • 330 remaining</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <a
              href="https://app.vdogate.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span>Join as Founding Freelancer</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-sm text-neutral-gray mt-4">
              Free registration • No credit card required
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

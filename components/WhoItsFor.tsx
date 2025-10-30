'use client'

import { motion } from 'framer-motion'
import { Sparkles, Users, ArrowRight } from 'lucide-react'

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-portal-primary/5 via-transparent to-portal-light/5 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            Join India's <span className="text-gradient">Leading Freelancers</span>
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Creators Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-portal-primary/10 to-portal-lighter/5 rounded-3xl p-10 border border-portal-primary/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-portal-gradient rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-headline-md text-portal-primary">For Freelancers</h3>
            </div>

            <p className="text-body-lg font-semibold mb-6">Are you a:</p>

            <ul className="space-y-4 mb-8">
              {[
                'Makeup artist, hair stylist, or beauty professional?',
                'Fitness coach, yoga instructor, or wellness expert?',
                'Design consultant, photographer, or creative professional?',
                'Business coach, marketing expert, or skills trainer?',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-portal-gradient rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-body-md text-neutral-gray-dark">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold text-neutral-black">
                Transform your expertise into steady income
              </p>
            </div>

            <button
              onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
            >
              Become a Founding Freelancer
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Visitors Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-gate-blue/10 to-portal-light/5 rounded-3xl p-10 border border-gate-blue/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gate-blue to-portal-light rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-headline-md text-gate-blue">For Visitors</h3>
            </div>

            <p className="text-body-lg font-semibold mb-6">Looking for:</p>

            <ul className="space-y-4 mb-8">
              {[
                'Professional beauty services with verified portfolios?',
                'Expert coaching from skilled trainers?',
                'Creative services from talented professionals?',
                'Consultations you can book with confidence?',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gradient-to-br from-gate-blue to-portal-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <span className="text-body-md text-neutral-gray-dark">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/80 backdrop-blur rounded-2xl p-6 mb-8">
              <p className="text-lg font-semibold text-neutral-black">
                Discover talent through authentic video profiles
              </p>
            </div>

            <button
              disabled
              className="w-full px-8 py-4 bg-neutral-gray-light text-white rounded-xl font-semibold text-lg cursor-not-allowed opacity-60 relative"
            >
              Browse Freelancers
              <span className="absolute -top-2 -right-2 bg-vdo-orange text-white text-xs px-3 py-1 rounded-full">
                Coming Soon
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

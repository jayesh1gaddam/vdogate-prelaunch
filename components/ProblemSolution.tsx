'use client'

import { motion } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, Video, MapPin, IndianRupee } from 'lucide-react'

export default function ProblemSolution() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-indigo-50/30 to-purple-50/20">
      {/* Premium Gradient Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-purple-100/20 via-transparent to-transparent" />

      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,#f7682b05_25%,transparent_25%,transparent_75%,#f7682b05_75%,#f7682b05),linear-gradient(45deg,#f7682b05_25%,transparent_25%,transparent_75%,#f7682b05_75%,#f7682b05)] bg-[size:60px_60px] bg-[position:0_0,30px_30px]" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-indigo-200/30 to-purple-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-blue-200/20 to-violet-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Opening Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            The Challenge & How <span className="text-gradient">VDOgate Changes That</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray leading-relaxed">
            Across India, millions of freelancers — from yoga trainers, beauticians, chefs, tutors, designers, photographers, fitness coaches, event planners, artists, tech professionals, musicians, consultants, and countless others — depend on social media to find clients.
          </p>
        </motion.div>

        {/* Split Layout: Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* LEFT: The Problem - Social Media Clutter */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Visual Representation of Social Media Chaos */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 md:p-10 border border-red-200 shadow-xl mb-6">
              <div className="space-y-4">
                {/* Chaotic Feed Items */}
                {[
                  { icon: AlertCircle, text: 'Lost in the feed', color: 'text-red-600' },
                  { icon: TrendingDown, text: 'Algorithm changes', color: 'text-orange-600' },
                  { icon: Users, text: 'Follower count matters', color: 'text-red-600' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className="flex items-center gap-3 p-3 bg-white/70 backdrop-blur rounded-xl"
                  >
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-sm font-medium text-neutral-gray-dark">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* "Spend More on Ads" Button Mockup */}
              <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-xl text-center">
                <p className="text-sm font-bold text-red-700">💸 Spend More on Ads to Get Seen</p>
                <p className="text-xs text-red-600 mt-1">Still no guarantee of monetization</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm font-semibold text-neutral-gray-dark mb-2">The Problem:</p>
              <p className="text-base md:text-lg text-neutral-gray leading-relaxed">
                Visibility depends on <span className="font-semibold text-red-600">ads, algorithms, and follower counts</span> — not skill.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: The Solution - VDOgate */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-portal-primary/10 to-portal-light/5 rounded-3xl p-8 md:p-10 border border-portal-primary/30 shadow-xl mb-6">
              <h3 className="text-2xl font-bold text-brand-black mb-6">VDOgate changes that.</h3>

              <div className="space-y-4">
                {/* Solution Features */}
                {[
                  { icon: Video, text: 'Video-first platform to showcase your services', color: 'bg-portal-primary' },
                  { icon: MapPin, text: 'Discovered by category and location', color: 'bg-portal-light' },
                  { icon: IndianRupee, text: 'Earn directly from clients', color: 'bg-green-600' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
                    className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <p className="text-sm md:text-base font-medium text-neutral-gray-dark pt-2">{item.text}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Highlighted Promise */}
            <div className="bg-gradient-to-r from-portal-primary to-portal-light rounded-2xl p-6 text-white text-center shadow-xl">
              <p className="text-lg md:text-xl font-bold mb-2">No Ads. No Algorithms. No Commission.</p>
              <p className="text-sm md:text-base opacity-90">Just fair discovery and income for every freelancer</p>
            </div>
          </motion.div>
        </div>

        {/* Detailed Explanation Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <p className="text-lg md:text-xl text-neutral-gray leading-relaxed mb-6">
            Freelancers spend valuable time and money chasing reach instead of serving clients, and many never qualify for monetization because platforms demand high followers or long watch-times before allowing income.
          </p>
          <p className="text-xl md:text-2xl font-semibold text-brand-black leading-relaxed mb-8">
            It is India's first video-first platform where freelancers can promote their services through videos, be discovered by category and location, and{' '}
            <span className="text-gradient">earn directly from clients</span> — without middlemen, agencies, or commission cuts.
          </p>
        </motion.div>

        {/* Gateway Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-portal-primary/20 text-center">
            <p className="text-2xl md:text-3xl font-bold text-brand-black leading-relaxed mb-6">
              VDOgate is India's gateway where customers discover your talents —{' '}
              <span className="text-gradient">fairly, transparently, and without algorithm bias</span>.
            </p>
            <button
              onClick={() => scrollToSection('founding-creator')}
              className="inline-flex items-center gap-2 px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
            >
              Join the Platform – Free Pre-Launch Registration
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

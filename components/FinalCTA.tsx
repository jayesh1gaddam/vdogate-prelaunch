'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'

// Simplified Badge - No pulsing animation
const StaticBadge = ({ icon: Icon, text, color }: { icon: React.ElementType; text: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`inline-flex items-center gap-2 px-4 py-2 ${color} rounded-full shadow-lg backdrop-blur-sm`}
  >
    <Icon className="w-4 h-4" />
    <span className="text-xs font-bold">{text}</span>
  </motion.div>
)

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Static Premium Background - No animations */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />

      {/* Static Grid Pattern - No opacity animation */}
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        style={{ opacity: 0.4 }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

      {/* Static Gradient Orbs - CSS only, no Framer Motion */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-500/30 to-pink-500/30" />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-bl from-purple-500/30 to-blue-500/30" />
        <div className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl bg-gradient-to-tr from-cyan-500/20 to-teal-500/20" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Static Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <StaticBadge icon={Sparkles} text="Limited Spots" color="bg-gradient-to-r from-orange-500 to-pink-500 text-white" />
            <StaticBadge icon={Zap} text="1 month free trial" color="bg-gradient-to-r from-purple-500 to-indigo-500 text-white" />
            <StaticBadge icon={Award} text="Early Access" color="bg-gradient-to-r from-cyan-500 to-blue-500 text-white" />
          </div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent leading-tight">
              Showcase. Connect. Earn. Your way.
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Make money from your skills — not spend money to promote them.
            <br />
            <span className="font-semibold">No Ads • No Algorithm • No Commission on Your Services</span>
          </motion.p>

          {/* Info Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4 text-white/80 mb-12 max-w-4xl mx-auto"
          >
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Shield className="w-4 h-4 text-green-400" />
              Pre-launch registration is free
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Users className="w-4 h-4 text-purple-400" />
              Join the first 500 freelancers
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <TrendingUp className="w-4 h-4 text-orange-400" />
              ₹2,999/month subscription starts after launch
            </span>
          </motion.div>

          {/* Dual CTA Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Freelancers CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(247,104,43,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.05),transparent_50%)]" />

                {/* Static Corner Accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-black">For Freelancers</h3>
                  </div>

                  <p className="text-base md:text-lg text-neutral-gray-dark mb-8 leading-relaxed">
                    Be among the first 500 freelancers to build the future of India's freelance economy
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-4 mb-8 text-left">
                    {[
                      { text: 'Free pre-launch registration, no credit card required', icon: CheckCircle2, color: 'text-green-600' },
                      { text: 'Video-first platform, showcase your skills authentically', icon: Zap, color: 'text-orange-600' },
                      { text: 'Zero commission, keep 100% of your service fees', icon: Shield, color: 'text-purple-600' },
                      { text: 'Fair discovery by category & location, no ads needed', icon: TrendingUp, color: 'text-blue-600' },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className={`w-8 h-8 ${item.color} bg-gradient-to-br from-white to-gray-50 rounded-lg flex items-center justify-center shadow-sm group-hover/item:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm md:text-base text-neutral-gray-dark font-medium">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button - Static shine on hover only */}
                  <a
                    href="https://app.vdogate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full px-8 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden group/button block text-center"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join as Founding Freelancer
                      <ArrowRight className="w-5 h-5 group-hover/button:translate-x-1 transition-transform" />
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Customers CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="relative group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-indigo-900/95 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.12),transparent_50%)]" />

                {/* Static Corner Accent */}
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/30 to-transparent rounded-br-full" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">For Customers</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 backdrop-blur-sm rounded-full border-2 border-cyan-300/50">
                      <span className="text-xs font-bold text-cyan-200 uppercase tracking-wide">Coming Soon</span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-white/95 mb-8 leading-relaxed drop-shadow">
                    Discover talented freelancers through authentic video profiles
                  </p>

                  {/* Benefits List */}
                  <ul className="space-y-4 mb-8 text-left">
                    {[
                      { text: 'Browse by category & location', icon: CheckCircle2, color: 'text-cyan-300', bgColor: 'bg-cyan-500/20' },
                      { text: 'Watch skills videos before hiring', icon: Sparkles, color: 'text-blue-300', bgColor: 'bg-blue-500/20' },
                      { text: 'Connect directly with freelancers', icon: Users, color: 'text-purple-300', bgColor: 'bg-purple-500/20' },
                      { text: 'No platform fees for customers', icon: Shield, color: 'text-green-300', bgColor: 'bg-green-500/20' },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3 group/item"
                      >
                        <div className={`w-8 h-8 ${item.color} ${item.bgColor} backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md border border-white/30 group-hover/item:scale-110 transition-transform duration-300`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm md:text-base text-white font-medium drop-shadow">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Disabled Button */}
                  <div className="relative">
                    <button
                      disabled
                      className="w-full px-8 py-5 bg-slate-700/50 backdrop-blur border-2 border-slate-600/50 text-slate-300 rounded-2xl font-bold text-base md:text-lg cursor-not-allowed relative overflow-hidden shadow-inner"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Find My Freelancer
                      </span>
                    </button>
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl shadow-orange-500/50">
                      Coming Soon
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

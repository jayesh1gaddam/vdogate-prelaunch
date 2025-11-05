'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, CheckCircle2, Sparkles, Zap, Shield, TrendingUp, Users, Award } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

// Floating Particles Component
const FloatingParticles = ({ count = 20 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full"
          initial={{
            x: Math.random() * 100 + '%',
            y: Math.random() * 100 + '%',
          }}
          animate={{
            y: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            x: [Math.random() * 100 + '%', Math.random() * 100 + '%'],
            scale: [1, 1.5, 1],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}

// Spotlight Effect
const SpotlightEffect = () => {
  const [isClient, setIsClient] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(255,255,255,0.06), transparent 40%)`
  )

  useEffect(() => {
    setIsClient(true)
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  if (!isClient) return null

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300"
      style={{
        background,
      }}
    />
  )
}

// Pulsing Badge
const PulsingBadge = ({ icon: Icon, text, color }: { icon: any; text: string; color: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="relative"
  >
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`inline-flex items-center gap-2 px-4 py-2 ${color} rounded-full shadow-lg backdrop-blur-sm`}
    >
      <Icon className="w-4 h-4" />
      <span className="text-xs font-bold">{text}</span>
    </motion.div>
  </motion.div>
)

export default function FinalCTA() {
  return (
    <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Multi-Layer Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-500/30 to-pink-500/30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-bl from-purple-500/30 to-blue-500/30"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -60, 0],
            y: [0, 40, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl bg-gradient-to-tr from-cyan-500/20 to-teal-500/20"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-[15%] w-20 h-20 border-2 border-orange-300/30 rounded-2xl"
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-[20%] w-16 h-16 border-2 border-purple-300/30 rounded-full"
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-14 h-14 bg-gradient-to-br from-pink-400/20 to-transparent rounded-xl"
          animate={{
            y: [0, -35, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Floating Particles */}
      <FloatingParticles count={30} />

      {/* Spotlight Effect */}
      <SpotlightEffect />

      {/* Shimmer Wave */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Floating Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <PulsingBadge icon={Sparkles} text="Limited Spots" color="bg-gradient-to-r from-orange-500 to-pink-500 text-white" />
            <PulsingBadge icon={Zap} text="Free Pre-Launch" color="bg-gradient-to-r from-purple-500 to-indigo-500 text-white" />
            <PulsingBadge icon={Award} text="Early Access" color="bg-gradient-to-r from-cyan-500 to-blue-500 text-white" />
          </div>

          {/* Main Heading with Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent leading-tight">
              Join VDOgate Before Launch
            </h2>
          </motion.div>

          {/* Subtitle with Enhanced Typography */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Be among the first freelancers to showcase your skills on India's platform built for India's talent
          </motion.p>

          {/* Info Text with Icons */}
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
              <TrendingUp className="w-4 h-4 text-orange-400" />
              Limited spots available
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="flex items-center gap-2 text-sm md:text-base">
              <Users className="w-4 h-4 text-purple-400" />
              Subscription begins only after platform launch
            </span>
          </motion.div>

          {/* Dual CTA Cards with Enhanced Design */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Freelancers CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group perspective-1000"
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative bg-white rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                {/* Premium Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(247,104,43,0.08),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.05),transparent_50%)]" />

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-400/20 to-transparent rounded-bl-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <Sparkles className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-brand-black">For Freelancers</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-orange-100 to-pink-100 rounded-full">
                      <span className="text-xs font-bold text-orange-700 uppercase tracking-wide">Free Access</span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-neutral-gray-dark mb-8 leading-relaxed">
                    Register now for free early access
                  </p>

                  {/* Benefits List with Enhanced Design */}
                  <ul className="space-y-4 mb-8 text-left">
                    {[
                      { text: 'Free pre-launch registration', icon: CheckCircle2, color: 'text-green-600' },
                      { text: 'Early access to platform features', icon: Zap, color: 'text-orange-600' },
                      { text: 'No commission on your services', icon: Shield, color: 'text-purple-600' },
                      { text: 'Fair discovery by category & location', icon: TrendingUp, color: 'text-blue-600' },
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

                  {/* CTA Button with Premium Interactions */}
                  <motion.button
                    onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative w-full px-8 py-5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 text-white rounded-2xl font-bold text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group/button"
                  >
                    {/* Button Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Join the Platform – Free Pre-Launch Registration
                      <ArrowRight className="w-5 h-5 group-hover/button:translate-x-2 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Customers CTA */}
            <motion.div
              initial={{ opacity: 0, y: 40, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 }
              }}
              className="relative group perspective-1000"
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 rounded-3xl blur-xl opacity-40 group-hover:opacity-70 transition duration-500" />

              <div className="relative bg-gradient-to-br from-slate-800/95 via-slate-900/95 to-indigo-900/95 backdrop-blur-2xl border-2 border-cyan-400/40 rounded-3xl p-8 md:p-10 lg:p-12 shadow-2xl overflow-hidden">
                {/* Enhanced Background Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(34,211,238,0.15),transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(59,130,246,0.12),transparent_50%)]" />

                {/* Animated Light Beam */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-full opacity-30"
                  animate={{
                    background: [
                      'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.2), transparent 40%)',
                      'radial-gradient(circle at 80% 80%, rgba(59,130,246,0.2), transparent 40%)',
                      'radial-gradient(circle at 20% 20%, rgba(34,211,238,0.2), transparent 40%)',
                    ],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Animated Corner Accent */}
                <motion.div
                  className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-bl from-cyan-400/30 to-transparent rounded-br-full"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.4, 0.6, 0.4],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50"
                      >
                        <Users className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">For Customers</h3>
                    </div>
                    <div className="px-3 py-1.5 bg-gradient-to-r from-cyan-400/30 to-blue-500/30 backdrop-blur-sm rounded-full border-2 border-cyan-300/50">
                      <span className="text-xs font-bold text-cyan-200 uppercase tracking-wide">Coming Soon</span>
                    </div>
                  </div>

                  <p className="text-base md:text-lg text-white/95 mb-8 leading-relaxed drop-shadow">
                    Discover talented freelancers through authentic video profiles
                  </p>

                  {/* Benefits List with Enhanced Design */}
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
                        <div className={`w-8 h-8 ${item.color} ${item.bgColor} backdrop-blur-sm rounded-lg flex items-center justify-center shadow-md border border-white/30 group-hover/item:scale-110 group-hover/item:shadow-lg transition-all duration-300`}>
                          <item.icon className="w-4 h-4" />
                        </div>
                        <span className="text-sm md:text-base text-white font-medium drop-shadow">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Disabled Button with Premium Design */}
                  <div className="relative">
                    <button
                      disabled
                      className="w-full px-8 py-5 bg-slate-700/50 backdrop-blur border-2 border-slate-600/50 text-slate-300 rounded-2xl font-bold text-base md:text-lg cursor-not-allowed relative overflow-hidden shadow-inner"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Browse Freelancers
                      </span>
                    </button>
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-xl shadow-orange-500/50"
                    >
                      Coming Soon
                    </motion.div>
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

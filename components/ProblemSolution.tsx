'use client'

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useAnimation } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, Video, MapPin, IndianRupee, CheckCircle2, X, Sparkles, ArrowRight, Zap, Shield, Target, Star, TrendingUp, Award } from 'lucide-react'
import { useState, useEffect, useRef, MouseEvent } from 'react'

export default function ProblemSolution() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Spotlight cursor follow effect
  useEffect(() => {
    if (!isClient) return

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isClient])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // 3D Tilt Effect Hook
  const useCardTilt = () => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useTransform(y, [-100, 100], [10, -10])
    const rotateY = useTransform(x, [-100, 100], [-10, 10])

    const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 })
    const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 })

    const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      x.set((event.clientX - centerX) / 2)
      y.set((event.clientY - centerY) / 2)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return { springRotateX, springRotateY, handleMouseMove, handleMouseLeave }
  }

  // Animated Counter Component
  const AnimatedCounter = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0)
    const hasAnimatedRef = useRef(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
      if (!isClient || hasAnimatedRef.current) return

      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true
            observer.disconnect()

            const increment = end / (duration * 60)
            let current = 0
            const timer = setInterval(() => {
              current += increment
              if (current >= end) {
                setCount(end)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, 1000 / 60)
          }
        },
        { threshold: 0.5, rootMargin: '0px' }
      )

      if (ref.current) {
        observer.observe(ref.current)
      }

      return () => {
        observer.disconnect()
      }
    }, [end, duration, isClient])

    return <span ref={ref}>{count}{suffix}</span>
  }

  // Floating Particles Component
  const FloatingParticles = ({ count = 20 }: { count?: number }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-portal-primary/30 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    )
  }

  const benefitCards = [
    {
      icon: Video,
      title: 'Video-First Platform',
      description: 'Showcase your skills through videos',
      hoverContent: 'Create engaging video portfolios that highlight your expertise',
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'rgba(139, 92, 246, 0.4)',
      stats: { number: 100, suffix: '%', label: 'Video Engagement' }
    },
    {
      icon: MapPin,
      title: 'Location-Based Discovery',
      description: 'Get discovered by category & location',
      hoverContent: 'Clients find you based on proximity and services offered',
      gradient: 'from-orange-500 to-rose-600',
      glowColor: 'rgba(251, 146, 60, 0.4)',
      stats: { number: 500, suffix: '+', label: 'Cities Covered' }
    },
    {
      icon: IndianRupee,
      title: 'Direct Earnings',
      description: 'Keep 100% of your service fees',
      hoverContent: 'No middlemen, no commission cuts, just fair income',
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'rgba(52, 211, 153, 0.4)',
      stats: { number: 0, suffix: '%', label: 'Commission Fee' }
    }
  ]

  const problemPoints = [
    { icon: AlertCircle, text: 'Lost in the feed', delay: 0.1 },
    { icon: TrendingDown, text: 'Algorithm changes', delay: 0.2 },
    { icon: Users, text: 'Follower count matters more than skill', delay: 0.3 },
    { icon: X, text: 'Pay to boost visibility', delay: 0.4 },
    { icon: X, text: 'Commission on every sale', delay: 0.5 }
  ]

  const solutionPoints = [
    { icon: CheckCircle2, text: 'Featured by category', delay: 0.1 },
    { icon: CheckCircle2, text: 'Fair discovery system', delay: 0.2 },
    { icon: CheckCircle2, text: 'Skill-based visibility', delay: 0.3 },
    { icon: CheckCircle2, text: 'No ads needed', delay: 0.4 },
    { icon: CheckCircle2, text: 'Zero commission', delay: 0.5 }
  ]

  // Floating badges data
  const floatingBadges = [
    { icon: Star, text: 'Premium Quality', position: 'top-20 right-10', delay: 0 },
    { icon: TrendingUp, text: '10x Growth', position: 'top-40 left-10', delay: 0.5 },
  ]

  return (
    <section ref={sectionRef} className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/20">
      {/* Spotlight Cursor Effect */}
      {isClient && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(247, 104, 43, 0.05), transparent 40%)`,
          }}
        />
      )}

      {/* Enhanced Premium Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/20 via-transparent to-transparent" />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b06_1px,transparent_1px),linear-gradient(to_bottom,#f7682b06_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Floating Particles */}
      {isClient && <FloatingParticles count={15} />}

      {/* Animated Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/15"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-purple-300/20 to-indigo-200/15"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-rose-300/15 to-pink-200/10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Floating Badges */}
      {isClient && (
        <div className="absolute inset-0 pointer-events-none hidden lg:block">
          {floatingBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: badge.delay, duration: 0.6 }}
              className={`absolute ${badge.position}`}
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                className="glass bg-white/60 backdrop-blur-xl border border-white/40 rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              >
                <badge.icon className="w-4 h-4 text-portal-primary" />
                <span className="text-xs font-semibold text-brand-black">{badge.text}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="container-custom relative z-10">
        {/* Animated Heading Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-5xl mx-auto"
        >
          {/* Line 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-2"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-neutral-gray">
              The freelance struggle is real
            </h2>
          </motion.div>

          {/* Line 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gradient">
              Spending money to make money
            </h2>
          </motion.div>

          {/* Line 3 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-8"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-black">
              VDOgate changes everything
            </h2>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-gray leading-relaxed max-w-3xl mx-auto"
          >
            Across India, millions of freelancers depend on social media to find clients.
            <span className="block mt-2 font-semibold text-brand-black">
              But visibility shouldn't cost you — it should earn you.
            </span>
          </motion.p>
        </motion.div>

        {/* Enhanced Split Comparison - Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 relative">
          {/* Comparison Divider Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4/5 bg-gradient-to-b from-transparent via-portal-primary/30 to-transparent" />

          {/* LEFT: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            {/* Problem Card with Enhanced Visuals */}
            <div className="relative glass bg-gradient-to-br from-white via-red-50/30 to-orange-50/20 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-red-200/40 shadow-2xl overflow-hidden">
              {/* Animated Warning Pattern */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.02)_10px,rgba(239,68,68,0.02)_20px)]" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-400/15 to-orange-400/15 rounded-3xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />

              {/* Light Leak Effect */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-300/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-lg">
                    <AlertCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-red-700">The Problem</h3>
                </motion.div>

                {/* Social Media Chaos Simulation */}
                <div className="space-y-3 mb-6">
                  {problemPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + item.delay, duration: 0.4 }}
                      whileHover={{ x: 5, scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-red-100 hover:shadow-md transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-medium text-neutral-gray-dark">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* "Pay More" CTA Mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="relative mt-6 p-5 bg-gradient-to-r from-red-100 to-orange-100 border-2 border-red-300 rounded-xl text-center overflow-hidden"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 right-2 w-8 h-8 border-4 border-red-400 border-t-transparent rounded-full"
                  />
                  <p className="text-base md:text-lg font-bold text-red-700 mb-1">💸 Spend More on Ads</p>
                  <p className="text-xs md:text-sm text-red-600">Still no guarantee of monetization</p>
                </motion.div>

                {/* Summary Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  className="mt-6 p-4 glass bg-white/50 backdrop-blur-sm rounded-xl border border-red-200/50"
                >
                  <p className="text-sm md:text-base text-center">
                    Visibility depends on <span className="font-bold text-red-600">ads, algorithms, and follower counts</span>
                    <br />
                    <span className="text-neutral-gray">— not your actual skill.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Solution */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative group"
          >
            {/* Solution Card with Premium Styling */}
            <div className="relative glass bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-portal-primary/30 shadow-2xl overflow-hidden">
              {/* Success Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.05),transparent_70%)]" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-portal-primary/30 to-amber-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Light Leak Effect */}
              <motion.div
                className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-portal-primary/20 to-transparent rounded-full blur-2xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="relative z-10">
                {/* Header */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-3 mb-6"
                >
                  <div className="w-12 h-12 bg-portal-gradient rounded-xl flex items-center justify-center shadow-lg shadow-portal-primary/30">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gradient">The Solution</h3>
                </motion.div>

                {/* VDOgate Benefits */}
                <div className="space-y-3 mb-6">
                  {solutionPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + item.delay, duration: 0.4 }}
                      whileHover={{ x: -5, scale: 1.02 }}
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg transition-all duration-300"
                    >
                      <item.icon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm md:text-base font-medium text-brand-black">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Promise Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                  className="relative mt-6 p-6 bg-portal-gradient rounded-2xl text-white text-center shadow-portal overflow-hidden cursor-pointer"
                >
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                    style={{ backgroundSize: '200% 100%' }}
                  />
                  <div className="relative z-10">
                    <p className="text-lg md:text-xl font-bold mb-2">No Ads • No Algorithms • No Commission</p>
                    <p className="text-sm md:text-base opacity-95">Just fair discovery and income for every freelancer</p>
                  </div>
                </motion.div>

                {/* Summary Statement */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                >
                  <p className="text-sm md:text-base text-center">
                    Your <span className="font-bold text-green-700">skills, portfolio, and location</span>
                    <br />
                    <span className="text-brand-black">determine your visibility — not your ad budget.</span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefit Cards Grid with 3D Tilt Effect + Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-20"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-brand-black"
          >
            How <span className="text-gradient">VDOgate Works</span> For You
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefitCards.map((card, index) => {
              const CardComponent = () => {
                const tilt = useCardTilt()
                const Icon = card.icon

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                  >
                    <div className="relative h-full glass bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden">
                      <div className="relative z-10">
                        {/* Icon */}
                        <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                          {card.title}
                        </h4>

                        {/* Description */}
                        <p className="text-neutral-gray mb-4">
                          {card.description}
                        </p>

                        {/* Hover Content - Now always visible */}
                        <div className="mt-4">
                          <p className="text-brand-black font-medium text-base leading-relaxed mb-4">
                            {card.hoverContent}
                          </p>
                        </div>

                        {/* Stats Badge */}
                        {isClient && (
                          <div className="mt-4 px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg border border-gray-200">
                            <div className="text-center">
                              <div className={`text-2xl font-bold bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}>
                                <AnimatedCounter end={card.stats.number} suffix={card.stats.suffix} />
                              </div>
                              <div className="text-xs text-neutral-gray mt-1">{card.stats.label}</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              }

              return <CardComponent key={index} />
            })}
          </div>
        </motion.div>

        {/* Value Proposition Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-xl md:text-2xl text-neutral-gray leading-relaxed mb-6">
            Freelancers spend valuable time and money chasing reach instead of serving clients, and many never qualify for monetization because platforms demand high followers or long watch-times before allowing income.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-brand-black leading-relaxed">
            VDOgate is India's first video-first platform where freelancers promote their services through videos, get discovered by category and location, and{' '}
            <span className="text-gradient">earn directly from clients</span>{' '}
            — without middlemen, agencies, or commission cuts.
          </p>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 backdrop-blur-xl rounded-3xl p-10 md:p-14 shadow-2xl border border-portal-primary/20 overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.08),transparent_70%)]" />

            {/* Floating Sparkles */}
            <motion.div
              className="absolute top-10 right-10"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 text-portal-primary/30" />
            </motion.div>

            <motion.div
              className="absolute bottom-10 left-10"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              <Sparkles className="w-6 h-6 text-amber-500/30" />
            </motion.div>

            <div className="relative z-10 text-center">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black leading-tight mb-4"
              >
                VDOgate is India's gateway where customers discover your talents
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-xl md:text-2xl text-gradient font-semibold mb-8"
              >
                Fairly, transparently, and without algorithm bias.
              </motion.p>

              {/* Multi-Path CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  onClick={() => scrollToSection('founding-creator')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg shadow-portal hover:shadow-portal-md transition-all duration-300 flex items-center gap-3"
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Join as Founding Creator – Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection('how-it-works')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 glass bg-white/80 backdrop-blur-sm border-2 border-portal-primary text-portal-primary rounded-xl font-semibold text-lg hover:bg-portal-primary/5 transition-all duration-300 flex items-center gap-3"
                >
                  <Target className="w-5 h-5" />
                  Find Your Freelancer
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-neutral-gray"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Secure platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-portal-primary" />
                  <span>500+ creators joining</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

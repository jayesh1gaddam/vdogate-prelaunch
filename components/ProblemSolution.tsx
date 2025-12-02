'use client'

import { motion, useMotionValue, useTransform, useSpring, AnimatePresence, useAnimation } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, Video, MapPin, IndianRupee, CheckCircle2, X, Sparkles, ArrowRight, Zap, Shield, Target, Star, TrendingUp, Award } from 'lucide-react'
import { useState, useEffect, useRef, MouseEvent } from 'react'
import { fadeInUp, scaleIn, staggerContainer, staggerItem, easing, spring as springConfig, shimmerAnimation, viewportOptions } from '@/lib/animations'

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
      hoverContent: 'Clients find you based on location and services offered',
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
    { icon: AlertCircle, text: 'Visibility depends on followers & paid ads', delay: 0.1 },
    { icon: TrendingDown, text: 'Algorithms suppress reach', delay: 0.2 },
    { icon: X, text: 'High commissions reduce earnings', delay: 0.3 },
    { icon: Users, text: 'Buyers can\'t evaluate skill from text', delay: 0.4 },
    { icon: X, text: 'No direct contact', delay: 0.5 },
    { icon: AlertCircle, text: 'No transparency, no trust', delay: 0.6 }
  ]

  const solutionPoints = [
    { icon: CheckCircle2, text: 'Skill-based discovery, not trend based', delay: 0.1 },
    { icon: CheckCircle2, text: 'No ads, no algorithms, no boosting or suppression', delay: 0.2 },
    { icon: CheckCircle2, text: 'Zero commission on direct services', delay: 0.3 },
    { icon: CheckCircle2, text: 'Video-first identity, real proof builds trust', delay: 0.4 },
    { icon: CheckCircle2, text: 'Direct communication, no middlemen', delay: 0.5 },
    { icon: CheckCircle2, text: 'Free viewer access drives organic exposure', delay: 0.6 }
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

      {/* Floating Particles - Reduced for performance */}
      {isClient && <FloatingParticles count={5} />}

      {/* Animated Floating Orbs - Optimized with CSS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/15 animate-pulse" style={{ animationDuration: '25s' }} />
        <div className="absolute top-1/2 right-10 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tl from-purple-300/20 to-indigo-200/15 animate-pulse" style={{ animationDuration: '20s' }} />
        <div className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-rose-300/15 to-pink-200/10 animate-pulse" style={{ animationDuration: '30s' }} />
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
        {/* Premium Split Comparison - Problem vs Solution */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 relative items-stretch">
          {/* Animated Comparison Divider Line - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-4/5 overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-transparent via-portal-primary/40 to-transparent"
              animate={{
                y: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* LEFT: The Problem - Enhanced Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer h-full"
          >
            {/* Static Border Glow - Problem - Optimized */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-transparent" />
            </div>

            {/* Problem Card with Enhanced Visuals */}
            <div className="relative glass bg-gradient-to-br from-white via-red-50/40 to-orange-50/30 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[420px] md:min-h-[600px] lg:min-h-[680px] h-full">
              {/* Static Warning Pattern - Optimized */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.03)_10px,rgba(239,68,68,0.03)_20px)]" />

              {/* Floating Glow Orbs - Optimized */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Premium Header with Pulse */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 bg-red-500/30 rounded-2xl blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                      <AlertCircle className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-red-700">The Common Problem</h3>
                </motion.div>

                {/* Enhanced Problem Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {problemPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + item.delay, duration: 0.4 }}
                      whileHover={{ x: 8, scale: 1.03 }}
                      className="relative group/item"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-r from-red-100/50 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur-sm" />

                      <div className="relative flex items-center gap-4 p-5 bg-white/80 backdrop-blur-md rounded-2xl shadow-md border border-red-100/60 hover:shadow-xl transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-neutral-gray-dark">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>


              </div>

              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <motion.div
                  className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT: The Solution - Enhanced Premium Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="relative group cursor-pointer h-full"
          >
            {/* Static Border Glow - Solution - Optimized */}
            <div className="absolute inset-0 rounded-[32px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-transparent" />
            </div>

            {/* Solution Card with Premium Styling */}
            <div className="relative glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 backdrop-blur-2xl rounded-[32px] p-8 md:p-10 border-2 border-white/60 shadow-2xl overflow-hidden m-[1px] flex flex-col min-h-[420px] md:min-h-[600px] lg:min-h-[680px] h-full">
              {/* Success Pattern - Optimized */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.08),transparent_70%)]" />

              {/* Floating Glow Orbs - Optimized */}
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tl from-portal-primary/25 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '5s' }} />

              <div className="relative z-10 flex flex-col h-full">
                {/* Premium Header with Sparkle */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="flex items-center gap-4 mb-8"
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    {/* Pulsing Ring */}
                    <motion.div
                      className="absolute inset-0 bg-portal-primary/30 rounded-2xl blur-md"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <div className="relative w-14 h-14 bg-portal-gradient rounded-2xl flex items-center justify-center shadow-2xl shadow-portal-primary/40">
                      <Sparkles className="w-8 h-8 text-white" />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient">The VDOgate Solution</h3>
                </motion.div>

                {/* Enhanced Solution Points */}
                <div className="space-y-3 mb-8 flex-1">
                  {solutionPoints.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + item.delay, duration: 0.4 }}
                      whileHover={{ x: -8, scale: 1.03 }}
                      className="relative group/item"
                    >
                      {/* Hover Glow */}
                      <div className="absolute inset-0 bg-gradient-to-l from-green-100/50 to-transparent rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300 blur-sm" />

                      <div className="relative flex items-center gap-4 p-5 bg-white/90 backdrop-blur-md rounded-2xl shadow-md border border-green-100/60 hover:shadow-xl transition-all duration-300">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm md:text-base font-semibold text-brand-black">{item.text}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced Summary */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="mt-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl border border-green-200/60 shadow-md"
                >
                  <p className="text-sm md:text-base text-center leading-relaxed">
                    Your <span className="font-bold text-green-700">skills, portfolio, and location</span>
                    <br />
                    <span className="text-brand-black">determine your visibility — not your ad budget.</span>
                  </p>
                </motion.div>
              </div>

              {/* Shine Sweep Effect */}
              <div className="absolute inset-0 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                <motion.div
                  className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45"
                  animate={{
                    x: ['-200%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Benefit Cards Grid with 3D Tilt Effect + Stats */}
        {/* Removed benefit cards section */}

        {/* Value Proposition Statement - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <div className="relative">
            {/* Main Container */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Problem Statement with Visual */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative"
              >
                <div className="relative glass bg-gradient-to-br from-red-50 via-white to-orange-50/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-red-200/40 shadow-elevation-3 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-300/20 to-transparent rounded-full blur-2xl" />
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-orange-300/20 to-transparent rounded-full blur-2xl" />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                    className="relative w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                  >
                    <AlertCircle className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-xl font-bold text-red-700 mb-4 uppercase tracking-wide">The Problem</h4>
                    <ul className="space-y-3">
                      {[
                        'You have the skill, but no budget to advertise.',
                        'Platforms hide you unless you pay for "boosts".',
                        'You compete with thousands of text-only profiles.',
                        'Middlemen take a cut of your hard-earned money.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <X className="w-4 h-4 text-red-600" />
                          </div>
                          <span className="text-lg text-neutral-gray-dark">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom accent */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-500 to-orange-500 rounded-b-3xl"
                  />
                </div>
              </motion.div>

              {/* Right: Solution Statement with Visual */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="relative"
              >
                <div className="relative glass bg-gradient-to-br from-orange-50 via-white to-amber-50/30 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-orange-200/40 shadow-elevation-3 overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-amber-300/20 to-transparent rounded-full blur-3xl" />

                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
                    className="relative w-16 h-16 bg-portal-gradient rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-portal-primary/40"
                  >
                    <Sparkles className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-4 uppercase tracking-wide">The VDOgate Solution</h4>
                    <ul className="space-y-3">
                      {[
                        'Showcase your skills with engaging video profiles.',
                        'Get discovered by clients in your local area.',
                        'Connect directly with clients, no middlemen.',
                        'Keep 100% of your service fees, always.'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle2 className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="text-lg text-brand-black">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Feature Pills */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full">
                        <Video className="w-3.5 h-3.5 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-800">Video-First</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full">
                        <MapPin className="w-3.5 h-3.5 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-800">Location-Based</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full">
                        <IndianRupee className="w-3.5 h-3.5 text-orange-600" />
                        <span className="text-xs font-semibold text-orange-800">Zero Commission</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent with shimmer */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-1.5 bg-portal-gradient rounded-b-3xl overflow-hidden"
                  >
                    <motion.div
                      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                      style={{ backgroundSize: '200% 100%' }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Connecting Element */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                initial={{ scale: 0, rotate: 0 }}
                whileInView={{ scale: 1, rotate: 180 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                className="w-12 h-12 bg-white rounded-full shadow-elevation-3 border-4 border-orange-200 flex items-center justify-center"
              >
                <ArrowRight className="w-6 h-6 text-portal-primary" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Enhanced CTA Section - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Hero CTA Card */}
          <div className="relative bg-gradient-to-br from-portal-primary via-orange-500 to-amber-500 rounded-3xl overflow-hidden shadow-2xl shadow-portal-primary/30">
            {/* Premium Background Patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:250%_250%]" style={{ animation: 'shimmer 3s infinite' }} />

            {/* Animated Orbs - Optimized */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDuration: '5s' }} />

            {/* Content */}
            <div className="relative z-10 px-8 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md border border-white/40 rounded-full mb-8"
              >
                <Star className="w-4 h-4 text-white fill-white" />
                <span className="text-sm font-bold text-white">India's First Video-First Freelance Platform</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-6"
              >
                VDOgate is India's gateway where customers discover your talents
              </motion.h3>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-xl md:text-2xl lg:text-3xl text-white/95 font-semibold mb-12 max-w-4xl"
              >
                Fairly, transparently, and without algorithm bias.
              </motion.p>

              {/* Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="grid md:grid-cols-3 gap-4 mb-12"
              >
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Video className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white">Video Profiles</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white">Location-Based</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IndianRupee className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-white">Zero Commission</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <motion.button
                  onClick={() => scrollToSection('founding-creator')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white text-portal-primary rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  Join as a founding freelancer
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap items-center justify-start gap-6 text-sm text-white/90"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-white" />
                  <span>Secure platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-white" />
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

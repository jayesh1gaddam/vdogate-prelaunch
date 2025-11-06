'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Video, MapPin, IndianRupee, Sparkles, ArrowRight, Search, Filter, MessageSquare, Users } from 'lucide-react'
import { Timeline } from '@/components/ui/timeline'
import { useState, useEffect, useRef } from 'react'
import { fadeInUp, scaleIn, easing, spring, shimmerAnimation, viewportOptions } from '@/lib/animations'

const freelancerSteps = [
  {
    number: '01',
    icon: Video,
    title: 'Showcase Your Skills',
    description: 'Upload short videos that highlight what you do best — whether you teach, train, design, or coach online, offline, or hybrid.',
    detail: 'Present your talent through videos and make your work visible to potential clients.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Get Discovered by Category & Location',
    description: 'VDOgate automatically lists you under your chosen category and region, so clients nearby or across India can easily find you.',
    detail: 'No algorithms. No ads. Just fair visibility for every freelancer.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    number: '03',
    icon: IndianRupee,
    title: 'Earn from Your Clients',
    description: 'Earn directly from your clients. No fees or commission to be paid to the platform.',
    detail: 'Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.',
    color: 'from-[#F7682B] to-[#F79F2B]',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
]

const customerSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Browse by Category & Location',
    description: 'Search for freelancers in your city or across India, filtered by the service category you need.',
    detail: 'Find verified professionals near you with authentic video profiles.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: '02',
    icon: Users,
    title: 'Watch Video Profiles',
    description: 'Preview freelancer skills through their video portfolios before making any commitment.',
    detail: 'See their work, understand their expertise, and make informed decisions.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Connect Directly',
    description: 'Reach out to your chosen freelancer and discuss your project requirements directly.',
    detail: 'No middleman. No platform fees. Direct communication for transparent collaboration.',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
]

export default function HowItWorks() {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const freelancerRef = useRef<HTMLDivElement>(null)
  const customerRef = useRef<HTMLDivElement>(null)
  const [freelancerHeight, setFreelancerHeight] = useState(0)
  const [customerHeight, setCustomerHeight] = useState(0)

  useEffect(() => {
    setIsClient(true)
    if (freelancerRef.current) {
      setFreelancerHeight(freelancerRef.current.getBoundingClientRect().height)
    }
    if (customerRef.current) {
      setCustomerHeight(customerRef.current.getBoundingClientRect().height)
    }
  }, [])

  const { scrollYProgress: freelancerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const { scrollYProgress: customerScrollProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  })

  const freelancerHeightTransform = useTransform(freelancerScrollProgress, [0, 1], [0, freelancerHeight])
  const customerHeightTransform = useTransform(customerScrollProgress, [0, 1], [0, customerHeight])
  const opacityTransform = useTransform(freelancerScrollProgress, [0, 0.1], [0, 1])

  // Render step card component with dynamic colors
  const renderStepCard = (step: typeof freelancerSteps[0], stepIndex: number, isCustomer: boolean = false) => {
    const Icon = step.icon
    const colorScheme = isCustomer ? {
      gradient: 'from-blue-500 to-blue-600',
      bg: 'bg-blue-50',
      border: 'border-blue-300/40',
      shadow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]',
      shadowColor: 'shadow-blue-500/40 group-hover:shadow-blue-500/60',
      particles: 'bg-blue-400',
      particles2: 'bg-cyan-400',
      glow: 'from-blue-300/20 via-cyan-300/10',
      hoverGlow: 'from-blue-500/0 via-blue-400/20 to-cyan-400/0',
      detailBg: 'from-blue-50/80 to-cyan-50/60',
      detailBorder: 'border-blue-200/40',
      sparkleColor: 'text-blue-500',
      accentShadow: 'shadow-blue-400/50',
      via: 'via-blue-50/40'
    } : {
      gradient: 'from-[#F7682B] to-[#F79F2B]',
      bg: 'bg-orange-50',
      border: 'border-orange-300/40',
      shadow: 'group-hover:shadow-[0_20px_60px_-15px_rgba(247,104,43,0.3)]',
      shadowColor: 'shadow-orange-500/40 group-hover:shadow-orange-500/60',
      particles: 'bg-orange-400',
      particles2: 'bg-amber-400',
      glow: 'from-orange-300/20 via-amber-300/10',
      hoverGlow: 'from-orange-500/0 via-orange-400/20 to-amber-400/0',
      detailBg: 'from-orange-50/80 to-amber-50/60',
      detailBorder: 'border-orange-200/40',
      sparkleColor: 'text-orange-500',
      accentShadow: 'shadow-orange-400/50',
      via: 'via-orange-50/40'
    }

    return (
      <div key={stepIndex} className={stepIndex < 2 ? 'mb-10 md:mb-40' : ''}>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
            className="relative group cursor-pointer"
          >
            <div className={`relative glass bg-gradient-to-br from-white ${colorScheme.via} to-white backdrop-blur-2xl rounded-3xl p-8 md:p-10 border-2 ${colorScheme.border} shadow-2xl ${colorScheme.shadow} transition-all duration-500 overflow-hidden`}>
              {/* Enhanced Glow Effect */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${colorScheme.hoverGlow} rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

              {/* Animated Particles on Hover */}
              {isClient && (
                <>
                  <motion.div
                    className={`absolute top-10 right-10 w-2 h-2 ${colorScheme.particles} rounded-full`}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: stepIndex * 0.3
                    }}
                  />
                  <motion.div
                    className={`absolute bottom-20 left-10 w-1.5 h-1.5 ${colorScheme.particles2} rounded-full`}
                    animate={{
                      y: [0, 15, 0],
                      opacity: [0, 0.8, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: stepIndex * 0.4 + 0.5
                    }}
                  />
                </>
              )}

              {/* Pulsing Light Leak */}
              {isClient && (
                <motion.div
                  className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${colorScheme.glow} to-transparent rounded-full blur-3xl`}
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.7, 0.4],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: stepIndex * 0.6
                  }}
                />
              )}

              <div className="relative z-10">
                {/* Enhanced Step Number Watermark with Gradient */}
                <motion.div
                  className={`text-right text-8xl md:text-9xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent opacity-[0.06] leading-none -mb-24`}
                  whileHover={{ opacity: 0.12 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.number}
                </motion.div>

                {/* Icon with 3D Effect and Pulse */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 150, damping: 12 }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                  className={`relative w-24 h-24 bg-gradient-to-br ${colorScheme.gradient} rounded-3xl flex items-center justify-center mb-6 shadow-2xl ${colorScheme.shadowColor} transition-shadow duration-500`}
                >
                  {/* Icon Inner Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-3xl" />

                  {/* Animated Ring */}
                  {isClient && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-2 border-white/50"
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  )}

                  <Icon className="w-12 h-12 text-white relative z-10" />
                </motion.div>

                {/* Content with Rich Typography */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <p className="text-xl md:text-2xl text-brand-black mb-5 leading-relaxed font-semibold tracking-tight">
                    {step.description}
                  </p>
                  <div className={`flex items-start gap-3 p-4 bg-gradient-to-r ${colorScheme.detailBg} rounded-xl border ${colorScheme.detailBorder}`}>
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <Sparkles className={`w-5 h-5 ${colorScheme.sparkleColor} mt-0.5 flex-shrink-0`} />
                    </motion.div>
                    <p className="text-base md:text-lg text-neutral-gray-dark italic leading-relaxed font-medium">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>

                {/* Enhanced Interactive Bottom Accent */}
                <div className="mt-6 flex items-center gap-3">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
                    className={`h-1.5 w-32 bg-gradient-to-r ${colorScheme.gradient} rounded-full shadow-lg ${colorScheme.accentShadow}`}
                  />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.4, type: "spring" }}
                    className={`w-3 h-3 bg-gradient-to-br ${colorScheme.gradient} rounded-full shadow-md`}
                  />
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    )
  }

  return (
    <section id="how-it-works" className="pt-6 pb-8 md:pt-8 md:pb-12 lg:pt-10 lg:pb-16 relative overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-white">
      {/* Enhanced Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />

      {/* Premium Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b04_1px,transparent_1px),linear-gradient(to_bottom,#f7682b04_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-soft-light">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Animated Floating Orbs */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-10 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-orange-200/25 to-amber-200/20"
            animate={{
              scale: [1, 1.15, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-10 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-tr from-rose-200/15 to-orange-200/20"
            animate={{
              scale: [1.1, 1, 1.1],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      )}

      {/* Enhanced Headline with Decorative Elements */}
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-2 container-custom"
        >
          <div className="relative inline-block">
            {/* Decorative Sparkle - Left */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -left-12 top-0 hidden lg:block"
              >
                <Sparkles className="w-8 h-8 text-portal-primary/40" />
              </motion.div>
            )}

            {/* Decorative Sparkle - Right */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="absolute -right-12 top-0 hidden lg:block"
              >
                <Sparkles className="w-8 h-8 text-amber-500/40" />
              </motion.div>
            )}

            <h2 className="text-headline-lg md:text-display-md mb-2">
              How <span className="text-gradient">VDOgate</span> Works
            </h2>
            <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto">
              Simple steps for Freelancers and Customers
            </p>
          </div>

          {/* Decorative Underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full"
          />
        </motion.div>
      </div>

      {/* Two Column Layout */}
      <div className="container-custom relative z-10 mt-12" ref={containerRef}>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 relative">

          {/* Vertical Separator - Hidden on Mobile */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -ml-px">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-300 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-blue-400 shadow-lg flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>

          {/* LEFT: For Freelancers */}
          <div className="relative" ref={freelancerRef}>
            {/* Vertical Progress Line for Freelancers */}
            <div
              style={{ height: freelancerHeight + "px" }}
              className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-transparent via-orange-200/50 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] hidden md:block"
            >
              {isClient && (
                <motion.div
                  style={{
                    height: freelancerHeightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-transparent via-[#F7682B] to-[#F79F2B] rounded-full"
                />
              )}
            </div>

            <div className="md:pl-8">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-2">
                  For Freelancers
                </h3>
                <p className="text-base text-neutral-gray">Get discovered and earn from your skills</p>
              </div>
              {freelancerSteps.map((step, index) => renderStepCard(step, index, false))}
            </div>
          </div>

          {/* RIGHT: For Customers */}
          <div className="relative" ref={customerRef}>
            {/* Vertical Progress Line for Customers */}
            <div
              style={{ height: customerHeight + "px" }}
              className="absolute left-0 top-0 w-[3px] bg-gradient-to-b from-transparent via-blue-200/50 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_5%,black_95%,transparent_100%)] hidden md:block"
            >
              {isClient && (
                <motion.div
                  style={{
                    height: customerHeightTransform,
                    opacity: opacityTransform,
                  }}
                  className="absolute inset-x-0 top-0 w-[3px] bg-gradient-to-b from-transparent via-blue-500 to-blue-600 rounded-full"
                />
              )}
            </div>

            <div className="md:pl-8">
              <div className="text-center mb-8 md:mb-12">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-2">
                  For Customers
                </h3>
                <p className="text-base text-neutral-gray">Find and hire verified freelancers</p>
              </div>
              {customerSteps.map((step, index) => renderStepCard(step, index, true))}
            </div>
          </div>

        </div>
      </div>

      {/* Enhanced Closing Statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative mt-6 max-w-4xl mx-auto container-custom"
      >
        <div className="relative glass bg-gradient-to-br from-white via-orange-50/20 to-white backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200/40 overflow-hidden">
          {/* Premium Background Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.04),transparent_70%)]" />

          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tl from-amber-300/20 to-transparent rounded-full blur-2xl" />

          <div className="relative z-10 text-center">
            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-neutral-gray leading-relaxed mb-8"
            >
              Everything you need to grow — all in one Indian platform where freelancers and customers connect directly, fairly, and without any fees or commission to be paid to the platform.
            </motion.p>

            {/* Enhanced CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg shadow-portal hover:shadow-portal-md transition-all duration-300 overflow-hidden"
            >
              {/* Shimmer Effect */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                style={{ backgroundSize: '200% 100%' }}
              />

              <span className="relative flex items-center gap-2">
                Join the Platform – Free Pre-Launch Registration
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>

            {/* Trust Badge */}
            {isClient && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="mt-6 flex items-center justify-center gap-2 text-sm text-neutral-gray"
              >
                <Sparkles className="w-4 h-4 text-portal-primary" />
                <span>Join 500+ freelancers already registered</span>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

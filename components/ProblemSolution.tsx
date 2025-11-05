'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { AlertCircle, TrendingDown, Users, Video, MapPin, IndianRupee, CheckCircle2, X, Sparkles, ArrowRight, Zap, Shield, Target } from 'lucide-react'
import { useState, useRef, MouseEvent } from 'react'

export default function ProblemSolution() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

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

  const benefitCards = [
    {
      icon: Video,
      title: 'Video-First Platform',
      description: 'Showcase your skills through videos',
      hoverContent: 'Create engaging video portfolios that highlight your expertise',
      gradient: 'from-purple-500 to-indigo-600',
      glowColor: 'rgba(139, 92, 246, 0.4)'
    },
    {
      icon: MapPin,
      title: 'Location-Based Discovery',
      description: 'Get discovered by category & location',
      hoverContent: 'Clients find you based on proximity and services offered',
      gradient: 'from-orange-500 to-rose-600',
      glowColor: 'rgba(251, 146, 60, 0.4)'
    },
    {
      icon: IndianRupee,
      title: 'Direct Earnings',
      description: 'Keep 100% of your service fees',
      hoverContent: 'No middlemen, no commission cuts, just fair income',
      gradient: 'from-emerald-500 to-teal-600',
      glowColor: 'rgba(52, 211, 153, 0.4)'
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

  return (
    <section className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50/20">
      {/* Enhanced Premium Background Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-100/20 via-transparent to-transparent" />

      {/* Refined Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b06_1px,transparent_1px),linear-gradient(to_bottom,#f7682b06_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

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
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* LEFT: The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative group"
          >
            {/* Problem Card with Enhanced Visuals */}
            <div className="relative bg-gradient-to-br from-red-50/80 via-orange-50/60 to-amber-50/40 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-red-200/50 shadow-2xl overflow-hidden">
              {/* Animated Warning Pattern */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(239,68,68,0.03)_10px,rgba(239,68,68,0.03)_20px)]" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

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
                      className="flex items-center gap-3 p-4 bg-white/70 backdrop-blur-sm rounded-xl shadow-sm border border-red-100"
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
                  className="mt-6 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-red-200/50"
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
            <div className="relative bg-gradient-to-br from-white via-orange-50/20 to-amber-50/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-portal-primary/30 shadow-2xl overflow-hidden">
              {/* Success Pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(247,104,43,0.05),transparent_70%)]" />

              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-portal-primary/30 to-amber-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

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
                      className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-green-100 hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
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

        {/* Benefit Cards Grid with 3D Tilt Effect */}
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
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.15, duration: 0.6, ease: "easeOut" }}
                    style={{
                      perspective: 1000,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <motion.div
                      className="relative h-full bg-white rounded-2xl p-8 shadow-xl border border-gray-100 overflow-hidden cursor-pointer"
                      onMouseMove={tilt.handleMouseMove}
                      onMouseLeave={() => {
                        tilt.handleMouseLeave()
                        setHoveredCard(null)
                      }}
                      onMouseEnter={() => setHoveredCard(index)}
                      style={{
                        rotateX: tilt.springRotateX,
                        rotateY: tilt.springRotateY,
                        transformStyle: 'preserve-3d',
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {/* Gradient Background (Hover State) */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 transition-opacity duration-500`}
                        animate={{ opacity: hoveredCard === index ? 0.1 : 0 }}
                      />

                      {/* Glow Effect */}
                      <motion.div
                        className="absolute -inset-1 rounded-2xl blur-lg opacity-0 transition-opacity duration-500"
                        style={{ background: card.glowColor }}
                        animate={{ opacity: hoveredCard === index ? 0.6 : 0 }}
                      />

                      <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
                        {/* Icon */}
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                          animate={{
                            scale: hoveredCard === index ? 1.1 : 1,
                            rotate: hoveredCard === index ? 5 : 0
                          }}
                          transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h4 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                          {card.title}
                        </h4>

                        {/* Description */}
                        <motion.p
                          className="text-neutral-gray mb-4"
                          animate={{
                            opacity: hoveredCard === index ? 0 : 1,
                            y: hoveredCard === index ? -10 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {card.description}
                        </motion.p>

                        {/* Hover Content */}
                        <motion.div
                          className="absolute inset-x-8 bottom-8"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredCard === index ? 1 : 0,
                            y: hoveredCard === index ? 0 : 20
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-brand-black font-medium text-base leading-relaxed">
                            {card.hoverContent}
                          </p>
                          <motion.div
                            className="mt-4 flex items-center gap-2 text-portal-primary font-semibold"
                            animate={{ x: hoveredCard === index ? 5 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
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
          <div className="relative bg-gradient-to-br from-white via-orange-50/30 to-amber-50/40 rounded-3xl p-10 md:p-14 shadow-2xl border border-portal-primary/20 overflow-hidden">
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
                  className="group px-8 py-4 bg-white border-2 border-portal-primary text-portal-primary rounded-xl font-semibold text-lg hover:bg-portal-primary/5 transition-all duration-300 flex items-center gap-3"
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

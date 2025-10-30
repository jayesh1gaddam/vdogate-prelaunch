'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import HeroCarousel from './HeroCarousel'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Track scroll to hide scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white pt-10 md:pt-24 pb-12 md:pb-0">
      {/* Subtle Background Gradient - Even Lighter */}
      <div className="absolute inset-0 bg-gradient-to-br from-portal-primary/[0.01] via-transparent to-portal-light/[0.01]" />

      {/* Animated Background Elements - Much More Subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-portal-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-portal-light/5 rounded-full blur-3xl"
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-10"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-portal-primary/3 border border-portal-primary/8 rounded-full"
              >
                <Sparkles className="w-3.5 h-3.5 text-portal-primary" />
                <span className="text-xs md:text-sm font-medium text-portal-primary">India's Platform for India's Freelancers</span>
              </motion.div>

              {/* Main Headline - Lighter & More Breathing Space */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.2] tracking-tight"
              >
                <span className="text-brand-black font-light">India's Platform for</span>
                <br />
                <span className="text-gradient font-semibold">India's Freelancers</span>
              </motion.h1>

              {/* Subheadline - Lighter Color & Font Weight */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-base md:text-lg text-neutral-gray leading-relaxed max-w-xl mx-auto lg:mx-0 font-light"
              >
                Make money from your skills — not spend money to promote them.
                <br />
                <span className="font-semibold text-brand-black">No Ads • No Algorithm • No Commission on Your Services</span>
                <br />
                <span className="text-sm">Get discovered by category and location — reach clients in your area or across India.</span>
              </motion.p>

              {/* Trust Indicators - Pricing Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
              >
                <div className="inline-flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-sm">
                  <span className="text-lg md:text-xl font-bold text-green-800">₹3,000/month</span>
                  <span className="text-sm text-green-700">(~₹100/day)</span>
                </div>

                {/* Vertical divider */}
                <div className="h-8 w-px bg-neutral-gray-lighter"></div>

                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-brand-gray-900">Fair, Transparent</span>
                  <span className="text-sm text-neutral-gray">Income-First Platform</span>
                </div>
              </motion.div>

              {/* CTAs - More Breathing Space */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              >
                <button
                  onClick={() => scrollToSection('founding-creator')}
                  className="group px-7 py-3.5 bg-portal-gradient text-white rounded-lg font-medium text-sm md:text-base hover:shadow-portal-sm transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 shadow-md shadow-portal-primary/10"
                >
                  Join the Platform
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="group px-7 py-3.5 bg-white border border-neutral-gray-lighter text-brand-gray-900 rounded-lg font-medium text-sm md:text-base hover:border-portal-primary hover:bg-portal-primary/3 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 text-portal-primary" />
                  Explore VDOgate
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Carousel Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            >
              <HeroCarousel />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hides after scrolling */}
      {!isScrolled && (
        <motion.div
          initial={{ opacity: 0.6 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-6 h-10 border-2 border-portal-primary/40 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              className="w-1.5 h-1.5 bg-portal-primary rounded-full"
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

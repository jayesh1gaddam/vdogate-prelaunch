'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import HeroCarousel from './HeroCarousel'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  // Track scroll to hide scroll indicator - throttled for performance
  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Static Background Orbs - No animations for better performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/20" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-bl from-rose-200/20 to-orange-300/20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-tr from-amber-200/15 to-orange-200/15" />
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="lg:col-span-7 text-center lg:text-left space-y-6 md:space-y-8 lg:space-y-10 pt-12 lg:pt-24"
            >
              {/* Main Headline - Lighter & More Breathing Space */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-[1.2] tracking-tight"
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
                className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-neutral-gray leading-relaxed max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0 font-light"
              >
                Make money from your skills <br /> not spend money to promote them.
                <br />
                <span className="font-semibold text-brand-black">No Ads • No Algorithm • No Commission on Your Services</span>
                <br />
                <span className="text-sm">Get discovered by category and location — reach clients near you or across India.</span>
                <br />
                <span className="text-sm font-semibold text-portal-primary">Free for buyers & viewers, always.</span>
              </motion.p>

              {/* Community Trust Badge with Avatar Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                {/* Avatar Stack */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.png" alt="Makeup Artist" width={60} height={60} className="object-cover w-full h-full" style={{ objectPosition: '55% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.png" alt="Fitness Coach" width={60} height={60} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.png" alt="Chef" width={60} height={60} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.png" alt="Teacher" width={60} height={60} className="object-cover w-full h-full" style={{ objectPosition: '45% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">+500</div>
                  </div>
                  <p className="ml-3 text-sm font-semibold text-neutral-gray-dark">
                    <span className="text-portal-primary font-bold">500+</span> Freelancers joining
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl shadow-sm">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-semibold text-orange-800">Limited pre-launch spots</span>
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
                  Join as Founding Freelancer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="group px-7 py-3.5 bg-white border border-neutral-gray-lighter text-brand-gray-900 rounded-lg font-medium text-sm md:text-base hover:border-portal-primary hover:bg-portal-primary/3 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Find My Freelancer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* Scroll Indicator - Hides after scrolling - Optimized with CSS animation */}
      {!isScrolled && (
        <div
          className="absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer pwa-scroll-indicator"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border border-portal-primary/40 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
            <div className="w-1.5 h-1.5 bg-portal-primary rounded-full animate-scroll-dot" />
          </div>
        </div>
      )}
    </section>
  )
}

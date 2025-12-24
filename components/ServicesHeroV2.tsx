'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Search, Video, MessageSquare, CheckCircle2, Users, MapPin, Star } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ServicesHeroV2() {
  const [isScrolled, setIsScrolled] = useState(false)

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

  const steps = [
    { icon: Search, text: 'Browse by category', color: 'from-blue-500 to-blue-600' },
    { icon: Video, text: 'Watch video profiles', color: 'from-cyan-500 to-cyan-600' },
    { icon: MessageSquare, text: 'Connect directly', color: 'from-indigo-500 to-indigo-600' },
  ]

  const valueProps = ['No platform fees', 'Direct communication', 'Verified video profiles']

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Static Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-blue-300/20 to-cyan-200/20" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-bl from-cyan-200/20 to-blue-300/20" />
        <div className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-tr from-indigo-200/15 to-blue-200/15" />
      </div>

      {/* Floating Stats Badges - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute top-32 right-20"
        >
          <div className="glass bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-brand-black">1000+</p>
              <p className="text-xs text-neutral-gray">Freelancers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="absolute top-60 right-48"
        >
          <div className="glass bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-brand-black">50+</p>
              <p className="text-xs text-neutral-gray">Categories</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-40 right-24"
        >
          <div className="glass bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl px-4 py-3 shadow-lg flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-lg font-bold text-brand-black">100+</p>
              <p className="text-xs text-neutral-gray">Cities</p>
            </div>
          </div>
        </motion.div>
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
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-full"
              >
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-blue-800">Free for buyers, always</span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-semibold leading-[1.2] tracking-tight"
              >
                <span className="text-brand-black font-light">Discover</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">Skilled Freelancers</span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-neutral-gray leading-relaxed max-w-xl xl:max-w-2xl 2xl:max-w-3xl mx-auto lg:mx-0 font-light"
              >
                Watch video portfolios. See real skills before you hire.
                <br />
                <span className="font-semibold text-brand-black">Browse by category & location. Connect directly.</span>
              </motion.p>

              {/* How It Works Steps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-xl mx-auto lg:mx-0"
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-md`}>
                      <step.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-sm font-medium text-brand-black">{step.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Community Trust Badge with Avatar Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
                className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
              >
                {/* Avatar Stack */}
                <div className="flex items-center">
                  <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/makeup.webp" alt="Buyer" width={40} height={40} className="object-cover w-full h-full" style={{ objectPosition: '55% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/gym.webp" alt="Buyer" width={40} height={40} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-blue-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/chef.webp" alt="Buyer" width={40} height={40} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
                      <Image src="/teacher.webp" alt="Buyer" width={40} height={40} className="object-cover w-full h-full" style={{ objectPosition: '45% 30%' }} />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">+500</div>
                  </div>
                  <p className="ml-3 text-sm font-semibold text-neutral-gray-dark">
                    <span className="text-blue-600 font-bold">500+</span> Buyers discovering
                  </p>
                </div>

                {/* Value Props */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
                  {valueProps.map((prop, index) => (
                    <div key={index} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span className="text-xs font-medium text-neutral-gray-dark">{prop}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2"
              >
                <a
                  href="https://app.vdogate.com/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-base md:text-lg hover:shadow-xl hover:shadow-blue-500/25 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                >
                  Start Discovering
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/freelancers"
                  className="px-8 py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-xl font-semibold text-base md:text-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  I'm a Freelancer
                  <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-lg mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 via-cyan-100/20 to-blue-200/30 rounded-3xl blur-2xl" />

                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/Mask group-1.png"
                    alt="Discover Services"
                    width={600}
                    height={600}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Floating Rating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.6 }}
                  className="absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-black">4.9 Rating</p>
                      <p className="text-xs text-neutral-gray">500+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Verified Card */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute -right-4 bottom-1/3 bg-white rounded-xl shadow-lg p-3 border border-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                    <span className="text-sm font-semibold text-brand-black">Verified Profiles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {!isScrolled && (
        <div
          className="absolute bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <div className="w-6 h-10 border border-blue-400/40 rounded-full flex items-start justify-center p-2 animate-bounce-slow">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-scroll-dot" />
          </div>
        </div>
      )}
    </section>
  )
}

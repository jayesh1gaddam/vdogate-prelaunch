'use client'

import { motion } from 'framer-motion'
import { Search, Video, MessageSquare, CheckCircle2, Users, MapPin, Star } from 'lucide-react'
import Image from 'next/image'

export default function ServicesHeroV2() {
  const steps = [
    { icon: Search, text: 'Browse by category', color: 'from-blue-500 to-blue-600' },
    { icon: Video, text: 'Watch video profiles', color: 'from-cyan-500 to-cyan-600' },
    { icon: MessageSquare, text: 'Connect directly', color: 'from-indigo-500 to-indigo-600' },
  ]

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/20 pt-24 pb-12">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-100/30 via-transparent to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Static Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-blue-200/20 to-cyan-100/20" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full blur-3xl bg-gradient-to-bl from-cyan-100/20 to-blue-200/20" />
      </div>

      {/* Floating Stats Badges - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="absolute top-32 right-20"
        >
          <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Users className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-black">1000+</p>
              <p className="text-[10px] text-neutral-gray">Freelancers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="absolute top-56 right-44"
        >
          <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Star className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-black">50+</p>
              <p className="text-[10px] text-neutral-gray">Categories</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-36 right-20"
        >
          <div className="bg-white/90 backdrop-blur-sm border border-blue-100 rounded-xl px-3 py-2 shadow-md flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-black">100+</p>
              <p className="text-[10px] text-neutral-gray">Cities</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="container-custom relative z-10 w-full">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-center lg:text-left space-y-5 md:space-y-6"
            >
              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight"
              >
                <span className="text-brand-black font-light">Discover</span>
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-semibold">Skilled Freelancers</span>
              </motion.h1>

              {/* Subheadline - Tightened */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-base md:text-lg text-neutral-gray leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Watch video portfolios. Browse by category & location. Connect directly.
              </motion.p>

              {/* How It Works Steps - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="grid grid-cols-3 gap-3 max-w-md mx-auto lg:mx-0"
              >
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 p-3 bg-white/70 backdrop-blur-sm rounded-xl border border-blue-100/50"
                  >
                    <div className={`w-9 h-9 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center shadow-sm`}>
                      <step.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-brand-black text-center">{step.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Avatar Stack - Compact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center justify-center lg:justify-start gap-3"
              >
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/makeup.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '55% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/gym.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/chef.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '50% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white shadow-sm overflow-hidden">
                    <Image src="/teacher.webp" alt="" width={32} height={32} className="object-cover w-full h-full" style={{ objectPosition: '45% 30%' }} />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white text-[10px] font-bold border-2 border-white shadow-sm">+500</div>
                </div>
                <p className="text-sm text-neutral-gray">
                  <span className="text-blue-600 font-semibold">500+</span> buyers discovering
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="lg:col-span-5 relative hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-md mx-auto">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/30 via-cyan-50/20 to-blue-100/30 rounded-3xl blur-2xl" />

                {/* Main Image */}
                <div className="relative">
                  <Image
                    src="/images/Mask group-1.png"
                    alt="Discover Services"
                    width={500}
                    height={500}
                    className="object-contain"
                    priority
                  />
                </div>

                {/* Floating Rating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -left-2 top-1/4 bg-white rounded-lg shadow-md p-2 border border-blue-100"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 text-white fill-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-brand-black">4.9 Rating</p>
                      <p className="text-[10px] text-neutral-gray">500+ Reviews</p>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Verified Card */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.5 }}
                  className="absolute -right-2 bottom-1/3 bg-white rounded-lg shadow-md p-2 border border-blue-100"
                >
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <span className="text-xs font-semibold text-brand-black">Verified Profiles</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

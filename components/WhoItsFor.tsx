'use client'

import { motion } from 'framer-motion'
import { Play, MapPin, Filter, Users } from 'lucide-react'
import AnimatedBlobBg from '@/components/ui/animated-blob-bg'
import Image from 'next/image'

const categories = [
  'Yoga & Fitness',
  'Beauty & Makeup',
  'Cooking & Culinary',
  'Photography',
  'Design & Creative',
  'Education & Tutoring',
]

const locations = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
]

const videoThumbnails = [
  { category: 'Yoga', location: 'Mumbai', color: 'bg-gradient-to-br from-purple-400 to-purple-600', emoji: '🧘‍♀️', name: 'Priya S.', image: '/yoga.png' },
  { category: 'Makeup', location: 'Delhi', color: 'bg-gradient-to-br from-pink-400 to-rose-600', emoji: '💄', name: 'Neha K.', image: '/makeup.png' },
  { category: 'Chef', location: 'Bangalore', color: 'bg-gradient-to-br from-orange-400 to-red-600', emoji: '👨‍🍳', name: 'Arjun M.', image: '/chef.png' },
  { category: 'Design', location: 'Hyderabad', color: 'bg-gradient-to-br from-blue-400 to-indigo-600', emoji: '🎨', name: 'Rohan P.', image: '/makeup.png' },
  { category: 'Tutor', location: 'Chennai', color: 'bg-gradient-to-br from-green-400 to-emerald-600', emoji: '📚', name: 'Anjali R.', image: '/teacher.png' },
  { category: 'Photo', location: 'Pune', color: 'bg-gradient-to-br from-indigo-400 to-violet-600', emoji: '📸', name: 'Vikram D.', image: '/photograper.png' },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 relative overflow-hidden">
      {/* Animated Blob Background */}
      <div className="absolute inset-0 opacity-50">
        <AnimatedBlobBg />
      </div>

      {/* Headline - Full Screen Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="bg-white px-8 py-6 md:px-12 md:py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
            For Freelancers and Customers
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray">
            Two Sides, One Platform
          </p>
        </div>
      </motion.div>

      <div className="container-custom relative z-10">

        {/* Dual Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 mb-16">
          {/* LEFT: Video Thumbnails Grid (For Customers) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full group"
          >
            <div className="relative bg-white p-8 md:p-10 lg:p-12 border-2 border-transparent hover:border-gate-blue/30 shadow-2xl hover:shadow-3xl h-full flex flex-col transition-all duration-500 overflow-hidden">
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gate-blue/10 to-transparent -z-0" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-portal-light/10 to-transparent -z-0" />

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gate-blue to-portal-light rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-gate-blue/10 text-gate-blue text-xs font-bold tracking-wide rounded-full">
                    CUSTOMERS
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
                  For Customers
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-gate-blue to-portal-light rounded-full" />
              </div>

              <p className="text-base md:text-lg text-neutral-gray-dark leading-relaxed mb-8 relative z-10">
                Discover freelancers by category and location through authentic video profiles
              </p>

              {/* Video Grid Mockup */}
              <div className="grid grid-cols-2 gap-4 mb-8 relative z-10 flex-grow">
                {videoThumbnails.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08, duration: 0.4 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    className={`${video.color} rounded-2xl aspect-video relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 group/video`}
                  >
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20 opacity-60 group-hover/video:opacity-80 transition-opacity duration-300" />

                    {/* Play Button - Center */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center z-10"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover/video:bg-white transition-all duration-300">
                        <Play className="w-5 h-5 text-gray-900 ml-0.5" fill="currentColor" />
                      </div>
                    </motion.div>

                    {/* Compact Footer - Only Essential Info */}
                    <div className="absolute bottom-2 left-2 right-2 z-20">
                      <div className="bg-white/50 backdrop-blur-md rounded-xl px-2.5 py-2 shadow-lg">
                        <div className="flex items-center gap-2">
                          {/* Profile Picture */}
                          <div className="w-8 h-8 rounded-lg bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md overflow-hidden ring-1 ring-white/50 flex-shrink-0">
                            <Image src={video.image} alt={video.category} width={32} height={32} className="object-cover w-full h-full scale-110" style={{ objectPosition: 'center 30%' }} />
                          </div>
                          {/* Info */}
                          <div className="flex items-center justify-between gap-2 flex-1 min-w-0">
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-bold text-white drop-shadow-md truncate">{video.name}</p>
                              <p className="text-[10px] text-white/90 drop-shadow truncate">{video.category}</p>
                            </div>
                            <div className="flex items-center gap-0.5 px-2 py-1 bg-white/80 rounded-lg flex-shrink-0">
                              <MapPin className="w-2.5 h-2.5 text-orange-600" />
                              <span className="text-[10px] font-bold text-orange-700">{video.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Bottom Highlight */}
              <div className="relative z-10 bg-gradient-to-r from-gate-blue/5 via-portal-light/5 to-gate-blue/5 border-l-4 border-gate-blue rounded-lg p-5 backdrop-blur-sm">
                <p className="text-sm md:text-base font-semibold text-brand-black">
                  Browse verified freelancers and see their work before you connect
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Category & Location Filter (For Freelancers) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full group"
          >
            <div className="relative bg-white p-8 md:p-10 lg:p-12 border-2 border-transparent hover:border-portal-primary/30 shadow-2xl hover:shadow-3xl h-full flex flex-col transition-all duration-500 overflow-hidden">
              {/* Decorative Corner Accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-bl from-portal-primary/10 to-transparent -z-0" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#F79F2B]/10 to-transparent -z-0" />

              {/* Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-portal-gradient rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Filter className="w-7 h-7 text-white" />
                  </div>
                  <div className="px-3 py-1 bg-portal-primary/10 text-portal-primary text-xs font-bold tracking-wide rounded-full">
                    FREELANCERS
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-3">
                  For Freelancers
                </h3>
                <div className="w-16 h-1 bg-portal-gradient rounded-full" />
              </div>

              <p className="text-base md:text-lg text-neutral-gray-dark leading-relaxed mb-8 relative z-10">
                Get discovered by customers searching for your skills in your location
              </p>

              {/* Category Selection Mockup */}
              <div className="mb-8 relative z-10">
                <label className="block text-sm font-bold text-brand-black mb-4 tracking-wide uppercase text-xs">
                  Select Your Category
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md ${
                        index === 0
                          ? 'bg-portal-gradient text-white border-portal-primary shadow-lg shadow-portal-primary/20'
                          : 'bg-white text-neutral-gray-dark border-neutral-gray-lighter hover:border-portal-primary hover:text-portal-primary hover:bg-portal-primary/5'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Location Selection Mockup */}
              <div className="mb-8 relative z-10">
                <label className="block text-sm font-bold text-brand-black mb-4 tracking-wide uppercase text-xs">
                  Select Your Location
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {locations.map((location, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      whileHover={{ scale: 1.03, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-4 py-3 rounded-xl border-2 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm hover:shadow-md ${
                        index === 0
                          ? 'bg-portal-gradient text-white border-portal-primary shadow-lg shadow-portal-primary/20'
                          : 'bg-white text-neutral-gray-dark border-neutral-gray-lighter hover:border-portal-primary hover:text-portal-primary hover:bg-portal-primary/5'
                      }`}
                    >
                      <MapPin className="w-4 h-4" />
                      {location}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bottom Highlight */}
              <div className="relative z-10 bg-gradient-to-r from-portal-primary/5 via-[#F79F2B]/5 to-portal-primary/5 border-l-4 border-portal-primary rounded-lg p-5 backdrop-blur-sm mt-auto">
                <p className="text-sm md:text-base font-semibold text-brand-black">
                  Upload your skills video and get listed automatically — no ads, no algorithms
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-portal-primary/20 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
              A Platform Built for India's Freelance Economy
            </h3>
            <p className="text-base md:text-lg text-neutral-gray leading-relaxed mb-8">
              Whether you're offering services or searching for talent, VDOgate connects you directly — fairly, transparently, and without middlemen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
              >
                Join as Freelancer – Free Pre-Launch
              </button>
              <button
                disabled
                className="px-8 py-4 bg-neutral-gray-light text-white rounded-xl font-semibold text-lg cursor-not-allowed opacity-60 relative"
              >
                Browse Freelancers
                <span className="absolute -top-2 -right-2 bg-vdo-orange text-white text-xs px-3 py-1 rounded-full">
                  Coming Soon
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

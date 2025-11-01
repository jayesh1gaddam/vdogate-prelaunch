'use client'

import { motion } from 'framer-motion'
import { Play, MapPin, Filter, Users } from 'lucide-react'

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
  { category: 'Yoga', location: 'Mumbai', color: 'bg-purple-500' },
  { category: 'Makeup', location: 'Delhi', color: 'bg-pink-500' },
  { category: 'Chef', location: 'Bangalore', color: 'bg-orange-500' },
  { category: 'Design', location: 'Hyderabad', color: 'bg-blue-500' },
  { category: 'Tutor', location: 'Chennai', color: 'bg-green-500' },
  { category: 'Photo', location: 'Pune', color: 'bg-indigo-500' },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-gradient-to-br from-neutral-background via-white to-portal-primary/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-64 h-64 bg-portal-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-portal-light rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            For <span className="text-gradient">Freelancers</span> and <span className="text-gradient">Customers</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto">
            Two Sides, One Platform
          </p>
        </motion.div>

        {/* Dual Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* LEFT: Video Thumbnails Grid (For Customers) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-portal-primary/20 shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gate-blue to-portal-light rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black">For Customers</h3>
              </div>

              <p className="text-base md:text-lg text-neutral-gray mb-6">
                Discover freelancers by category and location through authentic video profiles
              </p>

              {/* Video Grid Mockup */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {videoThumbnails.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    className={`${video.color} rounded-xl aspect-video relative overflow-hidden group cursor-pointer hover:shadow-lg transition-all duration-300`}
                  >
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-all">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-brand-black ml-1" fill="currentColor" />
                      </div>
                    </div>
                    {/* Category & Location Labels */}
                    <div className="absolute bottom-2 left-2 right-2 flex justify-between items-center">
                      <span className="text-xs font-semibold text-white bg-black/40 backdrop-blur px-2 py-1 rounded">
                        {video.category}
                      </span>
                      <span className="text-xs text-white bg-black/40 backdrop-blur px-2 py-1 rounded flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {video.location}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-gate-blue/10 to-portal-light/10 rounded-2xl p-4 border border-gate-blue/20">
                <p className="text-sm md:text-base font-semibold text-brand-black text-center">
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
            className="relative h-full"
          >
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-portal-primary/20 shadow-xl h-full flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-portal-gradient rounded-xl flex items-center justify-center">
                  <Filter className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-brand-black">For Freelancers</h3>
              </div>

              <p className="text-base md:text-lg text-neutral-gray mb-6">
                Get discovered by customers searching for your skills in your location
              </p>

              {/* Category Selection Mockup */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-black mb-3">
                  Select Your Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((category, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 ${
                        index === 0
                          ? 'bg-portal-gradient text-white border-portal-primary shadow-md'
                          : 'bg-white text-neutral-gray-dark border-neutral-gray-lighter hover:border-portal-primary hover:text-portal-primary'
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Location Selection Mockup */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brand-black mb-3">
                  Select Your Location
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((location, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.3 }}
                      className={`px-4 py-2.5 rounded-lg border text-sm font-medium transition-all duration-300 flex items-center justify-center gap-1 ${
                        index === 0
                          ? 'bg-portal-gradient text-white border-portal-primary shadow-md'
                          : 'bg-white text-neutral-gray-dark border-neutral-gray-lighter hover:border-portal-primary hover:text-portal-primary'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" />
                      {location}
                    </motion.button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-portal-primary/10 to-portal-light/10 rounded-2xl p-4 border border-portal-primary/20">
                <p className="text-sm md:text-base font-semibold text-brand-black text-center">
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

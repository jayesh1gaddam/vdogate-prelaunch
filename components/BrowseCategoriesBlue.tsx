'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { Sparkles, TrendingUp } from 'lucide-react'
import { fadeInUp, scaleIn, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'

// Dynamically import 3D component to avoid SSR issues
const RotatingText3D = dynamic(() => import('@/components/ui/rotating-text-3d'), {
  ssr: false,
  loading: () => <div className="h-32 md:h-40 flex items-center justify-center"><span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Loading...</span></div>
})

export default function BrowseCategoriesBlue() {
  const categories = [
    "Yoga Trainers 🧘‍♀️",
    "Beauty Experts 💄",
    "Chefs & Bakers 👨‍🍳",
    "Tutors & Educators 📚",
    "Fitness Coaches 💪",
    "Photographers 📸",
    "Designers ✨",
    "Content Creators 🎥",
    "Music Teachers 🎵",
    "Dance Instructors 💃",
  ]

  const categoryPeople = [
    { emoji: '🧘‍♀️', name: 'Priya', role: 'Yoga Trainer', specialty: '500+ Sessions', color: 'from-purple-400 to-purple-600', image: '/yoga.png', rating: '4.9' },
    { emoji: '💄', name: 'Neha', role: 'Makeup Artist', specialty: 'Bridal Expert', color: 'from-pink-400 to-rose-600', image: '/makeup.png', rating: '5.0' },
    { emoji: '👨‍🍳', name: 'Arjun', role: 'Professional Chef', specialty: 'Italian Cuisine', color: 'from-rose-400 to-red-600', image: '/chef.png', rating: '4.8' },
    { emoji: '📚', name: 'Anjali', role: 'Math Tutor', specialty: 'IIT Coaching', color: 'from-green-400 to-emerald-600', image: '/teacher.png', rating: '4.9' },
    { emoji: '💪', name: 'Rahul', role: 'Fitness Coach', specialty: 'Weight Loss', color: 'from-blue-400 to-cyan-600', image: '/gym.png', rating: '5.0' },
    { emoji: '📸', name: 'Vikram', role: 'Photographer', specialty: 'Weddings', color: 'from-indigo-400 to-violet-600', image: '/photograper.png', rating: '4.7' },
  ]

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-cyan-50/20 overflow-hidden">
      {/* Premium Background Pattern - Blue Theme */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-blue-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-cyan-100/20 via-transparent to-transparent" />

      {/* Dot Pattern Overlay - Blue */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#3b82f615_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Animated Orbs - Blue Theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          {/* Premium Badge - Blue Theme */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200 rounded-full px-6 py-2 mb-8"
          >
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-700">Browse Top Freelance Talent</span>
            <TrendingUp className="w-4 h-4 text-blue-600" />
          </motion.div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="whitespace-nowrap">Discover India's</span>
              <div className="w-full max-w-2xl">
                <RotatingText3D
                  texts={categories}
                  rotationInterval={3000}
                />
              </div>
            </div>
          </h2>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-lg md:text-xl text-neutral-gray leading-relaxed max-w-3xl mx-auto"
          >
            Browse through{' '}
            <span className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">verified, skilled freelancers</span>{' '}
            across every category. Watch their video portfolios and connect directly.
          </motion.p>
        </motion.div>

        {/* Clean Minimal Category Cards - Portrait + Category Name Only */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-12"
        >
          {categoryPeople.map((person, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative cursor-pointer"
            >
              {/* Minimal Card Container */}
              <div className="relative flex flex-col items-center">

                {/* Full Size Portrait Avatar - Allows Overflow from Top */}
                <div className="relative w-full aspect-square mb-4">
                  <motion.div
                    className="relative w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    {/* Static Gradient Border - Optimized */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${person.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${person.color} opacity-20 blur-sm`} />

                    {/* Image Container with Thin Border - Fixed */}
                    <div className="absolute inset-[0.5px] rounded-3xl overflow-visible bg-white flex items-end justify-center pb-0 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                      <div className="relative w-full h-[120%]">
                        <Image
                          src={person.image}
                          alt={person.role}
                          fill
                          className="object-contain object-bottom"
                        />
                      </div>
                    </div>

                    {/* Premium Shine Effect on Hover */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                      <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent rotate-45 group-hover:inset-full transition-all duration-1000" />
                    </div>
                  </motion.div>
                </div>

                {/* Category Name - Premium Gradient Text with Hand-Drawn Underline */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full text-center"
                >
                  <h3
                    className="text-lg md:text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br pb-1"
                    style={{
                      backgroundImage: `linear-gradient(to bottom right, ${person.color.includes('purple-400') ? '#a855f7, #7c3aed' :
                          person.color.includes('pink-400') ? '#ec4899, #be185d' :
                            person.color.includes('rose-400') ? '#fb7185, #dc2626' :
                              person.color.includes('green-400') ? '#10b981, #059669' :
                                person.color.includes('blue-400') ? '#3b82f6, #1d4ed8' :
                                  '#8b5cf6, #6d28d9'
                        })`
                    }}
                  >
                    {person.role}
                  </h3>
                  {/* Hand-Drawn Style Underline */}
                  <svg
                    className="w-full h-2 mx-auto"
                    viewBox="0 0 100 8"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id={`gradient-blue-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop
                          offset="0%"
                          stopColor={
                            person.color.includes('purple-400') ? '#a855f7' :
                              person.color.includes('pink-400') ? '#ec4899' :
                                person.color.includes('rose-400') ? '#fb7185' :
                                  person.color.includes('green-400') ? '#10b981' :
                                    person.color.includes('blue-400') ? '#3b82f6' :
                                      '#8b5cf6'
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            person.color.includes('purple-400') ? '#7c3aed' :
                              person.color.includes('pink-400') ? '#be185d' :
                                person.color.includes('rose-400') ? '#dc2626' :
                                  person.color.includes('green-400') ? '#059669' :
                                    person.color.includes('blue-400') ? '#1d4ed8' :
                                      '#6d28d9'
                          }
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 2,5 Q 8,3 15,4.5 T 30,5 Q 40,4 50,5 T 70,4.5 Q 80,5.5 90,4 T 98,5"
                      fill="none"
                      stroke={`url(#gradient-blue-${index})`}
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                  </svg>
                </motion.div>

              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import 3D component to avoid SSR issues
const RotatingText3D = dynamic(() => import('@/components/ui/rotating-text-3d'), {
  ssr: false,
  loading: () => <div className="h-32 md:h-40 flex items-center justify-center"><span className="text-gradient">Loading...</span></div>
})

export default function FreelancerCategories() {
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
    { emoji: '🧘‍♀️', name: 'Priya', role: 'Yoga', color: 'from-purple-400 to-purple-600', image: '/yoga.png' },
    { emoji: '💄', name: 'Neha', role: 'Makeup', color: 'from-pink-400 to-rose-600', image: '/makeup.png' },
    { emoji: '👨‍🍳', name: 'Arjun', role: 'Chef', color: 'from-orange-400 to-red-600', image: '/chef.png' },
    { emoji: '📚', name: 'Anjali', role: 'Tutor', color: 'from-green-400 to-emerald-600', image: '/teacher.png' },
    { emoji: '💪', name: 'Rahul', role: 'Fitness', color: 'from-blue-400 to-cyan-600', image: '/gym.png' },
    { emoji: '📸', name: 'Vikram', role: 'Photo', color: 'from-indigo-400 to-violet-600', image: '/photograper.png' },
  ]

  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-slate-50 via-gray-50/50 to-neutral-100/30 overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,_var(--tw-gradient-stops))] from-amber-100/20 via-transparent to-transparent" />

      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#f7682b15_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-orange-200/20 to-rose-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amber-200/20 to-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            <div className="flex flex-col items-center justify-center gap-1">
              <span className="whitespace-nowrap">Meet India's</span>
              <div className="w-full max-w-2xl">
                <RotatingText3D
                  texts={categories}
                  rotationInterval={3000}
                />
              </div>
            </div>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-neutral-gray leading-relaxed mb-8">
            From fitness trainers to creative professionals, VDOgate connects you with skilled freelancers across every category — all in one platform.
          </p>

          {/* People Avatar Grid */}
          <div className="flex justify-center items-center gap-8 mb-8 flex-wrap">
            {categoryPeople.map((person, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="relative group cursor-pointer"
              >
                {/* Card Container */}
                <motion.div
                  className="relative w-24 h-24 group-hover:w-40 group-hover:h-48 transition-all duration-500 ease-out"
                  whileHover={{ y: -10 }}
                >
                  {/* Stage/Platform - Color Tile */}
                  <motion.div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br ${person.color} rounded-2xl shadow-lg transition-all duration-500 ease-out group-hover:w-40 group-hover:h-10 group-hover:rounded-xl flex items-center justify-center`}
                  >
                    <p className="text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">{person.role}</p>
                  </motion.div>

                  {/* Image Container */}
                  <motion.div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 group-hover:w-36 group-hover:h-36 transition-all duration-500 ease-out z-10"
                  >
                    <div className="relative w-full h-full transition-all duration-500" style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}>
                      <div className="relative w-full h-full">
                        <Image
                          src={person.image}
                          alt={person.role}
                          width={144}
                          height={144}
                          className="object-contain w-full h-full transition-all duration-500 group-hover:[mask-image:linear-gradient(to_top,transparent_0%,rgba(0,0,0,0.3)_10%,rgba(0,0,0,0.7)_20%,black_30%)]"
                          style={{ mixBlendMode: 'normal' }}
                        />
                      </div>
                    </div>

                    {/* Drop shadow effect */}
                    <motion.div
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-black/30 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300"
          >
            Explore All Categories
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

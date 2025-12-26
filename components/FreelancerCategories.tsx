'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import Image from 'next/image'

// Dynamically import 3D component to avoid SSR issues
const RotatingText3D = dynamic(() => import('@/components/ui/rotating-text-3d'), {
  ssr: false,
  loading: () => <div className="h-24 md:h-28 flex items-center justify-center"><span className="text-gradient text-3xl font-bold">Loading...</span></div>
})

export default function FreelancerCategories() {
  const categories = [
    "Yoga Trainers",
    "Beauty Experts",
    "Chefs & Bakers",
    "Tutors & Educators",
    "Fitness Coaches",
    "Photographers",
    "Designers",
    "Content Creators",
    "Music Teachers",
    "Dance Instructors",
  ]

  const categoryPeople = [
    { role: 'Yoga Trainer', color: 'from-purple-400 to-purple-600', image: '/yoga.png' },
    { role: 'Makeup Artist', color: 'from-pink-400 to-rose-600', image: '/makeup.png' },
    { role: 'Chef', color: 'from-rose-400 to-red-600', image: '/chef.png' },
    { role: 'Tutor', color: 'from-green-400 to-emerald-600', image: '/teacher.png' },
    { role: 'Fitness Coach', color: 'from-blue-400 to-cyan-600', image: '/gym.png' },
    { role: 'Photographer', color: 'from-indigo-400 to-violet-600', image: '/photograper.png' },
  ]

  return (
    <section className="relative py-12 md:py-16 bg-slate-50 overflow-hidden">
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50" />

      <div className="container-custom relative z-10">
        {/* Header - Compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          {/* Heading with Rotating Text */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-black mb-2">
            Meet India's
          </h2>
          <div className="w-full max-w-xl mx-auto">
            <RotatingText3D
              texts={categories}
              rotationInterval={2500}
            />
          </div>
        </motion.div>

        {/* Category Cards - Simplified */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-5 max-w-5xl mx-auto">
          {categoryPeople.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group cursor-pointer"
            >
              <div className="flex flex-col items-center">
                {/* Portrait */}
                <div className="relative w-full aspect-square mb-2">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${person.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-white shadow-md group-hover:shadow-lg transition-shadow">
                    <div className="relative w-full h-[115%]">
                      <Image
                        src={person.image}
                        alt={person.role}
                        fill
                        className="object-contain object-bottom"
                      />
                    </div>
                  </div>
                </div>

                {/* Role Name */}
                <p className="text-xs md:text-sm font-medium text-neutral-gray-dark text-center">
                  {person.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react'

export default function BuyerTestimonials() {
  const buyerReviews = [
    {
      name: 'Amit Sharma',
      role: 'Business Owner',
      location: 'Mumbai',
      review: 'Found a video editor within hours. Watching their portfolio saved me from hiring the wrong person. Direct contact meant fast turnaround.',
      rating: 5,
      avatarBg: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Priya Mehta',
      role: 'Startup Founder',
      location: 'Bangalore',
      review: 'No more guessing from text profiles. I could see exactly how the photographer works before booking. The platform is 100% free for me!',
      rating: 5,
      avatarBg: 'from-cyan-400 to-blue-500'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Event Planner',
      location: 'Delhi',
      review: 'Being able to filter by location AND watch video demos changed everything. Found a local caterer with exactly the style I needed.',
      rating: 5,
      avatarBg: 'from-indigo-400 to-blue-500'
    },
    {
      name: 'Sneha Patel',
      role: 'Marketing Manager',
      location: 'Ahmedabad',
      review: 'I used to spend days vetting freelancers. Now I watch their videos, check reviews, and connect directly. So much time saved!',
      rating: 5,
      avatarBg: 'from-blue-400 to-indigo-500'
    },
    {
      name: 'Vikram Singh',
      role: 'Restaurant Owner',
      location: 'Jaipur',
      review: 'Hired a social media manager after seeing their actual work in videos. No middlemen, no fees. Best hiring decision I made.',
      rating: 5,
      avatarBg: 'from-cyan-400 to-indigo-500'
    },
    {
      name: 'Ananya Reddy',
      role: 'HR Consultant',
      location: 'Hyderabad',
      review: 'The verified profiles with video portfolios give me confidence. I know exactly what I am getting before I even message them.',
      rating: 5,
      avatarBg: 'from-blue-400 to-cyan-400'
    }
  ]

  // Duplicate for infinite scroll
  const allReviews = [...buyerReviews, ...buyerReviews]

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-800/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-800/15 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f610_1px,transparent_1px),linear-gradient(to_bottom,#3b82f610_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Static Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300">Success Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Buyers Love{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              VDOgate
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg md:text-xl text-blue-200/80 leading-relaxed"
          >
            Real stories from buyers who found the perfect freelancers through video portfolios
          </motion.p>
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-12"
        >
          {[
            { value: '500+', label: 'Happy Buyers' },
            { value: '4.9', label: 'Average Rating' },
            { value: '100%', label: 'Free for Buyers' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm text-blue-300/70">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Scroll */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [0, -50 * buyerReviews.length * 6] }}
              transition={{
                x: {
                  duration: 60,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {allReviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[350px] md:w-[400px]"
                >
                  <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 h-full hover:bg-white/10 transition-colors duration-300">
                    {/* Quote Icon */}
                    <Quote className="w-8 h-8 text-blue-400/40 mb-4" />

                    {/* Review Text */}
                    <p className="text-white/90 leading-relaxed mb-6 text-sm md:text-base">
                      "{review.review}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white font-bold text-lg`}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white">{review.name}</p>
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                        </div>
                        <p className="text-sm text-blue-300/70">{review.role} • {review.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

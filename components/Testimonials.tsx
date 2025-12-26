'use client'

import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2, Sparkles } from 'lucide-react'

export default function Testimonials() {
  const freelancerReviews = [
    {
      name: 'Priya Sharma',
      role: 'Yoga Instructor',
      location: 'Mumbai',
      review: 'Finally a platform where my skills speak through videos. No more explaining myself - clients see exactly what I offer before reaching out.',
      rating: 5,
      avatarBg: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Arjun Patel',
      role: 'Professional Chef',
      location: 'Delhi',
      review: 'Zero commission on my services was the game changer. I keep what I earn. The video portfolio brought me 3x more inquiries.',
      rating: 5,
      avatarBg: 'from-orange-400 to-red-500'
    },
    {
      name: 'Neha Gupta',
      role: 'Makeup Artist',
      location: 'Bangalore',
      review: 'Clients used to ask for references. Now they watch my work videos and book directly. Trust is built before we even talk.',
      rating: 5,
      avatarBg: 'from-pink-400 to-rose-500'
    },
    {
      name: 'Rahul Verma',
      role: 'Fitness Coach',
      location: 'Pune',
      review: 'The live events feature is brilliant. I now host paid workout sessions and earn while building my community.',
      rating: 5,
      avatarBg: 'from-blue-400 to-cyan-500'
    },
    {
      name: 'Anjali Reddy',
      role: 'Dance Instructor',
      location: 'Hyderabad',
      review: 'No algorithm hiding my content. I show up when people search my category and location. Simple and fair.',
      rating: 5,
      avatarBg: 'from-amber-400 to-orange-500'
    },
    {
      name: 'Vikram Singh',
      role: 'Photographer',
      location: 'Jaipur',
      review: 'My video portfolio shows my actual work, not just curated photos. Clients know exactly what style I bring.',
      rating: 5,
      avatarBg: 'from-indigo-400 to-violet-500'
    }
  ]

  // Duplicate for infinite scroll
  const allReviews = [...freelancerReviews, ...freelancerReviews]

  return (
    <section className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-800/15 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-800/10 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-full mb-6"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">Freelancer Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Freelancers Love{' '}
            <span className="text-gradient">VDOgate</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-lg text-orange-200/70"
          >
            Real stories from freelancers growing their business
          </motion.p>
        </div>

        {/* Trust Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-8 mb-10"
        >
          {[
            { value: '170+', label: 'Freelancers Registered' },
            { value: '0%', label: 'Commission' },
            { value: '50+', label: 'Categories' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-gradient">
                {stat.value}
              </p>
              <p className="text-sm text-orange-300/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Scroll */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-5"
              animate={{ x: [0, -50 * freelancerReviews.length * 6] }}
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
                  className="flex-shrink-0 w-[320px] md:w-[360px]"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 h-full hover:bg-white/8 transition-colors duration-300">
                    {/* Quote Icon */}
                    <Quote className="w-6 h-6 text-orange-400/40 mb-3" />

                    {/* Review Text */}
                    <p className="text-white/85 leading-relaxed mb-5 text-sm">
                      "{review.review}"
                    </p>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.avatarBg} flex items-center justify-center text-white font-bold text-sm`}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-semibold text-white text-sm">{review.name}</p>
                          <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                        </div>
                        <p className="text-xs text-orange-300/60">{review.role} • {review.location}</p>
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

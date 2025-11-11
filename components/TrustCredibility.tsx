'use client'

import { motion } from 'framer-motion'
import { IndianRupee, Code2, Heart, Star } from 'lucide-react'
import Image from 'next/image'

const trustElements = [
  {
    icon: Code2,
    title: 'Technology Leadership',
    description: 'Built with enterprise-grade infrastructure for scale',
    color: 'from-portal-primary to-portal-light',
  },
  {
    icon: Heart,
    title: 'Freelancer-First Economics',
    description: 'Fair pricing and transparent terms — we succeed when you succeed',
    color: 'from-portal-light to-portal-lighter',
  },
]

const creatorReviews = [
  {
    name: 'Priya Sharma',
    role: 'Makeup Artist',
    location: 'Mumbai',
    review: "I was tired of algorithms deciding who sees my work. Building followers takes years, but I need clients now. VDOgate lets people search for makeup artists in their area and find me based on my skills, not my follower count.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-pink-400 to-rose-500',
    emoji: '💄',
    image: '/makeup.png'
  },
  {
    name: 'Rahul Verma',
    role: 'Fitness Coach',
    location: 'Bangalore',
    review: "Most platforms take 30-40% of what I earn, and I still have to fight for visibility. VDOgate gives me 85% of my earnings and connects me with people actually searching for fitness coaching. Finally, a fair deal for freelancers.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-blue-400 to-cyan-500',
    emoji: '💪',
    image: '/gym.png'
  },
  {
    name: 'Anjali Desai',
    role: 'Photographer',
    location: 'Delhi',
    review: "Static photos can't show my personality or how I work with clients. I needed a way to build trust before the first meeting. Video profiles on VDOgate let me introduce myself properly, and clients find me when they search for photographers.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-purple-400 to-indigo-500',
    emoji: '📸',
    image: '/photograper.png'
  },
  {
    name: 'Vikram Singh',
    role: 'Business Coach',
    location: 'Pune',
    review: "I was spending too much time converting casual followers into paying clients through endless messages. VDOgate brings me people who are actively looking for business coaching—they find me through search and come ready to discuss services.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
    emoji: '📊',
    image: '/chef.png'
  },
  {
    name: 'Meera Patel',
    role: 'Yoga Instructor',
    location: 'Ahmedabad',
    review: "My classes are local, but I was reaching random people everywhere who would never attend. VDOgate's location-based search connects me with people nearby who are actually looking for yoga instruction. No more wasted effort on wrong audience.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-green-400 to-emerald-500',
    emoji: '🧘',
    image: '/yoga.png'
  },
  {
    name: 'Arjun Malhotra',
    role: 'Marketing Consultant',
    location: 'Hyderabad',
    review: "I was stuck in the content treadmill—constantly posting to stay visible. VDOgate gives me a professional profile that works 24/7. Clients find me through search when they need help, not based on my latest post.",
    rating: 5,
    avatarBg: 'bg-gradient-to-br from-teal-400 to-cyan-500',
    emoji: '📈',
    image: '/teacher.png'
  },
]

export default function TrustCredibility() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30">
      {/* Premium Background Mesh */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_var(--tw-gradient-stops))] from-emerald-100/30 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,_var(--tw-gradient-stops))] from-teal-100/20 via-transparent to-transparent" />

      {/* Hexagon Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="hexagons" x="0" y="0" width="50" height="43.4" patternUnits="userSpaceOnUse">
              <polygon points="24.8,22 37.3,29.2 37.3,43.7 24.8,50.9 12.3,43.7 12.3,29.2" fill="none" stroke="#10b981" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-green-200/20 to-emerald-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-teal-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            Backed by Innovation, <span className="text-gradient">Trusted by Freelancers</span>
          </h2>
        </motion.div>

        {/* Trust Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {trustElements.map((element, index) => {
            const Icon = element.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-neutral-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 bg-gradient-to-br ${element.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-headline-sm mb-3">{element.title}</h3>
                <p className="text-body-md text-neutral-gray-dark">
                  {element.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Creator Reviews - 3D Infinite Scrolling Gallery */}
        <div className="mt-16 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h3 className="text-headline-md mb-2">What Freelancers Are Saying</h3>
            <p className="text-body-md text-neutral-gray-dark">Join hundreds of freelancers building their success</p>
          </motion.div>

          <div className="relative" style={{ perspective: '1000px' }}>
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Scrolling Container */}
            <div className="flex gap-6 animate-infinite-scroll hover:pause-animation py-4">
              {/* First Set */}
              {creatorReviews.map((review, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 border border-neutral-gray-lighter/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{
                    transform: 'rotateY(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`relative w-16 h-16 ${review.avatarBg} rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-white overflow-hidden`}>
                      <Image src={review.image} alt={review.role} width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-neutral-black">{review.name}</p>
                      <p className="text-sm font-semibold text-portal-primary">{review.role}</p>
                      <p className="text-xs text-neutral-gray flex items-center gap-1 mt-1">
                        <span className="w-3 h-3 text-portal-primary">📍</span> {review.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-neutral-gray-dark leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              ))}
              {/* Second Set for Infinite Loop */}
              {creatorReviews.map((review, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[400px] bg-white rounded-2xl p-6 border border-neutral-gray-lighter/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
                  style={{
                    transform: 'rotateY(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Profile Header */}
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`relative w-16 h-16 ${review.avatarBg} rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-white overflow-hidden`}>
                      <Image src={review.image} alt={review.role} width={64} height={64} className="object-cover w-full h-full" />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-lg text-neutral-black">{review.name}</p>
                      <p className="text-sm font-semibold text-portal-primary">{review.role}</p>
                      <p className="text-xs text-neutral-gray flex items-center gap-1 mt-1">
                        <span className="w-3 h-3 text-portal-primary">📍</span> {review.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-neutral-gray-dark leading-relaxed">
                    "{review.review}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

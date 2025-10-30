'use client'

import { motion } from 'framer-motion'
import { IndianRupee, Code2, Heart, Star } from 'lucide-react'

const trustElements = [
  {
    icon: Code2,
    title: 'Technology Leadership',
    description: 'Built with enterprise-grade infrastructure for scale',
    color: 'from-portal-primary to-portal-light',
  },
  {
    icon: Heart,
    title: 'Creator-First Economics',
    description: '85% revenue share — we succeed when you succeed',
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
  },
  {
    name: 'Rahul Verma',
    role: 'Fitness Coach',
    location: 'Bangalore',
    review: "Most platforms take 30-40% of what I earn, and I still have to fight for visibility. VDOgate gives me 85% of my earnings and connects me with people actually searching for fitness coaching. Finally, a fair deal for creators.",
    rating: 5,
  },
  {
    name: 'Anjali Desai',
    role: 'Photographer',
    location: 'Delhi',
    review: "Static photos can't show my personality or how I work with clients. I needed a way to build trust before the first meeting. Video profiles on VDOgate let me introduce myself properly, and clients find me when they search for photographers.",
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Business Coach',
    location: 'Pune',
    review: "I was spending too much time converting casual followers into paying clients through endless messages. VDOgate brings me people who are actively looking for business coaching—they find me through search and come ready to discuss services.",
    rating: 5,
  },
  {
    name: 'Meera Patel',
    role: 'Yoga Instructor',
    location: 'Ahmedabad',
    review: "My classes are local, but I was reaching random people everywhere who would never attend. VDOgate's location-based search connects me with people nearby who are actually looking for yoga instruction. No more wasted effort on wrong audience.",
    rating: 5,
  },
  {
    name: 'Arjun Malhotra',
    role: 'Marketing Consultant',
    location: 'Hyderabad',
    review: "I was stuck in the content treadmill—constantly posting to stay visible. VDOgate gives me a professional profile that works 24/7. Clients find me through search when they need help, not based on my latest post.",
    rating: 5,
  },
]

export default function TrustCredibility() {
  return (
    <section className="section-padding bg-white">
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
            Backed by Innovation, <span className="text-gradient">Trusted by Creators</span>
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
            <h3 className="text-headline-md mb-2">What Creators Are Saying</h3>
            <p className="text-body-md text-neutral-gray-dark">Join hundreds of creators building their success</p>
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
                  className="flex-shrink-0 w-[380px] bg-gradient-to-br from-neutral-background to-white rounded-2xl p-6 border border-neutral-gray-lighter shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    transform: 'rotateY(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-vdo-orange text-vdo-orange" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base text-neutral-black mb-6 italic leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Creator Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-gray-lighter">
                    <div className="w-12 h-12 bg-portal-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-black">{review.name}</p>
                      <p className="text-sm text-neutral-gray">{review.role} • {review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Second Set for Infinite Loop */}
              {creatorReviews.map((review, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 w-[380px] bg-gradient-to-br from-neutral-background to-white rounded-2xl p-6 border border-neutral-gray-lighter shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{
                    transform: 'rotateY(-2deg)',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-vdo-orange text-vdo-orange" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-base text-neutral-black mb-6 italic leading-relaxed">
                    "{review.review}"
                  </p>

                  {/* Creator Info */}
                  <div className="flex items-center gap-3 pt-4 border-t border-neutral-gray-lighter">
                    <div className="w-12 h-12 bg-portal-gradient rounded-full flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-black">{review.name}</p>
                      <p className="text-sm text-neutral-gray">{review.role} • {review.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

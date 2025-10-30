'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function HeroCarousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Transform scroll to movement - left list moves up, right list moves down
  const leftY = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rightY = useTransform(scrollYProgress, [0, 1], [-100, 100])

  return (
    <div ref={containerRef} className="relative w-full h-[700px] flex items-center justify-center">
      {/* Main carousel container with masking */}
      <div className="relative w-full h-full overflow-hidden rounded-3xl flex gap-6">
        {/* Left vertical list - scrolls up on page scroll */}
        <div className="flex-1 h-full relative overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ y: leftY }}
            className="w-full"
          >
            <img
              src="/hero_1.svg"
              alt="VDOgate Features - Left Carousel"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Right vertical list - scrolls down on page scroll */}
        <div className="flex-1 h-full relative overflow-hidden flex items-center justify-center">
          <motion.div
            style={{ y: rightY }}
            className="w-full"
          >
            <img
              src="/hero_2.svg"
              alt="VDOgate Features - Right Carousel"
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Gradient overlays for vanishing effect */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top fade */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/60 to-transparent z-10" />

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/60 to-transparent z-10" />
        </div>
      </div>
    </div>
  )
}

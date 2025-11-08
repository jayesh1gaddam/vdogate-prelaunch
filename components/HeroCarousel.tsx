'use client'

import { memo, useEffect, useState } from 'react'
import Image from 'next/image'

// Interactive hero carousel with scroll-triggered zoom effect and fade borders - Performance optimized
const HeroCarousel = memo(function HeroCarousel() {
  const [scrollY, setScrollY] = useState(0)

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate zoom based on scroll (1.6 to 1.8 scale) - Much more zoomed
  const scale = 1.6 + Math.min(scrollY * 0.0003, 0.2)

  // Calculate opposite scroll effect (parallax) - graphic moves up as page scrolls down
  const translateY = -scrollY * 0.15

  return (
    <div className="relative w-full h-[700px] lg:h-[850px] xl:h-[950px] 2xl:h-[1050px] overflow-hidden rounded-3xl">
      {/* Animated background glow - Optimized with CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 via-amber-100/20 to-rose-200/30 rounded-3xl blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />

      {/* SVG Graphic with scroll-triggered zoom - HEAVILY ZOOMED, scaled vertically only */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div
          className="relative w-full"
          style={{
            height: `${scale * 100}%`,
            transform: `translateY(${translateY}px)`,
            transition: 'all 0.1s ease-out',
            willChange: 'transform',
          }}
        >
          <Image
            src="/hero_graphic_corousel.svg"
            alt="VDOgate Hero Carousel"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating particles for depth - Reduced for performance */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-orange-400/30 to-amber-400/20 rounded-full blur-sm animate-float"
            style={{
              left: `${25 + i * 25}%`,
              top: `${20 + i * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Professional mask fade - Top and Bottom with proper depth */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
        }}
      >
        {/* This creates the mask effect on the graphic itself */}
      </div>

      {/* Additional gradient overlays for seamless blending */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top fade overlay - smooth blend with hero bg */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#fff5f0] via-[#fff5f0]/60 to-transparent z-20" />

        {/* Bottom fade overlay - smooth blend with hero bg */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fff5f0] via-[#fff5f0]/60 to-transparent z-20" />
      </div>
    </div>
  )
})

HeroCarousel.displayName = 'HeroCarousel'

export default HeroCarousel

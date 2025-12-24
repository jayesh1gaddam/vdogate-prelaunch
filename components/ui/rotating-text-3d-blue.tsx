'use client'

import { useState, useEffect } from 'react'

interface RotatingText3DBlueProps {
  texts: string[]
  rotationInterval?: number
}

// Optimized rotating text using CSS transitions - Blue/Cyan theme for buyers page
export default function RotatingText3DBlue({ texts, rotationInterval = 3000 }: RotatingText3DBlueProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % texts.length)
        setIsAnimating(false)
      }, 300) // Half of transition duration
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  return (
    <div className="relative w-full h-24 md:h-32 flex items-center justify-center overflow-hidden">
      {/* Background glow effect - Blue theme */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent blur-xl" />

      <div
        className={`relative transition-all duration-500 ease-out ${
          isAnimating
            ? 'opacity-0 translate-y-4 scale-95'
            : 'opacity-100 translate-y-0 scale-100'
        }`}
        style={{ willChange: 'transform, opacity' }}
      >
        <div className="relative">
          {/* Main text with blue/cyan gradient */}
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 bg-clip-text text-transparent bg-[length:200%_100%] whitespace-nowrap px-4">
            {texts[currentIndex]}
          </h3>

          {/* Subtle shadow layer for depth - Blue theme */}
          <h3
            className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-blue-300/20 blur-sm whitespace-nowrap px-4"
            aria-hidden="true"
          >
            {texts[currentIndex]}
          </h3>
        </div>

        {/* Static underline - Cyan accent */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-2 rounded-full" />
      </div>
    </div>
  )
}

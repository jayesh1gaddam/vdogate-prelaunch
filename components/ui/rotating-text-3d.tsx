'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface RotatingText3DProps {
  texts: string[]
  rotationInterval?: number
}

export default function RotatingText3D({ texts, rotationInterval = 3000 }: RotatingText3DProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length)
    }, rotationInterval)

    return () => clearInterval(interval)
  }, [texts.length, rotationInterval])

  return (
    <div className="relative w-full h-24 md:h-32 flex items-center justify-center overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-100/30 to-transparent blur-xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{
            rotateX: 90,
            opacity: 0,
            scale: 0.8,
            y: 50
          }}
          animate={{
            rotateX: 0,
            opacity: 1,
            scale: 1,
            y: 0
          }}
          exit={{
            rotateX: -90,
            opacity: 0,
            scale: 0.8,
            y: -50
          }}
          transition={{
            duration: 0.7,
            ease: [0.34, 1.56, 0.64, 1], // Custom easing for smooth professional feel
            opacity: { duration: 0.4 }
          }}
          className="relative"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <div className="relative">
            {/* Main text with gradient */}
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#F7682B] via-[#F79F2B] to-[#F7682B] bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient whitespace-nowrap px-4">
              {texts[currentIndex]}
            </h3>

            {/* Subtle shadow layer for depth */}
            <h3
              className="absolute inset-0 text-4xl md:text-5xl lg:text-6xl font-bold text-orange-300/20 blur-sm whitespace-nowrap px-4"
              aria-hidden="true"
            >
              {texts[currentIndex]}
            </h3>
          </div>

          {/* Animated underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-transparent via-[#F79F2B] to-transparent mt-2 rounded-full"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

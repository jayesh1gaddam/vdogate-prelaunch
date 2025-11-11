'use client'

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface FloatingParticlesProps {
  count?: number
  className?: string
}

export default function FloatingParticles({ count = 20, className = '' }: FloatingParticlesProps) {
  // Deterministic PRNG: mulberry32
  const rng = (seed: number) => {
    return () => {
      seed |= 0
      seed = (seed + 0x6D2B79F5) | 0
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
  }

  const particleProps = useMemo(() => {
    const seedBase = 123456 + count * 101
    return Array.from({ length: count }).map((_, i) => {
      const r = rng(seedBase + i)
      const size = r() * 20 + 10
      const left = r() * 100
      const delay = r() * 5
      const duration = r() * 10 + 15
      const opacity = r() * 0.3 + 0.1
      const x1 = r() * 100 - 50
      const x2 = r() * 150 - 75
      return { size, left, delay, duration, opacity, x1, x2 }
    })
  }, [count])

  const sparkleProps = useMemo(() => {
    const len = Math.floor(count / 2)
    const seedBase = 98765 + count * 13
    return Array.from({ length: len }).map((_, i) => {
      const r = rng(seedBase + i)
      const left = r() * 100
      const top = r() * 100
      const delay = r() * 3
      const duration = r() * 2 + 2
      return { left, top, delay, duration }
    })
  }, [count])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particleProps.map(({ size, left, delay, duration, opacity, x1, x2 }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${left}%`,
            bottom: '-10%',
            width: size,
            height: size,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: [0, -800, -1000],
            opacity: [0, opacity, 0],
            x: [0, x1, x2],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Rupee Symbol Particle */}
          <div className="w-full h-full flex items-center justify-center text-orange-400/30 font-bold text-xs">
            ₹
          </div>
        </motion.div>
      ))}

      {/* Sparkle Particles */}
      {sparkleProps.map(({ left, top, delay, duration }, index) => (
        <motion.div
          key={`sparkle-${index}`}
          className="absolute w-1 h-1 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full"
          style={{
            left: `${left}%`,
            top: `${top}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

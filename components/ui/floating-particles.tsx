'use client'

import { motion } from 'framer-motion'

interface FloatingParticlesProps {
  count?: number
  className?: string
}

export default function FloatingParticles({ count = 20, className = '' }: FloatingParticlesProps) {
  const particles = Array.from({ length: count })

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((_, index) => {
        // Random properties for each particle
        const size = Math.random() * 20 + 10
        const left = Math.random() * 100
        const delay = Math.random() * 5
        const duration = Math.random() * 10 + 15
        const opacity = Math.random() * 0.3 + 0.1

        return (
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
              x: [0, Math.random() * 100 - 50, Math.random() * 150 - 75],
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
        )
      })}

      {/* Sparkle Particles */}
      {Array.from({ length: Math.floor(count / 2) }).map((_, index) => {
        const left = Math.random() * 100
        const top = Math.random() * 100
        const delay = Math.random() * 3
        const duration = Math.random() * 2 + 2

        return (
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
        )
      })}
    </div>
  )
}

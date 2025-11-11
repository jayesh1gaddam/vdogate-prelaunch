'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'

interface SplashScreenProps {
  onComplete?: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true)
  const onCompleteRef = useRef<SplashScreenProps['onComplete']>(undefined)
  useEffect(() => { onCompleteRef.current = onComplete }, [onComplete])

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

  const particles = useMemo(() => {
    const COUNT = 15
    const seedBase = 424242
    return Array.from({ length: COUNT }).map((_, i) => {
      const r = rng(seedBase + i)
      const leftVW = r() * 100 // 0-100 vw
      const topVH = r() * 100 // 0-100 vh
      const y1 = r() * 100
      const y2 = r() * 100 - 10
      const duration = r() * 3 + 2
      const delay = r() * 2
      return { leftVW, topVH, y1, y2, duration, delay }
    })
  }, [])

  useEffect(() => {
    // Check if splash was already shown (using localStorage with version)
    const SPLASH_VERSION = 'v1.0.0' // Update version to re-show splash after updates
    try {
      const splashData = localStorage.getItem('vdogate-splash')
      const parsed = splashData ? JSON.parse(splashData) : null

      // Show splash if:
      // - Never shown before
      // - Version mismatch (after app update)
      // - Shown more than 24 hours ago
      const shouldShowSplash = !parsed ||
        parsed.version !== SPLASH_VERSION ||
        (Date.now() - parsed.timestamp > 24 * 60 * 60 * 1000)

      if (!shouldShowSplash) {
        setIsVisible(false)
        onCompleteRef.current?.()
        return
      }

      // Save splash state IMMEDIATELY before starting timer
      // This ensures state is saved even if component unmounts
      localStorage.setItem('vdogate-splash', JSON.stringify({
        version: SPLASH_VERSION,
        timestamp: Date.now()
      }))

      // Show splash for 2.5 seconds then fade out
      const timer = setTimeout(() => {
        setIsVisible(false)
        onCompleteRef.current?.()
      }, 2500)

      return () => clearTimeout(timer)
    } catch (error) {
      // If localStorage fails, just skip splash
      console.warn('localStorage unavailable:', error)
      setIsVisible(false)
      onCompleteRef.current?.()
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-b from-white via-white to-orange-500 overflow-hidden"
        >
          {/* Premium Animated Background */}
          <div className="absolute inset-0">
            {/* Large Animated Orbs */}
            <motion.div
              className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 40, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                x: [0, -40, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute bottom-10 left-1/2 w-64 h-64 bg-orange-300/25 rounded-full blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -30, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
            />

            {/* Floating Particles */}
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-orange-400/50 rounded-full"
                initial={{
                  x: `${p.leftVW}vw`,
                  y: `${p.topVH}vh`,
                }}
                animate={{
                  y: [`${p.y1}vh`, `${p.y2}vh`],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: p.delay,
                }}
              />
            ))}
          </div>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-400/10 to-transparent"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          {/* Logo and Brand */}
          <div className="relative z-10 flex flex-col items-center px-6">
            {/* Premium Logo Container with Glow */}
            <motion.div
              initial={{ scale: 0.3, opacity: 0, rotate: -10 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                duration: 0.8,
                ease: [0.34, 1.56, 0.64, 1], // Bounce easing
              }}
              className="relative mb-8"
            >
              {/* Glow Effect Behind Logo */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-orange-500/40 rounded-3xl blur-3xl -z-10 scale-125"
              />

              {/* Logo Container - Full Image with Rounded Corners */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative w-40 h-40 rounded-3xl overflow-hidden shadow-2xl shadow-orange-500/20"
              >
                {/* VDOgate Logo - Full Size */}
                <Image
                  src="/icon-192x192.png"
                  alt="VDOgate Logo"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Brand Name with Gradient */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center mb-3"
            >
              <motion.h1
                className="text-5xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-1 tracking-tight"
              >
                VDOgate
              </motion.h1>
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-700 text-base font-medium tracking-wide mb-12"
            >
              India&apos;s Platform for Freelancers
            </motion.p>

            {/* Premium Loading Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="relative"
            >
              {/* Animated Progress Bar */}
              <div className="w-48 h-1.5 bg-orange-200/40 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{
                    duration: 2,
                    ease: [0.25, 0.1, 0.25, 1]
                  }}
                />
              </div>

              {/* Pulsing Dots */}
              <div className="flex gap-2 justify-center mt-6">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
          >
            <div className="px-6 py-2 bg-white/80 backdrop-blur-md rounded-full border border-orange-300/30 shadow-lg">
              <p className="text-orange-600 text-xs font-semibold">Powered by Innovation</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

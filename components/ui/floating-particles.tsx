'use client'

import { useMemo, useEffect, useState } from 'react'

interface FloatingParticlesProps {
  count?: number
  className?: string
}

// Optimized floating particles using CSS animations instead of Framer Motion
export default function FloatingParticles({ count = 6, className = '' }: FloatingParticlesProps) {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handler)
    return () => mediaQuery.removeEventListener('change', handler)
  }, [])

  // Deterministic PRNG for consistent particle positions
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
    const seedBase = 123456
    return Array.from({ length: count }).map((_, i) => {
      const r = rng(seedBase + i)
      return {
        left: r() * 100,
        delay: r() * 8,
        duration: r() * 10 + 15,
        opacity: r() * 0.2 + 0.1,
      }
    })
  }, [count])

  // Don't render animations if user prefers reduced motion
  if (prefersReducedMotion) {
    return null
  }

  return (
    <>
      <style jsx>{`
        @keyframes float-up {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: var(--particle-opacity);
          }
          90% {
            opacity: var(--particle-opacity);
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        .particle {
          animation: float-up var(--duration) linear infinite;
          animation-delay: var(--delay);
          will-change: transform, opacity;
        }
      `}</style>
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {particles.map((p, i) => (
          <div
            key={i}
            className="particle absolute bottom-0 text-orange-400/30 font-bold text-sm"
            style={{
              left: `${p.left}%`,
              '--delay': `${p.delay}s`,
              '--duration': `${p.duration}s`,
              '--particle-opacity': p.opacity,
            } as React.CSSProperties}
          >
            ₹
          </div>
        ))}
      </div>
    </>
  )
}

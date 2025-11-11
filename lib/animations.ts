/**
 * Shared Animation Configurations
 * Centralized animation settings for consistent performance and UX
 */

import { Variants } from 'framer-motion'

// ============================================
// EASING FUNCTIONS - Industry Standard
// ============================================
export const easing = {
  // Smooth, natural easing (recommended for most animations)
  default: [0.25, 0.1, 0.25, 1],

  // Quick, snappy animations
  snappy: [0.4, 0, 0.2, 1],

  // Bouncy, playful animations
  bounce: [0.34, 1.56, 0.64, 1],

  // Gentle, slow animations
  gentle: [0.25, 0.46, 0.45, 0.94],
}

// ============================================
// DURATION PRESETS (in seconds) - Optimized for 60fps
// ============================================
export const duration = {
  fast: 0.15,      // Reduced from 0.2
  normal: 0.25,    // Reduced from 0.3
  slow: 0.4,       // Reduced from 0.5
  verySlow: 0.5,   // Reduced from 0.7
}

// ============================================
// FADE ANIMATIONS - GPU Accelerated
// ============================================
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 10 },  // Reduced from 20px
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -10 },  // Reduced from -20px
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

// ============================================
// SCALE ANIMATIONS
// ============================================
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.default as any }
  }
}

export const scaleOnHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

// ============================================
// STAGGER ANIMATIONS (for lists/grids) - Optimized
// ============================================
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,  // Reduced from 0.1 for faster stagger
      delayChildren: 0,       // Removed delay for immediate start
    }
  }
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 10 },  // Reduced from 20px
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

// ============================================
// VIEWPORT ANIMATION (scroll-triggered) - Optimized
// ============================================
export const viewportOptions = {
  once: true,  // Only animate once for performance
  margin: "0px 0px -50px 0px",  // Trigger earlier (was -100px)
  amount: 0.2,  // Trigger when 20% visible (was 0.3) - faster trigger
}

// ============================================
// HOVER/TAP ANIMATIONS
// ============================================
export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: duration.fast, ease: easing.snappy as any }
  }
}

export const tapScale = {
  scale: 0.98,
  transition: { duration: 0.1, ease: easing.snappy as any }
}

// ============================================
// OPTIMIZED SCROLL ANIMATIONS
// ============================================
export const parallaxConfig = {
  // Reduced range for better performance (was 100, now 50)
  subtle: { from: 25, to: -25 },
  medium: { from: 50, to: -50 },
  strong: { from: 75, to: -75 },
}

// ============================================
// MOBILE-OPTIMIZED ANIMATIONS
// ============================================
export const mobileOptimized: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,  // Faster on mobile
      ease: easing.snappy as any
    }
  }
}

// ============================================
// LOADING STATES
// ============================================
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [0.5, 1, 0.5],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: easing.gentle as any,
  }
}

export const shimmerAnimation = {
  x: ['-100%', '200%'],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "linear",
  }
}

// ============================================
// SPRING CONFIGURATIONS
// ============================================
export const spring = {
  // Gentle spring (good for modals, drawers)
  gentle: {
    type: "spring" as const,
    damping: 30,
    stiffness: 250,
  },

  // Snappy spring (good for buttons, small elements)
  snappy: {
    type: "spring" as const,
    damping: 25,
    stiffness: 300,
  },

  // Bouncy spring (good for playful interactions)
  bouncy: {
    type: "spring" as const,
    damping: 15,
    stiffness: 200,
  },
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

/**
 * IMPORTANT: willChange should ONLY be applied to actively animating elements!
 *
 * Overuse of willChange can cause:
 * - Excessive layer creation
 * - Increased memory usage
 * - Decreased performance
 *
 * Best practices:
 * 1. Apply willChange conditionally during animations only
 * 2. Remove willChange after animation completes
 * 3. Use sparingly for critical animations
 *
 * Example:
 * ```tsx
 * <motion.div
 *   style={{ willChange: isAnimating ? 'transform' : 'auto' }}
 *   onAnimationStart={() => setIsAnimating(true)}
 *   onAnimationComplete={() => setIsAnimating(false)}
 * />
 * ```
 */
export const performanceProps = {
  // WARNING: Only use willChange on actively animating elements
  // Apply conditionally to avoid memory overhead
  style: { willChange: 'transform' },

  // Reduce motion for accessibility
  reducedMotion: {
    duration: 0.01,
    ease: "linear" as const,
  }
}

/**
 * Helper to detect if user prefers reduced motion
 * Use this to conditionally disable animations
 *
 * Usage:
 * ```tsx
 * const shouldReduceMotion = prefersReducedMotion()
 * const animationDuration = shouldReduceMotion ? 0 : 0.5
 * ```
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get animation configuration based on user motion preferences
 * Automatically reduces animation duration if user prefers reduced motion
 *
 * Usage:
 * ```tsx
 * const config = getMotionConfig({ duration: 0.5 })
 * <motion.div transition={config} />
 * ```
 */
export const getMotionConfig = (config: { duration?: number; ease?: any } = {}) => {
  const shouldReduce = prefersReducedMotion()
  return shouldReduce ? performanceProps.reducedMotion : config
}

// ============================================
// CARD ANIMATIONS (for grid items)
// ============================================
export const cardAnimation: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.1,
      duration: duration.normal,
      ease: easing.default as any
    }
  })
}

// ============================================
// NAVIGATION ANIMATIONS
// ============================================
export const navSlideIn: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: { duration: duration.normal, ease: easing.default as any }
  }
}

export const mobileMenuSlide: Variants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: spring.gentle
  },
  exit: {
    x: '100%',
    transition: spring.gentle
  }
}

// ============================================
// USAGE EXAMPLES
// ============================================
/*
import { fadeInUp, viewportOptions, scaleOnHover } from '@/lib/animations'

// Basic scroll animation
<motion.div
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
>
  Content
</motion.div>

// Hover animation
<motion.div
  variants={scaleOnHover}
  initial="rest"
  whileHover="hover"
>
  Hover me
</motion.div>

// Stagger children
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={viewportOptions}
>
  {items.map((item, i) => (
    <motion.div key={i} variants={staggerItem}>
      {item}
    </motion.div>
  ))}
</motion.div>
*/

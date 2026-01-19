'use client'

import { cn } from '@/lib/utils'

interface DecorativeAccentProps {
  type: 'underline' | 'circle' | 'arrow' | 'star' | 'confetti' | 'sparkle'
  color?: 'yellow' | 'purple' | 'orange' | 'pink' | 'mint'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const colorMap = {
  yellow: '#FCD34D',
  purple: '#8B5CF6',
  orange: '#F97316',
  pink: '#EC4899',
  mint: '#34D399',
}

const sizeMap = {
  sm: 'w-6 h-6',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
}

// Hand-drawn style underline
function Underline({ color = 'purple', className }: Omit<DecorativeAccentProps, 'type' | 'size'>) {
  return (
    <svg
      viewBox="0 0 120 12"
      className={cn('w-full h-3', className)}
      fill="none"
      stroke={colorMap[color]}
      strokeWidth="4"
      strokeLinecap="round"
    >
      <path d="M2,8 Q30,2 60,8 Q90,14 118,6" />
    </svg>
  )
}

// Hand-drawn circle
function Circle({ color = 'purple', className, size = 'md' }: Omit<DecorativeAccentProps, 'type'>) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={cn(sizeMap[size], className)}
      fill="none"
      stroke={colorMap[color]}
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M25,5 Q45,5 45,25 Q45,45 25,45 Q5,45 5,25 Q5,5 25,5" />
    </svg>
  )
}

// Playful arrow
function Arrow({ color = 'purple', className, size = 'md' }: Omit<DecorativeAccentProps, 'type'>) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={cn(sizeMap[size], className)}
      fill="none"
      stroke={colorMap[color]}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10,40 Q25,10 40,25" />
      <path d="M30,20 L40,25 L35,35" />
    </svg>
  )
}

// Star/sparkle decoration
function Star({ color = 'yellow', className, size = 'md' }: Omit<DecorativeAccentProps, 'type'>) {
  return (
    <svg
      viewBox="0 0 50 50"
      className={cn(sizeMap[size], 'animate-pulse', className)}
      fill={colorMap[color]}
    >
      <path d="M25,0 L28,20 L50,25 L28,30 L25,50 L22,30 L0,25 L22,20 Z" />
    </svg>
  )
}

// Sparkle effect (4-point)
function Sparkle({ color = 'yellow', className, size = 'sm' }: Omit<DecorativeAccentProps, 'type'>) {
  return (
    <svg
      viewBox="0 0 30 30"
      className={cn(sizeMap[size], className)}
      fill={colorMap[color]}
    >
      <path d="M15,0 L16,12 L30,15 L16,18 L15,30 L14,18 L0,15 L14,12 Z" />
    </svg>
  )
}

// Confetti pieces
function Confetti({ color = 'purple', className }: Omit<DecorativeAccentProps, 'type' | 'size'>) {
  const colors = ['#FCD34D', '#8B5CF6', '#F97316', '#EC4899', '#34D399']

  return (
    <div className={cn('relative w-full h-full', className)}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-sm"
          style={{
            backgroundColor: colors[i % colors.length],
            left: `${10 + Math.random() * 80}%`,
            top: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg)`,
            opacity: 0.8,
          }}
        />
      ))}
    </div>
  )
}

export default function DecorativeAccent({ type, color = 'purple', size = 'md', className }: DecorativeAccentProps) {
  switch (type) {
    case 'underline':
      return <Underline color={color} className={className} />
    case 'circle':
      return <Circle color={color} size={size} className={className} />
    case 'arrow':
      return <Arrow color={color} size={size} className={className} />
    case 'star':
      return <Star color={color} size={size} className={className} />
    case 'sparkle':
      return <Sparkle color={color} size={size} className={className} />
    case 'confetti':
      return <Confetti color={color} className={className} />
    default:
      return null
  }
}

// Named exports
export { Underline, Circle, Arrow, Star, Sparkle, Confetti }

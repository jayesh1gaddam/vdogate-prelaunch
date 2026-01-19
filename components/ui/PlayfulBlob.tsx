'use client'

import { cn } from '@/lib/utils'

interface PlayfulBlobProps {
  variant: 'sun' | 'cloud' | 'wave' | 'dots' | 'squiggle'
  color?: 'yellow' | 'purple' | 'orange' | 'pink' | 'mint'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

const colorMap = {
  yellow: '#FCD34D',
  purple: '#8B5CF6',
  orange: '#F97316',
  pink: '#EC4899',
  mint: '#34D399',
}

const sizeMap = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}

// Sun blob - organic yellow shape
function SunBlob({ color = 'yellow', className, animate }: Omit<PlayfulBlobProps, 'variant' | 'size'>) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn(animate && 'animate-blob-morph', className)}
      fill={colorMap[color]}
    >
      <path d="M47.5,-57.2C59.5,-45.8,66,-29.4,68.3,-12.8C70.6,3.8,68.7,20.6,60.8,34.4C52.9,48.2,39,59,23.2,65.1C7.4,71.2,-10.3,72.6,-26.4,67.4C-42.5,62.2,-57,50.4,-65.1,35.2C-73.2,20,-74.9,1.4,-70.5,-15.1C-66.1,-31.6,-55.6,-46,-42.3,-57.1C-29,-68.2,-12.9,-76,2.4,-78.8C17.7,-81.6,35.5,-68.6,47.5,-57.2Z" transform="translate(100 100)" />
    </svg>
  )
}

// Cloud blob - puffy purple shape
function CloudBlob({ color = 'purple', className, animate }: Omit<PlayfulBlobProps, 'variant' | 'size'>) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={cn(animate && 'animate-float-rotate', className)}
      fill={colorMap[color]}
    >
      <path d="M39.5,-51.1C52.3,-42.3,64.8,-31.7,70.4,-17.9C76,-4.1,74.7,12.9,67.6,27.1C60.5,41.3,47.6,52.7,33.1,59.6C18.6,66.5,2.5,68.9,-14.8,67.4C-32.1,65.9,-50.6,60.5,-61.5,48.5C-72.4,36.5,-75.7,18.3,-73.8,1.1C-71.9,-16.1,-64.8,-32.2,-53.4,-41.2C-42,-50.2,-26.3,-52.1,-11.8,-54.3C2.7,-56.5,16.9,-59,29.7,-56C42.5,-53,52.9,-44.5,39.5,-51.1Z" transform="translate(100 100)" />
    </svg>
  )
}

// Wave divider
function WaveDivider({ color = 'purple', className }: Omit<PlayfulBlobProps, 'variant' | 'size' | 'animate'>) {
  return (
    <svg
      viewBox="0 0 1440 120"
      className={cn('w-full', className)}
      fill={colorMap[color]}
      preserveAspectRatio="none"
    >
      <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
    </svg>
  )
}

// Decorative dots pattern
function DotsPattern({ color = 'purple', className }: Omit<PlayfulBlobProps, 'variant' | 'size' | 'animate'>) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn('w-full h-full', className)}
      fill={colorMap[color]}
    >
      {[...Array(5)].map((_, row) =>
        [...Array(5)].map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 20}
            cy={10 + row * 20}
            r="3"
            opacity={0.3 + Math.random() * 0.4}
          />
        ))
      )}
    </svg>
  )
}

// Squiggly line for underlines
function SquiggleLine({ color = 'purple', className }: Omit<PlayfulBlobProps, 'variant' | 'size' | 'animate'>) {
  return (
    <svg
      viewBox="0 0 200 20"
      className={cn('w-full', className)}
      fill="none"
      stroke={colorMap[color]}
      strokeWidth="3"
      strokeLinecap="round"
    >
      <path d="M5,10 Q25,2 45,10 T85,10 T125,10 T165,10 T195,10" />
    </svg>
  )
}

export default function PlayfulBlob({ variant, color = 'purple', size = 'md', className, animate = true }: PlayfulBlobProps) {
  const sizeClass = sizeMap[size]
  const combinedClass = cn(sizeClass, className)

  switch (variant) {
    case 'sun':
      return <SunBlob color={color} className={combinedClass} animate={animate} />
    case 'cloud':
      return <CloudBlob color={color} className={combinedClass} animate={animate} />
    case 'wave':
      return <WaveDivider color={color} className={className} />
    case 'dots':
      return <DotsPattern color={color} className={combinedClass} />
    case 'squiggle':
      return <SquiggleLine color={color} className={className} />
    default:
      return null
  }
}

// Named exports for direct use
export { SunBlob, CloudBlob, WaveDivider, DotsPattern, SquiggleLine }

'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface MobileCardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  gradient?: 'orange' | 'purple' | 'blue' | 'green'
  withShadow?: boolean
  noPadding?: boolean
}

export default function MobileCard({
  children,
  className = '',
  onClick,
  gradient,
  withShadow = true,
  noPadding = false,
}: MobileCardProps) {
  const gradientClasses = {
    orange: 'bg-gradient-to-br from-orange-50 to-pink-50',
    purple: 'bg-gradient-to-br from-purple-50 to-indigo-50',
    blue: 'bg-gradient-to-br from-blue-50 to-cyan-50',
    green: 'bg-gradient-to-br from-green-50 to-emerald-50',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileTap={onClick ? { scale: 0.98 } : undefined}
      onClick={onClick}
      className={`
        w-full rounded-2xl border-2 border-neutral-gray-lighter
        ${gradient ? gradientClasses[gradient] : 'bg-white'}
        ${withShadow ? 'shadow-lg' : ''}
        ${!noPadding ? 'p-6' : ''}
        ${onClick ? 'cursor-pointer tap-target' : ''}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  )
}

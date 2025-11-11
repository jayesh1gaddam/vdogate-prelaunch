interface ImageSkeletonProps {
  width?: string | number
  height?: string | number
  className?: string
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full'
}

// Lightweight skeleton loader using CSS animations only (no Framer Motion)
export default function ImageSkeleton({
  width = '100%',
  height = '100%',
  className = '',
  rounded = 'md'
}: ImageSkeletonProps) {
  const roundedClass = {
    none: '',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
    full: 'rounded-full'
  }[rounded]

  return (
    <div
      className={`relative overflow-hidden bg-gray-200 animate-pulse ${roundedClass} ${className}`}
      style={{ width, height }}
    />
  )
}

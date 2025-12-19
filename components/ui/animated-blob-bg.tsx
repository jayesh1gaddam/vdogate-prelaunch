'use client'

// Simplified static background - preserves visual appearance without heavy animations
export default function AnimatedBlobBg() {
  return (
    <div
      className="absolute inset-0 bg-white"
      style={{
        backgroundImage: `
          radial-gradient(circle at 20% 30%, rgba(247, 159, 43, 0.08) 0%, transparent 50%),
          radial-gradient(circle at 80% 70%, rgba(247, 104, 43, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 50% 50%, rgba(247, 159, 43, 0.04) 0%, transparent 70%)
        `,
      }}
    />
  )
}

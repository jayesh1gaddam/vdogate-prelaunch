'use client'

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/usePWA'
import SplashScreen from '@/components/mobile/SplashScreen'

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  // Server-safe deterministic initial state; compute real state on client
  const [showSplash, setShowSplash] = useState<boolean>(false)
  const [splashComplete, setSplashComplete] = useState<boolean>(true)
  const [hydrated, setHydrated] = useState<boolean>(false)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setHydrated(true)
    try {
      const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone ||
        document.referrer.includes('android-app://')
      const shouldShow = isMobile || isPWA
      setShowSplash(shouldShow)
      setSplashComplete(!shouldShow)
    } catch {
      setShowSplash(false)
      setSplashComplete(true)
    }
  }, [])

  const handleSplashComplete = () => {
    setSplashComplete(true)
  }

  // Use CSS to prevent hydration flicker instead of conditional rendering
  return (
    <>
      {showSplash && !splashComplete && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div style={{
        visibility: hydrated && !splashComplete ? 'hidden' : 'visible',
        opacity: hydrated && !splashComplete ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}>
        {children}
      </div>
    </>
  )
}

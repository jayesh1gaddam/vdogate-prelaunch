'use client'

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/usePWA'
import SplashScreen from '@/components/mobile/SplashScreen'

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [showSplash, setShowSplash] = useState(false)
  const [splashComplete, setSplashComplete] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    // Only show splash on mobile devices and when running as PWA
    const isPWA = window.matchMedia('(display-mode: standalone)').matches ||
                  (window.navigator as any).standalone ||
                  document.referrer.includes('android-app://')

    if (isMobile || isPWA) {
      setShowSplash(true)
    } else {
      setSplashComplete(true)
    }
  }, [isMobile, mounted])

  const handleSplashComplete = () => {
    setSplashComplete(true)
  }

  if (!mounted) {
    return <div className="invisible">{children}</div>
  }

  return (
    <>
      {showSplash && !splashComplete && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      <div className={!splashComplete ? 'invisible' : ''}>
        {children}
      </div>
    </>
  )
}

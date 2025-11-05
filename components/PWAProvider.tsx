'use client'

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/usePWA'
import SplashScreen from '@/components/mobile/SplashScreen'

export default function PWAProvider({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile()
  const [showSplash, setShowSplash] = useState(false)
  const [splashComplete, setSplashComplete] = useState(false)

  useEffect(() => {
    // Only show splash on mobile devices
    if (isMobile) {
      setShowSplash(true)
    } else {
      setSplashComplete(true)
    }
  }, [isMobile])

  const handleSplashComplete = () => {
    setSplashComplete(true)
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

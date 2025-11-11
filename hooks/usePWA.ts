import { useState, useEffect, useCallback } from 'react'
import {
  BeforeInstallPromptEvent,
  setDeferredPrompt,
  getDeferredPrompt,
  showInstallPrompt,
  isOnline,
  getDeviceType,
  isMobile as checkIsMobile,
  isIOS as checkIsIOS,
  isAndroid as checkIsAndroid,
  isStandalone as checkIsStandalone,
  getOrientation,
  registerServiceWorker,
} from '@/lib/pwa-utils'

/**
 * Hook for network status detection
 */
export function useNetworkStatus() {
  const [online, setOnline] = useState<boolean>(() => isOnline())

  useEffect(() => {
    const handleOnline = () => setOnline(true)
    const handleOffline = () => setOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  return online
}

/**
 * Hook for PWA install prompt
 */
export function useInstallPrompt() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState<boolean>(() => checkIsStandalone())

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      const promptEvent = e as BeforeInstallPromptEvent
      setDeferredPrompt(promptEvent)
      setInstallPrompt(promptEvent)
    }

    const handleAppInstalled = () => {
      setIsInstalled(true)
      setInstallPrompt(null)
      setDeferredPrompt(null)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    window.addEventListener('appinstalled', handleAppInstalled)

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
      window.removeEventListener('appinstalled', handleAppInstalled)
    }
  }, [])

  const promptInstall = useCallback(async () => {
    const result = await showInstallPrompt()
    if (result === 'accepted') {
      setIsInstalled(true)
      setInstallPrompt(null)
    }
    return result
  }, [])

  const canInstall = installPrompt !== null && !isInstalled

  return {
    installPrompt,
    isInstalled,
    canInstall,
    promptInstall,
  }
}

/**
 * Hook for device type detection
 */
export function useDeviceType() {
  const [deviceType, setDeviceType] = useState<'mobile' | 'tablet' | 'desktop'>(() => getDeviceType())

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(getDeviceType())
    }

    window.addEventListener('resize', updateDeviceType)

    return () => {
      window.removeEventListener('resize', updateDeviceType)
    }
  }, [])

  return {
    deviceType,
    isMobile: deviceType === 'mobile',
    isTablet: deviceType === 'tablet',
    isDesktop: deviceType === 'desktop',
  }
}

/**
 * Hook for mobile detection
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(() => checkIsMobile())
  useEffect(() => {
    // No-op effect to keep hook shape consistent; computation done in initializer
  }, [])
  return isMobile
}

/**
 * Hook for platform detection
 */
export function usePlatform() {
  const [platform] = useState(() => ({
    isIOS: checkIsIOS(),
    isAndroid: checkIsAndroid(),
    isStandalone: checkIsStandalone(),
  }))

  return platform
}

/**
 * Hook for orientation detection
 */
export function useOrientation() {
  const [orientation, setOrientation] = useState<'portrait' | 'landscape'>('portrait')

  useEffect(() => {
    const updateOrientation = () => {
      setOrientation(getOrientation())
    }

    updateOrientation()
    window.addEventListener('resize', updateOrientation)
    window.addEventListener('orientationchange', updateOrientation)

    return () => {
      window.removeEventListener('resize', updateOrientation)
      window.removeEventListener('orientationchange', updateOrientation)
    }
  }, [])

  return orientation
}

/**
 * Hook for viewport height (accounts for mobile browser bars)
 */
export function useViewportHeight() {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const updateHeight = () => {
      setHeight(window.innerHeight)
      // Set CSS variable for 100vh that accounts for mobile browser bars
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)

    return () => {
      window.removeEventListener('resize', updateHeight)
    }
  }, [])

  return height
}

/**
 * Hook for Service Worker management
 */
export function useServiceWorker() {
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [updateAvailable, setUpdateAvailable] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    const register = async () => {
      const reg = await registerServiceWorker()
      if (reg) {
        setRegistration(reg)
        setIsRegistered(true)

        // Listen for updates
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                setUpdateAvailable(true)
              }
            })
          }
        })
      }
    }

    register()
  }, [])

  const updateServiceWorker = useCallback(() => {
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      setUpdateAvailable(false)
      window.location.reload()
    }
  }, [registration])

  return {
    registration,
    isRegistered,
    updateAvailable,
    updateServiceWorker,
  }
}

/**
 * Hook for touch gestures detection
 */
export function useTouchGesture(
  element: HTMLElement | null,
  onSwipe?: (direction: 'left' | 'right' | 'up' | 'down') => void
) {
  useEffect(() => {
    if (!element) return

    let touchStartX = 0
    let touchStartY = 0
    let touchEndX = 0
    let touchEndY = 0

    const minSwipeDistance = 50

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.touches[0].clientX
      touchStartY = e.touches[0].clientY
    }

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].clientX
      touchEndY = e.changedTouches[0].clientY

      const deltaX = touchEndX - touchStartX
      const deltaY = touchEndY - touchStartY

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        // Horizontal swipe
        if (Math.abs(deltaX) > minSwipeDistance) {
          onSwipe?.(deltaX > 0 ? 'right' : 'left')
        }
      } else {
        // Vertical swipe
        if (Math.abs(deltaY) > minSwipeDistance) {
          onSwipe?.(deltaY > 0 ? 'down' : 'up')
        }
      }
    }

    element.addEventListener('touchstart', handleTouchStart)
    element.addEventListener('touchend', handleTouchEnd)

    return () => {
      element.removeEventListener('touchstart', handleTouchStart)
      element.removeEventListener('touchend', handleTouchEnd)
    }
  }, [element, onSwipe])
}

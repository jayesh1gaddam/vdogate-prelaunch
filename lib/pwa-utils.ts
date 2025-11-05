/**
 * PWA Utilities for VDOgate
 * Handles PWA installation, updates, network status, and device detection
 */

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[]
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed'
    platform: string
  }>
  prompt(): Promise<void>
}

/**
 * Device Type Detection
 */
export const getDeviceType = (): 'mobile' | 'tablet' | 'desktop' => {
  if (typeof window === 'undefined') return 'desktop'

  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

export const isMobile = (): boolean => {
  if (typeof window === 'undefined') return false
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const isIOS = (): boolean => {
  if (typeof window === 'undefined') return false
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
}

export const isAndroid = (): boolean => {
  if (typeof window === 'undefined') return false
  return /Android/.test(navigator.userAgent)
}

export const isStandalone = (): boolean => {
  if (typeof window === 'undefined') return false
  return (window.matchMedia('(display-mode: standalone)').matches) ||
         (window.navigator as any).standalone === true
}

/**
 * Network Status Detection
 */
export const isOnline = (): boolean => {
  if (typeof window === 'undefined') return true
  return navigator.onLine
}

export const getConnectionType = (): string => {
  if (typeof window === 'undefined') return 'unknown'
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
  return connection?.effectiveType || 'unknown'
}

export const isFastConnection = (): boolean => {
  const type = getConnectionType()
  return type === '4g' || type === '5g' || type === 'unknown'
}

/**
 * Install Prompt Handling
 */
let deferredPrompt: BeforeInstallPromptEvent | null = null

export const setDeferredPrompt = (prompt: BeforeInstallPromptEvent | null) => {
  deferredPrompt = prompt
}

export const getDeferredPrompt = (): BeforeInstallPromptEvent | null => {
  return deferredPrompt
}

export const showInstallPrompt = async (): Promise<'accepted' | 'dismissed' | 'unavailable'> => {
  if (!deferredPrompt) {
    return 'unavailable'
  }

  await deferredPrompt.prompt()
  const { outcome } = await deferredPrompt.userChoice
  deferredPrompt = null
  return outcome
}

export const canInstallPWA = (): boolean => {
  return deferredPrompt !== null
}

/**
 * Storage Utilities
 */
export const setPWAInstallDismissed = () => {
  if (typeof window === 'undefined') return
  localStorage.setItem('pwa-install-dismissed', Date.now().toString())
}

export const isPWAInstallDismissed = (days: number = 7): boolean => {
  if (typeof window === 'undefined') return false
  const dismissed = localStorage.getItem('pwa-install-dismissed')
  if (!dismissed) return false

  const daysSinceDismissed = (Date.now() - parseInt(dismissed)) / (1000 * 60 * 60 * 24)
  return daysSinceDismissed < days
}

export const setPWAInstalled = () => {
  if (typeof window === 'undefined') return
  localStorage.setItem('pwa-installed', 'true')
}

export const isPWAInstalled = (): boolean => {
  if (typeof window === 'undefined') return false
  return localStorage.getItem('pwa-installed') === 'true' || isStandalone()
}

/**
 * Service Worker Utilities
 */
export const registerServiceWorker = async (): Promise<ServiceWorkerRegistration | null> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    console.log('Service Worker registered successfully:', registration.scope)
    return registration
  } catch (error) {
    console.error('Service Worker registration failed:', error)
    return null
  }
}

export const unregisterServiceWorker = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.ready
    const success = await registration.unregister()
    console.log('Service Worker unregistered:', success)
    return success
  } catch (error) {
    console.error('Service Worker unregistration failed:', error)
    return false
  }
}

export const checkForSWUpdate = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.ready
    await registration.update()
    return true
  } catch (error) {
    console.error('Service Worker update check failed:', error)
    return false
  }
}

/**
 * Notification Utilities
 */
export const requestNotificationPermission = async (): Promise<NotificationPermission> => {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return 'denied'
  }

  return await Notification.requestPermission()
}

export const canUseNotifications = (): boolean => {
  if (typeof window === 'undefined') return false
  return 'Notification' in window && Notification.permission === 'granted'
}

/**
 * Haptic Feedback (iOS)
 */
export const vibrate = (pattern: number | number[] = 50): boolean => {
  if (typeof window === 'undefined' || !navigator.vibrate) {
    return false
  }

  try {
    navigator.vibrate(pattern)
    return true
  } catch (error) {
    return false
  }
}

export const lightHaptic = () => vibrate(10)
export const mediumHaptic = () => vibrate(20)
export const heavyHaptic = () => vibrate(50)

/**
 * Cache Management
 */
export const clearAppCache = async (): Promise<boolean> => {
  if (typeof window === 'undefined' || !('caches' in window)) {
    return false
  }

  try {
    const cacheNames = await caches.keys()
    await Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
    console.log('All caches cleared')
    return true
  } catch (error) {
    console.error('Failed to clear caches:', error)
    return false
  }
}

/**
 * Battery Status
 */
export const getBatteryInfo = async (): Promise<any | null> => {
  if (typeof window === 'undefined' || !('getBattery' in navigator)) {
    return null
  }

  try {
    const battery = await (navigator as any).getBattery()
    return {
      level: battery.level,
      charging: battery.charging,
      chargingTime: battery.chargingTime,
      dischargingTime: battery.dischargingTime,
    }
  } catch (error) {
    return null
  }
}

export const isLowBattery = async (threshold: number = 0.2): Promise<boolean> => {
  const batteryInfo = await getBatteryInfo()
  if (!batteryInfo) return false
  return batteryInfo.level < threshold && !batteryInfo.charging
}

/**
 * Orientation Detection
 */
export const getOrientation = (): 'portrait' | 'landscape' => {
  if (typeof window === 'undefined') return 'portrait'
  return window.innerHeight > window.innerWidth ? 'portrait' : 'landscape'
}

/**
 * Safe Area Insets
 */
export const getSafeAreaInsets = () => {
  if (typeof window === 'undefined') return { top: 0, right: 0, bottom: 0, left: 0 }

  const computedStyle = getComputedStyle(document.documentElement)
  return {
    top: parseInt(computedStyle.getPropertyValue('--safe-area-inset-top') || '0'),
    right: parseInt(computedStyle.getPropertyValue('--safe-area-inset-right') || '0'),
    bottom: parseInt(computedStyle.getPropertyValue('--safe-area-inset-bottom') || '0'),
    left: parseInt(computedStyle.getPropertyValue('--safe-area-inset-left') || '0'),
  }
}

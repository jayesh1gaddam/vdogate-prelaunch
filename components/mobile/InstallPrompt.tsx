'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X, Smartphone, Share } from 'lucide-react'
import { useInstallPrompt, usePlatform } from '@/hooks/usePWA'
import { isPWAInstallDismissed, setPWAInstallDismissed } from '@/lib/pwa-utils'
import Image from 'next/image'

export default function InstallPrompt() {
  const { canInstall, promptInstall, isInstalled } = useInstallPrompt()
  const { isIOS, isAndroid } = usePlatform()
  const [showPrompt, setShowPrompt] = useState(false)
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)

  useEffect(() => {
    // Don't show if already installed or dismissed recently
    if (isInstalled || isPWAInstallDismissed()) {
      return
    }

    // Show after 5 seconds for Android (if canInstall)
    if (isAndroid && canInstall) {
      const timer = setTimeout(() => {
        setShowPrompt(true)
      }, 5000)
      return () => clearTimeout(timer)
    }

    // Show iOS instructions after 5 seconds
    if (isIOS) {
      const timer = setTimeout(() => {
        setShowIOSInstructions(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [canInstall, isInstalled, isAndroid, isIOS])

  const handleInstall = async () => {
    const result = await promptInstall()
    if (result === 'accepted') {
      setShowPrompt(false)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    setShowIOSInstructions(false)
    setPWAInstallDismissed()
  }

  // Android Install Prompt
  if (showPrompt && isAndroid && canInstall) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-20 left-4 right-4 z-[100] safe-area-inset-bottom"
        >
          <div className="bg-gradient-to-br from-orange-500 to-pink-500 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              {/* App Icon */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Image
                  src="/vdogate_app_logo.png"
                  alt="VDOgate"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="text-white font-bold text-lg">Install VDOgate</h3>
                    <p className="text-white/90 text-sm">Get the app experience</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDismiss}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 text-white tap-target"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">Fast</span>
                  <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">Offline Access</span>
                  <span className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">Native Feel</span>
                </div>

                {/* Install Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleInstall}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-orange-500 rounded-xl font-bold text-base shadow-lg tap-target"
                >
                  <Download className="w-5 h-5" />
                  Install App
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  // iOS Install Instructions
  if (showIOSInstructions && isIOS) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-20 left-4 right-4 z-[100] safe-area-inset-bottom"
        >
          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              {/* App Icon */}
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Image
                  src="/vdogate_app_logo.png"
                  alt="VDOgate"
                  width={56}
                  height={56}
                  className="object-contain"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">Add to Home Screen</h3>
                    <p className="text-white/90 text-sm">Install VDOgate on iOS</p>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={handleDismiss}
                    className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/20 text-white tap-target"
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Instructions */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">1</span>
                    </div>
                    <p className="text-white/95 text-sm flex-1">
                      Tap the <Share className="w-4 h-4 inline-block mx-1" /> share button below
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                    <p className="text-white/95 text-sm flex-1">
                      Scroll and tap <Smartphone className="w-4 h-4 inline-block mx-1" /> "Add to Home Screen"
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">3</span>
                    </div>
                    <p className="text-white/95 text-sm flex-1">
                      Tap "Add" to install
                    </p>
                  </div>
                </div>

                {/* Got It Button */}
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDismiss}
                  className="w-full px-6 py-3 bg-white text-blue-500 rounded-xl font-bold text-base shadow-lg tap-target"
                >
                  Got It!
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return null
}

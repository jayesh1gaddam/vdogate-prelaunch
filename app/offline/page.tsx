'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { WifiOff, RefreshCw, Home } from 'lucide-react'
import Image from 'next/image'

export default function OfflinePage() {
  const [isOnline, setIsOnline] = useState(false)

  useEffect(() => {
    // Check online status
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = () => {
    window.location.reload()
  }

  const handleGoHome = () => {
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 flex items-center justify-center p-6 safe-top safe-bottom">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md w-full"
      >
        {/* Card Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              {/* Pulsing background */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl"
              />

              {/* Icon */}
              <div className="relative w-20 h-20 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center">
                <WifiOff className="w-10 h-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="relative w-32 h-10">
              <Image
                src="/vdogate_logo.png"
                alt="VDOgate"
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              isOnline
                ? 'bg-green-100 text-green-700 border border-green-200'
                : 'bg-orange-100 text-orange-700 border border-orange-200'
            }`}>
              <div className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-500' : 'bg-orange-500'} animate-pulse`} />
              <span className="text-sm font-semibold">
                {isOnline ? 'Back Online' : 'You\'re Offline'}
              </span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-3"
          >
            {isOnline ? 'Connection Restored!' : 'No Internet Connection'}
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-center text-gray-600 mb-8 leading-relaxed"
          >
            {isOnline
              ? 'Your internet connection has been restored. Click retry to reload the page.'
              : 'Please check your internet connection and try again. VDOgate requires an internet connection to load.'}
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="space-y-3"
          >
            <button
              onClick={handleRetry}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <RefreshCw className="w-5 h-5" />
              Retry Connection
            </button>

            <button
              onClick={handleGoHome}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </button>
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-6 pt-6 border-t border-gray-200"
          >
            <p className="text-xs text-center text-gray-500">
              💡 Tip: Make sure you have a stable internet connection. If the problem persists, try restarting your device.
            </p>
          </motion.div>
        </div>

        {/* Floating orbs - decorative */}
        <div className="absolute -z-10 top-0 left-0 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute -z-10 bottom-0 right-0 w-40 h-40 bg-amber-200/30 rounded-full blur-3xl" />
      </motion.div>
    </div>
  )
}

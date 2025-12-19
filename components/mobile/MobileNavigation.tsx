'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, Grid, User, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface MobileNavigationProps {
  showBottomNav?: boolean
}

export default function MobileNavigation({ showBottomNav = true }: MobileNavigationProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    // Prevent body scroll when drawer is open
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isDrawerOpen])

  const handleNavClick = (id: string) => {
    setIsDrawerOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const menuItems = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'how-it-works', label: 'How It Works', icon: Sparkles },
    { id: 'who-its-for', label: 'Who It\'s For', icon: Grid },
    { id: 'platform-pricing', label: 'Pricing', icon: User },
    { id: 'join-app', label: 'Join Now', icon: Sparkles, highlight: true, isExternal: true },
  ]

  return (
    <>
      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-neutral-gray-lighter shadow-sm safe-area-inset-top"
      >
        <div className="flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/vdogate_app_logo.png"
                alt="VDOgate"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-brand-black">VDOgate</span>
          </div>

          {/* Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsDrawerOpen(true)}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg tap-target"
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>
      </motion.nav>

      {/* Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDrawerOpen(false)}
              className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl overflow-y-auto"
            >
              {/* Drawer Header */}
              <div className="sticky top-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 p-6 safe-area-inset-top">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Image
                        src="/vdogate_app_logo.png"
                        alt="VDOgate"
                        width={48}
                        height={48}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">VDOgate</h2>
                      <p className="text-white/80 text-xs">India's Platform</p>
                    </div>
                  </div>

                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsDrawerOpen(false)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm text-white tap-target"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20">
                  <p className="text-white/90 text-sm font-medium">Pre-Launch Special</p>
                  <p className="text-white/70 text-xs mt-0.5">Join now for free early access!</p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-2">
                {menuItems.map((item, index) => (
                  item.isExternal ? (
                    <motion.a
                      key={item.id}
                      href="https://app.vdogate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 tap-target bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/20">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-semibold text-base">{item.label}</span>
                    </motion.a>
                  ) : (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleNavClick(item.id)}
                      className="w-full flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 tap-target bg-neutral-gray-lighter/50 text-neutral-gray-dark hover:bg-neutral-gray-lighter"
                    >
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-white">
                        <item.icon className="w-5 h-5 text-orange-500" />
                      </div>
                      <span className="font-semibold text-base">{item.label}</span>
                    </motion.button>
                  )
                ))}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-neutral-gray-lighter">
                <p className="text-xs text-neutral-gray text-center">
                  © 2024 VDOgate. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar */}
      {showBottomNav && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-neutral-gray-lighter shadow-lg safe-area-inset-bottom"
        >
          <div className="flex items-center justify-around px-2 py-2">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'categories', icon: Grid, label: 'Categories' },
              { id: 'join', icon: Sparkles, label: 'Join', highlight: true, isExternal: true },
              { id: 'menu', icon: Menu, label: 'Menu' },
            ].map((item) => (
              item.isExternal ? (
                <motion.a
                  key={item.id}
                  href="https://app.vdogate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 tap-target bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg scale-110"
                >
                  <item.icon className="w-6 h-6 mb-1 text-white" />
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.a>
              ) : (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    if (item.id === 'menu') {
                      setIsDrawerOpen(true)
                    } else if (item.id === 'home') {
                      handleNavClick('hero')
                    } else if (item.id === 'categories') {
                      handleNavClick('who-its-for')
                    }
                    setActiveTab(item.id)
                  }}
                  className={`flex flex-col items-center justify-center px-4 py-2 rounded-xl transition-all duration-300 tap-target ${
                    activeTab === item.id
                    ? 'text-orange-500'
                    : 'text-neutral-gray'
                  }`}
                >
                  <item.icon className="w-6 h-6 mb-1" />
                  <span className="text-xs font-medium">{item.label}</span>
                </motion.button>
              )
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

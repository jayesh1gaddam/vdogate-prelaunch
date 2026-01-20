'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'
import { ArrowRight, Sparkles, Menu, X } from 'lucide-react'

export default function LiveEventsNav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)
  const lastScrollY = useRef(0)

  // Handle scroll effect and navbar visibility
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY

          // Update scrolled state
          setIsScrolled(currentScrollY > 20)

          // Show navbar when scrolling up, hide when scrolling down
          if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            setIsVisible(false)
          }

          lastScrollY.current = currentScrollY
          ticking = false
        })

        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Resources', href: '/resources' },
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: isVisible ? 0 : -100,
          opacity: isVisible ? 1 : 0
        }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1],
          opacity: { duration: 0.3 }
        }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <motion.div
          className={`relative transition-all duration-500 rounded-2xl overflow-hidden ${isScrolled
            ? 'navbar-floating-scrolled'
            : 'navbar-floating'
          }`}
        >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
            <motion.div
              className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 via-orange-500/20 to-purple-500/20 rounded-2xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </div>

          {/* Floating ambient orbs with animation */}
          <motion.div
            animate={{
              x: [0, 10, 0],
              y: [0, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
            className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/10 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -10, 0],
              y: [0, 5, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
            className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"
          />

          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-transparent pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
            <div className="flex items-center justify-between h-16 md:h-[72px]">
              {/* Logo with hover effect */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link href="/" className="relative flex items-center w-[120px] md:w-[140px] h-[32px] md:h-[38px]">
                  <Image
                    src={BRAND_LOGO.paths.primary}
                    alt="VDOgate"
                    fill
                    className="object-contain object-left transition-all duration-300 hover:brightness-110"
                    priority
                  />
                </Link>
              </motion.div>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="relative px-4 py-2 text-base font-medium text-gray-700 transition-all duration-300 rounded-full nav-link-pill"
                      onMouseEnter={() => setHoveredLink(link.label)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span className="relative z-10">{link.label}</span>
                      {/* Animated underline */}
                      <motion.span
                        className="absolute bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full"
                        initial={{ width: 0, x: '-50%' }}
                        animate={{
                          width: hoveredLink === link.label ? '60%' : 0,
                          x: '-50%'
                        }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </Link>
                  </motion.div>
                ))}

                {/* Login Button */}
                <motion.a
                  href="https://app.vdogate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 px-5 py-2.5 text-sm font-semibold text-gray-700 hover:text-purple-600 border border-gray-200 hover:border-purple-300 rounded-full transition-all duration-300 hover:shadow-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Login
                </motion.a>

                {/* CTA Button */}
                <motion.a
                  href="https://app.vdogate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group ml-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 navbar-cta flex items-center gap-2"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Sparkles className="w-4 h-4" />
                  Go Live Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 p-2.5 text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-xl transition-all duration-300"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%', opacity: 0.5 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.5 }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden shadow-2xl overflow-y-auto"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-100 to-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none" />

              <div className="flex flex-col h-full relative">
                {/* Header with close button */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <div className="relative w-[120px] h-[35px]">
                    <Image
                      src={BRAND_LOGO.paths.primary}
                      alt="VDOgate"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Menu Content */}
                <div className="flex-1 px-6 py-8 space-y-3">
                  {/* Navigation Links */}
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between w-full px-4 py-4 text-lg font-semibold text-gray-800 hover:text-purple-600 hover:bg-gradient-to-r hover:from-purple-50 hover:to-orange-50 rounded-2xl transition-all duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 group-hover:translate-x-1 transition-all" />
                      </Link>
                    </motion.div>
                  ))}

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3 pt-4"
                  >
                    <a
                      href="https://app.vdogate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 text-gray-700 font-semibold border-2 border-gray-200 hover:border-purple-300 rounded-2xl transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Login
                    </a>
                    <a
                      href="https://app.vdogate.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-2xl shadow-lg shadow-purple-500/25 transition-all duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Sparkles className="w-5 h-5" />
                      Go Live Now
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="p-6 border-t border-gray-100 bg-gradient-to-b from-white to-gray-50"
                >
                  <p className="text-sm text-gray-500 text-center leading-relaxed">
                    Host live sessions and earn with VDOgate
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

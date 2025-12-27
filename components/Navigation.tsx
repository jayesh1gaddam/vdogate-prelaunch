'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  // Handle scroll effect and navbar visibility with debounce
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
            // Scrolling up or near top - show navbar
            setIsVisible(true)
          } else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
            // Scrolling down and not near top - hide navbar
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
    { label: 'Home', href: '/', isScroll: false },
    { label: 'About', href: '/about', isScroll: false },
    { label: 'Resources', href: '/resources', isScroll: false },
    { label: 'Careers', href: '/careers', isScroll: false },
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden ${isScrolled
          ? 'bg-white/90 backdrop-blur-brand shadow-elevation-3 border border-neutral-gray-lighter/20'
          : 'bg-white/60 backdrop-blur-sm border border-white/40'
          }`}>
          {/* Ambient Color Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-portal-primary/[0.03] via-transparent to-portal-light/[0.03] pointer-events-none" />

          {/* Floating ambient orbs */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-portal-primary/[0.08] rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-portal-light/[0.06] rounded-full blur-2xl pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="flex items-center justify-between h-16 md:h-18">
              {/* Logo */}
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative z-10 flex items-center gap-3 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="relative w-[140px] md:w-[160px] h-[40px] md:h-[45px]">
                  <Image
                    src={BRAND_LOGO.paths.primary}
                    alt="VDOgate"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.button>

              {/* Desktop Navigation Links */}
              <div className="hidden lg:flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="text-base font-medium text-neutral-black hover:text-portal-primary transition-colors duration-200 relative group"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-portal-gradient group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden relative z-10 p-2 text-neutral-black hover:text-portal-primary transition-colors"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
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
              className="fixed inset-0 bg-brand-black/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-40 lg:hidden shadow-elevation-4 overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header Spacing */}
                <div className="h-20" />

                {/* Menu Content */}
                <div className="flex-1 px-6 py-8 space-y-6">
                  {/* Navigation Links */}
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.label}
                        href={link.href}
                        className="w-full block text-left px-4 py-4 text-lg font-semibold text-neutral-black hover:text-portal-primary hover:bg-portal-primary/5 rounded-brand-md transition-all duration-200"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </motion.a>
                    ))}
                  </div>

                  {/* Brand Tagline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-8"
                  >
                    <p className="text-sm text-neutral-gray text-center leading-relaxed">
                      India's Platform for India's Freelancers
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

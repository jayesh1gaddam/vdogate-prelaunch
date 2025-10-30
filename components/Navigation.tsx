'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { BRAND_LOGO } from '@/lib/brand'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
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

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      const offset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { label: 'Home', id: 'home', href: '/' },
    { label: 'For Creators', id: 'who-its-for', href: '/#founding-creator' },
    { label: 'Careers', id: 'careers', href: '/careers' },
    { label: 'About', id: 'about', href: '/about' },
  ]

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4"
      >
        <div className={`relative transition-all duration-300 rounded-2xl overflow-hidden ${
          isScrolled
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
                    key={link.id}
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

              {/* Desktop CTA */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => scrollToSection('founding-creator')}
                  className="group px-6 py-3 bg-portal-gradient text-white rounded-xl font-semibold text-base hover:shadow-portal transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 shadow-portal-xs"
                >
                  Join Waitlist
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>

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
                        key={link.id}
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

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="pt-6 border-t border-neutral-gray-lighter"
                  >
                    <button
                      onClick={() => scrollToSection('founding-creator')}
                      className="w-full group px-6 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-base hover:shadow-portal transition-all duration-300 flex items-center justify-center gap-2 shadow-portal-xs"
                    >
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>

                  {/* Brand Tagline */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="pt-8"
                  >
                    <p className="text-sm text-neutral-gray text-center leading-relaxed">
                      The Professional Gateway to Creator Success
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

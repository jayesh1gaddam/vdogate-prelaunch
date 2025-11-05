'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Plus, X, UserPlus, Search, HelpCircle } from 'lucide-react'

export default function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)

  const actions = [
    {
      icon: UserPlus,
      label: 'Join as Freelancer',
      color: 'from-orange-500 to-pink-500',
      onClick: () => {
        document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      icon: Search,
      label: 'Browse Categories',
      color: 'from-blue-500 to-cyan-500',
      onClick: () => {
        document.getElementById('who-its-for')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
    {
      icon: HelpCircle,
      label: 'How It Works',
      color: 'from-purple-500 to-indigo-500',
      onClick: () => {
        document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
        setIsOpen(false)
      },
    },
  ]

  return (
    <div className="fixed bottom-24 right-4 z-50 safe-area-inset-bottom">
      {/* Action Buttons */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col gap-3 mb-3"
          >
            {actions.map((action, index) => (
              <motion.div
                key={action.label}
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 20 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                {/* Label */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  className="bg-white px-4 py-2 rounded-xl shadow-lg border border-neutral-gray-lighter whitespace-nowrap"
                >
                  <span className="text-sm font-semibold text-brand-black">{action.label}</span>
                </motion.div>

                {/* Action Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={action.onClick}
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${action.color} shadow-xl flex items-center justify-center text-white tap-target`}
                >
                  <action.icon className="w-6 h-6" />
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 shadow-2xl flex items-center justify-center text-white tap-target"
        animate={{
          rotate: isOpen ? 45 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Plus className="w-7 h-7" />
        )}
      </motion.button>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10"
          />
        )}
      </AnimatePresence>
    </div>
  )
}

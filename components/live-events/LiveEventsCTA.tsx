'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Rocket, Zap } from 'lucide-react'
import { SunBlob, CloudBlob } from '@/components/ui/PlayfulBlob'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

export default function LiveEventsCTA() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      {/* Split background */}
      <div className="absolute inset-0 bg-gradient-to-r from-playful-purple via-playful-purple to-playful-yellow" />

      {/* Decorative blobs */}
      <div className="absolute top-10 left-10 w-40 opacity-30 pointer-events-none">
        <CloudBlob color="yellow" animate className="w-full h-full" />
      </div>
      <div className="absolute bottom-10 right-10 w-48 opacity-40 pointer-events-none">
        <SunBlob color="purple" animate className="w-full h-full" />
      </div>

      {/* Floating icons */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 hidden lg:block"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Rocket className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 hidden lg:block"
      >
        <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
          <Zap className="w-6 h-6 text-white" />
        </div>
      </motion.div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={springTransition}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border-2 border-white/30 rounded-full text-white text-sm font-bold mb-8 backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            START EARNING TODAY
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
        >
          Earn through{' '}
          <span className="relative inline-block">
            live sessions
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" stroke="#FCD34D" strokeWidth="4" strokeLinecap="round">
              <path d="M2,8 Q50,2 100,8 Q150,14 198,6" />
            </svg>
          </span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.2 }}
          className="text-lg md:text-xl text-white/80 mb-10"
        >
          Create your live event in minutes
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.3 }}
        >
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-playful-yellow text-playful-purple-dark rounded-full font-bold text-lg shadow-playful-yellow hover:shadow-2xl hover:scale-[1.05] transition-all duration-300 btn-shine"
          >
            Create a Live Event – ₹299
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...springTransition, delay: 0.4 }}
          className="mt-6 text-white/60 text-sm font-medium"
        >
          No subscriptions. No commitments.
        </motion.p>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-neutral-black relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge */}
          <span className="text-portal-light text-sm font-medium tracking-wide uppercase">
            Limited to 500 Founding Freelancers
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Ready to Showcase Your Skills?
          </h2>

          {/* Subheadline - 1 line */}
          <p className="text-white/50 text-lg mb-8">
            Join 170+ freelancers already registered. No ads, no algorithm, no commission.
          </p>

          {/* Single Primary CTA */}
          <a
            href="https://app.vdogate.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg shadow-lg shadow-portal-primary/25 hover:shadow-xl hover:shadow-portal-primary/30 hover:scale-[1.02] transition-all duration-300"
          >
            Join as Founding Freelancer
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

        </motion.div>
      </div>
    </section>
  )
}

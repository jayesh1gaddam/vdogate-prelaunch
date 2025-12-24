'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function BuyerFinalCTA() {
  return (
    <section className="py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          {/* Badge */}
          <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">
            100% Free for Buyers
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-4">
            Ready to Find Your Perfect Freelancer?
          </h2>

          {/* Subheadline - 1 line */}
          <p className="text-white/50 text-lg mb-8">
            Join 500+ buyers discovering talent through video portfolios.
          </p>

          {/* Single Primary CTA */}
          <a
            href="https://app.vdogate.com/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            Start Discovering Freelancers
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary link (text only, not button) */}
          <p className="mt-6 text-white/40 text-sm">
            Are you a freelancer?{' '}
            <Link href="/freelancers" className="text-cyan-400 hover:underline">
              Join here
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

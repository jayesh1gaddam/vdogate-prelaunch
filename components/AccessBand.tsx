'use client'

import { motion } from 'framer-motion'
import { Briefcase, Search, ArrowRight } from 'lucide-react'

export default function AccessBand() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-50 via-white to-green-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {/* Freelancer Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">I'm a Freelancer</h3>
                <p className="text-neutral-gray">Showcase your skills & earn</p>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('founding-creator')}
              className="w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Join as Freelancer
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>

          {/* Viewer Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100 hover:border-green-300 hover:shadow-xl transition-all cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Search className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-brand-black mb-2">I'm a Viewer / Client</h3>
                <p className="text-neutral-gray">Find freelancers & services near you</p>
              </div>
            </div>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="w-full mt-4 px-6 py-3.5 bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              Explore Freelancers
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

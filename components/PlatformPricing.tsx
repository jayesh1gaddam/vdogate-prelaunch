'use client'

import { motion } from 'framer-motion'
import PricingCard from './ui/pricing-card'
import PricingAddons from './ui/pricing-addons'

export default function PlatformPricing() {
  return (
    <section id="platform-pricing" className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-neutral-50">
      {/* Lightweight Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-br from-emerald-200/20 to-green-300/20 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '20s' }} />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-bl from-cyan-200/15 to-blue-300/15 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '18s' }} />
        <div className="absolute bottom-0 left-0 w-[550px] h-[550px] rounded-full blur-3xl bg-gradient-to-tr from-teal-200/15 to-emerald-300/15 animate-pulse motion-reduce:animate-none" style={{ animationDuration: '25s' }} />
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#10b98108_1px,transparent_1px),linear-gradient(to_bottom,#10b98108_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

      <div className="container-custom relative z-10">
        {/* Pricing Card */}
        <PricingCard />

        {/* Optional Add-Ons */}
        <PricingAddons />
      </div>
    </section>
  )
}

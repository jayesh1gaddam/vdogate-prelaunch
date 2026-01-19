'use client'

import { motion } from 'framer-motion'
import { Calendar, Ticket, Share2, Wallet, Check, Gift } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Calendar,
    title: 'Create a Live Event',
    price: '₹299',
    points: [
      'One-time fee per event',
      'Set date, time and event details',
      'Create tickets and get a shareable event link',
      'No subscriptions or recurring charges'
    ]
  },
  {
    number: '02',
    icon: Ticket,
    title: 'Choose How You Earn',
    subtitle: 'Pick one model per event',
    options: [
      {
        name: 'Paid Tickets',
        icon: Ticket,
        description: 'Set your own ticket price',
        highlight: 'Starting from ₹99 per hour',
        color: 'emerald'
      },
      {
        name: 'Free / Sponsored',
        icon: Gift,
        description: 'Attendees join for free',
        highlight: 'You pay ₹25 per attendee',
        color: 'violet',
        idealFor: ['Product demos', 'Affiliate marketing', 'Brand showcases', 'Sponsored masterclasses']
      }
    ]
  },
  {
    number: '03',
    icon: Share2,
    title: 'Share Your Event',
    description: 'Share your event link on:',
    platforms: ['Instagram', 'WhatsApp', 'YouTube', 'Communities', 'Mailing lists']
  },
  {
    number: '04',
    icon: Wallet,
    title: 'Host & Earn',
    points: [
      { text: '85% of earnings credited to you', highlight: true },
      { text: '15% platform fee', highlight: false },
      { text: 'Statutory deductions (TDS/TCS ~1% each)', highlight: false },
      { text: 'Settlement in approximately 7 days', highlight: true }
    ]
  }
]

export default function HowItWorksLive() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-900 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-medium mb-6">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Four simple steps to
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              start earning
            </span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 md:space-y-12">
          {/* Step 1 - Create Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Step number and icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[100px]">
                <div className="text-5xl md:text-6xl font-bold text-slate-700">01</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white">Create a Live Event</h3>
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold">
                    ₹299
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['One-time fee per event', 'Set date, time and event details', 'Create tickets and get a shareable event link', 'No subscriptions or recurring charges'].map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <Check className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Step 2 - Choose How You Earn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Step number and icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[100px]">
                <div className="text-5xl md:text-6xl font-bold text-slate-700">02</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Ticket className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Choose How You Earn</h3>
                <p className="text-slate-400 mb-6">Pick one model per event. Both options available under the same ₹299 event.</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {/* Option A - Paid Tickets */}
                  <div className="p-5 rounded-xl bg-slate-900/50 border border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                        <Ticket className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Option A: Paid Tickets</h4>
                        <p className="text-sm text-slate-400">Set your own ticket price</p>
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-emerald-500/10 rounded-lg">
                      <span className="text-emerald-400 font-semibold">Starting from ₹99 per hour</span>
                    </div>
                  </div>

                  {/* Option B - Free/Sponsored */}
                  <div className="p-5 rounded-xl bg-slate-900/50 border border-violet-500/20 hover:border-violet-500/40 transition-colors">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                        <Gift className="w-5 h-5 text-violet-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Option B: Free / Sponsored</h4>
                        <p className="text-sm text-slate-400">Attendees join for free</p>
                      </div>
                    </div>
                    <div className="px-3 py-2 bg-violet-500/10 rounded-lg mb-3">
                      <span className="text-violet-400 font-semibold">You pay ₹25 per attendee</span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">Ideal for:</p>
                    <div className="flex flex-wrap gap-2">
                      {['Product demos', 'Affiliate marketing', 'Brand showcases', 'Sponsored masterclasses'].map((item) => (
                        <span key={item} className="px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded-md">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 3 - Share Your Event */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Step number and icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[100px]">
                <div className="text-5xl md:text-6xl font-bold text-slate-700">03</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center">
                  <Share2 className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Share Your Event</h3>
                <p className="text-slate-400 mb-4">Share your event link on:</p>
                <div className="flex flex-wrap gap-3">
                  {['Instagram', 'WhatsApp', 'YouTube', 'Communities', 'Mailing lists'].map((platform) => (
                    <span key={platform} className="px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-slate-300 font-medium">
                      {platform}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 4 - Host & Earn */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative p-6 md:p-8 rounded-2xl bg-slate-800/50 border border-slate-700"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              {/* Step number and icon */}
              <div className="flex items-center gap-4 md:flex-col md:items-center md:min-w-[100px]">
                <div className="text-5xl md:text-6xl font-bold text-slate-700">04</div>
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center">
                  <Wallet className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Host & Earn</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                    <div className="text-3xl font-bold text-emerald-400 mb-1">85%</div>
                    <p className="text-slate-300">Earnings credited to you</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                    <div className="text-3xl font-bold text-slate-400 mb-1">15%</div>
                    <p className="text-slate-400">Platform fee</p>
                  </div>
                </div>
                <div className="mt-4 p-4 rounded-xl bg-slate-900/50 border border-slate-700">
                  <ul className="space-y-2 text-slate-300">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-indigo-400" />
                      Statutory deductions as applicable (TDS and/or TCS – currently 1% each)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400 font-medium">Settlement in approximately 7 days after event completion</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

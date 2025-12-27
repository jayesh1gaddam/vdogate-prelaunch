'use client'

import { motion } from 'framer-motion'
import { Video, Calendar, IndianRupee, RefreshCw, Clock, Sparkles, CheckCircle2, TrendingUp } from 'lucide-react'

export default function LiveEventsPricing() {
    const eventTypes = [
        'Workshops',
        'Training',
        'Coaching',
        'Classes',
        'Consultations',
        'Performances'
    ]

    return (
        <section id="live-events-pricing" className="py-16 md:py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50/30">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/15 animate-pulse" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-amber-300/20 to-orange-200/15 animate-pulse" style={{ animationDuration: '18s' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full mb-6"
                    >
                        <Video className="w-4 h-4 text-orange-600" />
                        <span className="text-sm font-bold text-orange-800 uppercase tracking-wide">Live Events Pricing</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
                        LIVE EVENTS <br /> <span className="text-xl md:text-2xl lg:text-3xl">DETAILED PRICING & ENTITLEMENTS</span>
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        Earn directly through paid live events
                    </p>
                </motion.div>

                {/* Event Types */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {eventTypes.map((type, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + index * 0.05 }}
                            className="px-4 py-2 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-full"
                        >
                            <span className="text-sm font-semibold text-orange-700">{type}</span>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Main Pricing Grid */}
                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Pricing & Earnings */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-orange-200/40 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <IndianRupee className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">Pricing & Earnings</h3>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-brand-black">Freelancer decides duration</p>
                                    <p className="text-sm text-neutral-gray">You control how long your event runs</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-brand-black">Minimum event ticket price: ₹99/hr</p>
                                    <p className="text-sm text-neutral-gray">To be paid by event attendee. Go higher as you grow</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3 p-4 bg-white/80 rounded-xl">
                                <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold text-brand-black">Event activation fee: ₹199 per event</p>
                                    <p className="text-sm text-neutral-gray">To be paid by Host/Freelancer</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-gradient-to-br from-orange-100 to-amber-100 border-2 border-orange-300 rounded-2xl">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <p className="text-sm text-green-700 font-medium">Freelancer keeps</p>
                                    <p className="text-4xl font-bold text-green-800">85%</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-orange-700 font-medium">Platform fee</p>
                                    <p className="text-3xl font-bold text-orange-900">15%</p>
                                    <p className="text-xs text-orange-600 mt-1">of ticket revenue</p>
                                </div>
                            </div>
                            <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                                <div className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full" style={{ width: '85%' }} />
                            </div>
                        </div>
                    </motion.div>

                    {/* Refunds & Payout */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-200/40 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg">
                                <RefreshCw className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Refunds & Payout</h3>
                        </div>

                        <div className="space-y-6">
                            {/* Refunds */}
                            <div className="p-6 bg-gradient-to-r from-orange-50 to-amber-50 border-2 border-orange-200 rounded-2xl">
                                <div className="flex items-start gap-3 mb-3">
                                    <RefreshCw className="w-6 h-6 text-orange-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-orange-900 mb-2">Refund Policy</h4>
                                        <p className="text-sm text-orange-800 leading-relaxed">
                                            If the event fails due to technical issues or cancellation, full refund returned to attendees
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Payout */}
                            <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl">
                                <div className="flex items-start gap-3 mb-3">
                                    <Clock className="w-6 h-6 text-green-600 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-green-900 mb-2">Payout Timeline</h4>
                                        <p className="text-sm text-green-800 leading-relaxed mb-3">
                                            Freelancers receive their settlement within <span className="font-bold">4 days</span> post statutory deductions (TDS etc.)
                                        </p>
                                        <div className="flex items-center gap-2 text-xs text-green-700">
                                            <div className="w-2 h-2 bg-green-500 rounded-full" />
                                            <span>Fast, transparent, reliable</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-blue-200">
                                <div className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                                    <div>
                                        <p className="font-bold text-blue-900">Protected Payments</p>
                                        <p className="text-xs text-blue-700">Secure transactions for you and your attendees</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="relative glass bg-gradient-to-br from-white via-orange-50/30 to-amber-50/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-orange-200/40 shadow-2xl overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-orange-300/20 to-transparent rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tl from-amber-300/20 to-transparent rounded-full blur-3xl" />

                        <div className="relative z-10">
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 rounded-full mb-6"
                            >
                                <Sparkles className="w-5 h-5 text-orange-600" />
                                <span className="text-sm font-bold text-orange-800">Simple. Fair. Transparent.</span>
                            </motion.div>

                            <h3 className="text-2xl md:text-3xl font-bold text-brand-black mb-4">
                                Monetize instantly, minimum ₹99/hour or higher as per your value
                            </h3>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

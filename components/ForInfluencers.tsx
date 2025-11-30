'use client'

import { motion } from 'framer-motion'
import { Video, TrendingUp, Zap, Users, IndianRupee, Sparkles, X, CheckCircle2 } from 'lucide-react'

export default function ForInfluencers() {
    return (
        <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Minimal Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/5 animate-pulse" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-orange-500/10 to-amber-500/5 animate-pulse" style={{ animationDuration: '18s' }} />
            </div>

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 border border-purple-400/20 rounded-full mb-6 backdrop-blur-sm"
                    >
                        <Users className="w-4 h-4 text-purple-300" />
                        <span className="text-sm font-semibold text-purple-200 uppercase tracking-wide">For Influencers & Large Creators</span>
                    </motion.div>

                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        No Ads = No Ad-Revenue Model Here
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        VDOgate is 100% ad-free. No ad revenue. No "views for pennies".
                        <br />
                        Instead, monetize your true influence through paid live events and direct fan engagement.
                    </p>
                </motion.div>

                {/* Main Content Grid - Cleaner Layout */}
                <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
                    {/* Left: The Problem - Simplified */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20 shadow-lg"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center border border-red-500/30">
                                <TrendingUp className="w-6 h-6 text-red-400 transform rotate-180" />
                            </div>
                            <h3 className="text-xl font-bold text-red-400">Traditional Ad-Revenue</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                'Algorithm suppression',
                                'Unpredictable earnings',
                                'Platform controls reach',
                                'Monetization barriers'
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-red-500/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-red-500/20">
                                        <X className="w-3 h-3 text-red-400" />
                                    </div>
                                    <span className="text-slate-300 text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right: The Solution - Enhanced Contrast */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 shadow-xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                                <Video className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white">VDOgate Live Events</h3>
                        </div>

                        <ul className="space-y-3">
                            {[
                                { text: 'Real audience', icon: Users },
                                { text: 'Real earnings', icon: IndianRupee },
                                { text: 'No algorithm suppression', icon: Zap },
                                { text: 'Direct monetization', icon: TrendingUp }
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="w-5 h-5 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle2 className="w-3 h-3 text-white" />
                                    </div>
                                    <span className="text-white font-medium text-base">{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>

                {/* Bottom CTA - Cleaner Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-10 md:p-12 border border-purple-400/20 shadow-2xl">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-500/10 border border-purple-400/20 rounded-full mb-6"
                        >
                            <Sparkles className="w-5 h-5 text-purple-300" />
                            <span className="text-sm font-semibold text-purple-200">Your Audience, Your Earnings</span>
                        </motion.div>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Turn Your Influence Into Income
                        </h3>

                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8">
                            Host live workshops, training sessions, performances, and more. Keep 85% of ticket revenue. No ads needed.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-400/30 rounded-xl backdrop-blur-sm">
                                <p className="text-sm text-purple-300 font-medium mb-1">Minimum Ticket Price</p>
                                <p className="text-3xl font-bold text-white">₹99<span className="text-lg text-slate-300">/hour</span></p>
                            </div>
                            <div className="px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/30 rounded-xl backdrop-blur-sm">
                                <p className="text-sm text-green-300 font-medium mb-1">You Keep</p>
                                <p className="text-3xl font-bold text-white">85<span className="text-lg text-slate-300">%</span></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

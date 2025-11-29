'use client'

import { motion } from 'framer-motion'
import { Video, Eye, CheckCircle2, X, Sparkles } from 'lucide-react'

export default function SeeRealSkills() {
    return (
        <section className="py-12 md:py-16 relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Floating Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl bg-gradient-to-br from-blue-200/30 to-cyan-200/20 animate-pulse" style={{ animationDuration: '20s' }} />
                <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full blur-3xl bg-gradient-to-tr from-purple-200/20 to-pink-200/20 animate-pulse" style={{ animationDuration: '18s' }} />
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
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-semibold text-blue-800">For Buyers & Viewers</span>
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-4">
                        See Real Skills <br /> Not Just Profiles
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        Watch short videos, understand real ability, and choose confidently.
                    </p>
                </motion.div>

                {/* Comparison Grid */}
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
                    {/* Text Profiles - Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        <div className="glass bg-gradient-to-br from-white via-red-50/30 to-orange-50/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-red-200/40 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center">
                                    <X className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-red-700">Text-Only Profiles</h3>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    'Hard to judge real skill',
                                    'Guesswork and uncertainty',
                                    'Random listings',
                                    'No proof of expertise'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-neutral-gray-dark">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Video Profiles - Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group"
                    >
                        <div className="glass bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 backdrop-blur-xl rounded-3xl p-8 border-2 border-blue-200/40 shadow-xl">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <Video className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">VDOgate Video Profiles</h3>
                            </div>

                            <ul className="space-y-3">
                                {[
                                    'Watch real work in action',
                                    'Compare skill confidently',
                                    'Find the right freelancer',
                                    'No guesswork needed'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-brand-black font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>

                {/* Free Forever Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl shadow-lg">
                        <Eye className="w-6 h-6 text-green-600" />
                        <div className="text-left">
                            <p className="text-lg font-bold text-green-800">Free Forever for Viewers & Buyers</p>
                            <p className="text-sm text-green-700">Browse, watch, and connect — no charges, ever</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

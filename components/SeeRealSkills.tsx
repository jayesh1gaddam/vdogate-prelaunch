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
                        See Real Skills — Not Just Profiles
                    </h2>
                    <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
                        Watch short videos, understand real ability, and choose confidently.
                        <br />
                        For buyers: watch real work, compare skill, and find the right freelancer without guesswork.
                    </p>
                </motion.div>

                {/* Comparison Grid */}


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
                            <p className="text-lg font-bold text-green-800">Free forever for viewers & buyers.</p>
                            <p className="text-sm text-green-700">Browse, watch, and connect — no charges, ever</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

'use client'

import { motion } from 'framer-motion'
import { Copy, CheckCircle2, Globe } from 'lucide-react'
import { useState } from 'react'

export default function PortfolioPromo() {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    const platforms = [
        { name: 'Fiverr', color: 'bg-green-100 text-green-700 border-green-200' },
        { name: 'Upwork', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
        { name: 'Freelancer.com', color: 'bg-blue-100 text-blue-700 border-blue-200' },
        { name: 'LinkedIn', color: 'bg-sky-100 text-sky-700 border-sky-200' },
        { name: 'Behance', color: 'bg-indigo-100 text-indigo-700 border-indigo-200' }
    ]

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/40 to-white pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-200/20 rounded-full blur-3xl pointer-events-none" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="glass bg-white/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/50 shadow-2xl relative overflow-hidden">
                        {/* Decorative Gradients */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-200/30 to-transparent rounded-full blur-2xl" />

                        <div className="relative z-10 text-center">
                            {/* Badge */}
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full mb-8 border border-purple-200 shadow-sm"
                            >
                                <Globe className="w-4 h-4 text-purple-600" />
                                <span className="text-sm font-bold text-purple-800 uppercase tracking-wide">Use Your VDOgate Portfolio Anywhere</span>
                            </motion.div>

                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6 leading-tight">
                                Amplify Your Freelance Success <br className="hidden md:block" />
                                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Beyond VDOgate</span>
                            </h2>

                            <p className="text-xl text-neutral-gray mb-8 leading-relaxed max-w-3xl mx-auto">
                                Share your VDOgate video portfolio while pitching on other platforms.
                                <span className="block mt-2 text-base text-neutral-gray-dark">Stand out instantly with real work, not just text claims.</span>
                            </p>

                            {/* Platform Pills */}
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {platforms.map((platform, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className={`px-4 py-2 rounded-xl border ${platform.color} font-semibold text-sm shadow-sm`}
                                    >
                                        {platform.name}
                                    </motion.span>
                                ))}
                            </div>

                            {/* Value Props Cards */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
                                {[
                                    { title: "Build Trust", desc: "Video proof builds instant credibility with clients." },
                                    { title: "Win Clients", desc: "Trust wins clients faster than text proposals." },
                                    { title: "Stand Out", desc: "Differentiate yourself from thousands of text profiles." }
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1) }}
                                        whileHover={{ y: -5 }}
                                        className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                                    >
                                        <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-lg flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-5 h-5 text-purple-600" />
                                        </div>
                                        <h3 className="font-bold text-lg text-brand-black mb-2">{item.title}</h3>
                                        <p className="text-neutral-gray text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleCopy}
                                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-bold text-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                {copied ? (
                                    <>
                                        <CheckCircle2 className="w-6 h-6" />
                                        <span>Link Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                                        <span>Copy Portfolio Link</span>
                                    </>
                                )}
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

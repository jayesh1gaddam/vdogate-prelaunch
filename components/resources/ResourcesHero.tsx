'use client'

import { motion } from 'framer-motion'
import { Search, Sparkles, BookOpen, FileText, Star, HelpCircle, Megaphone } from 'lucide-react'
import { staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import { RESOURCE_TYPE_CONFIG } from '@/lib/resources-types'

interface ResourcesHeroProps {
    onSearch?: (query: string) => void
    stats?: {
        blogs: number
        caseStudies: number
        stories: number
        faqs: number
        announcements: number
    }
}

export default function ResourcesHero({ onSearch, stats }: ResourcesHeroProps) {
    const resourceTypes = [
        { type: 'blog', icon: BookOpen, count: stats?.blogs || 0 },
        { type: 'case-study', icon: FileText, count: stats?.caseStudies || 0 },
        { type: 'story', icon: Star, count: stats?.stories || 0 },
        { type: 'faq', icon: HelpCircle, count: stats?.faqs || 0 },
        { type: 'announcement', icon: Megaphone, count: stats?.announcements || 0 }
    ] as const

    return (
        <section className="relative py-10 md:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
            {/* Premium Mesh Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

            {/* Subtle Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Static Background Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/20" />
                <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-bl from-rose-200/20 to-orange-300/20" />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    viewport={viewportOptions}
                    className="max-w-4xl mx-auto text-center"
                >
                    {/* Badge */}
                    <motion.div
                        variants={staggerItem}
                        className="inline-flex items-center gap-2 px-3 py-1.5 bg-portal-primary/3 border border-portal-primary/8 rounded-full mb-8"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-portal-primary" />
                        <span className="text-xs md:text-sm font-medium text-portal-primary">VDOgate Resources Hub</span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        variants={staggerItem}
                        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.2] tracking-tight mb-6"
                    >
                        <span className="text-brand-black font-light">Resources to </span>
                        <span className="text-gradient font-semibold">Grow Your</span>
                        <br />
                        <span className="text-brand-black font-light">Freelance Business</span>
                    </motion.h1>

                    <motion.p
                        variants={staggerItem}
                        className="text-base md:text-lg xl:text-xl text-neutral-gray leading-relaxed max-w-2xl mx-auto font-light mb-12"
                    >
                        Expert insights, real success stories, practical guides, and platform updates, everything you need to thrive
                    </motion.p>

                    {/* Search Bar */}
                    <motion.div
                        variants={staggerItem}
                        className="max-w-2xl mx-auto mb-12"
                    >
                        <div className="relative">
                            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                            <input
                                type="text"
                                placeholder="Search resources..."
                                onChange={(e) => onSearch?.(e.target.value)}
                                className="w-full pl-14 pr-6 py-5 bg-white border-2 border-neutral-gray-lighter rounded-2xl focus:outline-none focus:border-portal-primary transition-all duration-300 text-brand-black placeholder-neutral-gray shadow-lg"
                            />
                        </div>
                    </motion.div>

                    {/* Resource Type Stats */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        {resourceTypes.map((item, index) => {
                            const Icon = item.icon
                            const config = RESOURCE_TYPE_CONFIG[item.type]
                            return (
                                <motion.div
                                    key={item.type}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-sm rounded-xl border border-neutral-gray-lighter shadow-md hover:shadow-lg transition-all duration-300"
                                >
                                    <Icon className={`w-4 h-4 bg-gradient-to-r ${config.gradient} bg-clip-text text-transparent`} />
                                    <span className="text-sm font-semibold text-brand-black">{item.count}+</span>
                                    <span className="text-xs text-neutral-gray">{config.label}</span>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

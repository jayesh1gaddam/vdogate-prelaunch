'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { TrendingUp, Calendar, Clock, ArrowRight, Eye } from 'lucide-react'
import { Resource } from '@/lib/resources-types'

interface CaseStudyCardProps {
    resource: Resource
}

export default function CaseStudyCard({ resource }: CaseStudyCardProps) {
    if (resource.type !== 'case-study' || !resource.metrics) return null

    return (
        <Link href={`/blog/${resource.id}`} className="block h-full group">
            <article className="bg-white rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border-2 border-blue-100">
                {/* Image with Metrics Overlay */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-background">
                    {resource.image && (
                        <Image
                            src={resource.image}
                            alt={resource.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Metrics Badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                            <div className="grid grid-cols-3 gap-3 text-center">
                                <div>
                                    <p className="text-xs text-neutral-gray mb-1">Before</p>
                                    <p className="text-sm font-bold text-red-600">{resource.metrics.before}</p>
                                </div>
                                <div>
                                    <TrendingUp className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                    <p className="text-sm font-bold text-green-600">{resource.metrics.improvement}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-gray mb-1">After</p>
                                    <p className="text-sm font-bold text-green-600">{resource.metrics.after}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-xs font-bold rounded-lg uppercase tracking-wide">
                            Case Study
                        </span>
                        {resource.industry && (
                            <span className="text-xs text-neutral-gray">
                                {resource.industry}
                            </span>
                        )}
                    </div>

                    <h3 className="text-xl font-bold text-brand-black mb-3 leading-tight group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                        {resource.title}
                    </h3>

                    <p className="text-sm text-neutral-gray-dark leading-relaxed mb-4 line-clamp-3 flex-1">
                        {resource.excerpt}
                    </p>

                    {/* Timeframe Badge */}
                    {resource.metrics.timeframe && (
                        <div className="mb-4">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg">
                                <Clock className="w-4 h-4 text-blue-600" />
                                <span className="text-xs font-semibold text-blue-700">
                                    Results in {resource.metrics.timeframe}
                                </span>
                            </div>
                        </div>
                    )}

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-gray-lighter">
                        <div className="flex items-center gap-2 text-xs text-neutral-gray">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                            {resource.readTime && (
                                <>
                                    <span>•</span>
                                    <span>{resource.readTime}</span>
                                </>
                            )}
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-1 text-blue-600 font-semibold text-sm"
                        >
                            Read Case Study
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

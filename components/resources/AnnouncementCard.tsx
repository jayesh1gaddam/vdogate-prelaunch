'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowRight, AlertCircle, Sparkles, Megaphone } from 'lucide-react'
import { Resource } from '@/lib/resources-types'

interface AnnouncementCardProps {
    resource: Resource
}

export default function AnnouncementCard({ resource }: AnnouncementCardProps) {
    if (resource.type !== 'announcement') return null

    const priorityConfig = {
        high: {
            badge: 'Important',
            color: 'red',
            icon: AlertCircle,
            bg: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-600'
        },
        medium: {
            badge: 'Update',
            color: 'orange',
            icon: Sparkles,
            bg: 'bg-orange-50',
            border: 'border-orange-200',
            text: 'text-orange-600'
        },
        low: {
            badge: 'Info',
            color: 'blue',
            icon: Megaphone,
            bg: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-600'
        }
    }

    const config = priorityConfig[resource.priority || 'low']
    const Icon = config.icon

    return (
        <Link href={`/blog/${resource.id}`} className="block group">
            <article className={`${config.bg} rounded-xl overflow-hidden border-2 ${config.border} hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}>
                <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`w-12 h-12 ${config.bg} border-2 ${config.border} rounded-xl flex items-center justify-center flex-shrink-0`}>
                            <Icon className={`w-6 h-6 ${config.text}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`px-2.5 py-1 ${config.bg} ${config.text} border ${config.border} text-xs font-bold rounded-lg uppercase tracking-wide`}>
                                    {config.badge}
                                </span>
                                <span className="text-xs text-neutral-gray">
                                    {resource.announcementType}
                                </span>
                            </div>
                            <h3 className={`text-lg font-bold ${config.text} mb-2 leading-tight group-hover:underline`}>
                                {resource.title}
                            </h3>
                        </div>
                    </div>

                    {/* Image (if available) */}
                    {resource.image && (
                        <div className="relative aspect-[16/9] rounded-lg overflow-hidden mb-4">
                            <Image
                                src={resource.image}
                                alt={resource.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    )}

                    {/* Excerpt */}
                    <p className="text-sm text-neutral-gray-dark leading-relaxed mb-4 line-clamp-2">
                        {resource.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-gray-lighter">
                        <div className="flex items-center gap-2 text-xs text-neutral-gray">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className={`flex items-center gap-1 ${config.text} font-semibold text-sm`}
                        >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

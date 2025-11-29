'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Star, Calendar, ArrowRight, Quote } from 'lucide-react'
import { Resource } from '@/lib/resources-types'

interface FreelancerStoryCardProps {
    resource: Resource
}

export default function FreelancerStoryCard({ resource }: FreelancerStoryCardProps) {
    if (resource.type !== 'story' || !resource.freelancer) return null

    return (
        <Link href={`/blog/${resource.id}`} className="block h-full group">
            <article className="bg-gradient-to-br from-purple-50 via-white to-pink-50 rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col border-2 border-purple-100">
                {/* Header with Profile */}
                <div className="p-6 pb-4">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 ring-4 ring-purple-100">
                            <Image
                                src={resource.freelancer.photo}
                                alt={resource.freelancer.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold text-brand-black mb-1">
                                {resource.freelancer.name}
                            </h4>
                            <p className="text-sm text-purple-600 font-semibold mb-1">
                                {resource.freelancer.profession}
                            </p>
                            <div className="flex items-center gap-1 text-xs text-neutral-gray">
                                <MapPin className="w-3 h-3" />
                                <span>{resource.freelancer.location}</span>
                            </div>
                        </div>
                    </div>

                    {/* Quote */}
                    {resource.quote && (
                        <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 mb-4">
                            <Quote className="absolute top-2 left-2 w-6 h-6 text-purple-200" />
                            <p className="text-sm text-neutral-gray-dark italic leading-relaxed pl-6">
                                "{resource.quote}"
                            </p>
                        </div>
                    )}

                    {/* Story Badge */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 bg-purple-500/10 text-purple-600 text-xs font-bold rounded-lg uppercase tracking-wide">
                            Success Story
                        </span>
                        <span className="text-xs text-neutral-gray">{resource.category}</span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-black mb-3 leading-tight group-hover:text-purple-600 transition-colors duration-300">
                        {resource.title}
                    </h3>

                    <p className="text-sm text-neutral-gray-dark leading-relaxed mb-4 line-clamp-2">
                        {resource.excerpt}
                    </p>
                </div>

                {/* Achievements */}
                <div className="px-6 pb-6 flex-1">
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl p-4">
                        <p className="text-xs font-bold text-purple-700 uppercase tracking-wide mb-3 flex items-center gap-2">
                            <Star className="w-4 h-4" />
                            Key Achievements
                        </p>
                        <ul className="space-y-2">
                            {resource.freelancer.achievements.slice(0, 3).map((achievement, index) => (
                                <li key={index} className="flex items-start gap-2 text-xs text-neutral-gray-dark">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 pb-6">
                    <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                        <div className="flex items-center gap-2 text-xs text-neutral-gray">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>

                        <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-1 text-purple-600 font-semibold text-sm"
                        >
                            Read Story
                            <ArrowRight className="w-4 h-4" />
                        </motion.div>
                    </div>
                </div>
            </article>
        </Link>
    )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ThumbsUp, ThumbsDown, Search } from 'lucide-react'
import { Resource } from '@/lib/resources-types'

interface FAQSectionProps {
    faqs: Resource[]
}

export default function FAQSection({ faqs }: FAQSectionProps) {
    const [openId, setOpenId] = useState<string | null>(null)
    const [searchQuery, setSearchQuery] = useState('')
    const [helpfulVotes, setHelpfulVotes] = useState<Record<string, 'up' | 'down' | null>>({})

    // Group FAQs by category
    const faqsByCategory = faqs.reduce((acc, faq) => {
        const category = faq.faqCategory || 'General'
        if (!acc[category]) acc[category] = []
        acc[category].push(faq)
        return acc
    }, {} as Record<string, Resource[]>)

    // Filter FAQs by search
    const filteredFaqs = searchQuery
        ? faqs.filter(faq =>
            faq.question?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer?.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : faqs

    const handleVote = (id: string, vote: 'up' | 'down') => {
        setHelpfulVotes(prev => ({
            ...prev,
            [id]: prev[id] === vote ? null : vote
        }))
    }

    return (
        <div className="space-y-8">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray" />
                <input
                    type="text"
                    placeholder="Search FAQs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white border-2 border-neutral-gray-lighter rounded-xl focus:outline-none focus:border-green-500 transition-all duration-300 text-brand-black placeholder-neutral-gray"
                />
            </div>

            {/* FAQ Accordion */}
            {searchQuery ? (
                // Search Results
                <div className="space-y-3">
                    {filteredFaqs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isOpen={openId === faq.id}
                            onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                            vote={helpfulVotes[faq.id]}
                            onVote={(vote) => handleVote(faq.id, vote)}
                        />
                    ))}
                    {filteredFaqs.length === 0 && (
                        <p className="text-center text-neutral-gray py-8">No FAQs found matching your search.</p>
                    )}
                </div>
            ) : (
                // Grouped by Category
                Object.entries(faqsByCategory).map(([category, categoryFaqs]) => (
                    <div key={category} className="space-y-3">
                        <h3 className="text-xl font-bold text-brand-black flex items-center gap-2">
                            <div className="w-1 h-6 bg-green-500 rounded-full" />
                            {category}
                        </h3>
                        <div className="space-y-3">
                            {categoryFaqs.map((faq) => (
                                <FAQItem
                                    key={faq.id}
                                    faq={faq}
                                    isOpen={openId === faq.id}
                                    onToggle={() => setOpenId(openId === faq.id ? null : faq.id)}
                                    vote={helpfulVotes[faq.id]}
                                    onVote={(vote) => handleVote(faq.id, vote)}
                                />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    )
}

interface FAQItemProps {
    faq: Resource
    isOpen: boolean
    onToggle: () => void
    vote: 'up' | 'down' | null | undefined
    onVote: (vote: 'up' | 'down') => void
}

function FAQItem({ faq, isOpen, onToggle, vote, onVote }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border-2 border-green-100 overflow-hidden hover:border-green-300 transition-colors duration-300"
        >
            <button
                onClick={onToggle}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-green-50/50 transition-colors duration-300"
            >
                <span className="text-base font-semibold text-brand-black pr-4">
                    {faq.question}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="w-5 h-5 text-green-600 flex-shrink-0" />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="px-6 pb-4 border-t border-green-100">
                            <p className="text-sm text-neutral-gray-dark leading-relaxed mt-4 mb-4">
                                {faq.answer}
                            </p>

                            {/* Helpful Buttons */}
                            <div className="flex items-center gap-4 pt-4 border-t border-neutral-gray-lighter">
                                <span className="text-xs text-neutral-gray">Was this helpful?</span>
                                <div className="flex items-center gap-2">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => onVote('up')}
                                        className={`p-2 rounded-lg transition-colors duration-300 ${vote === 'up'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-green-50 text-green-600 hover:bg-green-100'
                                            }`}
                                    >
                                        <ThumbsUp className="w-4 h-4" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => onVote('down')}
                                        className={`p-2 rounded-lg transition-colors duration-300 ${vote === 'down'
                                                ? 'bg-red-500 text-white'
                                                : 'bg-red-50 text-red-600 hover:bg-red-100'
                                            }`}
                                    >
                                        <ThumbsDown className="w-4 h-4" />
                                    </motion.button>
                                </div>
                                {faq.helpful && (
                                    <span className="text-xs text-neutral-gray ml-auto">
                                        {faq.helpful} found this helpful
                                    </span>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

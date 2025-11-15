'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp, User, BookOpen, Bookmark, Share2, Eye, Sparkles } from 'lucide-react'
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: 'How Can a Freelancer Without an Establishment Promote Themselves?',
    excerpt: 'Most freelancers start with only their skills and a laptop — but how do they promote themselves without ads, agencies, or an office? Here\'s the reality and the way forward.',
    category: 'Freelancing',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    date: '2025-11-12',
    readTime: '5 min read',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
  },
  {
    id: 2,
    title: 'The Hidden Costs of Freelancing: Commissions, Algorithms & Paid Visibility',
    excerpt: 'Freelancing promises freedom, but hidden costs like commissions and ad spend quietly eat away at real income.',
    category: 'Freelancing',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    date: '2025-11-13',
    readTime: '6 min read',
    views: '980',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Why Most Freelancers Struggle to Be Seen Without Paying for Ads',
    excerpt: 'Visibility today has become a paid privilege — but skill, not ad spend, should decide who gets discovered.',
    category: 'Visibility',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    date: '2025-11-14',
    readTime: '5 min read',
    views: '1.5k',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Can You Really Grow Without Paying a Platform or Middleman?',
    excerpt: 'Modern freelancing is filled with middlemen — platforms, agencies, aggregators. Can real independence exist without them?',
    category: 'Self-Promotion',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    date: '2025-11-15',
    readTime: '6 min read',
    views: '1.8k',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
  },
]

const categories = ['All', 'Freelancing', 'Visibility', 'Self-Promotion']

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<string | null>(null)
  const postsPerPage = 6

  // Reset pagination when category changes
  useEffect(() => {
    setPage(1)
  }, [selectedCategory])

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory)

  const featuredPost = blogPosts.find(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured).slice(0, page * postsPerPage)

  const handleLoadMore = async () => {
    if (loading) return
    setLoading(true)
    // Simulate pagination; in real app, fetch from API
    const total = filteredPosts.filter(p => !p.featured).length
    const nextCount = (page + 1) * postsPerPage
    setPage(p => p + 1)
    setHasMore(nextCount < total)
    setLoading(false)
  }

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) {
      setSubmitMessage('Please enter a valid email.')
      return
    }
    setSubmitting(true)
    setSubmitMessage(null)
    try {
      // Replace with real API endpoint
      await new Promise(res => setTimeout(res, 800))
      setSubmitMessage('Subscribed! Please check your inbox.')
      setEmail('')
    } catch {
      setSubmitMessage('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Header Spacing for Fixed Nav */}
      <div className="h-24" />

      {/* Premium Hero Section - Matching Main Site */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20">
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
              <span className="text-xs md:text-sm font-medium text-portal-primary">VDOgate Insights</span>
            </motion.div>

            {/* Heading - Brand Typography */}
            <motion.h1
              variants={staggerItem}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.2] tracking-tight mb-6"
            >
              <span className="text-brand-black font-light">Stories for </span>
              <span className="text-gradient font-semibold">freelancers</span>
              <br />
              <span className="text-brand-black font-light">building success</span>
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-base md:text-lg xl:text-xl text-neutral-gray leading-relaxed max-w-2xl mx-auto font-light"
            >
              Expert insights, practical tips, and inspiring stories to help you thrive in India's freelance economy
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter - Sticky with Premium Design */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-brand border-b border-neutral-gray-lighter shadow-elevation-2">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto py-6 scrollbar-hide">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                  category === selectedCategory
                    ? 'bg-portal-gradient text-white shadow-portal-sm'
                    : 'bg-neutral-background text-neutral-gray-dark hover:bg-portal-primary/5 hover:text-portal-primary border border-neutral-gray-lighter'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post - Premium Design */}
      {featuredPost && selectedCategory === 'All' && (
        <section className="py-16 md:py-24 lg:py-30 bg-neutral-background">
          <div className="container-custom">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Link
                href={`/blog/${featuredPost.id}`}
                className="group block"
              >
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center bg-white rounded-3xl p-6 md:p-8 lg:p-12 shadow-elevation-3 hover:shadow-elevation-4 transition-all duration-300">
                  {/* Image */}
                  <motion.div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-6 left-6 z-10">
                      <span className="px-4 py-2 bg-portal-gradient text-white text-xs font-bold rounded-xl shadow-portal-sm backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="px-3 py-1 bg-portal-primary/10 text-portal-primary text-xs font-bold rounded-lg uppercase tracking-wide">
                        {featuredPost.category}
                      </span>
                      <span className="text-neutral-gray-light">·</span>
                      <div className="flex items-center gap-2 text-sm text-neutral-gray">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>

                    <h2 className="text-headline-lg md:text-display-md lg:text-display-lg font-bold text-brand-black mb-6 leading-tight group-hover:text-portal-primary transition-colors duration-300">
                      {featuredPost.title}
                    </h2>

                    <p className="text-body-lg text-neutral-gray-dark leading-relaxed mb-8">
                      {featuredPost.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-neutral-gray-lighter">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-portal-gradient rounded-full flex items-center justify-center shadow-portal-xs">
                          <User className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-brand-black">{featuredPost.author}</p>
                          <div className="flex items-center gap-3 text-xs text-neutral-gray">
                            <span>{featuredPost.authorBio}</span>
                            <span>·</span>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {featuredPost.readTime}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-xl bg-portal-primary/5 text-portal-primary hover:bg-portal-primary hover:text-white transition-all duration-300"
                          aria-label="Bookmark post"
                          onClick={(e) => {
                            e.preventDefault()
                            const bookmarks = JSON.parse(localStorage.getItem('vdogate-bookmarks') || '[]')
                            const postId = featuredPost.id
                            const index = bookmarks.indexOf(postId)
                            if (index > -1) {
                              bookmarks.splice(index, 1)
                            } else {
                              bookmarks.push(postId)
                            }
                            localStorage.setItem('vdogate-bookmarks', JSON.stringify(bookmarks))
                            e.currentTarget.setAttribute('aria-pressed', index === -1 ? 'true' : 'false')
                          }}
                        >
                          <Bookmark className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="p-2.5 rounded-xl bg-portal-primary/5 text-portal-primary hover:bg-portal-primary hover:text-white transition-all duration-300"
                          aria-label="Share post"
                          onClick={(e) => {
                            e.preventDefault()
                            const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${featuredPost.id}`
                            if (navigator.share) {
                              navigator.share({ title: featuredPost.title, text: featuredPost.excerpt, url })
                            } else {
                              navigator.clipboard.writeText(url)
                              alert('Link copied to clipboard!')
                            }
                          }}
                        >
                          <Share2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid - Premium Card Style */}
      <section className="py-16 md:py-24 lg:py-30">
        <div className="container-custom">
          <motion.h2
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="text-headline-lg md:text-display-md font-bold text-brand-black mb-12 lg:mb-16"
          >
            {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {regularPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={staggerItem}
                className="group"
              >
                <Link href={`/blog/${post.id}`} className="block h-full">
                  <article className="bg-white rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                    {/* Image */}
                    <motion.div
                      className="relative aspect-[4/3] overflow-hidden bg-neutral-background"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="px-2.5 py-1 bg-portal-primary/10 text-portal-primary text-xs font-bold rounded-lg uppercase tracking-wide">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-neutral-gray">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </div>
                      </div>

                      <h3 className="text-headline-sm md:text-headline-md font-bold text-brand-black mb-3 leading-tight group-hover:text-portal-primary transition-colors duration-300">
                        {post.title}
                      </h3>

                      <p className="text-body-md text-neutral-gray-dark leading-relaxed mb-6 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-neutral-gray-lighter">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-portal-gradient rounded-full flex items-center justify-center shadow-portal-xs">
                            <User className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex items-center gap-2 text-xs text-neutral-gray">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                            <span>·</span>
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {post.views}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1">
                          <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-neutral-gray hover:bg-portal-primary/10 hover:text-portal-primary transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              const bookmarks = JSON.parse(localStorage.getItem('vdogate-bookmarks') || '[]')
                              const index = bookmarks.indexOf(post.id)
                              if (index > -1) {
                                bookmarks.splice(index, 1)
                              } else {
                                bookmarks.push(post.id)
                              }
                              localStorage.setItem('vdogate-bookmarks', JSON.stringify(bookmarks))
                              e.currentTarget.setAttribute('aria-pressed', index === -1 ? 'true' : 'false')
                            }}
                            aria-label="Bookmark post"
                          >
                            <Bookmark className="w-4 h-4" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-2 rounded-lg text-neutral-gray hover:bg-portal-primary/10 hover:text-portal-primary transition-all duration-300"
                            onClick={(e) => {
                              e.preventDefault()
                              const url = `${typeof window !== 'undefined' ? window.location.origin : ''}/blog/${post.id}`
                              if (navigator.share) {
                                navigator.share({ title: post.title, text: post.excerpt, url })
                              } else {
                                navigator.clipboard.writeText(url)
                                alert('Link copied to clipboard!')
                              }
                            }}
                            aria-label="Share post"
                          >
                            <Share2 className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <div className="text-center mt-16">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLoadMore}
              disabled={!hasMore || loading}
              className="group px-8 py-4 bg-portal-gradient disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-xl font-semibold text-base hover:shadow-portal-sm transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-md"
            >
              {loading ? 'Loading…' : hasMore ? 'Load More Articles' : 'No more articles'}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA - Premium Design */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-orange-50/50 via-white to-amber-50/30">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-100/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b05_1px,transparent_1px),linear-gradient(to_bottom,#f7682b05_1px,transparent_1px)] bg-[size:3rem_3rem]" />

        <div className="container-custom relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-elevation-4 border border-neutral-gray-lighter">
              <motion.div variants={staggerItem} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-portal-gradient rounded-2xl mb-6 shadow-portal-sm">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-headline-lg md:text-display-md font-bold text-brand-black mb-6 tracking-tight">
                  Get insights delivered to your inbox
                </h2>

                <p className="text-body-lg text-neutral-gray-dark mb-10 max-w-2xl mx-auto">
                  Join thousands of freelancers getting weekly tips, strategies, and inspiration
                </p>

                <form className="max-w-md mx-auto" onSubmit={handleSubscribe}>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      aria-label="Email address"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-6 py-4 rounded-xl border-2 border-neutral-gray-lighter bg-white text-brand-black placeholder-neutral-gray focus:outline-none focus:border-portal-primary transition-all duration-300"
                    />
                    <motion.button
                      type="submit"
                      disabled={submitting || !isValidEmail(email)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold hover:shadow-portal-sm transition-all duration-300 whitespace-nowrap shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Subscribing…' : 'Subscribe'}
                    </motion.button>
                  </div>
                  <p className="text-xs text-neutral-gray mt-4">
                    No spam. Unsubscribe anytime.
                  </p>
                  {submitMessage && (
                    <p className={`text-xs mt-2 ${submitMessage.includes('Subscribed') ? 'text-green-600' : 'text-red-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

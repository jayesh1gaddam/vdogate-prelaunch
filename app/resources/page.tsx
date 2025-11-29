'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, User, Eye, BookOpen, FileText, Star, HelpCircle, Megaphone } from 'lucide-react'
import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import ResourcesHero from '@/components/resources/ResourcesHero'
import CaseStudyCard from '@/components/resources/CaseStudyCard'
import FreelancerStoryCard from '@/components/resources/FreelancerStoryCard'
import FAQSection from '@/components/resources/FAQSection'
import AnnouncementCard from '@/components/resources/AnnouncementCard'
import { SAMPLE_RESOURCES } from '@/lib/resources-data'
import { Resource, ResourceType, RESOURCE_TYPE_CONFIG } from '@/lib/resources-types'

const resourceTypes: ResourceType[] = ['blog', 'case-study', 'story', 'faq', 'announcement']

export default function ResourcesPage() {
  const [selectedType, setSelectedType] = useState<ResourceType | 'all'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Track navbar visibility based on scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show navbar when scrolling up or near top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsNavbarVisible(true)
      }
      // Hide navbar when scrolling down and not near top
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavbarVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Filter resources
  const filteredResources = SAMPLE_RESOURCES.filter(resource => {
    const matchesType = selectedType === 'all' || resource.type === selectedType
    const matchesSearch = !searchQuery ||
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesType && matchesSearch
  })

  // Separate resources by type
  const blogs = filteredResources.filter(r => r.type === 'blog')
  const caseStudies = filteredResources.filter(r => r.type === 'case-study')
  const stories = filteredResources.filter(r => r.type === 'story')
  const faqs = filteredResources.filter(r => r.type === 'faq')
  const announcements = filteredResources.filter(r => r.type === 'announcement')

  // Stats for hero
  const stats = {
    blogs: SAMPLE_RESOURCES.filter(r => r.type === 'blog').length,
    caseStudies: SAMPLE_RESOURCES.filter(r => r.type === 'case-study').length,
    stories: SAMPLE_RESOURCES.filter(r => r.type === 'story').length,
    faqs: SAMPLE_RESOURCES.filter(r => r.type === 'faq').length,
    announcements: SAMPLE_RESOURCES.filter(r => r.type === 'announcement').length
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Header Spacing for Fixed Nav */}
      <div className="h-24" />

      {/* Hero Section */}
      <ResourcesHero onSearch={setSearchQuery} stats={stats} />

      {/* Resource Type Filter - Dynamic sticky positioning */}
      <section className={`sticky z-40 bg-white/95 backdrop-blur-brand border-b border-neutral-gray-lighter shadow-elevation-2 transition-all duration-300 ${isNavbarVisible ? 'top-[88px]' : 'top-0'
        }`}>
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto py-6 scrollbar-hide">
            <motion.button
              onClick={() => setSelectedType('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${selectedType === 'all'
                ? 'bg-portal-gradient text-white shadow-portal-sm'
                : 'bg-neutral-background text-neutral-gray-dark hover:bg-portal-primary/5 hover:text-portal-primary border border-neutral-gray-lighter'
                }`}
            >
              All Resources
            </motion.button>
            {resourceTypes.map((type) => {
              const config = RESOURCE_TYPE_CONFIG[type]
              return (
                <motion.button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-2 ${selectedType === type
                    ? `bg-gradient-to-r ${config.gradient} text-white shadow-lg`
                    : 'bg-neutral-background text-neutral-gray-dark hover:bg-portal-primary/5 hover:text-portal-primary border border-neutral-gray-lighter'
                    }`}
                >
                  {getIconForType(type)}
                  {config.label}
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="py-16 md:py-24">
        <div className="container-custom space-y-20">

          {/* Blogs Section */}
          {(selectedType === 'all' || selectedType === 'blog') && blogs.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-orange-600" />
                Latest Blogs
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <BlogCard key={blog.id} resource={blog} />
                ))}
              </div>
            </section>
          )}

          {/* Case Studies Section */}
          {(selectedType === 'all' || selectedType === 'case-study') && caseStudies.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-blue-600" />
                Success Case Studies
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.id} resource={caseStudy} />
                ))}
              </div>
            </section>
          )}

          {/* Freelancer Stories Section */}
          {(selectedType === 'all' || selectedType === 'story') && stories.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 flex items-center gap-3">
                <Star className="w-8 h-8 text-purple-600" />
                Freelancer Success Stories
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story) => (
                  <FreelancerStoryCard key={story.id} resource={story} />
                ))}
              </div>
            </section>
          )}

          {/* FAQs Section */}
          {(selectedType === 'all' || selectedType === 'faq') && faqs.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 flex items-center gap-3">
                <HelpCircle className="w-8 h-8 text-green-600" />
                Frequently Asked Questions
              </h2>
              <FAQSection faqs={faqs} />
            </section>
          )}

          {/* Announcements Section */}
          {(selectedType === 'all' || selectedType === 'announcement') && announcements.length > 0 && (
            <section>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-8 flex items-center gap-3">
                <Megaphone className="w-8 h-8 text-red-600" />
                Platform Announcements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {announcements.map((announcement) => (
                  <AnnouncementCard key={announcement.id} resource={announcement} />
                ))}
              </div>
            </section>
          )}

          {/* No Results */}
          {filteredResources.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-neutral-gray">No resources found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Helper function to get icon for resource type
function getIconForType(type: ResourceType) {
  const iconClass = "w-4 h-4"
  switch (type) {
    case 'blog':
      return <BookOpen className={iconClass} />
    case 'case-study':
      return <FileText className={iconClass} />
    case 'story':
      return <Star className={iconClass} />
    case 'faq':
      return <HelpCircle className={iconClass} />
    case 'announcement':
      return <Megaphone className={iconClass} />
  }
}

// Blog Card Component
function BlogCard({ resource }: { resource: Resource }) {
  return (
    <Link href={`/blog/${resource.id}`} className="block h-full group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
        {resource.image && (
          <div className="relative aspect-[4/3] overflow-hidden bg-neutral-background">
            <Image
              src={resource.image}
              alt={resource.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 bg-orange-500/10 text-orange-600 text-xs font-bold rounded-lg uppercase tracking-wide">
              {resource.category}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-neutral-gray">
              <Calendar className="w-3 h-3" />
              {new Date(resource.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>

          <h3 className="text-xl font-bold text-brand-black mb-3 leading-tight group-hover:text-portal-primary transition-colors duration-300">
            {resource.title}
          </h3>

          <p className="text-sm text-neutral-gray-dark leading-relaxed mb-6 line-clamp-3 flex-1">
            {resource.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-neutral-gray-lighter">
            <div className="flex items-center gap-2 text-xs text-neutral-gray">
              <Clock className="w-3 h-3" />
              <span>{resource.readTime}</span>
              {resource.views && (
                <>
                  <span>•</span>
                  <Eye className="w-3 h-3" />
                  <span>{resource.views}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

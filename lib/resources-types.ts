// Resource Types for VDOgate Resources Hub

export type ResourceType = 'blog' | 'case-study' | 'story' | 'faq' | 'announcement'

export interface Author {
    name: string
    role: string
    avatar?: string
}

export interface CaseStudyMetrics {
    before: string
    after: string
    improvement: string
    timeframe?: string
}

export interface FreelancerProfile {
    name: string
    profession: string
    location: string
    photo: string
    achievements: string[]
}

export interface Resource {
    id: string
    type: ResourceType
    title: string
    excerpt: string
    content?: string
    category: string
    tags: string[]
    author?: Author
    date: string
    readTime?: string
    views?: number
    featured?: boolean
    image?: string

    // Case Study specific
    metrics?: CaseStudyMetrics
    industry?: string

    // Story specific
    freelancer?: FreelancerProfile
    quote?: string

    // FAQ specific
    question?: string
    answer?: string
    helpful?: number
    faqCategory?: string

    // Announcement specific
    priority?: 'high' | 'medium' | 'low'
    announcementType?: 'update' | 'feature' | 'event' | 'policy'
}

export const RESOURCE_CATEGORIES = {
    blog: ['Getting Started', 'Marketing', 'Pricing', 'Platform Features', 'Success Tips'],
    'case-study': ['Fitness & Wellness', 'Creative Services', 'Education', 'Business Coaching'],
    story: ['First Month Success', 'Career Transition', 'Revenue Milestone', 'Community Impact'],
    faq: ['Getting Started', 'Pricing & Billing', 'Platform Features', 'Technical Support', 'Live Events'],
    announcement: ['Platform Updates', 'New Features', 'Events', 'Policy Changes']
} as const

export const RESOURCE_TYPE_CONFIG = {
    blog: {
        label: 'Blogs',
        color: 'orange',
        icon: '📝',
        gradient: 'from-orange-500 to-amber-600'
    },
    'case-study': {
        label: 'Case Studies',
        color: 'blue',
        icon: '📊',
        gradient: 'from-blue-500 to-cyan-600'
    },
    story: {
        label: 'Success Stories',
        color: 'purple',
        icon: '⭐',
        gradient: 'from-purple-500 to-pink-600'
    },
    faq: {
        label: 'FAQs',
        color: 'green',
        icon: '❓',
        gradient: 'from-green-500 to-emerald-600'
    },
    announcement: {
        label: 'Announcements',
        color: 'red',
        icon: '📢',
        gradient: 'from-red-500 to-rose-600'
    }
} as const

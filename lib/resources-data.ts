import { Resource } from './resources-types'

// VDOgate-Specific Resources Data
export const SAMPLE_RESOURCES: Resource[] = [
    // BLOGS - VDOgate Platform Insights
    {
        id: 'blog-1',
        type: 'blog',
        title: 'Why VDOgate Charges Zero Commission on Direct Services',
        excerpt: 'Unlike traditional platforms that take 10-30% commission, VDOgate believes your earnings should stay with you. Learn how our subscription model empowers freelancers to keep 100% of what they earn.',
        category: 'Platform Features',
        tags: ['Zero Commission', 'Pricing Model', 'Freelancer Earnings'],
        author: {
            name: 'VDOgate Team',
            role: 'Platform Insights'
        },
        date: '2025-11-20',
        readTime: '6 min read',
        views: 2400,
        image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
        featured: true
    },
    {
        id: 'blog-2',
        type: 'blog',
        title: 'Video-First Discovery: How VDOgate Helps Buyers See Real Skills',
        excerpt: 'Text profiles can\'t show what you can do. VDOgate\'s video-first approach lets buyers watch your actual work before hiring. No more guesswork, no more fake portfolios.',
        category: 'Platform Features',
        tags: ['Video Portfolio', 'Discovery', 'Trust Building'],
        author: {
            name: 'VDOgate Team',
            role: 'Platform Insights'
        },
        date: '2025-11-18',
        readTime: '5 min read',
        views: 1850,
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'blog-3',
        type: 'blog',
        title: 'Understanding VDOgate\'s 40-Minute Video Upload System',
        excerpt: 'Upload 40 minutes of video monthly. Videos stay for 2 months. If you stay within limits, they\'re never deleted. Learn how this system keeps your portfolio fresh and relevant.',
        category: 'Getting Started',
        tags: ['Video Upload', 'Storage', 'Portfolio Management'],
        author: {
            name: 'VDOgate Team',
            role: 'Platform Guide'
        },
        date: '2025-11-16',
        readTime: '7 min read',
        views: 3200,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'blog-4',
        type: 'blog',
        title: 'Category & Location Discovery: No Algorithms, No Suppression',
        excerpt: 'VDOgate lists freelancers by category and location only. No algorithms deciding who gets seen. No paid boosting. Your skill and location determine your visibility.',
        category: 'Platform Features',
        tags: ['Discovery', 'No Algorithm', 'Fair Visibility'],
        author: {
            name: 'VDOgate Team',
            role: 'Platform Insights'
        },
        date: '2025-11-14',
        readTime: '5 min read',
        views: 2100,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
    },

    // CASE STUDIES - Real VDOgate Success Stories
    {
        id: 'case-1',
        type: 'case-study',
        title: 'How a Yoga Instructor Tripled Revenue Using Live Events',
        excerpt: 'Priya from Mumbai used VDOgate\'s live events feature to host online yoga sessions. With 85% revenue share and no commission on direct bookings, she transformed her business in 3 months.',
        category: 'Fitness & Wellness',
        tags: ['Live Events', 'Revenue Growth', 'Online Teaching'],
        industry: 'Fitness & Wellness',
        author: {
            name: 'VDOgate Team',
            role: 'Success Stories'
        },
        date: '2025-11-12',
        readTime: '8 min read',
        views: 3500,
        image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop',
        metrics: {
            before: '₹15,000/month',
            after: '₹60,000/month',
            improvement: '+300%',
            timeframe: '3 months'
        }
    },
    {
        id: 'case-2',
        type: 'case-study',
        title: 'Makeup Artist Builds 50+ Client Base Through Video Portfolio',
        excerpt: 'Neha showcased her bridal makeup work through VDOgate\'s video portfolio. Category-based discovery helped local brides find her. Zero commission meant she kept all earnings.',
        category: 'Creative Services',
        tags: ['Video Portfolio', 'Client Acquisition', 'Zero Commission'],
        industry: 'Beauty & Personal Care',
        author: {
            name: 'VDOgate Team',
            role: 'Success Stories'
        },
        date: '2025-11-10',
        readTime: '7 min read',
        views: 2800,
        image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=1200&auto=format&fit=crop',
        metrics: {
            before: '0 clients',
            after: '50+ clients',
            improvement: '+5000%',
            timeframe: '2 months'
        }
    },
    {
        id: 'case-3',
        type: 'case-study',
        title: 'Business Coach Reaches Pan-India Audience with VDOgate',
        excerpt: 'Rajesh used VDOgate\'s location-flexible discovery to offer both online and offline coaching. Direct messaging and zero commission helped him scale from local to national.',
        category: 'Business Coaching',
        tags: ['Online/Offline', 'Scaling', 'Direct Communication'],
        industry: 'Professional Services',
        author: {
            name: 'VDOgate Team',
            role: 'Success Stories'
        },
        date: '2025-11-08',
        readTime: '9 min read',
        views: 2200,
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
        metrics: {
            before: '₹40,000/month',
            after: '₹1,20,000/month',
            improvement: '+200%',
            timeframe: '4 months'
        }
    },

    // FREELANCER STORIES
    {
        id: 'story-1',
        type: 'story',
        title: 'From Corporate Job to Full-Time Makeup Artist',
        excerpt: 'Neha quit her 9-to-5 to pursue makeup artistry. VDOgate\'s video portfolio and zero commission model gave her the confidence to make the leap.',
        category: 'Career Transition',
        tags: ['Career Change', 'Makeup Artist', 'Video Portfolio'],
        date: '2025-11-15',
        readTime: '6 min read',
        views: 4200,
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1200&auto=format&fit=crop',
        freelancer: {
            name: 'Neha Sharma',
            profession: 'Bridal Makeup Artist',
            location: 'Mumbai, Maharashtra',
            photo: '/makeup.png',
            achievements: [
                '50+ clients in first 2 months',
                '₹80,000 monthly revenue',
                'Zero commission on all bookings',
                '4.9 star rating from clients'
            ]
        },
        quote: 'VDOgate gave me the platform to showcase my real work. No more paying for ads or competing on follower counts. My portfolio speaks for itself.'
    },
    {
        id: 'story-2',
        type: 'story',
        title: 'Yoga Instructor Reaches 100+ Students Through Live Events',
        excerpt: 'Priya discovered VDOgate\'s live events feature and transformed her local yoga studio into a pan-India online business while keeping 85% of ticket revenue.',
        category: 'Revenue Milestone',
        tags: ['Yoga', 'Live Events', '85% Revenue Share'],
        date: '2025-11-13',
        readTime: '5 min read',
        views: 3800,
        image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
        freelancer: {
            name: 'Priya Mehta',
            profession: 'Certified Yoga Instructor',
            location: 'Bangalore, Karnataka',
            photo: '/yoga.png',
            achievements: [
                '100+ students enrolled',
                '₹60,000 monthly from live events',
                'Expanded to 3 cities online',
                'Minimum ₹99/hour pricing'
            ]
        },
        quote: 'Live events changed everything. I can now teach students from anywhere in India without leaving my home studio. The 85% revenue share means I actually make money.'
    },
    {
        id: 'story-3',
        type: 'story',
        title: 'Photographer Ditches Instagram Ads for VDOgate Video Portfolio',
        excerpt: 'Amit spent ₹15,000/month on Instagram ads with poor results. VDOgate\'s category-based discovery brought him quality clients without spending a rupee on promotion.',
        category: 'First Month Success',
        tags: ['Photography', 'No Ads', 'Category Discovery'],
        date: '2025-11-11',
        readTime: '6 min read',
        views: 3100,
        image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1200&auto=format&fit=crop',
        freelancer: {
            name: 'Amit Patel',
            profession: 'Wedding Photographer',
            location: 'Ahmedabad, Gujarat',
            photo: '/photographer.png',
            achievements: [
                'Saved ₹15,000/month on ads',
                '30+ bookings in first month',
                'Direct client communication',
                'Portfolio visible 24/7'
            ]
        },
        quote: 'I was burning money on ads. VDOgate\'s category listing brought me clients who were actually looking for photographers in Ahmedabad. No algorithms, no games.'
    },

    // FAQs - VDOgate Specific
    {
        id: 'faq-1',
        type: 'faq',
        title: 'How does the ₹2,999/month subscription work?',
        category: 'Pricing & Billing',
        faqCategory: 'Pricing & Billing',
        tags: ['Subscription', 'Pricing', 'Core Features'],
        date: '2025-11-01',
        question: 'How does the ₹2,999/month subscription work?',
        excerpt: 'The ₹2,999/month subscription includes 40 mins video upload, 2-month storage, 4,000 mins viewer delivery, and zero commission on direct services.',
        answer: 'The ₹2,999/month subscription (₹100/day) includes: (1) Upload up to 40 minutes of video monthly, (2) Videos stored for 2 months (never purged if within 40 min total), (3) 4,000 minutes of viewer watch time per month, (4) Discovery by category & location with no algorithms, (5) Direct buyer messaging, and (6) Zero commission on all direct services. This is a pre-launch offer for Founding Freelancers.',
        helpful: 342
    },
    {
        id: 'faq-2',
        type: 'faq',
        title: 'What are the live events pricing details?',
        category: 'Live Events',
        faqCategory: 'Live Events',
        tags: ['Live Events', 'Pricing', '85% Revenue'],
        date: '2025-11-01',
        question: 'What are the live events pricing details?',
        excerpt: 'Live events have a ₹199 activation fee. You set the ticket price (min ₹99/hr). You keep 85% of revenue, platform fee is 15%. Payouts in 4 days.',
        answer: 'Live events have a ₹199 activation fee per event. You decide the duration and set the ticket price (minimum ₹99/hour). VDOgate takes 15% platform fee, you keep 85%. Payouts are released within 4 days post-event after statutory deductions (TDS, etc.). Full refund to attendees if event fails due to technical issues.',
        helpful: 289
    },
    {
        id: 'faq-3',
        type: 'faq',
        title: 'How do I get discovered by clients on VDOgate?',
        category: 'Platform Features',
        faqCategory: 'Platform Features',
        tags: ['Discovery', 'Visibility', 'No Algorithm'],
        date: '2025-11-01',
        question: 'How do I get discovered by clients on VDOgate?',
        excerpt: 'Discovery is based on category and location only. No algorithms or paid boosting. Your video portfolio showcases your real skills to local clients.',
        answer: 'VDOgate lists you by category and location only. There are no algorithms, no paid promotions, and no follower-based ranking. Clients find you by browsing your category or searching by location (online/offline/hybrid). Your video portfolio helps them see your real skills. Your work decides your visibility — not platform politics.',
        helpful: 418
    },
    {
        id: 'faq-4',
        type: 'faq',
        title: 'What happens if I exceed 40 minutes of video uploads?',
        category: 'Platform Features',
        faqCategory: 'Platform Features',
        tags: ['Video Upload', 'Storage', 'Limits'],
        date: '2025-11-01',
        question: 'What happens if I exceed 40 minutes of video uploads?',
        excerpt: 'If you exceed 40 minutes, the oldest video is removed to stay within limits. If you stay within 40 minutes total, videos are never purged.',
        answer: 'If your total video portfolio exceeds 40 minutes, the system automatically removes only the oldest video to bring you back within the limit. If you stay within 40 minutes total, your videos are never purged. You can purchase additional upload minutes (₹25 per 10 minutes) if you need more.',
        helpful: 256
    },
    {
        id: 'faq-5',
        type: 'faq',
        title: 'Does VDOgate take commission on my services?',
        category: 'Pricing & Billing',
        faqCategory: 'Pricing & Billing',
        tags: ['Zero Commission', 'Earnings', 'Direct Services'],
        date: '2025-11-01',
        question: 'Does VDOgate take commission on my services?',
        excerpt: 'No commission on direct services. You keep 100% of earnings. We only charge the monthly subscription. Live events have a 15% platform fee.',
        answer: 'No. VDOgate charges zero commission on direct services. You communicate directly with clients and handle payments yourself. We only charge the ₹2,999/month subscription. For live events, we take 15% platform fee (you keep 85%), but direct 1-on-1 services have zero commission.',
        helpful: 395
    },
    {
        id: 'faq-6',
        type: 'faq',
        title: 'What is the Founding Freelancer program?',
        category: 'Getting Started',
        faqCategory: 'Getting Started',
        tags: ['Founding Freelancer', 'Pre-Launch', 'Benefits'],
        date: '2025-11-01',
        question: 'What is the Founding Freelancer program?',
        excerpt: 'Limited to first 500 freelancers. Includes Founders Badge, early access, and special rewards. Registration is free during pre-launch.',
        answer: 'The Founding Freelancer program is limited to the first 500 freelancers who join VDOgate pre-launch. Benefits include: Founders Badge on your profile, early access to new features, recognition in our community, and special rewards. Registration is free during pre-launch.',
        helpful: 312
    },

    // ANNOUNCEMENTS - VDOgate Platform Updates
    {
        id: 'announce-1',
        type: 'announcement',
        title: 'Live Events Feature Now Available for All Freelancers',
        excerpt: 'Host paid workshops, training sessions, coaching, performances, and more. Set your own ticket price (min ₹99/hour), pay ₹199 activation per event, and keep 85% of revenue. Payouts in 4 days.',
        category: 'New Features',
        tags: ['Live Events', 'Feature Launch', 'Monetization'],
        date: '2025-11-20',
        priority: 'high',
        announcementType: 'feature',
        image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'announce-2',
        type: 'announcement',
        title: 'Founding Freelancer Program: 330 Spots Remaining',
        excerpt: 'Due to overwhelming response, we\'re extending the Founding Freelancer program. Only 330 spots left out of 500. Get your Founders Badge, early access, and special recognition. Free pre-launch registration.',
        category: 'Platform Updates',
        tags: ['Founding Freelancer', 'Limited Offer', 'Pre-Launch'],
        date: '2025-11-18',
        priority: 'high',
        announcementType: 'update',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop'
    },
    {
        id: 'announce-3',
        type: 'announcement',
        title: 'Video Upload & Storage Policy Clarification',
        excerpt: 'Upload 40 minutes of video per month. Videos stored for 2 months. If total stays within 40 minutes, they\'re never deleted. Exceeding 40 minutes auto-removes oldest video only. Add-ons available for more storage.',
        category: 'Policy Changes',
        tags: ['Policy', 'Video Upload', 'Storage'],
        date: '2025-11-16',
        priority: 'medium',
        announcementType: 'policy'
    },
    {
        id: 'announce-4',
        type: 'announcement',
        title: 'Zero Commission Policy Confirmed for All Direct Services',
        excerpt: 'VDOgate will never take commission on your direct services. You keep 100% of what you earn from 1-on-1 clients. We only charge the ₹2,999/month subscription. Live events have 15% platform fee (you keep 85%).',
        category: 'Platform Updates',
        tags: ['Zero Commission', 'Policy', 'Transparency'],
        date: '2025-11-14',
        priority: 'high',
        announcementType: 'policy'
    }
]

// Helper functions
export const getResourcesByType = (type: Resource['type']) => {
    return SAMPLE_RESOURCES.filter(r => r.type === type)
}

export const getResourcesByCategory = (category: string) => {
    return SAMPLE_RESOURCES.filter(r => r.category === category)
}

export const getFeaturedResources = () => {
    return SAMPLE_RESOURCES.filter(r => r.featured)
}

export const searchResources = (query: string) => {
    const lowerQuery = query.toLowerCase()
    return SAMPLE_RESOURCES.filter(r =>
        r.title.toLowerCase().includes(lowerQuery) ||
        r.excerpt.toLowerCase().includes(lowerQuery) ||
        r.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    )
}

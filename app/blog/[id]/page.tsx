import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Twitter, Facebook, Linkedin, Link2, User, TrendingUp, Eye, MessageCircle, Heart, ChevronRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import type { Metadata } from 'next'
import DOMPurify from 'isomorphic-dompurify'
import CopyLinkButton from '@/components/blog/CopyLinkButton'

// Blog posts data (should match the data from blog listing page)
const blogPosts = [
  {
    id: 1,
    title: 'How to Build a Successful Freelance Career in India',
    excerpt: 'Learn the essential strategies to establish yourself as a freelancer and grow your business in the Indian market. Discover proven tactics from successful freelancers.',
    category: 'Career Growth',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-01-10',
    readTime: '5 min read',
    views: '2.4k',
    image: '/makeup.png',
    featured: true,
    content: `
      <p>Building a successful freelance career in India requires more than just skills—it demands strategic planning, consistent effort, and the right mindset. In this comprehensive guide, we'll walk you through the essential steps to establish yourself as a thriving freelancer in the Indian market.</p>

      <h2>1. Define Your Niche and Expertise</h2>
      <p>The first step to freelancing success is identifying your unique value proposition. Rather than being a generalist, focus on a specific niche where you can truly excel. Whether it's graphic design, content writing, web development, or digital marketing, specialization helps you:</p>
      <ul>
        <li>Stand out in a crowded marketplace</li>
        <li>Command higher rates for your expertise</li>
        <li>Build a stronger portfolio and reputation</li>
        <li>Attract clients who value specialized skills</li>
      </ul>

      <h2>2. Build a Strong Online Presence</h2>
      <p>In today's digital age, your online presence is your storefront. Create a professional profile on VDOgate and other platforms where your potential clients hang out. Key elements include:</p>
      <ul>
        <li><strong>Professional profile:</strong> Invest in a high-quality video introduction that showcases your personality and expertise</li>
        <li><strong>Portfolio:</strong> Showcase your best work with detailed case studies</li>
        <li><strong>Social proof:</strong> Collect and display testimonials from satisfied clients</li>
        <li><strong>Consistency:</strong> Maintain a consistent brand across all platforms</li>
      </ul>

      <h2>3. Set Competitive Yet Fair Pricing</h2>
      <p>Pricing is one of the most challenging aspects of freelancing. Research market rates in your niche and location, but don't undervalue your services. Consider:</p>
      <ul>
        <li>Your experience level and expertise</li>
        <li>The complexity and value of your work</li>
        <li>Local market conditions and client budgets</li>
        <li>Your operating costs and desired income</li>
      </ul>

      <blockquote>
        "Don't compete on price—compete on value. The right clients will always appreciate quality work."
      </blockquote>

      <h2>4. Master Client Communication</h2>
      <p>Effective communication is the backbone of successful client relationships. Always:</p>
      <ul>
        <li>Respond promptly to inquiries and messages</li>
        <li>Set clear expectations from the beginning</li>
        <li>Keep clients updated on project progress</li>
        <li>Be transparent about challenges and timelines</li>
        <li>Ask for feedback and implement improvements</li>
      </ul>

      <h2>5. Deliver Consistent Quality</h2>
      <p>Your reputation is your most valuable asset as a freelancer. Consistently delivering high-quality work will lead to:</p>
      <ul>
        <li>Repeat clients and long-term relationships</li>
        <li>Positive reviews and referrals</li>
        <li>Premium pricing opportunities</li>
        <li>A sustainable freelance business</li>
      </ul>

      <h2>6. Invest in Continuous Learning</h2>
      <p>The freelance landscape is constantly evolving. Stay ahead by:</p>
      <ul>
        <li>Learning new skills and tools in your niche</li>
        <li>Following industry trends and best practices</li>
        <li>Networking with other freelancers</li>
        <li>Taking courses and attending workshops</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Building a successful freelance career in India is a journey that requires patience, persistence, and continuous improvement. By focusing on these fundamental strategies and leveraging platforms like VDOgate, you can create a thriving freelance business that provides both financial stability and professional satisfaction.</p>

      <p>Ready to start your freelance journey? Join VDOgate today and connect with clients across India who are looking for talented professionals like you.</p>
    `
  },
  {
    id: 2,
    title: 'Video Profiles: Why They Matter for Freelancers',
    excerpt: 'Discover how video profiles can help you stand out and win more clients in the competitive freelance marketplace.',
    category: 'Platform Tips',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-01-08',
    readTime: '4 min read',
    views: '1.8k',
    image: '/gym.png',
    content: `
      <p>In the competitive world of freelancing, standing out from the crowd is essential. While traditional text profiles and portfolios have their place, video profiles are revolutionizing how freelancers connect with potential clients. Here's why video profiles matter and how they can transform your freelance career.</p>

      <h2>The Power of Video in Building Trust</h2>
      <p>Video allows potential clients to see and hear you, creating a personal connection that text and images alone cannot achieve. When clients can see your face, hear your voice, and observe your body language, they're more likely to trust you with their projects.</p>

      <h2>Key Benefits of Video Profiles</h2>
      <ul>
        <li><strong>Showcase Your Personality:</strong> Let your unique character shine through</li>
        <li><strong>Demonstrate Communication Skills:</strong> Show clients you can articulate ideas clearly</li>
        <li><strong>Build Credibility:</strong> Video makes you more memorable and trustworthy</li>
        <li><strong>Stand Out:</strong> Most freelancers still rely on text-only profiles</li>
      </ul>

      <h2>Creating an Effective Video Profile</h2>
      <p>Keep it concise (60-90 seconds), speak clearly, dress professionally, and most importantly, be authentic. Share your expertise, passion, and what makes you unique.</p>

      <blockquote>
        "A well-crafted video profile can increase your client inquiries by up to 300%."
      </blockquote>

      <h2>Conclusion</h2>
      <p>Video profiles are no longer optional—they're essential for freelancers who want to succeed in today's market. Start creating your video profile on VDOgate today and watch your freelance business grow.</p>
    `
  },
  {
    id: 3,
    title: 'Top 10 In-Demand Freelance Services in 2025',
    excerpt: 'Explore the most sought-after freelance services this year and how you can capitalize on these opportunities.',
    category: 'Industry Trends',
    author: 'VDOgate Team',
    authorBio: 'Market Research',
    authorImage: null,
    date: '2025-01-05',
    readTime: '6 min read',
    views: '3.2k',
    image: '/teacher.png',
    content: `
      <p>The freelance economy is booming, and certain services are in higher demand than ever. Whether you're just starting out or looking to pivot your freelance career, understanding market trends is crucial. Here are the top 10 most in-demand freelance services in 2025.</p>

      <h2>1. Video Editing and Production</h2>
      <p>With the explosion of video content across social media and business platforms, skilled video editors are in high demand. From YouTube creators to corporate marketing teams, everyone needs quality video content.</p>

      <h2>2. Social Media Management</h2>
      <p>Businesses of all sizes need help managing their social media presence. If you understand platforms like Instagram, LinkedIn, and emerging social networks, this could be your niche.</p>

      <h2>3. Content Writing and Copywriting</h2>
      <p>Quality content remains king. Businesses need blog posts, website copy, email campaigns, and more. Specialized niches like SEO writing and technical writing command premium rates.</p>

      <h2>4. Web Development</h2>
      <p>From simple landing pages to complex web applications, developers are always in demand. Skills in popular frameworks like React, Next.js, and WordPress are particularly valuable.</p>

      <h2>5. Graphic Design</h2>
      <p>Visual content drives engagement. Logo design, brand identity, social media graphics, and UI/UX design are consistently sought-after services.</p>

      <h2>6. Digital Marketing</h2>
      <p>SEO, PPC advertising, email marketing, and marketing strategy consulting are essential for businesses looking to grow online.</p>

      <h2>7. Virtual Assistance</h2>
      <p>As more businesses embrace remote work, virtual assistants who can handle administrative tasks, scheduling, and customer service are increasingly valuable.</p>

      <h2>8. Photography and Videography</h2>
      <p>Professional visual content for products, events, real estate, and personal branding continues to be in high demand across India.</p>

      <h2>9. Mobile App Development</h2>
      <p>With mobile-first becoming the norm, app developers skilled in iOS, Android, and cross-platform development are highly sought after.</p>

      <h2>10. Online Tutoring and Coaching</h2>
      <p>Education has moved online, creating opportunities for tutors, skill trainers, and life coaches to connect with students and clients remotely.</p>

      <h2>How to Capitalize on These Trends</h2>
      <p>Choose a service that aligns with your skills and interests, invest in learning and improvement, build a strong portfolio, and leverage platforms like VDOgate to connect with clients.</p>

      <h2>Conclusion</h2>
      <p>The freelance market in 2025 offers tremendous opportunities across diverse services. By positioning yourself in one of these high-demand areas and continuously improving your skills, you can build a thriving freelance career.</p>
    `
  },
  {
    id: 4,
    title: 'Pricing Your Freelance Services: A Complete Guide',
    excerpt: 'Master the art of pricing your services competitively while ensuring you earn what you deserve.',
    category: 'Business Tips',
    author: 'VDOgate Team',
    authorBio: 'Business Strategy',
    authorImage: null,
    date: '2025-01-03',
    readTime: '7 min read',
    views: '2.1k',
    image: '/chef.png',
    content: `
      <p>Pricing is one of the most challenging aspects of freelancing. Set your rates too low, and you'll struggle to make a living. Price too high, and you might scare away potential clients. This comprehensive guide will help you find the sweet spot.</p>

      <h2>Understanding Your Value</h2>
      <p>Before setting any prices, you need to understand the true value you provide to clients. Consider the problems you solve, the time you save them, and the revenue you help them generate.</p>

      <h2>Pricing Models Explained</h2>
      <h3>Hourly Pricing</h3>
      <p>Charging by the hour is straightforward but can limit your earnings as you get faster at your work. Best for ongoing projects with uncertain scope.</p>

      <h3>Project-Based Pricing</h3>
      <p>Fixed prices for defined deliverables. This model rewards efficiency and is preferred by many clients who want budget certainty.</p>

      <h3>Value-Based Pricing</h3>
      <p>Pricing based on the value you deliver rather than time spent. This is the most profitable model but requires confidence and clear communication.</p>

      <h3>Retainer Agreements</h3>
      <p>Monthly fees for ongoing services. Provides stable income and builds long-term client relationships.</p>

      <h2>Calculating Your Rates</h2>
      <p>Start by determining your desired annual income, add your business expenses, account for non-billable time, and divide by your available billable hours.</p>

      <blockquote>
        "Your pricing should reflect your expertise, not your desperation for work."
      </blockquote>

      <h2>Research Market Rates</h2>
      <p>Understand what others charge in your niche and location. Use this as a baseline, not a ceiling. Your unique experience and value proposition can justify premium pricing.</p>

      <h2>Communicating Your Prices</h2>
      <p>Be confident when discussing rates. Explain the value you provide, not just what you do. Be prepared to justify your pricing with examples of past results.</p>

      <h2>When to Raise Your Rates</h2>
      <ul>
        <li>You're consistently booked with more demand than you can handle</li>
        <li>You've gained significant experience or new skills</li>
        <li>Your results speak for themselves with proven ROI</li>
        <li>You want to work with higher-quality clients</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Pricing your freelance services is both an art and a science. Start with a solid foundation based on your costs and desired income, research market rates, and don't be afraid to adjust as you gain experience and confidence. Remember, the right clients will value quality work and be willing to pay fair prices.</p>
    `
  },
  {
    id: 5,
    title: 'Building Trust with Clients: Best Practices',
    excerpt: 'Learn how to establish credibility and build long-term relationships with your clients.',
    category: 'Client Relations',
    author: 'VDOgate Team',
    authorBio: 'Client Success',
    authorImage: null,
    date: '2025-01-01',
    readTime: '5 min read',
    views: '1.5k',
    image: '/yoga.png',
    content: `
      <p>Trust is the foundation of any successful freelance relationship. Without it, even the most skilled freelancer will struggle to retain clients and grow their business. Here's how to build and maintain trust with every client interaction.</p>

      <h2>Start with Clear Communication</h2>
      <p>From your first conversation, be clear about what you can deliver, when you can deliver it, and what it will cost. Ambiguity breeds mistrust, while clarity builds confidence.</p>

      <h2>Under-Promise and Over-Deliver</h2>
      <p>Set realistic expectations and then exceed them. If you say you'll deliver in a week, aim to finish in five days. This simple practice creates delighted clients who become loyal advocates.</p>

      <h2>Be Responsive and Available</h2>
      <p>Quick responses to messages show you value your clients' time. Even if you can't immediately address their concern, acknowledge receipt and provide a timeline for when you'll have a detailed response.</p>

      <h2>Maintain Professional Standards</h2>
      <ul>
        <li>Use professional communication tools and methods</li>
        <li>Keep detailed records of agreements and conversations</li>
        <li>Present work professionally with proper formatting and polish</li>
        <li>Meet deadlines consistently or communicate early if issues arise</li>
      </ul>

      <h2>Show Expertise Without Arrogance</h2>
      <p>Clients hire you for your expertise, so share your knowledge freely. Offer suggestions and improvements, but always respect their final decisions and preferences.</p>

      <blockquote>
        "Trust is earned in drops and lost in buckets. Guard it carefully."
      </blockquote>

      <h2>Handle Mistakes Gracefully</h2>
      <p>Everyone makes mistakes. When you do, acknowledge it quickly, take responsibility, and fix it without excuses. Clients remember how you handle problems more than the problems themselves.</p>

      <h2>Request and Act on Feedback</h2>
      <p>Regularly ask clients how you're doing and what you could improve. Then actually implement their suggestions. This shows you value their input and are committed to excellence.</p>

      <h2>Conclusion</h2>
      <p>Building trust takes time and consistent effort, but it's the most valuable investment you can make in your freelance career. Trusted freelancers enjoy repeat business, referrals, premium rates, and the satisfaction of genuine client relationships.</p>
    `
  },
  {
    id: 6,
    title: 'SEO for Freelancers: Get Found by Local Clients',
    excerpt: 'Optimize your online presence to attract more local clients and grow your freelance business.',
    category: 'Marketing',
    author: 'VDOgate Team',
    authorBio: 'Digital Marketing',
    authorImage: null,
    date: '2024-12-28',
    readTime: '8 min read',
    views: '2.7k',
    image: '/photograper.png',
    content: `
      <p>In the digital age, being found online is crucial for freelance success. While global freelance platforms are great, local clients often prefer working with nearby professionals. Here's how to optimize your online presence for local discovery.</p>

      <h2>Understanding Local SEO</h2>
      <p>Local SEO focuses on appearing in search results when people in your geographic area look for services you offer. For freelancers, this means showing up when someone searches for "web developer in Mumbai" or "freelance photographer Delhi."</p>

      <h2>Optimize Your VDOgate Profile</h2>
      <p>Your VDOgate profile is a powerful local SEO tool. Make sure to:</p>
      <ul>
        <li>Include your city and service areas in your profile</li>
        <li>Use location-specific keywords naturally in your description</li>
        <li>Showcase local projects and client testimonials</li>
        <li>Keep your profile complete and updated</li>
      </ul>

      <h2>Create Location-Specific Content</h2>
      <p>If you serve multiple locations, create content that mentions those areas. Blog about local industry trends, showcase local projects, and engage with local business communities online.</p>

      <h2>Leverage Google Business Profile</h2>
      <p>Even as a freelancer, you can create a Google Business Profile. This helps you appear in Google Maps and local search results. Include accurate information, regular updates, and encourage satisfied clients to leave reviews.</p>

      <h2>Build Local Citations</h2>
      <p>List your freelance business in local directories and industry-specific platforms. Consistency in your name, address, and phone number (NAP) across all platforms boosts local SEO.</p>

      <h2>Use Keywords Strategically</h2>
      <p>Research what local clients are searching for. Use tools like Google Keyword Planner to find popular search terms combining your service with your location.</p>

      <blockquote>
        "Local SEO isn't about gaming the system—it's about making it easy for nearby clients who need your services to find you."
      </blockquote>

      <h2>Gather and Showcase Reviews</h2>
      <p>Reviews are crucial for local SEO and building trust. Actively request reviews from satisfied clients on VDOgate, Google, and other relevant platforms. Respond to all reviews, positive and negative, professionally.</p>

      <h2>Mobile Optimization</h2>
      <p>Most local searches happen on mobile devices. Ensure your online presence, especially your website and portfolio, looks great and loads fast on smartphones.</p>

      <h2>Engage on Social Media Locally</h2>
      <p>Use location tags in your posts, engage with local businesses and potential clients, and share content relevant to your local community.</p>

      <h2>Conclusion</h2>
      <p>Local SEO for freelancers is about being visible when nearby clients are looking for your services. By optimizing your VDOgate profile, creating location-specific content, and building a strong local online presence, you can attract more clients from your area and grow your freelance business sustainably.</p>
    `
  },
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params
  const idNum = parseInt(resolvedParams.id, 10)
  const post = Number.isFinite(idNum) ? blogPosts.find(p => p.id === idNum) : undefined
  if (!post) {
    return {
      title: 'Post Not Found | VDOgate Blog'
    }
  }
  const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'
  const absoluteImage = new URL(post.image, site).toString()
  const title = post.title
  const description = post.excerpt
  const images = [{ url: absoluteImage, width: 1200, height: 630, alt: post.title }]
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      images,
      publishedTime: new Date(post.date).toISOString()
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map(i => i.url)
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  // Await params for Next.js 15 compatibility
  const resolvedParams = await params
  const postId = parseInt(resolvedParams.id, 10)
  if (!Number.isFinite(postId)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline-lg font-bold text-brand-black mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-portal-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }
  const post = blogPosts.find(p => p.id === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-headline-lg font-bold text-brand-black mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-portal-primary hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  // Get related posts (same category, excluding current post)
  const relatedPosts = blogPosts
    .filter(p => p.category === post.category && p.id !== post.id)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Header Spacing */}
      <div className="h-24" />

      {/* Back to Blog Button */}
      <section className="py-6 border-b border-neutral-gray-lighter bg-neutral-background">
        <div className="container-custom">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-gray-dark hover:text-portal-primary transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] bg-neutral-background">
        <div className="absolute inset-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        {/* Hero Content Overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-12 md:pb-16 lg:pb-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-portal-gradient text-white text-xs md:text-sm font-bold rounded-xl uppercase tracking-wide shadow-portal-sm">
                  {post.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                {post.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/90">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm md:text-base">
                    {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm md:text-base">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm md:text-base">{post.views} views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="py-12 md:py-16 lg:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
              {/* Sidebar - Author & Actions */}
              <aside className="lg:col-span-3 order-2 lg:order-1">
                <div className="lg:sticky lg:top-32 space-y-8">
                  {/* Author Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-gradient-to-br from-orange-50/50 to-amber-50/30 rounded-2xl p-6 border border-orange-100/50"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-portal-gradient rounded-full flex items-center justify-center shadow-portal-sm">
                        <User className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-brand-black">{post.author}</h3>
                        <p className="text-sm text-neutral-gray">{post.authorBio}</p>
                      </div>
                    </div>
                    <p className="text-sm text-neutral-gray-dark leading-relaxed">
                      Sharing insights and strategies to help freelancers succeed on VDOgate
                    </p>
                  </motion.div>

                  {/* Social Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-3"
                  >
                    <p className="text-sm font-semibold text-neutral-gray-dark mb-4">Share this article</p>

                    <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'}/blog/${post.id}`)}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-neutral-gray-lighter hover:border-portal-primary hover:bg-portal-primary/5 transition-all duration-300 group" aria-label="Share on Twitter">
                      <div className="w-8 h-8 bg-[#1DA1F2] rounded-lg flex items-center justify-center">
                        <Twitter className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-gray-dark group-hover:text-portal-primary">Twitter</span>
                    </a>

                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'}/blog/${post.id}`)}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-neutral-gray-lighter hover:border-portal-primary hover:bg-portal-primary/5 transition-all duration-300 group" aria-label="Share on Facebook">
                      <div className="w-8 h-8 bg-[#4267B2] rounded-lg flex items-center justify-center">
                        <Facebook className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-gray-dark group-hover:text-portal-primary">Facebook</span>
                    </a>

                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'}/blog/${post.id}`)}`} target="_blank" rel="noopener noreferrer" className="w-full flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-neutral-gray-lighter hover:border-portal-primary hover:bg-portal-primary/5 transition-all duration-300 group" aria-label="Share on LinkedIn">
                      <div className="w-8 h-8 bg-[#0A66C2] rounded-lg flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium text-neutral-gray-dark group-hover:text-portal-primary">LinkedIn</span>
                    </a>

                    <CopyLinkButton url={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'}/blog/${post.id}`} />
                  </motion.div>

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-3"
                  >
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-portal-primary/5 text-portal-primary rounded-xl font-semibold hover:bg-portal-primary hover:text-white transition-all duration-300">
                      <Bookmark className="w-4 h-4" />
                      Save Article
                    </button>
                    <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white border border-neutral-gray-lighter text-neutral-gray-dark rounded-xl font-semibold hover:border-portal-primary hover:text-portal-primary transition-all duration-300">
                      <Heart className="w-4 h-4" />
                      Like
                    </button>
                  </motion.div>
                </div>
              </aside>

              {/* Article Content */}
              <div className="lg:col-span-9 order-1 lg:order-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="prose prose-lg max-w-none
                    prose-headings:font-bold prose-headings:text-brand-black prose-headings:tracking-tight
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                    prose-p:text-neutral-gray-dark prose-p:leading-relaxed prose-p:mb-6 prose-p:text-lg
                    prose-a:text-portal-primary prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-brand-black prose-strong:font-semibold
                    prose-ul:my-6 prose-ul:space-y-2
                    prose-li:text-neutral-gray-dark prose-li:leading-relaxed
                    prose-blockquote:border-l-4 prose-blockquote:border-portal-primary prose-blockquote:bg-orange-50/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
                    prose-blockquote:text-brand-black prose-blockquote:font-medium prose-blockquote:text-xl"
                  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
                />

                {/* Post Footer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-16 pt-8 border-t border-neutral-gray-lighter"
                >
                  <p className="text-sm text-neutral-gray text-center">
                    Share this article using the buttons in the sidebar, or scroll down to see related articles.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            image: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://vdogate.com'}${post.image}`],
            datePublished: new Date(post.date).toISOString(),
            author: { '@type': 'Organization', name: post.author },
            description: post.excerpt
          })
        }}
      />

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 bg-neutral-background">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-12">
                <h2 className="text-headline-lg md:text-display-md font-bold text-brand-black">
                  Related Articles
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-portal-primary font-semibold hover:gap-3 transition-all duration-300"
                >
                  View All
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.id}`} className="group block h-full">
                      <article className="bg-white rounded-2xl overflow-hidden shadow-elevation-2 hover:shadow-elevation-4 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                        <div className="relative aspect-[4/3] overflow-hidden bg-neutral-background">
                          <Image
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <span className="inline-block px-2.5 py-1 bg-portal-primary/10 text-portal-primary text-xs font-bold rounded-lg uppercase tracking-wide mb-3 w-fit">
                            {relatedPost.category}
                          </span>
                          <h3 className="text-headline-sm font-bold text-brand-black mb-3 leading-tight group-hover:text-portal-primary transition-colors duration-300 line-clamp-2">
                            {relatedPost.title}
                          </h3>
                          <p className="text-body-md text-neutral-gray-dark leading-relaxed line-clamp-2 flex-1">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-2 text-xs text-neutral-gray mt-4 pt-4 border-t border-neutral-gray-lighter">
                            <Clock className="w-3 h-3" />
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-portal-primary to-portal-dark">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center text-white"
          >
            <h2 className="text-headline-lg md:text-display-md font-bold mb-6">
              Ready to Start Your Freelance Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed">
              Join thousands of freelancers building successful careers on VDOgate
            </p>
            <Link
              href="/#founding-creator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-portal-primary rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Join the Platform
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

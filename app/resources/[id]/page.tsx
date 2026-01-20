'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Calendar, Clock, ArrowLeft, Share2, Bookmark, Twitter, Facebook, Linkedin, Link2, User, TrendingUp, Eye, MessageCircle, Heart, ChevronRight } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { fadeInUp, staggerContainer, staggerItem, viewportOptions } from '@/lib/animations'
import DOMPurify from 'isomorphic-dompurify'
import CopyLinkButton from '@/components/blog/CopyLinkButton'

// Blog posts data (should match the data from blog listing page)
const blogPosts = [
  {
    id: 1,
    title: 'How Can a Freelancer Without an Establishment Promote Themselves?',
    excerpt: 'Most freelancers start with only their skills and a laptop - but how do they promote themselves without ads, agencies, or an office? Here\'s the reality and the way forward.',
    category: 'Freelancing',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-11-12',
    readTime: '5 min read',
    views: '1.2k',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop',
    featured: true,
    content: `
      <div class="blog-intro mb-12 pb-8 border-b-2 border-neutral-gray-lighter">
        <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-gray-dark">Not every freelancer starts with a studio, an office, or a team. Most begin with just <strong>a skill, a laptop, and determination</strong> - but soon hit a wall: visibility. How do you promote yourself as a <strong>freelancer in India</strong> when you don't have an establishment, clients, or ad budget?</p>
      </div>

      <h2>The Visibility Struggle: What's Broken Today</h2>
      <p>The internet promised opportunity for everyone. But in practice, <strong>online visibility for freelancers</strong> has become a <strong>pay-to-play game</strong>. Independent professionals are told to run ads, pay to boost profiles, or post endlessly to feed algorithms. It's exhausting - and unfair.</p>

      <p>A graphic designer spends more time chasing reach than designing. A yoga instructor shares free content hoping for clients. A makeup artist struggles to find local clients. The problem isn't talent - it's <strong>the lack of affordable visibility for skilled professionals</strong>.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Why Traditional Platforms Fail Freelancers</h2>
      <p>Most digital platforms were never designed for <strong>independent service providers</strong> - they were built for advertisers or marketplace commissions. Visibility depends on budgets, not skill. Freelancers who can't pay remain invisible to potential clients searching for services.</p>

      <p>That's why platforms like <a href="/" class="text-portal-primary font-semibold hover:underline">VDOgate</a> are revolutionizing how freelancers connect with clients - through authentic <strong>video profiles</strong> that showcase real skills, not paid promotions.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>What Freelancers Actually Need for Success</h2>
      <p>Freelancers don't need "viral." They need <em>visibility that converts into paying clients.</em> A fair marketplace where:</p>
      <ul>
        <li><strong>Talent and skill speak louder than advertising budgets</strong></li>
        <li><strong>Video profiles showcase expertise directly to local clients</strong></li>
        <li><strong>Service providers connect with clients without platform commissions</strong></li>
      </ul>
      <p>When discovery becomes merit-based rather than budget-based, sustainable freelance growth follows naturally. <a href="/#founding-creator" class="text-portal-primary font-semibold hover:underline">Join VDOgate as a Founding Creator</a> to build your client base without expensive ads.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Video Profiles: The New Digital Storefront for Freelancers</h2>
      <p>Your screen is now your storefront. A hairstylist can demonstrate a cutting technique, a dance coach can teach a routine, a business consultant can share insights - all through <strong>professional video profiles</strong>. It's affordable, direct, and authentic.</p>

      <p>Unlike text-based portfolios or static images, <strong>video profiles on VDOgate</strong> allow potential clients to see your personality, communication style, and expertise before reaching out. This builds trust and filters for serious inquiries.</p>

      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-portal-primary p-8 rounded-r-2xl my-12 shadow-sm">
        <p class="text-lg font-semibold text-brand-black mb-2">Key Insight for Freelancers</p>
        <p class="text-base text-neutral-gray-dark mb-0">Video-based discovery replaces expensive advertising with authenticity, helping freelancers in India build sustainable client relationships without ongoing marketing costs.</p>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Conclusion: The Future of Freelance Marketing</h2>
      <p>Tomorrow's most successful <strong>freelancers and independent professionals</strong> won't have the biggest ad budgets or fancy offices - they'll have the strongest <strong>video presence and authentic client connections</strong>. <strong>Change is coming to India's freelance economy - one video profile at a time.</strong></p>

      <p>Ready to showcase your skills without paying for ads? <a href="/#founding-creator" class="text-portal-primary font-semibold hover:underline">Create your free video profile on VDOgate</a> and connect with clients in your city today.</p>
    `
  },
  {
    id: 2,
    title: 'The Hidden Costs of Freelancing: Commissions, Algorithms & Paid Visibility',
    excerpt: 'Freelancing promises freedom, but hidden costs like commissions and ad spend quietly eat away at real income.',
    category: 'Freelancing',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-11-13',
    readTime: '6 min read',
    views: '980',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <div class="blog-intro mb-12 pb-8 border-b-2 border-neutral-gray-lighter">
        <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-gray-dark">Freelancing sounds like freedom - no boss, no fixed hours, no ceiling on income. But for <strong>freelancers in India</strong> and worldwide, behind that freedom lie <strong>commissions, ad spends, and algorithm games</strong> that quietly drain earnings from <strong>independent professionals</strong>.</p>
      </div>

      <h2>The Unseen Expenses</h2>
      <p>Every <strong>freelancer in India</strong> depends on platforms - job boards, <strong>freelance marketplaces</strong>, social media - but each has a cost, even if it doesn't look like one. <strong>Service providers</strong> struggle to maintain profitability when platform fees consume their hard-earned income.</p>

      <div class="overflow-x-auto my-12">
        <table class="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead class="bg-gradient-to-r from-orange-50 to-amber-50">
            <tr>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">Platform Type</th>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">What You Pay</th>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">How You Lose</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Job Portals</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">10–20% commission</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Competing for the lowest rate</td>
            </tr>
            <tr class="bg-neutral-background/30 hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Freelance Marketplaces</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">Service fee</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Platform owns your client relationship</td>
            </tr>
            <tr class="bg-white hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Social Media</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">Ad spend or boosts</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Paid reach replaces organic growth</td>
            </tr>
            <tr class="bg-neutral-background/30 hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Video Sites</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">Monetization thresholds</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Delayed earnings, dependence on visibility metrics</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>The Algorithm Tax</h2>
      <p>Even without paying upfront, <strong>Indian freelancers</strong> and <strong>service providers</strong> pay a hidden price - <strong>algorithmic dependence</strong>. What's seen or ignored depends on invisible filters that reward paid reach. For <strong>independent professionals</strong> trying to connect with <strong>local clients in India</strong>, this creates an unfair disadvantage.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Why It Persists</h2>
      <p>Traditional <strong>freelance platforms</strong> profit from keeping creators chasing visibility. Engagement benefits the platform - not the freelancer. <strong>Views don't equal clients; likes don't equal income.</strong> This is especially challenging for <strong>service providers</strong> seeking <strong>direct client connections</strong> without intermediaries.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>From Algorithms to Authenticity</h2>
      <p>Video shifts the power back. Platforms like <a href="/" class="text-portal-primary font-semibold hover:underline">VDOgate</a> use <strong>video-based discovery</strong> to show the <em>real person behind the skill</em>, without relying on paid promotion. <strong>Video profiles</strong> allow <strong>local clients</strong> to discover authentic talent. Clients trust faces, not feeds.</p>

      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-portal-primary p-8 rounded-r-2xl my-12 shadow-sm">
        <p class="text-lg font-semibold text-brand-black mb-2">Key Takeaway for Indian Freelancers</p>
        <p class="text-base text-neutral-gray-dark mb-0">True freedom begins when visibility stops being for sale. Commission-free platforms with video profiles enable direct client connections without algorithmic barriers.</p>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Conclusion: Breaking Free from Hidden Costs</h2>
      <p><strong>Freelancers in India</strong> and <strong>independent professionals</strong> worldwide don't need to keep paying rent to the landlords of digital attention. <strong>True freedom begins when visibility stops being for sale.</strong></p>

      <p>The future of freelancing is <strong>commission-free</strong>, built on <strong>video-based discovery</strong> and <strong>direct client connections</strong>. Ready to keep 100% of what you earn? <a href="/#founding-creator" class="text-portal-primary font-semibold hover:underline">Join VDOgate as a Founding Creator</a> and connect with <strong>local clients in India</strong> through your authentic <strong>video profile</strong> - no commissions, no ad spend, no algorithm games.</p>
    `
  },
  {
    id: 3,
    title: 'Why Most Freelancers Struggle to Be Seen Without Paying for Ads',
    excerpt: 'Visibility today has become a paid privilege - but skill, not ad spend, should decide who gets discovered.',
    category: 'Visibility',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-11-14',
    readTime: '5 min read',
    views: '1.5k',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    content: `
      <div class="blog-intro mb-12 pb-8 border-b-2 border-neutral-gray-lighter">
        <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-gray-dark">Posting daily, engaging with comments, and still invisible? You're not alone. For <strong>freelancers in India</strong> and <strong>independent professionals</strong> worldwide, visibility has quietly turned into a <strong>paid privilege</strong>, where success depends less on skill and more on spend.</p>
      </div>

      <h2>The Death of Organic Reach</h2>
      <p>A few years ago, a great post could reach thousands. Today, organic visibility on major social platforms has dropped to <strong>single digits</strong>. <strong>Service providers</strong> and <strong>freelancers in India</strong> must now "pay to play" to connect with <strong>local clients</strong>.</p>

      <div class="overflow-x-auto my-12">
        <table class="w-full border-collapse rounded-lg overflow-hidden shadow-sm">
          <thead class="bg-gradient-to-r from-orange-50 to-amber-50">
            <tr>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">Platform Type</th>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">Avg. Organic Reach</th>
              <th class="px-6 py-4 text-left font-bold text-brand-black border border-neutral-gray-lighter">Trend</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Social Media</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">5–8%</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Declining</td>
            </tr>
            <tr class="bg-neutral-background/30 hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Professional Networks</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">4–6%</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Declining</td>
            </tr>
            <tr class="bg-white hover:bg-neutral-background/50 transition-colors">
              <td class="px-6 py-4 border border-neutral-gray-lighter font-medium">Video Platforms</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter text-portal-primary font-semibold">Algorithm-based</td>
              <td class="px-6 py-4 border border-neutral-gray-lighter">Competitive</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p><strong>Indian freelancers</strong> and <strong>service providers</strong> who once relied on discovery now face a wall - built by ad models that reward budgets, not merit. Finding <strong>local clients in India</strong> becomes nearly impossible without paid advertising.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>The Trap</h2>
      <p>Traditional <strong>freelance platforms</strong> promote the idea that visibility equals success. But visibility without conversion is vanity. <strong>Independent professionals</strong> might pay for thousands of impressions - and gain no paying <strong>local clients</strong>.</p>

      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-portal-primary p-8 rounded-r-2xl my-12 shadow-sm">
        <p class="text-lg font-semibold text-brand-black mb-2">Key Insight for Service Providers</p>
        <p class="text-base text-neutral-gray-dark mb-0">Visibility without conversion is vanity - you might pay for thousands of impressions and gain no paying clients. Real success comes from direct client connections, not paid reach.</p>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Who Benefits?</h2>
      <p>Not <strong>freelancers in India</strong>. Ad systems are made for brands with budgets. Solo <strong>service providers</strong> can't afford to pay for every click. The promise of equal opportunity on traditional <strong>freelance marketplaces</strong> becomes an illusion.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>The Shift: Purposeful Reach Through Video</h2>
      <p>The new question for <strong>independent professionals</strong> is: <strong>Where can I show my skill directly?</strong> On <a href="/" class="text-portal-primary font-semibold hover:underline">VDOgate</a>, your work speaks through <strong>video profiles</strong> - teaching, showing, demonstrating. <strong>Video-based discovery</strong> means you don't chase algorithms. Your expertise becomes your marketing, and <strong>local clients</strong> can find you based on authentic skill showcase.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Conclusion: Skill Over Spend</h2>
      <p>Visibility should be earned through skill, not spend. <strong>Soon, freelancers in India won't need to boost posts to be seen - they'll just need to show their skill.</strong></p>

      <p>The future belongs to <strong>independent professionals</strong> who leverage <strong>video profiles</strong> for authentic client discovery. Ready to be found by <strong>local clients in India</strong> based on your real skills? <a href="/#founding-creator" class="text-portal-primary font-semibold hover:underline">Create your free video profile on VDOgate</a> and experience <strong>commission-free</strong>, <strong>video-based discovery</strong> that puts talent first - no ads required.</p>
    `
  },
  {
    id: 4,
    title: 'Can You Really Grow Without Paying a Platform or Middleman?',
    excerpt: 'Modern freelancing is filled with middlemen - platforms, agencies, aggregators. Can real independence exist without them?',
    category: 'Self-Promotion',
    author: 'VDOgate Team',
    authorBio: 'Platform Insights',
    authorImage: null,
    date: '2025-11-15',
    readTime: '6 min read',
    views: '1.8k',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
    content: `
      <div class="blog-intro mb-12 pb-8 border-b-2 border-neutral-gray-lighter">
        <p class="text-xl md:text-2xl font-light leading-relaxed text-neutral-gray-dark">Growing your freelance career without paying a platform or agency seems impossible - but why should it be? For <strong>freelancers in India</strong> and <strong>independent professionals</strong> everywhere, if your skill creates value, why must a middleman profit from every connection?</p>
      </div>

      <h2>The Middleman Economy</h2>
      <p><strong>Service providers</strong> and <strong>freelancers in India</strong> often rely on traditional <strong>freelance platforms</strong> that charge fees or commissions to manage visibility. They promise convenience but create <strong>dependency</strong>. The freelancer's relationship with <strong>local clients</strong> becomes the platform's asset, not yours.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>How Value Gets Captured</h2>
      <ol>
        <li>You join a <strong>freelance marketplace</strong> for free.</li>
        <li>You build reputation and connections with <strong>local clients in India</strong>.</li>
        <li>The system monetizes your connections - via commissions, listings, or ads.</li>
      </ol>
      <p>Soon, the <strong>direct client connections</strong> you built belong to the intermediary. As an <strong>independent professional</strong>, you lose control over your most valuable asset.</p>

      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-portal-primary p-8 rounded-r-2xl my-12 shadow-sm">
        <p class="text-lg font-semibold text-brand-black mb-2">Key Insight for Indian Freelancers</p>
        <p class="text-base text-neutral-gray-dark mb-0">The client relationship you built belongs to the intermediary - not to you. True independence means owning your connections with local clients.</p>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>What Real Independence Means</h2>
      <p>True independence for <strong>service providers</strong> and <strong>freelancers in India</strong> is when they:</p>
      <ul>
        <li>Own <strong>direct client connections</strong> with <strong>local clients</strong></li>
        <li>Control how their work is seen through authentic <strong>video profiles</strong></li>
        <li>Keep 100% of what they earn - <strong>commission-free</strong></li>
      </ul>
      <p><strong>Freelance platforms</strong> like <a href="/" class="text-portal-primary font-semibold hover:underline">VDOgate</a> should enable, not mediate. A fair system is a bridge, not a toll booth. <strong>Video-based discovery</strong> creates transparency without intermediaries taking a cut.</p>

      <div class="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-portal-primary p-8 rounded-r-2xl my-12 shadow-sm">
        <p class="text-lg font-semibold text-brand-black mb-2">Key Insight</p>
        <p class="text-base text-neutral-gray-dark mb-0">Platforms should enable, not mediate. A fair system is a bridge, not a toll booth. Commission-free platforms empower independent professionals.</p>
      </div>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>The Road Ahead: Video-Based Discovery</h2>
      <p>Imagine showing your skill through authentic <strong>video profiles</strong>, <strong>local clients in India</strong> connecting directly, and payments flowing transparently - <strong>without gatekeepers</strong>. That's where freelancing is headed.</p>

      <p>On <a href="/" class="text-portal-primary font-semibold hover:underline">VDOgate</a>, <strong>independent professionals</strong> create compelling <strong>video profiles</strong> that showcase their expertise to <strong>local clients</strong>. No commissions. No algorithms. Just <strong>direct client connections</strong> based on authentic skill and <strong>video-based discovery</strong>.</p>

      <div class="my-12 border-t-2 border-neutral-gray-lighter"></div>

      <h2>Conclusion: The Stage, Not the Middleman</h2>
      <p><strong>Freelancers in India</strong> and <strong>independent professionals</strong> don't need another middleman - they need a stage. Because when the middleman disappears, <strong>authentic growth finally begins.</strong></p>

      <p>The future belongs to <strong>service providers</strong> who control their own destinies. Ready to own your client relationships and keep 100% of your earnings? <a href="/#founding-creator" class="text-portal-primary font-semibold hover:underline">Join VDOgate as a Founding Creator</a> and experience true independence through <strong>commission-free</strong>, <strong>video-based discovery</strong>. Connect with <strong>local clients</strong> directly, showcase your skills through authentic <strong>video profiles</strong>, and build a sustainable freelance career without middlemen taking their cut.</p>
    `
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const postId = parseInt(params.id as string, 10)
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
                    prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:leading-tight prose-h2:font-extrabold
                    prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:font-bold
                    prose-p:text-neutral-gray-dark prose-p:leading-[1.8] prose-p:mb-6 prose-p:text-lg
                    prose-a:text-portal-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                    prose-strong:text-brand-black prose-strong:font-bold
                    prose-em:text-portal-primary prose-em:font-medium prose-em:not-italic
                    prose-ul:my-8 prose-ul:space-y-3 prose-ul:list-disc prose-ul:pl-6
                    prose-ol:my-8 prose-ol:space-y-3 prose-ol:list-decimal prose-ol:pl-6
                    prose-li:text-neutral-gray-dark prose-li:leading-[1.8] prose-li:text-lg prose-li:pl-2
                    prose-blockquote:border-l-4 prose-blockquote:border-portal-primary prose-blockquote:bg-orange-50/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:my-8
                    prose-blockquote:text-brand-black prose-blockquote:font-medium prose-blockquote:text-xl
                    prose-table:my-8 prose-table:w-full prose-table:border-collapse
                    prose-thead:bg-orange-50
                    prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-bold prose-th:text-brand-black prose-th:border prose-th:border-neutral-gray-lighter
                    prose-td:px-4 prose-td:py-3 prose-td:text-neutral-gray-dark prose-td:border prose-td:border-neutral-gray-lighter
                    prose-tr:even:bg-neutral-background/30"
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

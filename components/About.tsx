'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Heart, Users, TrendingUp, Shield, Sparkles, Award } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

const milestones = [
  {
    year: 'Q4 2024',
    title: 'The Vision',
    description: 'VDOgate was conceived with a mission to transform how creators build sustainable businesses in India',
  },
  {
    year: 'Q1 2025',
    title: 'Platform Development',
    description: 'Building a video-first platform focused on search-based discovery and fair creator monetization',
  },
  {
    year: 'Q2 2025',
    title: 'Founding Creators Program',
    description: 'Pre-launch registration opens for founding creators with lifetime benefits and 95% revenue share',
  },
  {
    year: 'Q3 2025',
    title: 'Beta Launch',
    description: 'Platform goes live with founding creators, beginning our journey to empower creators across India',
  },
]

const coreValues = [
  {
    icon: Heart,
    title: 'Creator-First Always',
    description: 'Every decision we make starts with one question: Is this good for creators? We exist to serve the creator community, not the other way around.',
    color: 'from-portal-light to-portal-primary',
  },
  {
    icon: Shield,
    title: 'Fair & Transparent',
    description: 'No hidden fees, no algorithm games, no platform lock-in. We believe in honest business practices and clear communication with our creators.',
    color: 'from-gate-blue to-gate-blue',
  },
  {
    icon: TrendingUp,
    title: 'Growth Through Value',
    description: 'We grow when creators grow. Our success is directly tied to creator success, which keeps our incentives aligned with yours.',
    color: 'from-portal-primary to-portal-light',
  },
  {
    icon: Award,
    title: 'Quality Over Quantity',
    description: 'We prioritize meaningful connections between creators and clients over vanity metrics. Real business, real results.',
    color: 'from-portal-light to-portal-lighter',
  },
]

const stats = [
  { number: '85%', label: 'Creator Revenue Share' },
  { number: 'Q3 2025', label: 'Expected Launch' },
  { number: '500', label: 'Founding Creator Spots' },
  { number: '0', label: 'Hidden Fees' },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-portal-primary/5 via-white to-portal-light/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-portal-primary rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-portal-light rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-portal-primary/10 border border-portal-primary/20 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-portal-primary" />
              <span className="text-sm font-medium text-portal-primary">About VDOgate</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Building the Professional Gateway to <br />
              <span className="text-gradient">Creator Success</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-gray-dark mb-8 leading-relaxed">
              We're building a platform where creators are discovered by their skills, not their follower count.
              Where revenue share is fair. Where algorithms don't decide your reach. <strong>Coming Soon.</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founding Team Foreword Section */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-portal-primary/[0.02] to-transparent" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-portal-primary/10 border border-portal-primary/20 rounded-full mb-6"
              >
                <Heart className="w-4 h-4 text-portal-primary" />
                <span className="text-sm font-medium text-portal-primary">A Letter from Our Founders</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                Why We're Building <span className="text-gradient">VDOgate</span>
              </h2>
            </div>

            {/* Main Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="bg-gradient-to-br from-white to-portal-primary/[0.02] rounded-3xl p-8 md:p-12 shadow-elevation-3 border border-neutral-gray-lighter"
            >
              {/* Opening Quote */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div className="text-6xl text-portal-primary/20 font-serif leading-none">"</div>
                  <p className="text-2xl md:text-3xl font-light text-neutral-gray-dark italic leading-relaxed pt-4">
                    Every creator deserves to be discovered by their skills, not their follower count.
                  </p>
                </div>
              </motion.div>

              {/* Main Blog Content */}
              <div className="prose prose-lg max-w-none">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="space-y-6 text-neutral-gray-dark leading-relaxed"
                >
                  <p className="text-lg">
                    We started VDOgate because we've seen it firsthand—talented creators, skilled professionals, passionate educators—all struggling to turn their expertise into sustainable income. Not because they lack skills, but because the platforms they depend on have broken incentives.
                  </p>

                  <p className="text-lg">
                    <strong className="text-brand-black">We've watched makeup artists with years of experience</strong> get buried by algorithms because they don't post dance videos. We've seen fitness coaches compromise their expertise to chase viral trends. We've met photographers who spend more time gaming algorithms than actually taking photos.
                  </p>

                  <p className="text-lg">
                    This isn't right. And we knew we had to do something about it.
                  </p>

                  {/* Highlighted Section */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="my-8 p-6 md:p-8 bg-portal-primary/5 border-l-4 border-portal-primary rounded-r-2xl"
                  >
                    <p className="text-lg font-medium text-brand-black mb-4">
                      The truth is simple:
                    </p>
                    <p className="text-lg">
                      Platforms take 30-40% of creator earnings while giving them zero control over visibility. Algorithms prioritize engagement over expertise. And creators are left fighting for scraps, dependent on systems that don't care about their success.
                    </p>
                  </motion.div>

                  <p className="text-lg">
                    <strong className="text-brand-black">VDOgate is different by design.</strong> We built search-based discovery because skills should speak louder than follower counts. We offer 85% revenue share (95% for founding creators) because creators deserve fair compensation. We focus on local, service-based creators because that's where real business happens—not in viral moments, but in genuine client relationships.
                  </p>

                  <p className="text-lg">
                    We're not building another social media platform. We're building a professional gateway—a place where creators can build sustainable businesses, where clients find experts they can trust, and where algorithms don't decide your worth.
                  </p>

                  {/* Interactive Promise Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="my-10 bg-gradient-to-br from-portal-primary/10 to-portal-light/10 rounded-2xl p-8"
                  >
                    <h3 className="text-2xl font-bold text-brand-black mb-6 flex items-center gap-3">
                      <Shield className="w-7 h-7 text-portal-primary" />
                      Our Promise to You
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-base">
                          <strong className="text-brand-black">Transparent operations:</strong> No hidden fees, no algorithm surprises, no bait-and-switch tactics
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="text-base">
                          <strong className="text-brand-black">Creator-first decisions:</strong> Your feedback shapes our roadmap, always
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gate-blue rounded-full mt-2 flex-shrink-0" />
                        <p className="text-base">
                          <strong className="text-brand-black">Fair economics:</strong> We only grow when you grow, keeping our incentives aligned
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-portal-light rounded-full mt-2 flex-shrink-0" />
                        <p className="text-base">
                          <strong className="text-brand-black">Long-term thinking:</strong> Building for creator success over decades, not quick exits
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  <p className="text-lg">
                    This is personal for us. We're not building VDOgate as spectators—we're building it as believers in the creator economy who refuse to accept the status quo. Every feature, every decision, every line of code is guided by one question: <em>Is this good for creators?</em>
                  </p>

                  <p className="text-lg">
                    <strong className="text-brand-black">If you're a creator who's tired of algorithm dependence, unfair revenue splits, and platforms that don't respect your work—VDOgate is for you.</strong> Join us as a founding creator and let's build something better, together.
                  </p>
                </motion.div>
              </div>

              {/* Signature Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="mt-12 pt-8 border-t border-neutral-gray-lighter"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div>
                    <p className="text-lg font-bold text-brand-black mb-1">The VDOgate Founding Team</p>
                    <p className="text-neutral-gray">Building the future of creator success</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="/#founding-creator"
                      className="px-6 py-3 bg-portal-gradient text-white rounded-xl font-semibold hover:shadow-portal transition-all duration-300 hover:scale-105"
                    >
                      Join Our Mission
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Interactive Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              className="mt-12 grid md:grid-cols-3 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 border border-portal-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-portal-primary mb-2">500+</div>
                <p className="text-neutral-gray-dark">Creators already registered for founding spots</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-portal-primary/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-portal-primary mb-2">85-95%</div>
                <p className="text-neutral-gray-dark">Revenue share—highest in the industry</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gate-blue/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-gate-blue mb-2">Q3 2025</div>
                <p className="text-neutral-gray-dark">Launch date—join the waiting list now</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-portal-primary/5 to-portal-light/5 rounded-3xl p-8 md:p-10 border border-portal-primary/10"
            >
              <div className="w-14 h-14 bg-portal-gradient rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-brand-black">Our Mission</h2>
              <p className="text-neutral-gray-dark leading-relaxed text-lg">
                To empower skill-based creators across India with a platform that offers fair monetization,
                authentic discovery, and professional tools—helping them build sustainable businesses from their expertise.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-portal-primary/5 to-portal-light/5 rounded-3xl p-8 md:p-10 border border-portal-primary/10"
            >
              <div className="w-14 h-14 bg-vdo-gradient rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-brand-black">Our Vision</h2>
              <p className="text-neutral-gray-dark leading-relaxed text-lg">
                To become India's largest professional gateway for creators, where skills matter more than algorithms,
                and every creator has the opportunity to succeed based on the value they provide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-16 md:py-24 bg-neutral-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center">
              The Problem We're <span className="text-gradient">Solving</span>
            </h2>

            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-gray-dark leading-relaxed mb-6">
                  Talented creators across India—makeup artists, fitness coaches, photographers, educators, consultants—struggle to convert their skills into sustainable income. They're stuck in a broken system:
                </p>

                <div className="space-y-6 my-8">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-vdo-orange rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-black mb-2">Algorithm Dependency</h4>
                      <p className="text-neutral-gray-dark">Platforms prioritize viral content over professional services. Your reach depends on algorithms, not your skills.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-portal-primary rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-black mb-2">Unfair Revenue Splits</h4>
                      <p className="text-neutral-gray-dark">Existing platforms take 30-40% of creator earnings while providing minimal value and restricting how you monetize.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-gate-blue rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-black mb-2">Wrong Audience</h4>
                      <p className="text-neutral-gray-dark">Social media connects you with scrollers, not serious clients. You need buyers, not just followers.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-vdo-orange rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-brand-black mb-2">Time Waste</h4>
                      <p className="text-neutral-gray-dark">Hours spent on DMs, content creation for algorithms, and converting casual followers into paying clients.</p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-gray-dark leading-relaxed">
                  VDOgate changes this. We're built on search-based discovery, fair revenue sharing, and professional tools that help creators focus on what they do best—serving clients and building their business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The VDOgate <span className="text-gradient">Solution</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto">
              A video-first platform built for professional creators who want to be found by their skills and fairly compensated for their work
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Search-Based Discovery',
                description: 'Clients find you by location and category—no algorithms, no follower count requirements. Your skills speak for themselves.',
              },
              {
                icon: TrendingUp,
                title: '85% Revenue Share',
                description: 'Keep 85% of what you earn. We only succeed when you succeed, which keeps our incentives aligned with yours.',
              },
              {
                icon: Heart,
                title: 'Video Profiles',
                description: 'Show your personality, process, and expertise through video. Build trust before the first client call.',
              },
              {
                icon: Shield,
                title: 'Professional Tools',
                description: 'Payment processing, booking management, lead generation—everything you need to run your creator business.',
              },
              {
                icon: Target,
                title: 'Local Focus',
                description: 'Connect with clients in your area who need your services. No wasted reach on people who will never book.',
              },
              {
                icon: Award,
                title: 'Quality Clients',
                description: 'People come to VDOgate ready to hire, not just scroll. Get serious leads, not casual followers.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-neutral-background rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-portal-gradient rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-black">{item.title}</h3>
                  <p className="text-neutral-gray-dark leading-relaxed">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 md:py-24 bg-neutral-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto">
              The principles that guide every decision we make at VDOgate
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-elevation-3 transition-all duration-300"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-brand-black">{value.title}</h3>
                  <p className="text-neutral-gray-dark leading-relaxed text-lg">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Roadmap</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto">
              From vision to launch—our journey to empower creators across India
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portal-primary via-portal-light to-portal-lighter" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-neutral-gray-lighter">
                        <div className="text-2xl font-bold text-portal-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-bold mb-2 text-brand-black">{milestone.title}</h3>
                        <p className="text-neutral-gray-dark leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-center relative z-10">
                      <div className="w-6 h-6 bg-portal-gradient rounded-full border-4 border-white shadow-lg" />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-portal-primary via-portal-light to-portal-lighter relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Pre-Launch Details</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              What to Expect
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Join the founding creator community and get exclusive lifetime benefits when we launch
            </p>
          </motion.div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-white/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                  <div className="relative z-10">
                    <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-white/90 font-semibold text-base">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Launch Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Launch Timeline
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">Q2</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Pre-Launch Registration (Now Open)</h4>
                    <p className="text-white/80 leading-relaxed">
                      Founding creators can register now to secure lifetime premium benefits and 95% revenue share
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">Q3</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Beta Launch & Onboarding</h4>
                    <p className="text-white/80 leading-relaxed">
                      Platform goes live with founding creators. Profile setup, video uploads, and service listings begin
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="flex items-start gap-4 bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">Q4</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Public Launch</h4>
                    <p className="text-white/80 leading-relaxed">
                      Full platform access to all creators and visitors. Marketing campaigns and creator success stories
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="/#founding-creator"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-portal-primary rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Secure Your Founding Creator Spot
            </a>
            <p className="mt-4 text-white/80 text-sm">
              Limited to first 500 creators • Lifetime premium benefits
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-portal-primary/5 to-portal-light/5 rounded-3xl p-12 border border-portal-primary/10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand-black">
              Be Part of the Launch
            </h2>
            <p className="text-lg text-neutral-gray-dark mb-8 max-w-2xl mx-auto leading-relaxed">
              Join as a founding creator and get lifetime premium benefits. Register now for early access when we launch in Q3 2025.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#founding-creator"
                className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
              >
                Register for Early Access
              </a>
              <a
                href="mailto:hello@vdogate.com"
                className="px-8 py-4 bg-white border-2 border-portal-primary text-portal-primary rounded-xl font-semibold text-lg hover:bg-portal-primary/5 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Play, MapPin, Filter, Users, Search, Video, CheckCircle2, Zap, Target, Sparkles, IndianRupee, Rocket, MapPinned, Award } from 'lucide-react'
import Image from 'next/image'

const categories = [
  'Yoga & Fitness',
  'Beauty & Makeup',
  'Cooking & Culinary',
  'Photography',
  'Design & Creative',
  'Education & Tutoring',
]

const locations = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
]

const videoThumbnails = [
  { category: 'Yoga', location: 'Mumbai', color: 'bg-gradient-to-br from-purple-400 to-purple-600', emoji: '🧘‍♀️', name: 'Priya S.', image: '/yoga.png', views: '2.3k' },
  { category: 'Makeup', location: 'Delhi', color: 'bg-gradient-to-br from-pink-400 to-rose-600', emoji: '💄', name: 'Neha K.', image: '/makeup.png', views: '5.1k' },
  { category: 'Chef', location: 'Bangalore', color: 'bg-gradient-to-br from-orange-400 to-red-600', emoji: '👨‍🍳', name: 'Arjun M.', image: '/chef.png', views: '3.7k' },
  { category: 'Design', location: 'Hyderabad', color: 'bg-gradient-to-br from-blue-400 to-indigo-600', emoji: '🎨', name: 'Rohan P.', image: '/makeup.png', views: '1.9k' },
  { category: 'Tutor', location: 'Chennai', color: 'bg-gradient-to-br from-green-400 to-emerald-600', emoji: '📚', name: 'Anjali R.', image: '/teacher.png', views: '4.2k' },
  { category: 'Photo', location: 'Pune', color: 'bg-gradient-to-br from-indigo-400 to-violet-600', emoji: '📸', name: 'Vikram D.', image: '/photograper.png', views: '6.8k' },
]

const customerFeatures = [
  { icon: MapPin, text: 'Location-based search across India', color: 'text-blue-500' },
  { icon: Users, text: 'Huge directory of all categories', color: 'text-purple-500' },
  { icon: CheckCircle2, text: 'Free access - browse & connect', color: 'text-green-500' },
]

const freelancerFeatures = [
  { icon: Target, text: 'Get discovered by local customers', color: 'text-orange-500' },
  { icon: Zap, text: 'No ads, no algorithms, just you', color: 'text-yellow-500' },
  { icon: CheckCircle2, text: 'Lifetime premium benefits', color: 'text-green-500' },
]

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-b from-white via-neutral-50/50 to-white">
      {/* Lightweight Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-float" style={{ ['--animation-duration' as any]: '20s' }} />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-bl from-orange-200/20 to-amber-200/20 rounded-full blur-3xl animate-float-delayed" style={{ ['--animation-duration' as any]: '25s' }} />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-gradient-to-tr from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-float" style={{ ['--animation-duration' as any]: '30s' }} />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

        {/* Radial gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-100/15 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-100/15 via-transparent to-transparent" />
      </div>

      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-30px, 30px) scale(0.9); }
          66% { transform: translate(20px, -20px) scale(1.1); }
        }
        .animate-float {
          animation: float var(--animation-duration, 20s) ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed var(--animation-duration, 25s) ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Headline Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-20 relative z-10"
      >
        <div className="container-custom">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 border border-neutral-gray-lighter rounded-full px-6 py-2 mb-6"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
              Two Sides, One Vision
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-pulse" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-black mb-6">
            Built for <span className="text-gradient">Freelancers</span> and <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Customers</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-gray max-w-3xl mx-auto leading-relaxed">
            One platform, two powerful experiences, connecting talent with opportunity across India
          </p>
        </div>
      </motion.div>

      <div className="container-custom relative z-10">

        {/* Dual Panel Layout with Modern Design */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">

          {/* LEFT: For Customers - Video Discovery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group h-full"
          >
            <div className="relative h-full bg-gradient-to-br from-white to-blue-50/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-blue-100/50">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-400/10 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl shadow-blue-500/30"
                  >
                    <Users className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-xs font-bold tracking-wide rounded-full shadow-lg">
                    FOR CUSTOMERS
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Find Your Perfect
                  <span className="block text-gradient mt-1">Freelancer</span>
                </h3>

                <p className="text-base md:text-lg text-neutral-gray-dark leading-relaxed mb-6">
                  Discover verified freelancers through authentic video profiles, filtered by category and location
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {customerFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center ${feature.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-brand-black">{feature.text}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Enhanced Video Grid - Mobile-First Design */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {videoThumbnails.map((video, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08, duration: 0.4 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative overflow-hidden cursor-pointer group/card"
                    >
                      {/* Video Thumbnail Container - Portrait for mobile */}
                      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 aspect-[9/16] bg-gradient-to-br from-slate-800 to-slate-900">

                        {/* Actual Image/Profile Picture as Thumbnail Background */}
                        <div className="absolute inset-0">
                          <Image
                            src={video.image}
                            alt={video.name}
                            fill
                            className="object-cover"
                            style={{ objectPosition: 'center 20%' }}
                            loading="lazy"
                          />
                          {/* Gradient overlays for readability */}
                          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                          <div className={`absolute inset-0 bg-gradient-to-br ${video.color.replace('bg-gradient-to-br', '')} opacity-30 mix-blend-overlay`} />
                        </div>

                        {/* Top Section - Category Badge */}
                        <div className="absolute top-3 left-3 right-3 z-10">
                          <div className="flex items-start justify-between">
                            <div className="bg-black/60 backdrop-blur-md rounded-lg px-2.5 py-1 border border-white/20">
                              <span className="text-[10px] font-bold text-white uppercase tracking-wide">{video.category}</span>
                            </div>
                            {/* View Count Badge - YouTube Style */}
                            <div className="bg-black/60 backdrop-blur-md rounded-lg px-2 py-1 border border-white/20">
                              <div className="flex items-center gap-1">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                <span className="text-[9px] font-bold text-white">{video.views}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Center - Play Button (Instagram/TikTok Style) */}
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl group-hover/card:bg-blue-500 group-hover/card:scale-110 transition-all duration-300">
                            <Play className="w-7 h-7 text-slate-900 group-hover/card:text-white ml-1 transition-colors" fill="currentColor" />
                          </div>
                        </div>

                        {/* Bottom Section - Profile Info (YouTube/Instagram Style) */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                          <div className="space-y-2">
                            {/* Profile Row */}
                            <div className="flex items-center gap-2">
                              <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-white/50 shadow-lg flex-shrink-0 bg-white">
                                <Image
                                  src={video.image}
                                  alt={video.name}
                                  width={36}
                                  height={36}
                                  className="object-cover w-full h-full scale-110"
                                  style={{ objectPosition: 'center 30%' }}
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-xs font-bold text-white drop-shadow-lg truncate">{video.name}</p>
                                <div className="flex items-center gap-1.5">
                                  <MapPin className="w-3 h-3 text-blue-400 drop-shadow-md flex-shrink-0" />
                                  <span className="text-[10px] font-semibold text-blue-200 drop-shadow-md truncate">{video.location}</span>
                                </div>
                              </div>
                            </div>

                            {/* Engagement Bar - Instagram Style */}
                            <div className="flex items-center gap-3 text-white/90">
                              <button type="button" className="flex items-center gap-1 hover:text-red-400 hover:scale-110 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[10px] font-semibold drop-shadow-md">{String(50 + ((index * 37) % 101))}</span>
                              </button>

                              <button type="button" className="flex items-center gap-1 hover:text-blue-400 hover:scale-110 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                                </svg>
                                <span className="text-[10px] font-semibold drop-shadow-md">{String(5 + ((index * 17) % 21))}</span>
                              </button>

                              <button type="button" className="ml-auto hover:text-yellow-400 hover:scale-110 transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Hover Effect - Subtle Glow */}
                        <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
                          <div className="absolute inset-0 bg-blue-500/10 backdrop-blur-[1px]" />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 rounded-2xl p-5 text-center cursor-pointer hover:border-blue-500/40 transition-all"
                >
                  <p className="text-sm font-bold text-brand-black">
                    Browse 500+ verified freelancers in your area
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: For Freelancers - Get Discovered */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group h-full"
          >
            <div className="relative h-full bg-gradient-to-br from-white to-orange-50/30 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-orange-100/50">
              {/* Animated Border Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-orange-500/20 via-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-amber-400/10 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 p-8 md:p-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    className="w-16 h-16 bg-portal-gradient rounded-2xl flex items-center justify-center shadow-xl shadow-orange-500/30"
                  >
                    <Filter className="w-8 h-8 text-white" />
                  </motion.div>
                  <div className="px-4 py-2 bg-portal-gradient text-white text-xs font-bold tracking-wide rounded-full shadow-lg">
                    FOR FREELANCERS
                  </div>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
                  Get Discovered by
                  <span className="block text-gradient mt-1">Local Customers</span>
                </h3>

                <p className="text-base md:text-lg text-neutral-gray-dark leading-relaxed mb-6">
                  Upload your skills video and get automatically listed, customers find you by category and location
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {freelancerFeatures.map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center ${feature.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-semibold text-brand-black">{feature.text}</span>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Interactive Profile Builder Preview */}
                <div className="mb-8">
                  <div className="flex items-center justify-between mb-4">
                    <label className="text-xs font-bold text-brand-black tracking-wide uppercase flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      Build Your Profile
                    </label>
                    <span className="text-xs font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">Live Preview</span>
                  </div>

                  {/* Mock Profile Card */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Profile Preview Content */}
                    <div className="relative aspect-[9/16]">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src="/yoga.png"
                          alt="Profile Preview"
                          fill
                          className="object-cover opacity-60"
                          style={{ objectPosition: 'center 20%' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-amber-500/30 mix-blend-overlay" />
                      </div>

                      {/* Top - Category Badge */}
                      <div className="absolute top-3 left-3 right-3 z-10">
                        <div className="inline-flex items-center gap-2 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1.5 border border-white/20">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          <span className="text-[10px] font-bold text-white uppercase tracking-wide">Yoga & Fitness</span>
                        </div>
                      </div>

                      {/* Center - Upload Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="flex flex-col items-center gap-2 hover:scale-110 transition-transform">
                          <div className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-2xl">
                            <Video className="w-8 h-8 text-orange-500" />
                          </div>
                          <span className="text-xs font-bold text-white drop-shadow-lg">Upload Your Video</span>
                        </div>
                      </div>

                      {/* Bottom - Profile Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-3 z-10">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center ring-2 ring-white/50 shadow-lg">
                              <span className="text-white text-sm font-bold">You</span>
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-bold text-white drop-shadow-lg">Your Name</p>
                              <div className="flex items-center gap-1.5">
                                <MapPin className="w-3 h-3 text-orange-400 drop-shadow-md flex-shrink-0" />
                                <span className="text-[10px] font-semibold text-orange-200 drop-shadow-md">Your City</span>
                              </div>
                            </div>
                          </div>

                          {/* Quick Stats */}
                          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                            <div className="flex items-center gap-1 text-white/90">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-[10px] font-semibold drop-shadow-md">0 views</span>
                            </div>
                            <div className="flex items-center gap-1 text-white/90">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                              </svg>
                              <span className="text-[10px] font-semibold drop-shadow-md">0 likes</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Pulsing Indicator */}
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-10">
                        <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 animate-pulse" />
                      </div>
                    </div>
                  </motion.div>

                  <p className="text-xs text-neutral-gray text-center mt-3 italic">
                    Preview how your profile will look to customers
                  </p>
                </div>

                {/* Benefits Grid - Additional Content */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-brand-black mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-orange-500" />
                    Why Freelancers Love VDOgate
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: IndianRupee, title: 'Zero Commission', desc: 'Keep 100% earnings', color: 'text-green-500' },
                      { icon: Rocket, title: 'Quick Setup', desc: '5 min to go live', color: 'text-orange-500' },
                      { icon: MapPinned, title: 'Local Reach', desc: 'City-based discovery', color: 'text-blue-500' },
                      { icon: Award, title: 'Premium Tools', desc: 'Analytics, Growth guide', color: 'text-purple-500' },
                    ].map((benefit, index) => {
                      const Icon = benefit.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + index * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white rounded-xl p-3 shadow-md border border-orange-100/50 hover:shadow-lg transition-all"
                        >
                          <Icon className={`w-8 h-8 mb-2 ${benefit.color}`} strokeWidth={2} />
                          <p className="text-xs font-bold text-brand-black mb-0.5">{benefit.title}</p>
                          <p className="text-[10px] text-neutral-gray">{benefit.desc}</p>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Enhanced CTA with Steps */}
                <div className="relative bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-2 border-orange-500/30 rounded-2xl p-5 overflow-hidden group/cta cursor-pointer hover:border-orange-500/50 hover:scale-[1.02] transition-all">

                  <div className="relative z-10 space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-brand-black">Quick Setup Process</p>
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>

                    <div className="space-y-2">
                      {['Upload video', 'Select category and location (offline/online/hybrid)', 'Go live & get clients'].map((step, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-portal-gradient text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-xs text-neutral-gray-dark font-medium">{step}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 border-t border-orange-500/20">
                      <p className="text-xs font-bold text-orange-600">
                        170+ freelancers already earning • Join now!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Enhanced Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 p-10 md:p-16 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-6"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-white">One Platform, Infinite Possibilities</span>
              </motion.div>

              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                India's Freelance Economy
                <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  Starts Here
                </span>
              </h3>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-3xl mx-auto">
                Whether you're offering services or searching for talent, VDOgate connects you
                <span className="font-semibold text-white"> directly, fairly, and transparently</span>, without middlemen
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="button"
                  onClick={() => document.getElementById('founding-creator')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
                >
                  Join as Founding Freelancer
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <button
                  type="button"
                  disabled
                  className="relative px-10 py-5 bg-white/10 text-white/60 rounded-2xl font-bold text-lg cursor-not-allowed border-2 border-white/20"
                >
                  Find my freelancer
                  <span className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                    Coming Soon
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

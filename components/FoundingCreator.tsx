'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Award, Star, Zap, Users, CheckCircle2, Sparkles, TrendingUp, User, Mail, Phone, MapPin, Briefcase, Link as LinkIcon, MessageSquare } from 'lucide-react'
import Image from 'next/image'
import { useIsMobile, usePlatform } from '@/hooks/usePWA'
import { fadeInUp, scaleIn, staggerContainer, staggerItem, hoverLift, spring, shimmerAnimation } from '@/lib/animations'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  category: z.string().min(1, 'Please select a category'),
  city: z.string().min(2, 'City is required'),
  instagram: z.string().transform(val => val || undefined).optional(),
  youtube: z.string().transform(val => val || undefined).optional(),
  portfolio: z.string().refine(
    (val) => !val || val === '' || z.string().url().safeParse(val).success,
    { message: 'Invalid URL' }
  ).transform(val => val || undefined).optional(),
  why: z.string().min(1, 'Please select at least one reason'),
  challenges: z.string().min(1, 'Please select at least one challenge'),
  incomeGoal: z.string().min(1, 'Please select your monthly income goal'),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
})

type FormData = z.infer<typeof formSchema>

const categories = [
  'Beauty & Personal Care',
  'Fitness & Wellness',
  'Creative Services',
  'Business Coaching',
  'Marketing & Consulting',
  'Photography & Videography',
  'Education & Training',
  'Other',
]

const whyJoinOptions = [
  'Struggling with client discovery on current platforms',
  'Looking for fair pricing without high commission fees',
  'Want to showcase my skills through video instead of just text',
  'Want to connect with local clients in my city',
  'Other',
]

const challengesOptions = [
  'Difficulty finding clients consistently',
  'High commission fees eating into my earnings',
  'Hard to stand out without paying for ads or promotions',
  'Other',
]

const benefits = [
  { icon: Award, title: 'Lifetime Premium Benefits', desc: 'Exclusive founding member perks', iconColor: 'text-yellow-400', bgColor: 'bg-yellow-400/20', hoverBg: 'group-hover:bg-yellow-400/30' },
  { icon: Zap, title: 'Launch Advantage', desc: 'Priority in search rankings', iconColor: 'text-blue-400', bgColor: 'bg-blue-400/20', hoverBg: 'group-hover:bg-blue-400/30' },
  { icon: Users, title: 'Community Building', desc: 'Join freelancer community', iconColor: 'text-pink-400', bgColor: 'bg-pink-400/20', hoverBg: 'group-hover:bg-pink-400/30' },
  { icon: Star, title: 'Early Revenue Opportunity', desc: 'Launch day advantages', iconColor: 'text-green-400', bgColor: 'bg-green-400/20', hoverBg: 'group-hover:bg-green-400/30' },
]

export default function FoundingCreator() {
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const isMobile = useIsMobile()
  const { isStandalone } = usePlatform()
  const isMobilePWA = isMobile || isStandalone

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      category: '',
      city: '',
      instagram: '',
      youtube: '',
      portfolio: '',
      why: '',
      challenges: '',
      incomeGoal: '',
      agreeTerms: false,
    },
  })

  const formValues = watch()

  // Only count required fields for progress calculation
  const requiredFieldNames = ['name', 'email', 'phone', 'category', 'city', 'why', 'challenges', 'incomeGoal', 'agreeTerms']
  const filledRequiredFields = requiredFieldNames.filter(fieldName => {
    const val = formValues[fieldName as keyof FormData]
    if (typeof val === 'boolean') return val === true
    return val && val !== ''
  }).length
  const totalRequiredFields = requiredFieldNames.length // 9 required fields
  const progress = (filledRequiredFields / totalRequiredFields) * 100

  const onSubmit = async (data: FormData) => {
    try {
      setError(null)

      const response = await fetch('/api/founding-creator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: data.name,
          email: data.email,
          phone: data.phone,
          location: data.city,
          profession: data.category,
          instagram_handle: data.instagram || null,
          youtube_channel: data.youtube || null,
          portfolio_url: data.portfolio || null,
          why_vdogate: data.why,
          current_challenges: data.challenges,
          monthly_income_goal: data.incomeGoal,
          agreed_to_terms: data.agreeTerms,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form')
      }

      setSubmitted(true)
      reset()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      console.error('Form submission error:', err)
    }
  }

  return (
    <section id="founding-creator" className="py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-rose-50/30 via-orange-50/40 to-amber-50/30">
      {/* Premium Gradient Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="circuit" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#F7682B" />
              <line x1="10" y1="10" x2="40" y2="10" stroke="#F7682B" strokeWidth="1" />
              <circle cx="40" cy="10" r="2" fill="#F7682B" />
              <line x1="10" y1="10" x2="10" y2="40" stroke="#F7682B" strokeWidth="1" />
              <circle cx="10" cy="40" r="2" fill="#F7682B" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-br from-orange-200/30 to-rose-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/30 to-orange-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-portal-primary/10 to-portal-light/10 border-[0.2px] border-portal-primary/20 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-portal-primary" />
            <span className="text-brand-black font-semibold">Limited 500 Seats Only</span>
            <TrendingUp className="w-5 h-5 text-portal-primary" />
          </motion.div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-brand-black">
            Become a Founding Freelancer
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto mb-8">
            Join the exclusive group of early adopters. Limited to first 500 freelancers.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="bg-white rounded-2xl p-6 cursor-pointer group hover:shadow-lg transition-all duration-300 border-[0.2px] border-neutral-gray-lighter"
                  style={{ order: isMobilePWA ? 1 : 0 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-portal-primary to-portal-light rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-brand-black mb-1">{benefit.title}</h3>
                      <p className="text-neutral-gray-dark text-sm">{benefit.desc}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-portal-primary/5 to-portal-light/10 border-[0.2px] border-portal-primary/30 rounded-2xl p-6 relative overflow-hidden"
              style={{ order: isMobilePWA ? 0 : 1 }}
            >
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-portal-primary/5 via-portal-light/10 to-portal-primary/5 animate-pulse" />

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-portal-primary" />
                  <span className="text-3xl font-bold text-brand-black">500</span>
                  <Star className="w-6 h-6 text-vdo-orange" />
                </div>
                <p className="text-lg font-semibold text-brand-black mb-1">Founding Freelancers Only</p>
                <p className="text-sm text-neutral-gray-dark">Secure your spot in India's premium freelancer platform</p>

                {/* Community Avatar Stack */}
                <div className="flex justify-center items-center my-4">
                  <div className="flex -space-x-3">
                    {[
                      { emoji: '🧘‍♀️', color: 'from-purple-400 to-purple-600', image: '/yoga.png' },
                      { emoji: '💄', color: 'from-pink-400 to-rose-600', image: '/makeup.png' },
                      { emoji: '👨‍🍳', color: 'from-orange-400 to-red-600', image: '/chef.png' },
                      { emoji: '📚', color: 'from-green-400 to-emerald-600', image: '/teacher.png' },
                      { emoji: '💪', color: 'from-blue-400 to-cyan-600', image: '/gym.png' },
                      { emoji: '📸', color: 'from-indigo-400 to-violet-600', image: '/photograper.png' },
                      { emoji: '🎨', color: 'from-teal-400 to-cyan-600', image: '/chef.png' },
                    ].map((person, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + idx * 0.1, duration: 0.3 }}
                        className={`w-12 h-12 bg-gradient-to-br ${person.color} rounded-full flex items-center justify-center border-3 border-white shadow-md hover:scale-110 hover:z-10 transition-transform cursor-pointer overflow-hidden`}
                      >
                        <Image src={person.image} alt="Freelancer" width={48} height={48} className="object-cover w-full h-full" />
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.3, duration: 0.3 }}
                      className="w-12 h-12 bg-gradient-to-br from-portal-primary to-portal-light rounded-full flex items-center justify-center text-white text-xs font-bold border-3 border-white shadow-md"
                    >
                      +163
                    </motion.div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="mt-4 w-full bg-neutral-gray-lighter rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '34%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-portal-primary to-vdo-orange rounded-full"
                  />
                </div>
                <p className="text-xs text-neutral-gray mt-2">170 spots claimed • 330 remaining</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-[0.2px] border-neutral-gray-lighter p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <CheckCircle2 className="w-12 h-12 text-white" />
                    </div>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-3xl font-bold text-brand-black mb-4"
                  >
                    Application Received!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-neutral-gray-dark mb-8 max-w-md mx-auto"
                  >
                    Thank you for applying to be a Founding Freelancer. We'll review your application and get back to you within <span className="font-semibold text-portal-primary">48 hours</span>.
                  </motion.p>
                  <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    onClick={() => setSubmitted(false)}
                    className="text-portal-primary font-semibold hover:underline text-lg"
                  >
                    Submit another application
                  </motion.button>
                </motion.div>
              ) : (
                <>
                  {/* Enhanced Header */}
                  <div className="mb-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-3xl font-bold text-brand-black mb-2">Apply Now</h3>
                        <p className="text-sm text-neutral-gray">Join 170+ freelancers already onboarded</p>
                      </div>
                      <motion.div
                        key={Math.round(progress)}
                        initial={{ scale: 1.2, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-right bg-gradient-to-br from-portal-primary/10 to-portal-light/10 rounded-2xl px-4 py-3 border border-portal-primary/20"
                      >
                        <div className="text-3xl font-bold bg-gradient-to-r from-portal-primary to-portal-light bg-clip-text text-transparent">
                          {Math.round(progress)}%
                        </div>
                        <div className="text-xs text-neutral-gray font-medium">Complete</div>
                      </motion.div>
                    </div>

                    {/* Enhanced Progress Bar */}
                    <div className="relative">
                      <div className="w-full h-3 bg-gradient-to-r from-neutral-gray-lighter to-neutral-background rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        />
                      </div>
                      {/* Milestone markers */}
                      <div className="flex justify-between mt-2 px-1">
                        {[0, 25, 50, 75, 100].map((milestone) => (
                          <div key={milestone} className="flex flex-col items-center">
                            <motion.div
                              className={`w-2 h-2 rounded-full ${progress >= milestone ? 'bg-portal-primary' : 'bg-neutral-gray-lighter'}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: progress >= milestone ? 1 : 0.5 }}
                              transition={{ duration: 0.3 }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <label className="block text-sm font-semibold text-neutral-black mb-2 flex items-center gap-2">
                        Full Name *
                        {formValues.name && formValues.name.length >= 2 && (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="text-green-600"
                          >
                            <CheckCircle2 className="w-4 h-4" />
                          </motion.span>
                        )}
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors ${focusedField === 'name' ? 'text-portal-primary' : 'text-neutral-gray'
                          }`} />
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                          placeholder="Your full name"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            <span className="text-red-500">⚠</span> {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                          placeholder="your@email.com"
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.email.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                          placeholder="+91 98765 43210"
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.phone.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Category & City in Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-black mb-2">
                          Category *
                        </label>
                        <div className="relative">
                          <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none z-10" />
                          <select
                            {...register('category')}
                            className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all appearance-none cursor-pointer"
                            onFocus={() => setFocusedField('category')}
                            onBlur={() => setFocusedField(null)}
                          >
                            <option value="">Select...</option>
                            {categories.map((cat) => (
                              <option key={cat} value={cat}>
                                {cat}
                              </option>
                            ))}
                          </select>
                        </div>
                        <AnimatePresence>
                          {errors.category && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                            >
                              {errors.category.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-black mb-2">
                          City *
                        </label>
                        <div className="relative">
                          <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                          <input
                            {...register('city')}
                            type="text"
                            className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                            placeholder="Mumbai"
                            onFocus={() => setFocusedField('city')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                        <AnimatePresence>
                          {errors.city && (
                            <motion.p
                              initial={{ opacity: 0, y: -10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                            >
                              {errors.city.message}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Social Media Handles Row */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-neutral-black mb-2">
                          Instagram Handle (optional)
                        </label>
                        <div className="relative">
                          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                          <input
                            {...register('instagram')}
                            type="text"
                            className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                            placeholder="@yourhandle"
                            onFocus={() => setFocusedField('instagram')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-neutral-black mb-2">
                          YouTube Channel (optional)
                        </label>
                        <div className="relative">
                          <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                          <input
                            {...register('youtube')}
                            type="text"
                            className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                            placeholder="Channel name"
                            onFocus={() => setFocusedField('youtube')}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Portfolio/Website Link (optional)
                      </label>
                      <div className="relative">
                        <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none" />
                        <input
                          {...register('portfolio')}
                          type="url"
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all"
                          placeholder="https://yourportfolio.com"
                          onFocus={() => setFocusedField('portfolio')}
                          onBlur={() => setFocusedField(null)}
                        />
                      </div>
                      <AnimatePresence>
                        {errors.portfolio && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.portfolio.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Why */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Why do you want to join? *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none z-10" />
                        <select
                          {...register('why')}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all appearance-none cursor-pointer"
                          onFocus={() => setFocusedField('why')}
                          onBlur={() => setFocusedField(null)}
                        >
                          <option value="">Select your primary reason...</option>
                          {whyJoinOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <AnimatePresence>
                        {errors.why && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.why.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Current Challenges */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Current Challenges *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none z-10" />
                        <select
                          {...register('challenges')}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all appearance-none cursor-pointer"
                          onFocus={() => setFocusedField('challenges')}
                          onBlur={() => setFocusedField(null)}
                        >
                          <option value="">Select your biggest challenge...</option>
                          {challengesOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                      <AnimatePresence>
                        {errors.challenges && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.challenges.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Monthly Income Goal */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Monthly Income Goal *
                      </label>
                      <div className="relative">
                        <TrendingUp className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-gray pointer-events-none z-10" />
                        <select
                          {...register('incomeGoal')}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all appearance-none cursor-pointer"
                          onFocus={() => setFocusedField('incomeGoal')}
                          onBlur={() => setFocusedField(null)}
                        >
                          <option value="">Select your goal...</option>
                          <option value="₹20,000 - ₹50,000">₹20,000 - ₹50,000</option>
                          <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                          <option value="₹1,00,000 - ₹2,00,000">₹1,00,000 - ₹2,00,000</option>
                          <option value="₹2,00,000+">₹2,00,000+</option>
                        </select>
                      </div>
                      <AnimatePresence>
                        {errors.incomeGoal && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.incomeGoal.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Terms & Conditions */}
                    <div className="flex items-start gap-3 pt-2">
                      <input
                        {...register('agreeTerms')}
                        type="checkbox"
                        className="w-5 h-5 mt-0.5 rounded border-neutral-gray-lighter text-portal-primary focus:ring-2 focus:ring-portal-primary cursor-pointer"
                        id="agreeTerms"
                      />
                      <label htmlFor="agreeTerms" className="text-sm text-neutral-gray-dark cursor-pointer">
                        I agree to VDOgate's Terms of Service and Privacy Policy, and consent to being contacted about the Founding Freelancer Programme
                      </label>
                    </div>
                    <AnimatePresence>
                      {errors.agreeTerms && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="text-red-500 text-sm -mt-2 flex items-center gap-1"
                        >
                          {errors.agreeTerms.message}
                        </motion.p>
                      )}
                    </AnimatePresence>

                    {/* Error Message */}
                    <AnimatePresence>
                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-600 text-sm"
                        >
                          {error}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="pt-4"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting || progress < 100}
                        whileHover={{ scale: (isSubmitting || progress < 100) ? 1 : 1.02, y: -2 }}
                        whileTap={{ scale: (isSubmitting || progress < 100) ? 1 : 0.98 }}
                        className={`w-full px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 relative group ${progress < 100
                          ? 'bg-neutral-gray-lighter text-neutral-gray cursor-not-allowed'
                          : 'bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter text-white shadow-xl hover:shadow-2xl'
                          } ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                      >

                        <span className="relative z-10 flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                              />
                              <span>Submitting Application...</span>
                            </>
                          ) : progress < 100 ? (
                            <>
                              <span>Complete all fields to submit</span>
                              <motion.span
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-sm"
                              >
                                ({100 - Math.round(progress)}% remaining)
                              </motion.span>
                            </>
                          ) : (
                            <>
                              <span>Submit Application</span>
                              <motion.div
                                animate={{ rotate: [0, 15, -15, 0] }}
                                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
                              >
                                <Sparkles className="w-6 h-6" />
                              </motion.div>
                            </>
                          )}
                        </span>

                        {/* Ripple effect on hover */}
                        {progress >= 100 && !isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-white/10"
                            initial={{ scale: 0, opacity: 1 }}
                            whileHover={{ scale: 2, opacity: 0 }}
                            transition={{ duration: 0.6 }}
                          />
                        )}
                      </motion.button>

                      {/* Helper text */}
                      {progress < 100 && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-center text-sm text-neutral-gray mt-3"
                        >
                          Fill out all required fields to enable submission
                        </motion.p>
                      )}

                      {progress >= 100 && !isSubmitting && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-center text-sm text-green-600 font-medium mt-3 flex items-center justify-center gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4" />
                          Ready to submit!
                        </motion.p>
                      )}
                    </motion.div>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

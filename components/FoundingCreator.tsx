'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Award, Star, Zap, Users, CheckCircle2, Sparkles, TrendingUp, User, Mail, Phone, MapPin, Briefcase, Link as LinkIcon, MessageSquare } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 digits'),
  category: z.string().min(1, 'Please select a category'),
  city: z.string().min(2, 'City is required'),
  instagram: z.string().optional().or(z.literal('')),
  youtube: z.string().optional().or(z.literal('')),
  portfolio: z.string().url('Invalid URL').optional().or(z.literal('')),
  why: z.string().min(20, 'Please provide at least 20 characters'),
  challenges: z.string().min(20, 'Please describe your challenges (at least 20 characters)'),
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

const benefits = [
  { icon: Award, title: 'Lifetime Premium Benefits', desc: '95% revenue share forever', iconColor: 'text-yellow-400', bgColor: 'bg-yellow-400/20', hoverBg: 'group-hover:bg-yellow-400/30' },
  { icon: Zap, title: 'Launch Advantage', desc: 'Priority in search rankings', iconColor: 'text-blue-400', bgColor: 'bg-blue-400/20', hoverBg: 'group-hover:bg-blue-400/30' },
  { icon: Users, title: 'Community Building', desc: 'Join freelancer community', iconColor: 'text-pink-400', bgColor: 'bg-pink-400/20', hoverBg: 'group-hover:bg-pink-400/30' },
  { icon: Star, title: 'Early Revenue Opportunity', desc: 'Launch day advantages', iconColor: 'text-green-400', bgColor: 'bg-green-400/20', hoverBg: 'group-hover:bg-green-400/30' },
]

export default function FoundingCreator() {
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      agreeTerms: false,
    },
  })

  const formValues = watch()
  const filledFields = Object.values(formValues).filter(val => {
    if (typeof val === 'boolean') return val === true
    return val && val !== ''
  }).length
  const totalFields = 11
  const progress = (filledFields / totalFields) * 100

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
    <section id="founding-creator" className="pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-15 lg:pb-30 bg-gradient-to-br from-portal-primary/95 via-portal-light/90 to-portal-lighter/85 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-vdo-orange/40 to-pink-400/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-400/40 to-purple-400/40 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-2 mb-6"
          >
            <Sparkles className="w-5 h-5 text-vdo-orange" />
            <span className="text-white font-semibold">Limited to 500 Freelancers</span>
            <TrendingUp className="w-5 h-5 text-white" />
          </motion.div>

          <h2 className="text-headline-lg md:text-display-md mb-4 text-white drop-shadow-lg">
            Become a <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Founding Freelancer</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join the first 500 freelancers to build the future of India's freelance economy and get lifetime premium benefits
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
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
                  className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 cursor-pointer group hover:bg-white/15 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${benefit.bgColor} ${benefit.hoverBg} rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300`}>
                      <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{benefit.title}</h3>
                      <p className="text-white/90 text-sm">{benefit.desc}</p>
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
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Subtle animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 animate-pulse" />

              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Users className="w-6 h-6 text-white" />
                  <span className="text-3xl font-bold text-white drop-shadow-lg">500</span>
                  <Star className="w-6 h-6 text-vdo-orange" />
                </div>
                <p className="text-lg font-semibold text-white mb-1">Founding Freelancers Only</p>
                <p className="text-sm text-white/80">Secure your spot in India's premium freelancer platform</p>

                {/* Progress indicator */}
                <div className="mt-4 w-full bg-white/20 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '34%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-white to-vdo-orange rounded-full"
                  />
                </div>
                <p className="text-xs text-white/70 mt-2">170 spots claimed • 330 remaining</p>
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
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
              {/* Premium gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter rounded-3xl p-[2px]">
                <div className="bg-white rounded-3xl h-full w-full" />
              </div>

              <div className="relative z-10 p-8 md:p-10">
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
                          className="h-full bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter relative"
                          initial={{ width: 0 }}
                          animate={{ width: `${progress}%` }}
                          transition={{ duration: 0.5, ease: 'easeOut' }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                          />
                        </motion.div>
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
                      <div className="relative group">
                        <motion.div
                          className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-all ${
                            focusedField === 'name' ? 'text-portal-primary scale-110' : 'text-neutral-gray scale-100'
                          }`}
                          animate={{
                            scale: focusedField === 'name' ? 1.1 : 1
                          }}
                        >
                          <User className="w-5 h-5" />
                        </motion.div>
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full pl-12 pr-4 py-3.5 bg-neutral-background border-2 border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary/20 focus:border-portal-primary transition-all hover:border-neutral-gray hover:shadow-sm"
                          placeholder="Your full name"
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                        />
                        {/* Field highlight on focus */}
                        {focusedField === 'name' && (
                          <motion.div
                            layoutId="focusIndicator"
                            className="absolute inset-0 rounded-xl border-2 border-portal-primary pointer-events-none"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
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
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-semibold text-neutral-black">
                          Why do you want to join? *
                        </label>
                        <span className={`text-xs font-medium transition-colors ${
                          (formValues.why?.length || 0) >= 20 ? 'text-gate-blue' : 'text-neutral-gray'
                        }`}>
                          {formValues.why?.length || 0} / 20 min
                        </span>
                      </div>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-gray pointer-events-none" />
                        <textarea
                          {...register('why')}
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all resize-none"
                          placeholder="Tell us about your goals and why VDOgate is right for you..."
                          onFocus={() => setFocusedField('why')}
                          onBlur={() => setFocusedField(null)}
                        />
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
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-semibold text-neutral-black">
                          Current Challenges *
                        </label>
                        <span className={`text-xs font-medium transition-colors ${
                          (formValues.challenges?.length || 0) >= 20 ? 'text-gate-blue' : 'text-neutral-gray'
                        }`}>
                          {formValues.challenges?.length || 0} / 20 min
                        </span>
                      </div>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-neutral-gray pointer-events-none" />
                        <textarea
                          {...register('challenges')}
                          rows={3}
                          className="w-full pl-12 pr-4 py-3 bg-neutral-background border border-neutral-gray-lighter rounded-xl focus:outline-none focus:ring-2 focus:ring-portal-primary focus:border-portal-primary transition-all resize-none"
                          placeholder="What challenges are you facing as a freelancer right now?"
                          onFocus={() => setFocusedField('challenges')}
                          onBlur={() => setFocusedField(null)}
                        />
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
                        className={`w-full px-8 py-5 rounded-2xl font-bold text-lg transition-all duration-300 relative overflow-hidden group ${
                          progress < 100
                            ? 'bg-neutral-gray-lighter text-neutral-gray cursor-not-allowed'
                            : 'bg-gradient-to-r from-portal-primary via-portal-light to-portal-lighter text-white shadow-xl hover:shadow-2xl'
                        } ${isSubmitting ? 'opacity-75 cursor-wait' : ''}`}
                      >
                        {/* Animated background */}
                        {progress >= 100 && !isSubmitting && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                            animate={{
                              x: ['-100%', '200%']
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: 'linear'
                            }}
                          />
                        )}

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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

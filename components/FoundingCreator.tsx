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
  { icon: Users, title: 'Community Building', desc: 'Join creator community', iconColor: 'text-pink-400', bgColor: 'bg-pink-400/20', hoverBg: 'group-hover:bg-pink-400/30' },
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
            <span className="text-white font-semibold">Limited to 500 Creators</span>
            <TrendingUp className="w-5 h-5 text-white" />
          </motion.div>

          <h2 className="text-headline-lg md:text-display-md mb-4 text-white drop-shadow-lg">
            Become a <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Founding Creator</span>
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Join the first 500 creators to build the future of India's creator economy and get lifetime premium benefits
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
                <p className="text-lg font-semibold text-white mb-1">Founding Creators Only</p>
                <p className="text-sm text-white/80">Secure your spot in India's premium creator platform</p>

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
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl border-2 border-white/50">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-gate-blue mx-auto mb-4" />
                  <h3 className="text-headline-md mb-4">Application Received!</h3>
                  <p className="text-body-lg text-neutral-gray-dark mb-6">
                    Thank you for applying to be a Founding Creator. We'll review your application and get back to you within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-portal-primary font-semibold hover:underline"
                  >
                    Submit another application
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-headline-md">Apply Now</h3>
                    <div className="text-right">
                      <motion.div
                        key={Math.round(progress)}
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        className="text-2xl font-bold text-portal-primary"
                      >
                        {Math.round(progress)}%
                      </motion.div>
                      <div className="text-xs text-neutral-gray">Complete</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="w-full h-1.5 bg-neutral-gray-lighter rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-portal-gradient"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    </div>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-semibold text-neutral-black mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none transition-colors ${
                          focusedField === 'name' ? 'text-portal-primary' : 'text-neutral-gray'
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
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="text-red-500 text-sm mt-1.5 flex items-center gap-1"
                          >
                            {errors.name.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

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
                          placeholder="What challenges are you facing as a creator right now?"
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
                        I agree to VDOgate's Terms of Service and Privacy Policy, and consent to being contacted about the Founding Creator Programme
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
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="w-full px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                            />
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Sparkles className="w-5 h-5" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    </motion.button>
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

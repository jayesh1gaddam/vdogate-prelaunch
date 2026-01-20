'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BRAND_LOGO } from '@/lib/brand'
import {
  ArrowLeft,
  Mail,
  MessageSquare,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  HelpCircle,
  Headphones,
  FileText,
  Shield,
  Users
} from 'lucide-react'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

const contactOptions = [
  {
    icon: Headphones,
    title: 'General Support',
    description: 'Questions about using VDOgate, events, or your account',
    email: 'support@vdogate.com',
    responseTime: 'Within 24 hours',
    color: 'purple'
  },
  {
    icon: FileText,
    title: 'Billing & Payments',
    description: 'Settlement queries, invoices, refunds, or payment issues',
    email: 'billing@vdogate.com',
    responseTime: 'Within 24 hours',
    color: 'orange'
  },
  {
    icon: Shield,
    title: 'Privacy & Data',
    description: 'Data requests, privacy concerns, or GDPR inquiries',
    email: 'privacy@vdogate.com',
    responseTime: 'Within 48 hours',
    color: 'green'
  },
  {
    icon: Users,
    title: 'Partnerships',
    description: 'Business collaborations, integrations, or press inquiries',
    email: 'partnerships@vdogate.com',
    responseTime: 'Within 3-5 business days',
    color: 'blue'
  }
]

const faqs = [
  {
    question: 'How do I create a live event?',
    answer: 'Sign up on app.vdogate.com, click "Create Event", fill in your event details, set ticket pricing, and share your event link. It costs ₹299 per event with no subscriptions.'
  },
  {
    question: 'When will I receive my earnings?',
    answer: 'Earnings are settled within 7 working days after your event completes successfully. Statutory deductions (TDS/TCS ~1-2%) apply.'
  },
  {
    question: 'What percentage do I keep from ticket sales?',
    answer: 'Creators keep 85% of ticket sales (for tickets ₹199+) or 85% (15% platform fee for tickets below ₹199). The platform fee covers streaming, ticketing, and payment infrastructure.'
  },
  {
    question: 'Can I host free events?',
    answer: 'Yes! You can host free or sponsored events. For free events, you pay ₹25 per attendee to cover platform costs.'
  },
  {
    question: 'How do refunds work?',
    answer: 'If an event is cancelled by the Creator, attendees receive full refunds. The ₹299 event creation fee is non-refundable. Platform technical failures result in full refunds and event credits.'
  }
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [ticketId, setTicketId] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setTicketId(data.ticketId)
      setIsSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-50 via-white to-orange-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-[120px] h-[35px]">
              <Image
                src={BRAND_LOGO.paths.primary}
                alt="VDOgate"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Have questions or need assistance? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            How can we help you?
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <motion.a
                key={option.title}
                href={`mailto:${option.email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-purple-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  option.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  option.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  option.color === 'green' ? 'bg-emerald-100 text-emerald-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  <option.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {option.description}
                </p>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-purple-600 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    {option.email}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    {option.responseTime}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Send us a message
              </h2>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 bg-white rounded-2xl border border-green-200 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  {ticketId && (
                    <div className="mb-4 px-4 py-2 bg-gray-100 rounded-lg inline-block">
                      <p className="text-xs text-gray-500 mb-1">Your Ticket ID</p>
                      <p className="text-lg font-mono font-bold text-purple-600">{ticketId}</p>
                    </div>
                  )}
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We&apos;ll get back to you within 24-48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false)
                      setTicketId(null)
                      setFormData({ name: '', email: '', subject: '', category: '', message: '' })
                    }}
                    className="text-purple-600 font-medium hover:text-purple-700"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl">
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    </div>
                  )}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        required
                        value={formData.category}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors bg-white"
                      >
                        <option value="">Select a category</option>
                        <option value="general">General Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="technical">Technical Issue</option>
                        <option value="event">Event Help</option>
                        <option value="partnership">Partnership Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors resize-none"
                      placeholder="Please describe your question or issue in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springTransition}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Whether you&apos;re a Creator looking to host your first live event or an Attendee with questions, our team is ready to assist you.
                </p>
              </div>

              {/* Quick Contact Info */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <a href="mailto:support@vdogate.com" className="text-purple-600 hover:text-purple-700">
                      support@vdogate.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Live Chat</h4>
                    <p className="text-gray-600 text-sm">Available in-app for logged-in users</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Response Time</h4>
                    <p className="text-gray-600 text-sm">Usually within 24 hours on business days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Location</h4>
                    <p className="text-gray-600 text-sm">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="p-6 bg-gradient-to-br from-purple-600 to-orange-500 rounded-2xl text-white">
                <h3 className="text-xl font-bold mb-2">Ready to go live?</h3>
                <p className="text-white/80 mb-4 text-sm">
                  Start hosting live events and earning today. Just ₹299 per event, no subscriptions.
                </p>
                <a
                  href="https://app.vdogate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Create Your First Event
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springTransition}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-semibold mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQs
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...springTransition, delay: index * 0.05 }}
                className="group p-6 bg-gray-50 rounded-2xl cursor-pointer hover:bg-gray-100 transition-colors"
              >
                <summary className="flex items-center justify-between font-semibold text-gray-900 list-none">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-purple-600 group-open:rotate-180 transition-transform">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} VDOgate. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-purple-600 font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-purple-600 font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="/"
                className="text-sm text-purple-600 hover:text-purple-700 font-medium"
              >
                Back to VDOgate
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

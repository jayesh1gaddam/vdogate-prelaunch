'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'When does VDOgate launch?',
    answer: 'We\'re targeting mid-November 2025. Founding creators get early access to set up their profiles and start building their presence before the official public launch.',
  },
  {
    question: 'How much does it cost?',
    answer: 'VDOgate is completely free for creators to join. We only earn when you earn through our platform fee: 10% for regular creators, and just 5% for founding creators (95% revenue share for life).',
  },
  {
    question: 'What categories do you support?',
    answer: 'We support Beauty & Personal Care, Fitness & Wellness, Creative Services, Business Coaching, Marketing & Consulting, Photography & Videography, Education & Training, and more. Check the full list in the application form.',
  },
  {
    question: 'How do I get paid?',
    answer: 'Payments are processed directly to your bank account via Razorpay within 48 hours of service completion. You have full control over your pricing and availability.',
  },
  {
    question: 'Is this only for major cities?',
    answer: 'No! VDOgate supports creators across India. Our location filters help customers find local talent, whether you\'re in Mumbai, Bangalore, or smaller cities.',
  },
  {
    question: 'How is this different from Instagram or YouTube?',
    answer: 'VDOgate is a professional platform built specifically for service monetization with integrated booking and payment tools. Unlike social media, there are no algorithms controlling your visibility—customers find you through direct category and location searches.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section-padding bg-neutral-background">
      <div className="container-custom">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-headline-lg md:text-display-md mb-4">
            Common Questions
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-neutral-background/50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gate-blue pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-gate-blue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-body-md text-neutral-gray-dark leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-body-lg text-neutral-gray-dark mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:hello@vdogate.com"
            className="text-portal-primary font-semibold hover:underline text-lg"
          >
            Contact us at hello@vdogate.com
          </a>
        </motion.div>
      </div>
    </section>
  )
}

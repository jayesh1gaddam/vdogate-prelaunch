'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Video, Users, Wallet, Calendar, Shield, HelpCircle, BookOpen, Lightbulb } from 'lucide-react'
import LiveEventsNav from './LiveEventsNav'
import LiveEventsFooter from './LiveEventsFooter'

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 25
}

// FAQ Data organized by category
const faqCategories = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    color: 'playful-purple',
    faqs: [
      {
        question: 'How do I create a live event on VDOgate?',
        answer: 'Creating a live event is simple: 1) Sign up or log in to VDOgate, 2) Click "Create Event", 3) Set your event title, description, date, and time, 4) Choose your earning model (paid tickets or free/sponsored), 5) Set your ticket price (minimum ₹99/hour for paid events), 6) Pay the ₹299 event creation fee, 7) Share your event link and start selling tickets!'
      },
      {
        question: 'What do I need to host a live event?',
        answer: 'You need: 1) A stable internet connection (minimum 5 Mbps upload speed recommended), 2) A device with a camera and microphone (laptop, phone, or tablet), 3) A quiet space with good lighting, 4) Your expertise and content ready to share!'
      },
      {
        question: 'Can I host events on any topic?',
        answer: 'Yes! You can host workshops, masterclasses, training sessions, coaching calls, Q&A sessions, performances, and more. Popular categories include yoga, fitness, business coaching, makeup tutorials, cooking classes, music lessons, language learning, and professional skill training.'
      }
    ]
  },
  {
    title: 'Pricing & Earnings',
    icon: Wallet,
    color: 'playful-mint',
    faqs: [
      {
        question: 'How much does it cost to host a live event?',
        answer: 'There is a one-time fee of ₹299 per live event. No monthly subscriptions, no recurring charges. You only pay when you create an event.'
      },
      {
        question: 'How much do I earn from ticket sales?',
        answer: 'VDOgate uses tiered pricing to reward higher-value events:\n\n• Tickets priced below ₹199: You keep 85% (15% platform fee)\n• Tickets priced ₹199 and above: You keep 90% (only 10% platform fee)\n\nThe more you charge, the more you keep!'
      },
      {
        question: 'When do I receive my earnings?',
        answer: 'Earnings are settled within approximately 7 days after your event. Statutory deductions (TDS/TCS ~1-2%) apply as per government regulations.'
      },
      {
        question: 'What is the minimum ticket price?',
        answer: 'The minimum ticket price is ₹99 per hour for paid events. You can set any price above this. We recommend pricing at ₹199 or above to get the best revenue share (90%).'
      },
      {
        question: 'What if I want to host a free event?',
        answer: 'For free or sponsored events, you pay ₹25 per attendee instead of charging tickets. This is great for building your audience, promotional events, or sponsored content where a brand is paying you directly.'
      }
    ]
  },
  {
    title: 'Event Management',
    icon: Calendar,
    color: 'playful-orange',
    faqs: [
      {
        question: 'Can I reschedule my event?',
        answer: 'Yes, you can reschedule your event before it starts. All ticket holders will be notified of the new date and time. If attendees cannot make the new time, they can request a refund.'
      },
      {
        question: 'What happens if I need to cancel my event?',
        answer: 'If you cancel your event, all ticket holders receive a full refund automatically. The ₹299 event creation fee is non-refundable, but we understand things happen. Contact support for special circumstances.'
      },
      {
        question: 'How many attendees can join my event?',
        answer: 'VDOgate supports events with up to 100 concurrent attendees. For larger events, please contact our support team for enterprise options.'
      },
      {
        question: 'Can I record my live event?',
        answer: 'Yes, you can record your live event. The recording will be available for you to download after the event. You can share it with attendees or use it for future content.'
      }
    ]
  },
  {
    title: 'Technical & Support',
    icon: Shield,
    color: 'playful-pink',
    faqs: [
      {
        question: 'What if there are technical issues during my event?',
        answer: 'If your event fails due to technical issues on VDOgate\'s end, attendees receive a full refund. We recommend doing a test run before your first event to ensure everything works smoothly.'
      },
      {
        question: 'What browsers and devices are supported?',
        answer: 'VDOgate works on all modern browsers (Chrome, Firefox, Safari, Edge) on desktop and mobile. For the best experience, we recommend using Chrome on a laptop or desktop computer.'
      },
      {
        question: 'How do I contact support?',
        answer: 'You can reach our support team at support@vdogate.com. We typically respond within 24 hours on business days.'
      }
    ]
  }
]

// Creator Guide Steps
const creatorGuide = [
  {
    step: 1,
    title: 'Plan Your Content',
    description: 'Decide what you want to teach or share. Outline your session structure, key topics, and any materials you\'ll need.',
    tips: ['Keep sessions focused (1-2 hours max)', 'Prepare visual aids or demos', 'Have a backup plan for Q&A time']
  },
  {
    step: 2,
    title: 'Create Your Event',
    description: 'Sign up on VDOgate, create your event, set your price, and customize your event page with an engaging description.',
    tips: ['Use a clear, benefit-focused title', 'Add what attendees will learn', 'Include your credentials/experience']
  },
  {
    step: 3,
    title: 'Promote & Sell',
    description: 'Share your event link on social media, WhatsApp groups, email lists, and anywhere your audience hangs out.',
    tips: ['Share early and often', 'Create countdown posts', 'Offer early-bird pricing if needed']
  },
  {
    step: 4,
    title: 'Host & Engage',
    description: 'Go live at your scheduled time, deliver value, and engage with your audience through Q&A and interaction.',
    tips: ['Start on time', 'Encourage questions', 'Provide actionable takeaways']
  },
  {
    step: 5,
    title: 'Get Paid',
    description: 'After your event, your earnings are processed and settled to your account within ~7 days.',
    tips: ['Keep your payment details updated', 'Track your earnings in the dashboard', 'Plan your next event!']
  }
]

// Viewer Guide
const viewerGuide = [
  {
    title: 'Finding Events',
    description: 'Browse events on VDOgate or look for event links shared by creators you follow on social media.'
  },
  {
    title: 'Buying Tickets',
    description: 'Click on an event, review the details, and purchase your ticket using UPI, cards, or net banking.'
  },
  {
    title: 'Joining the Event',
    description: 'You\'ll receive a confirmation email with a link to join. Click the link at the scheduled time to enter the live session.'
  },
  {
    title: 'During the Event',
    description: 'Watch the live stream, ask questions in the chat, and engage with the creator and other attendees.'
  },
  {
    title: 'After the Event',
    description: 'Some creators may share recordings or materials. Check your email for any follow-up content.'
  }
]

// FAQ Accordion Component
function FAQAccordion({ question, answer, isOpen, onToggle }: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left hover:text-playful-purple transition-colors"
      >
        <span className="font-semibold text-brand-black pr-4">{question}</span>
        <ChevronDown className={`w-5 h-5 text-playful-purple flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-600 leading-relaxed whitespace-pre-line">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function LiveEventsResources() {
  const [openFAQs, setOpenFAQs] = useState<Record<string, boolean>>({})
  const [activeTab, setActiveTab] = useState<'faqs' | 'creator-guide' | 'viewer-guide'>('faqs')

  const toggleFAQ = (id: string) => {
    setOpenFAQs(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="min-h-screen bg-white">
      <LiveEventsNav />

      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16 px-4 md:px-6 bg-gradient-to-br from-playful-purple/5 via-white to-playful-mint/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-playful-purple/10 border-2 border-playful-purple/30 rounded-full text-playful-purple text-sm font-bold mb-6">
              <HelpCircle className="w-4 h-4" />
              RESOURCES & HELP
            </span>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-brand-black">
              Everything You Need to{' '}
              <span className="text-playful-gradient">Get Started</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              FAQs, guides, and tips to help you make the most of VDOgate Live Events.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-[88px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="flex gap-2 py-4 overflow-x-auto">
            {[
              { id: 'faqs', label: 'FAQs', icon: HelpCircle },
              { id: 'creator-guide', label: 'Creator Guide', icon: Lightbulb },
              { id: 'viewer-guide', label: 'Viewer Guide', icon: Users },
            ].map((tab) => {
              const Icon = tab.icon
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm whitespace-nowrap transition-all ${
                    activeTab === tab.id
                      ? 'bg-playful-purple text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-playful-purple/10 hover:text-playful-purple'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* FAQs Tab */}
          {activeTab === 'faqs' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
              className="space-y-12"
            >
              {faqCategories.map((category, catIndex) => {
                const Icon = category.icon
                return (
                  <div key={catIndex}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-10 h-10 bg-${category.color}/10 rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 text-${category.color}`} />
                      </div>
                      <h2 className="text-2xl font-bold text-brand-black">{category.title}</h2>
                    </div>
                    <div className="bg-gray-50 rounded-2xl p-6">
                      {category.faqs.map((faq, faqIndex) => (
                        <FAQAccordion
                          key={`${catIndex}-${faqIndex}`}
                          question={faq.question}
                          answer={faq.answer}
                          isOpen={openFAQs[`${catIndex}-${faqIndex}`] || false}
                          onToggle={() => toggleFAQ(`${catIndex}-${faqIndex}`)}
                        />
                      ))}
                    </div>
                  </div>
                )
              })}
            </motion.div>
          )}

          {/* Creator Guide Tab */}
          {activeTab === 'creator-guide' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-black mb-4">
                  How to Host Your First Live Event
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Follow these steps to create, promote, and host a successful live event on VDOgate.
                </p>
              </div>

              <div className="space-y-8">
                {creatorGuide.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-playful-purple rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {item.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-brand-black mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="bg-playful-purple/5 rounded-xl p-4">
                        <p className="text-sm font-semibold text-playful-purple mb-2">Pro Tips:</p>
                        <ul className="space-y-1">
                          {item.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="text-sm text-gray-600 flex items-start gap-2">
                              <span className="text-playful-purple">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-12 text-center">
                <a
                  href="https://app.vdogate.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-400 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-500/25 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                >
                  Create Your First Event
                </a>
              </div>
            </motion.div>
          )}

          {/* Viewer Guide Tab */}
          {activeTab === 'viewer-guide' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={springTransition}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-brand-black mb-4">
                  How to Attend a Live Event
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  A simple guide for viewers who want to join live sessions on VDOgate.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {viewerGuide.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ ...springTransition, delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6"
                  >
                    <div className="w-10 h-10 bg-playful-mint rounded-full flex items-center justify-center text-white font-bold mb-4">
                      {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-brand-black mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>

              {/* Viewer FAQs */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-brand-black mb-6">Common Viewer Questions</h3>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <FAQAccordion
                    question="What if I miss the live event?"
                    answer="Unfortunately, live events are real-time experiences. Some creators may offer recordings after the event, but this is at their discretion. Check with the creator or look for 'Recording Available' on the event page."
                    isOpen={openFAQs['viewer-1'] || false}
                    onToggle={() => toggleFAQ('viewer-1')}
                  />
                  <FAQAccordion
                    question="Can I get a refund?"
                    answer="If an event is cancelled by the creator or fails due to technical issues on VDOgate's end, you'll receive a full automatic refund. For other cases, please contact support@vdogate.com."
                    isOpen={openFAQs['viewer-2'] || false}
                    onToggle={() => toggleFAQ('viewer-2')}
                  />
                  <FAQAccordion
                    question="How do I ask questions during an event?"
                    answer="Most live events have a chat feature where you can type your questions. The creator will address questions during Q&A portions of the session. Some creators also enable voice/video participation for attendees."
                    isOpen={openFAQs['viewer-3'] || false}
                    onToggle={() => toggleFAQ('viewer-3')}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 px-4 md:px-6 bg-playful-cream">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@vdogate.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-playful-purple text-white rounded-full font-semibold hover:bg-playful-purple-dark transition-colors"
          >
            Contact Support
          </a>
        </div>
      </section>

      <LiveEventsFooter />
    </div>
  )
}

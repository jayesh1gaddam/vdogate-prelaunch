'use client'

import { motion } from 'framer-motion'
import { Briefcase, Code, Users, Rocket, Heart, Zap, Mail, MapPin, Clock } from 'lucide-react'
import Navigation from './Navigation'
import Footer from './Footer'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We build products that solve real problems for creators',
    color: 'from-portal-primary to-portal-light',
  },
  {
    icon: Heart,
    title: 'Creator-Centric',
    description: 'Everything we do is to empower creators and help them succeed',
    color: 'from-portal-light to-portal-primary',
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'We believe in teamwork, transparency, and mutual growth',
    color: 'from-gate-blue to-gate-blue',
  },
  {
    icon: Zap,
    title: 'Move Fast',
    description: 'We iterate quickly, learn from feedback, and ship with confidence',
    color: 'from-portal-light to-portal-lighter',
  },
]

const ambassadorBenefits = [
  {
    icon: Zap,
    title: 'Early Access',
    description: 'Be among the first to experience new features and platform updates before public launch',
  },
  {
    icon: Users,
    title: 'Exclusive Community',
    description: 'Join a network of passionate creators and innovators shaping the future of VDOgate',
  },
  {
    icon: Rocket,
    title: 'Recognition & Rewards',
    description: 'Get featured on our platform, receive exclusive merchandise, and earn special perks',
  },
  {
    icon: Heart,
    title: 'Direct Impact',
    description: 'Your feedback directly influences product development and platform improvements',
  },
]

const perks = [
  'Competitive salary and equity',
  'Remote-first culture',
  'Health insurance for you and family',
  'Flexible working hours',
  'Learning & development budget',
  'Latest tech equipment',
  'Quarterly team offsites',
  'Unlimited leave policy',
]

export default function Careers() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-portal-primary/5 via-white to-portal-light/5 relative overflow-hidden">
        {/* Background Pattern */}
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
              <Briefcase className="w-4 h-4 text-portal-primary" />
              <span className="text-sm font-medium text-portal-primary">Join Our Mission</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Build the Future of <br />
              <span className="text-gradient">Creator Success</span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-gray-dark mb-8 max-w-3xl mx-auto leading-relaxed">
              We're building India's professional gateway for creators. Join us in empowering millions of creators to turn their skills into thriving businesses.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#ambassador-programme"
                className="px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
              >
                Explore Ambassador Programme
              </a>
              <a
                href="mailto:careers@vdogate.com"
                className="px-8 py-4 bg-white border-2 border-portal-primary text-portal-primary rounded-xl font-semibold text-lg hover:bg-portal-primary/5 transition-all duration-300"
              >
                Join Our Team
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-2xl mx-auto">
              The principles that guide everything we do at VDOgate
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group bg-neutral-background rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-brand-black">{value.title}</h3>
                  <p className="text-neutral-gray-dark leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ambassador Programme Section */}
      <section id="ambassador-programme" className="py-16 md:py-24 bg-neutral-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              VDOgate <span className="text-gradient">Ambassador Programme</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-3xl mx-auto leading-relaxed">
              Join a select group of creators, innovators, and community leaders who are passionate about transforming the creator economy in India
            </p>
          </motion.div>

          {/* Programme Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 mb-16 shadow-lg"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-black">
              What is the Ambassador Programme?
            </h3>
            <div className="space-y-4 text-neutral-gray-dark leading-relaxed">
              <p className="text-lg">
                The VDOgate Ambassador Programme is designed for creators, entrepreneurs, and community leaders who believe in empowering creators with fair monetization and authentic discovery. As an ambassador, you'll play a crucial role in shaping our platform while building your own brand alongside VDOgate's growth.
              </p>
              <p className="text-lg">
                We're looking for passionate individuals who understand the challenges creators face with algorithms, unfair revenue splits, and platform dependency. Whether you're a content creator, educator, consultant, or community builder—if you believe creators deserve better, this programme is for you.
              </p>
              <p className="text-lg">
                Ambassadors aren't just users; they're partners in our mission. You'll get exclusive access to our team, influence product decisions, and help us spread the word about a platform that puts creators first. This is your chance to be part of something bigger—a movement to give creators the tools and respect they deserve.
              </p>
            </div>
          </motion.div>

          {/* Ambassador Benefits */}
          <div className="max-w-5xl mx-auto mb-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-2xl md:text-3xl font-bold mb-10 text-center text-brand-black"
            >
              Ambassador Benefits
            </motion.h3>
            <div className="grid md:grid-cols-2 gap-8">
              {ambassadorBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-neutral-gray-lighter hover:shadow-elevation-3 hover:border-portal-primary/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-portal-gradient rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-brand-black">{benefit.title}</h4>
                        <p className="text-neutral-gray-dark leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Who Should Apply */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-portal-primary/5 to-portal-light/5 rounded-3xl p-8 md:p-12 mb-16 border border-portal-primary/10"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-brand-black text-center">
              Who Should Apply?
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Content creators with engaged communities</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Educators and skill-based professionals</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Community builders and influencers</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Entrepreneurs in the creator economy</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Tech enthusiasts passionate about creator tools</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-portal-primary rounded-full mt-2 flex-shrink-0" />
                <p className="text-neutral-gray-dark">Anyone who believes creators deserve better</p>
              </div>
            </div>
          </motion.div>

          {/* Apply CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center bg-white rounded-2xl p-12 border-2 border-portal-primary/20"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-brand-black">
              Ready to Become an Ambassador?
            </h3>
            <p className="text-neutral-gray-dark mb-8 max-w-2xl mx-auto text-lg">
              Applications are opening soon! Be among the first to join our founding ambassador cohort and help shape the future of creator success in India.
            </p>
            <a
              href="mailto:ambassadors@vdogate.com?subject=Ambassador Programme Application"
              className="inline-flex items-center gap-2 px-8 py-4 bg-portal-gradient text-white rounded-xl font-semibold text-lg hover:shadow-portal transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Express Your Interest
            </a>
            <p className="mt-6 text-sm text-neutral-gray">
              Have questions? Reach out to us at{' '}
              <a href="mailto:ambassadors@vdogate.com" className="text-portal-primary hover:underline font-medium">
                ambassadors@vdogate.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Perks & Benefits Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Perks & <span className="text-gradient">Benefits</span>
            </h2>
            <p className="text-lg text-neutral-gray-dark max-w-2xl mx-auto">
              We take care of our team so they can do their best work
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {perks.map((perk, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="flex items-center gap-4 bg-neutral-background rounded-xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 bg-portal-gradient rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <p className="text-brand-black font-medium">{perk}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-portal-primary via-portal-light to-portal-lighter relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Join us in building the platform that will empower millions of creators across India
            </p>
            <a
              href="mailto:careers@vdogate.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-portal-primary rounded-xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              careers@vdogate.com
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

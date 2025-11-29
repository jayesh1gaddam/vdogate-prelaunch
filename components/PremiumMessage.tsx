'use client'

import { motion } from 'framer-motion'

export default function PremiumMessage() {
  return (
    <section className="relative py-5 md:py-6 bg-gradient-to-br from-orange-50/30 via-white to-amber-50/20 overflow-hidden">
      {/* Premium Mesh Gradient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-100/30 via-transparent to-transparent" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f7682b08_1px,transparent_1px),linear-gradient(to_bottom,#f7682b08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-10 w-[400px] h-[400px] rounded-full blur-3xl bg-gradient-to-br from-orange-300/20 to-amber-200/20"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full blur-3xl bg-gradient-to-bl from-rose-200/20 to-orange-300/20"
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative Line - Left */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-orange-300/50 to-orange-300/0 max-w-[80px] md:max-w-[120px] hidden lg:block"
            />

            {/* Decorative Line - Right */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-l from-transparent via-orange-300/50 to-orange-300/0 max-w-[80px] md:max-w-[120px] hidden lg:block"
            />

            <div className="text-2xl md:text-3xl lg:text-4xl font-light text-brand-black leading-relaxed tracking-wide px-4">
              {/* Line 1: Main intro */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-1 md:mb-2"
              >
                Freelancers are driving India's new economy, from
              </motion.div>

              {/* Line 2: yoga trainers and beauticians */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-1 md:mb-2"
              >
                <span className="font-medium text-gradient">yoga trainers</span>
                {' '}and{' '}
                <span className="font-medium text-gradient">beauticians</span>
              </motion.div>

              {/* Line 3: to tutors, chefs, and digital experts */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
              >
                to{' '}
                <span className="font-medium text-gradient">tutors</span>
                ,{' '}
                <span className="font-medium text-gradient">chefs</span>
                , and{' '}
                <span className="font-medium text-gradient">digital experts</span>.
              </motion.div>
            </div>

            {/* Subtle Underline Accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
              className="mx-auto mt-8 h-[2px] w-24 bg-gradient-to-r from-orange-400 via-amber-400 to-orange-400 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

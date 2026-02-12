'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Clock, Heart, CheckCircle } from 'lucide-react'
import { staggerContainer, slideUp } from '@/lib/animations'

export default function GuaranteeCertificate() {
  return (
    <section
      id="guarantee"
      className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 to-white"
    >
      {/* Background accents */}
      <motion.div
        className="absolute top-0 left-1/4 w-80 h-80 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-4xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Certificate Card */}
        <motion.div variants={slideUp} className="relative group">
          {/* Gradient border effect */}
          <div className="absolute -inset-[3px] bg-gradient-to-r from-deep-teal via-rich-violet to-deep-teal rounded-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 blur-sm" />

          {/* Certificate content */}
          <div className="relative glass-dark p-12 md:p-16 rounded-3xl border-2 border-white/10 backdrop-blur-xl">
            {/* Decorative corner badges */}
            <motion.div
              className="absolute top-6 left-6 opacity-30"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Award className="w-8 h-8 text-deep-teal" />
            </motion.div>
            <motion.div
              className="absolute top-6 right-6 opacity-30"
              animate={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Award className="w-8 h-8 text-rich-violet" />
            </motion.div>

            {/* Main seal icon */}
            <motion.div
              className="w-24 h-24 mx-auto mb-8 bg-gradient-to-br from-deep-teal to-rich-violet rounded-full flex items-center justify-center shadow-2xl"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Shield className="w-12 h-12 text-white" />
            </motion.div>

            {/* Content */}
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-center text-white mb-4">
              Our Satisfaction Guarantee
            </h2>

            <p className="text-lg md:text-xl text-center text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed">
              If you're not completely satisfied with your cleaning, we'll re-clean your space
              within 24 hours—absolutely free.
            </p>

            {/* Trust details badges */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10 flex-wrap">
              {[
                { icon: CheckCircle, text: '100% Risk-Free' },
                { icon: Clock, text: '24-Hour Response' },
                { icon: Heart, text: 'No Questions Asked' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
                >
                  <item.icon className="w-4 h-4 text-deep-teal" />
                  <span className="text-sm font-semibold text-white">{item.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-white/20 my-8" />

            {/* Footer - Serial number & signature */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
              <div className="text-white/70">
                <p className="text-xs uppercase tracking-wider mb-1">Serial Number</p>
                <p className="font-mono text-white font-semibold">#2024-GUARANTEE</p>
              </div>

              <div className="text-right">
                <p className="text-xs uppercase tracking-wider text-white/70 mb-1">Authorized By</p>
                <p className="font-heading font-bold text-white">Sonya, Owner</p>
                <p className="text-xs text-white/70">Truly Clean LLC</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          variants={slideUp}
          className="text-center mt-8 text-gray-600 max-w-2xl mx-auto"
        >
          We stand behind our work. Your satisfaction is our top priority, and we're confident you'll
          love the results.
        </motion.p>
      </motion.div>
    </section>
  )
}

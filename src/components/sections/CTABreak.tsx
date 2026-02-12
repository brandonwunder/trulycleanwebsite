'use client'

import { motion } from 'framer-motion'
import { Sparkles, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { fadeIn, slideUp } from '@/lib/animations'

interface CTABreakProps {
  id: string
  headline: string
  subtext: string
  ctaLabel: string
  variant?: 'teal' | 'green' | 'dark'
}

const variantStyles = {
  teal: 'bg-gradient-to-br from-vibrant-teal via-vibrant-teal/90 to-vibrant-teal/80',
  green: 'bg-gradient-to-br from-vibrant-green via-vibrant-teal to-vibrant-teal/90',
  dark: 'bg-gradient-to-br from-navy-dark via-navy-dark/95 to-navy-dark',
}

export default function CTABreak({ id, headline, subtext, ctaLabel, variant = 'teal' }: CTABreakProps) {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id={id} className={`relative py-20 overflow-hidden ${variantStyles[variant]}`}>
      {/* Diagonal line pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
        }}
      />

      {/* Floating accent */}
      <motion.div
        className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/5 rounded-full blur-3xl"
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-4xl relative z-10 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeIn}
      >
        <motion.h2
          variants={slideUp}
          className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight"
        >
          {headline}
        </motion.h2>
        <motion.p
          variants={slideUp}
          className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          {subtext}
        </motion.p>
        <motion.div variants={slideUp}>
          <Button
            onClick={scrollToQuote}
            size="xl"
            variant={variant === 'dark' ? 'primary' : 'secondary'}
            className={variant === 'dark'
              ? 'bg-vibrant-teal text-white hover:bg-vibrant-teal/90 shadow-lg shadow-vibrant-teal/25'
              : 'bg-white text-navy-dark hover:bg-white/90 border-0 shadow-lg shadow-black/10'
            }
          >
            <Sparkles className="w-5 h-5" />
            {ctaLabel}
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

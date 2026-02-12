'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Phone, MapPin, Users, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -30, 0],
      rotate: [0, 15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  const floatingVariants2 = {
    animate: {
      y: [0, 20, 0],
      rotate: [0, -10, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative min-h-screen md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-vibrant-teal/5 via-vibrant-green/10 to-vibrant-orange/5">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 right-10 w-24 h-24 bg-vibrant-teal/20 rounded-full blur-3xl pointer-events-none"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-vibrant-green/20 rounded-full blur-3xl pointer-events-none"
        variants={floatingVariants2}
        animate="animate"
      />
      <motion.div
        className="absolute top-1/2 right-1/4 w-20 h-20 bg-vibrant-orange/15 rounded-full blur-3xl pointer-events-none"
        animate={{
          y: [0, -25, 0],
          x: [0, 10, 0],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 py-20 relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-vibrant-teal/10 text-vibrant-teal px-5 py-3 rounded-full mb-8 backdrop-blur-sm border border-vibrant-teal/20"
          >
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Trusted by New River Families</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-6xl lg:text-7xl text-navy-dark mb-6 leading-tight"
          >
            Your Neighbors.
            <br />
            <span className="text-vibrant-teal">Your Cleaning Experts.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're not just another cleaning service—we're your local partners in creating a healthier, happier home. Proudly serving New River, Anthem, and Cave Creek communities.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
          >
            <Button onClick={scrollToQuote} size="xl" variant="primary">
              <Sparkles className="w-5 h-5" />
              Get My Instant Quote
            </Button>
            <Button size="xl" variant="secondary" asChild>
              <a href={`tel:${phone}`}>
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators - Pill Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-200 border border-white/20"
              whileHover={{ y: -4 }}
            >
              <MapPin className="w-6 h-6 text-vibrant-teal flex-shrink-0" />
              <span className="font-medium text-gray-700">Serving 15+ AZ Communities</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-200 border border-white/20"
              whileHover={{ y: -4 }}
            >
              <Users className="w-6 h-6 text-vibrant-teal flex-shrink-0" />
              <span className="font-medium text-gray-700">Family-Owned Business</span>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 px-5 py-3 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-shadow duration-200 border border-white/20"
              whileHover={{ y: -4 }}
            >
              <Heart className="w-6 h-6 text-vibrant-teal flex-shrink-0" />
              <span className="font-medium text-gray-700">100% Satisfaction Promise</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

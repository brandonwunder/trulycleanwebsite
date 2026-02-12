'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Sparkles, Phone, MapPin, Users, Heart, ChevronDown, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { floatingAnimationSlow } from '@/lib/animations'

export default function Hero() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'

  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated radial gradients for cinematic depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{ background: 'radial-gradient(circle, #0891B2 0%, transparent 70%)' }}
          animate={{
            x: ['-10%', '5%', '-10%'],
            y: ['-5%', '10%', '-5%'],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full blur-[100px] opacity-15"
          style={{ background: 'radial-gradient(circle, #8B5CF6 0%, transparent 70%)' }}
          animate={{
            x: ['10%', '-5%', '10%'],
            y: ['5%', '-10%', '5%'],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute right-1/4 top-1/4 w-[400px] h-[400px] rounded-full blur-[80px] opacity-10"
          style={{ background: 'radial-gradient(circle, #22D3EE 0%, transparent 70%)' }}
          animate={{
            x: ['-5%', '8%', '-5%'],
            y: ['8%', '-5%', '8%'],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>

      {/* Floating trust badges — desktop only */}
      <motion.div
        className="hidden xl:flex absolute top-20 right-20 items-center gap-3 glass px-5 py-3 rounded-full shadow-lg z-20 border border-deep-teal/20"
        animate={floatingAnimationSlow}
      >
        <div className="relative w-6 h-6">
          <Image
            src="/images/logo/logo-icon.png"
            alt="Truly Clean Logo"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-sm font-semibold text-deep-indigo">Premium Care</span>
      </motion.div>
      <motion.div
        className="hidden xl:flex absolute top-32 right-16 items-center gap-2 glass px-4 py-2.5 rounded-full shadow-lg z-20"
        animate={floatingAnimationSlow}
      >
        <Shield className="w-4 h-4 text-rich-violet" />
        <span className="text-sm font-semibold text-deep-indigo">BBB Accredited</span>
      </motion.div>
      <motion.div
        className="hidden xl:flex absolute bottom-40 left-16 items-center gap-2 glass px-4 py-2.5 rounded-full shadow-lg z-20"
        animate={{ y: [0, -15, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } }}
      >
        <Sparkles className="w-4 h-4 text-light-teal" />
        <span className="text-sm font-semibold text-deep-indigo">Eco-Friendly</span>
      </motion.div>

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 py-24 relative z-10 max-w-5xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center">
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 glass-teal px-5 py-3 rounded-full mb-8 shadow-sm"
          >
            <Sparkles className="w-5 h-5 text-deep-teal" />
            <span className="font-semibold text-deep-teal">Trusted by local families</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-heading font-bold text-6xl md:text-7xl lg:text-8xl text-deep-indigo mb-6 leading-[0.95] tracking-tight"
          >
            Your North Phoenix
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-deep-teal to-rich-violet">
              Cleaning Experts
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We're not just another cleaning service — we're your local partners in creating a healthier, happier home. Proudly serving New River, Anthem, and Cave Creek.
          </motion.p>

          {/* CTA Buttons — glassmorphism wrappers */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <div className="glass rounded-2xl p-1.5 shadow-lg shadow-deep-teal/10">
              <Button onClick={scrollToQuote} size="xl" variant="primary" className="shadow-none">
                <Sparkles className="w-5 h-5" />
                Get My Instant Quote
              </Button>
            </div>
            <div className="glass rounded-2xl p-1.5 shadow-lg">
              <Button size="xl" variant="secondary" asChild className="shadow-none">
                <a href={`tel:${phone}`}>
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { icon: MapPin, text: 'Serving 15+ AZ Communities' },
              { icon: Users, text: 'Family-Owned Business' },
              { icon: Heart, text: '100% Satisfaction Promise' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 px-5 py-3 rounded-full glass shadow-sm hover:shadow-md transition-all duration-200"
                whileHover={{ y: -4 }}
              >
                <item.icon className="w-5 h-5 text-deep-teal flex-shrink-0" />
                <span className="font-medium text-gray-700 text-sm">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        onClick={scrollToServices}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">Explore</span>
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </div>
      </motion.div>
    </section>
  )
}

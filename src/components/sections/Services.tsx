'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Home,
  Building2,
  Clock,
  Shield,
  Leaf,
  Sparkles,
  CheckCircle,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useScrollReveal } from '@/hooks/useScrollReveal'
import { staggerContainer, slideUp, floatingAnimation } from '@/lib/animations'

export default function Services() {
  const { ref: containerRef, controls: containerControls } = useScrollReveal({
    threshold: 0.15,
    triggerOnce: true,
  })

  const residentialServices = [
    'Deep cleaning',
    'Regular maintenance',
    'Move-in/move-out cleaning',
    'Kitchen & bathroom sanitization',
    'Window cleaning',
    'Carpet & upholstery cleaning',
  ]

  const commercialServices = [
    'Office cleaning',
    'Retail space cleaning',
    'Medical facility sanitization',
    'Restaurant & kitchen cleaning',
    'Janitorial services',
    'Floor care & maintenance',
  ]

  const features = [
    {
      title: 'Flexible Scheduling',
      description: 'We work around your schedule',
      icon: Clock,
    },
    {
      title: 'Fully Insured',
      description: 'Licensed, bonded, and insured',
      icon: Shield,
    },
    {
      title: 'Eco-Friendly',
      description: 'Green cleaning products',
      icon: Leaf,
    },
  ]

  const handleServiceClick = (serviceType: string) => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="services"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Premium Watermark */}
      <div
        className="absolute top-20 right-0 w-[520px] h-[520px] md:w-[380px] md:h-[380px] opacity-[0.04] md:opacity-[0.03] pointer-events-none -z-10"
        style={{
          transform: 'translate(30%, -10%)',
          filter: 'blur(1px)'
        }}
      >
        <Image
          src="/images/logo/logo-icon-512.png"
          alt=""
          width={520}
          height={520}
          className="w-full h-full object-contain"
          aria-hidden="true"
        />
      </div>

      {/* Background floating elements */}
      <motion.div
        className="absolute top-10 left-10 w-40 h-40 bg-deep-teal/8 rounded-full blur-3xl"
        animate={floatingAnimation}
        style={{ y: 0 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-60 h-60 bg-rich-violet/8 rounded-full blur-3xl"
        animate={{
          y: [0, -30, 0],
          transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          <motion.div variants={slideUp}>
            <div className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-semibold">Our Expertise</span>
            </div>
          </motion.div>

          {/* Premium Brand Stamp */}
          <motion.div
            variants={slideUp}
            className="flex justify-center mb-6"
          >
            <div className="relative h-24 sm:h-28 lg:h-32">
              <Image
                src="/images/logo/logo-hero.png"
                alt="TrulyClean"
                width={1536}
                height={1024}
                className="h-full w-auto object-contain opacity-90"
              />
            </div>
          </motion.div>

          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Premium <span className="text-deep-teal">Services</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Professional cleaning solutions tailored for homes and businesses
          </motion.p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          ref={containerRef}
          className="grid md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          animate={containerControls}
          variants={staggerContainer}
        >
          {/* Residential Card */}
          <motion.div variants={slideUp}>
            <Card
              variant="elevated"
              size="lg"
              hover="glow"
              className="flex flex-col h-full group rounded-2xl relative overflow-hidden"
              interactive
            >
              {/* Popular Badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-light-teal text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                  Popular
                </span>
              </div>

              {/* Icon Container */}
              <motion.div
                className="bg-gradient-to-br from-deep-teal/20 to-deep-teal/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_rgba(6,182,212,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Home className="w-8 h-8 text-deep-teal" />
              </motion.div>

              <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-3">
                Residential Cleaning
              </h3>
              <p className="text-gray-600 mb-6 flex-1">
                Keep your home spotless with our comprehensive residential
                cleaning services.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {residentialServices.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.1, type: 'spring', stiffness: 500 }}
                    >
                      <CheckCircle className="w-5 h-5 text-deep-teal flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full group/btn"
                onClick={() => handleServiceClick('residential')}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </motion.div>

          {/* Commercial Card */}
          <motion.div variants={slideUp}>
            <Card
              variant="elevated"
              size="lg"
              hover="glow"
              className="flex flex-col h-full group rounded-2xl"
              interactive
            >
              <motion.div
                className="bg-gradient-to-br from-rich-violet/20 to-rich-violet/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_25px_rgba(132,204,22,0.3)] transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <Building2 className="w-8 h-8 text-rich-violet" />
              </motion.div>

              <h3 className="font-heading font-bold text-2xl text-deep-indigo mb-3">
                Commercial Cleaning
              </h3>
              <p className="text-gray-600 mb-6 flex-1">
                Professional cleaning solutions tailored for your business needs,
                keeping workspaces pristine.
              </p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {commercialServices.map((service, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 300 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 + 0.1, type: 'spring', stiffness: 500 }}
                    >
                      <CheckCircle className="w-5 h-5 text-rich-violet flex-shrink-0" />
                    </motion.div>
                    <span className="text-gray-700">{service}</span>
                  </motion.li>
                ))}
              </ul>

              <Button
                variant="primary"
                size="lg"
                className="w-full group/btn bg-rich-violet hover:bg-rich-violet/90"
                onClick={() => handleServiceClick('commercial')}
              >
                Get Quote
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </Card>
          </motion.div>
        </motion.div>

        {/* Features Section */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                variants={slideUp}
                className="group"
              >
                <div className="glass p-6 rounded-2xl text-center h-full flex flex-col items-center justify-center hover:bg-white/90 transition-all duration-300 hover:shadow-lg">
                  <motion.div
                    className="bg-gradient-to-br from-deep-teal/10 to-deep-teal/5 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-6 h-6 text-deep-teal" />
                  </motion.div>
                  <h4 className="font-heading font-bold text-lg text-deep-indigo mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

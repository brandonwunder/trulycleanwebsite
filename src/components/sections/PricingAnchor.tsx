'use client'

import { motion } from 'framer-motion'
import { Home, Sparkles, Truck, CheckCircle, Crown, ArrowRight } from 'lucide-react'
import { staggerContainer, slideUp, scaleIn } from '@/lib/animations'
import { Button } from '@/components/ui/button'

const tiers = [
  {
    name: 'Basic Clean',
    icon: Home,
    price: '99',
    period: 'per visit',
    description: 'Perfect for regular maintenance cleaning',
    features: [
      'Kitchen & bathroom surfaces',
      'Vacuuming & mopping floors',
      'Dusting all surfaces',
      'Trash removal',
      'Mirror & glass cleaning',
    ],
    featured: false,
    gradient: 'from-gray-50 to-white',
    borderColor: 'border-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
  {
    name: 'Deep Clean',
    icon: Sparkles,
    price: '179',
    period: 'per visit',
    description: 'Our most popular comprehensive cleaning',
    features: [
      'Everything in Basic Clean',
      'Inside appliances & oven',
      'Baseboards & window sills',
      'Cabinet exteriors',
      'Detailed scrubbing',
      'Sanitization treatment',
    ],
    featured: true,
    gradient: 'from-vibrant-teal/5 to-vibrant-green/5',
    borderColor: 'border-vibrant-teal/30',
    iconBg: 'bg-vibrant-teal/10',
    iconColor: 'text-vibrant-teal',
  },
  {
    name: 'Move In/Out',
    icon: Truck,
    price: '249',
    period: 'one-time',
    description: 'Complete top-to-bottom deep clean',
    features: [
      'Everything in Deep Clean',
      'Inside all cabinets & drawers',
      'Light fixtures & fans',
      'Garage sweep',
      'Window washing (interior)',
      'Wall spot cleaning',
    ],
    featured: false,
    gradient: 'from-gray-50 to-white',
    borderColor: 'border-gray-200',
    iconBg: 'bg-gray-100',
    iconColor: 'text-gray-600',
  },
]

export default function PricingAnchor() {
  const scrollToQuote = () => {
    document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="pricing" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background accents */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-vibrant-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-vibrant-orange/10 text-vibrant-orange px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-vibrant-orange/20"
          >
            <Crown className="w-4 h-4" />
            <span className="font-semibold text-sm">Transparent Pricing</span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-dark mb-4"
          >
            Affordable{' '}
            <span className="text-vibrant-orange">Premium</span> Cleaning
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Quality cleaning doesn't have to break the bank. Choose your level of clean.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={tier.featured ? scaleIn : slideUp}
              className={`relative bg-gradient-to-br ${tier.gradient} rounded-2xl border-2 ${tier.borderColor} p-8 ${
                tier.featured
                  ? 'lg:scale-105 shadow-xl shadow-vibrant-teal/10 ring-1 ring-vibrant-teal/20'
                  : 'shadow-lg hover:shadow-xl'
              } transition-all duration-300 hover:-translate-y-1 flex flex-col`}
            >
              {/* Popular Badge */}
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-vibrant-teal text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg shadow-vibrant-teal/25">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Icon & Name */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 ${tier.iconBg} rounded-xl flex items-center justify-center`}>
                  <tier.icon className={`w-6 h-6 ${tier.iconColor}`} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-xl text-navy-dark">{tier.name}</h3>
                  <p className="text-gray-500 text-sm">{tier.description}</p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-lg">from</span>
                  <span className="font-heading font-bold text-5xl text-navy-dark">${tier.price}</span>
                </div>
                <span className="text-gray-400 text-sm">{tier.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.featured ? 'text-vibrant-green' : 'text-gray-400'}`} />
                    <span className={`text-sm ${tier.featured ? 'text-navy-dark font-medium' : 'text-gray-600'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                onClick={scrollToQuote}
                size="lg"
                variant={tier.featured ? 'primary' : 'outline'}
                className="w-full"
              >
                Get Your Quote
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          variants={slideUp}
          className="text-center text-gray-400 text-sm mt-10 max-w-xl mx-auto"
        >
          *Starting prices based on standard-sized homes. Final pricing customized to your home's size and specific needs. Get your exact quote below — it's free and takes 60 seconds.
        </motion.p>
      </motion.div>
    </section>
  )
}

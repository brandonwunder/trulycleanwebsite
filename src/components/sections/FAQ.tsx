'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'
import Script from 'next/script'
import { staggerContainer, slideUp } from '@/lib/animations'

const faqItems = [
  {
    question: 'What areas do you serve?',
    answer: 'We proudly serve New River, Anthem, Cave Creek, Tramonto, Desert Hills, Black Canyon City, and surrounding North Phoenix communities. If you\'re not sure if we cover your area, just ask — we\'re always expanding!',
  },
  {
    question: 'How do I get a free quote?',
    answer: 'It\'s easy! Fill out our quick online form with your name, contact info, and the type of service you need. We\'ll get back to you with a customized quote within 24 hours — usually much faster.',
  },
  {
    question: 'What cleaning products do you use?',
    answer: 'We use eco-friendly, family-safe cleaning products that are tough on dirt but gentle on your home. Our products are non-toxic and safe for children, pets, and anyone with sensitivities.',
  },
  {
    question: 'Are you insured and bonded?',
    answer: 'Absolutely. Truly Clean is fully licensed, bonded, and insured. We also carry comprehensive liability coverage for your complete peace of mind. We\'re BBB Accredited with an A+ rating.',
  },
  {
    question: 'How do I schedule a cleaning?',
    answer: 'You can schedule through our website form, call us directly at (602) 695-0607, or email us. We offer flexible scheduling including weekly, bi-weekly, monthly, or one-time cleans.',
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'We understand plans change. We ask for at least 24 hours notice for cancellations or rescheduling. Same-day cancellations may incur a small fee. We\'re always flexible and understanding.',
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'That\'s entirely up to you! Many of our clients provide a key or access code. Our team is fully background-checked and trustworthy. You can stay home, step out, or just relax while we work.',
  },
  {
    question: 'What is included in a deep clean?',
    answer: 'Our deep clean covers everything in a basic clean plus: inside appliances and oven, baseboards and window sills, cabinet exteriors, detailed scrubbing of all bathrooms and kitchen, and a full sanitization treatment.',
  },
  {
    question: 'Do you bring your own supplies and equipment?',
    answer: 'Yes! We arrive fully equipped with professional-grade equipment and eco-friendly supplies. You don\'t need to provide anything. If you have product preferences, just let us know.',
  },
  {
    question: 'What if I\'m not satisfied with the cleaning?',
    answer: 'Your satisfaction is our top priority. We offer a 100% satisfaction guarantee — if you\'re not completely happy with any aspect of our service, we\'ll re-clean the area at no additional charge.',
  },
]

// Generate FAQ structured data for SEO
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

function FAQItem({ item, index }: { item: typeof faqItems[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      variants={slideUp}
      className={`rounded-xl border transition-all duration-200 ${
        isOpen
          ? 'bg-white shadow-md border-ocean-blue/20'
          : 'bg-white/60 border-gray-100 hover:border-gray-200 hover:shadow-sm'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
      >
        <div className="flex items-center gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
            isOpen ? 'bg-ocean-blue/10' : 'bg-gray-100'
          }`}>
            <span className={`font-heading font-bold text-sm ${isOpen ? 'text-ocean-blue' : 'text-gray-400'}`}>
              {String(index + 1).padStart(2, '0')}
            </span>
          </div>
          <h3 className={`font-heading font-semibold text-base md:text-lg transition-colors ${
            isOpen ? 'text-ocean-blue' : 'text-deep-indigo'
          }`}>
            {item.question}
          </h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className={`w-5 h-5 transition-colors ${isOpen ? 'text-ocean-blue' : 'text-gray-400'}`} />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 pl-16 md:pl-[4.5rem]">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <>
      <Script
        id="faq-structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section id="faq" className="relative py-20 md:py-28 overflow-hidden bg-white">
        {/* Background blobs */}
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-ocean-blue/5 rounded-full blur-3xl pointer-events-none"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="container mx-auto px-4 max-w-4xl relative z-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              variants={slideUp}
              className="inline-flex items-center gap-2 bg-ocean-blue/10 text-ocean-blue px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-ocean-blue/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="font-semibold text-sm">Common Questions</span>
            </motion.div>
            <motion.h2
              variants={slideUp}
              className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
            >
              Got{' '}
              <span className="text-ocean-blue">Questions?</span>
            </motion.h2>
            <motion.p
              variants={slideUp}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
            >
              We've got answers. Here's everything you need to know about Truly Clean.
            </motion.p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <FAQItem key={index} item={item} index={index} />
            ))}
          </div>

          {/* Still have questions? */}
          <motion.div
            variants={slideUp}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-ocean-blue/5 to-royal-blue/5 px-6 py-4 rounded-2xl border border-ocean-blue/10">
              <HelpCircle className="w-5 h-5 text-ocean-blue" />
              <p className="text-gray-600">
                Still have questions?{' '}
                <a href="tel:(602) 695-0607" className="text-ocean-blue font-semibold hover:underline">
                  Call us at (602) 695-0607
                </a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}

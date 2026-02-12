'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react'
import { staggerContainer, slideUp, scaleIn } from '@/lib/animations'

const galleryItems = [
  { category: 'Kitchen', gradient: 'from-vibrant-teal/20 via-vibrant-teal/10 to-white', span: 'md:col-span-2 md:row-span-2' },
  { category: 'Bathroom', gradient: 'from-vibrant-green/20 via-vibrant-green/10 to-white', span: '' },
  { category: 'Living Room', gradient: 'from-vibrant-orange/15 via-vibrant-orange/5 to-white', span: '' },
  { category: 'Office', gradient: 'from-blue-200/30 via-blue-100/10 to-white', span: '' },
  { category: 'Bedroom', gradient: 'from-purple-200/30 via-purple-100/10 to-white', span: '' },
  { category: 'Move-Out', gradient: 'from-vibrant-teal/15 via-vibrant-green/10 to-white', span: 'md:col-span-2' },
]

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const goNext = () => setLightboxIndex(prev => prev !== null ? (prev + 1) % galleryItems.length : null)
  const goPrev = () => setLightboxIndex(prev => prev !== null ? (prev - 1 + galleryItems.length) % galleryItems.length : null)

  return (
    <section id="gallery" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background accent */}
      <motion.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-vibrant-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-7xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-vibrant-teal/10 text-vibrant-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-vibrant-teal/20"
          >
            <Camera className="w-4 h-4" />
            <span className="font-semibold text-sm">Our Work</span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-navy-dark mb-4"
          >
            Spaces We've{' '}
            <span className="text-vibrant-teal">Transformed</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Every clean tells a story. Here's a glimpse of our work across the valley.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${item.span}`}
              onClick={() => openLightbox(index)}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Sparkles className="w-10 h-10 text-vibrant-teal/20 mx-auto mb-2" />
                    <span className="text-navy-dark/30 font-heading font-bold text-lg">{item.category}</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-navy-dark/0 group-hover:bg-navy-dark/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center mx-auto mb-2">
                    <Camera className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-heading font-semibold">{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-navy-dark/90 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image placeholder */}
              <div className={`aspect-[16/10] rounded-2xl bg-gradient-to-br ${galleryItems[lightboxIndex].gradient} flex items-center justify-center`}>
                <div className="text-center">
                  <Sparkles className="w-16 h-16 text-vibrant-teal/30 mx-auto mb-3" />
                  <h3 className="text-navy-dark/40 font-heading font-bold text-3xl mb-1">
                    {galleryItems[lightboxIndex].category}
                  </h3>
                  <p className="text-navy-dark/20">Photo coming soon</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex justify-between mt-4">
                <button
                  onClick={(e) => { e.stopPropagation(); goPrev() }}
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-white/60 self-center text-sm">
                  {lightboxIndex + 1} / {galleryItems.length}
                </span>
                <button
                  onClick={(e) => { e.stopPropagation(); goNext() }}
                  className="w-12 h-12 rounded-full glass-dark flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

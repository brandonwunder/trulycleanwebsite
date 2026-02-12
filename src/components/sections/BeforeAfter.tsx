'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, GripVertical, Eye, Clock } from 'lucide-react'
import { staggerContainer, slideUp, scaleIn } from '@/lib/animations'

interface ComparisonItem {
  label: string
  beforeLabel: string
  afterLabel: string
  problemLabel?: string
  resultLabel?: string
  duration?: string
  beforeGradient: string
  afterGradient: string
}

const comparisons: ComparisonItem[] = [
  {
    label: 'Kitchen Deep Clean',
    beforeLabel: 'Before',
    afterLabel: 'After',
    problemLabel: 'Greasy Buildup',
    resultLabel: 'Sparkling Clean',
    duration: '2h 15m Deep Clean',
    beforeGradient: 'from-gray-400 via-gray-300 to-gray-350',
    afterGradient: 'from-deep-teal/30 via-deep-teal/10 to-white',
  },
  {
    label: 'Bathroom Refresh',
    beforeLabel: 'Before',
    afterLabel: 'After',
    problemLabel: 'Soap Scum & Mildew',
    resultLabel: 'Spotless & Fresh',
    duration: '1h 45m Standard Clean',
    beforeGradient: 'from-gray-500 via-gray-400 to-gray-350',
    afterGradient: 'from-rich-violet/30 via-rich-violet/10 to-white',
  },
  {
    label: 'Move-Out Reset',
    beforeLabel: 'Before',
    afterLabel: 'After',
    problemLabel: 'Post-Tenant Mess',
    resultLabel: 'Rent-Ready',
    duration: '4h 30m Move-Out Clean',
    beforeGradient: 'from-gray-600 via-gray-500 to-gray-400',
    afterGradient: 'from-rich-violet/30 via-rich-violet/10 to-white',
  },
]

function ComparisonSlider({ item }: { item: ComparisonItem }) {
  const [sliderPos, setSliderPos] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(5, Math.min(95, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    handleMove(e.clientX)
  }, [handleMove])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    handleMove(e.clientX)
  }, [handleMove])

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setSliderPos((prev) => Math.max(5, prev - 5))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setSliderPos((prev) => Math.min(95, prev + 5))
    }
  }, [])

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize shadow-lg border border-white/20 select-none touch-none focus:outline-none focus-visible:ring-2 focus-visible:ring-deep-teal"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPos)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`Before and after comparison slider for ${item.label}. Use arrow keys to adjust.`}
      >
        {/* After (bottom layer - full) */}
        <div className={`absolute inset-0 bg-gradient-to-br ${item.afterGradient} sparkle-bokeh`}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-12 h-12 text-deep-teal/40 mx-auto mb-2" />
              <span className="text-deep-teal/60 font-heading font-bold text-2xl">{item.afterLabel}</span>
              <p className="text-deep-teal/40 text-sm mt-1">Spotless & Fresh</p>
            </div>
          </div>
        </div>

        {/* Before (top layer - clipped) */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.beforeGradient}`}
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-gray-500/20 flex items-center justify-center mx-auto mb-2">
                <Eye className="w-6 h-6 text-gray-500/60" />
              </div>
              <span className="text-gray-600/60 font-heading font-bold text-2xl">{item.beforeLabel}</span>
              <p className="text-gray-500/40 text-sm mt-1">Needs Attention</p>
            </div>
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-xl z-10"
          style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
        >
          {/* Grip handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-deep-teal flex items-center justify-center">
            <GripVertical className="w-4 h-4 text-deep-teal" />
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 space-y-1 z-10">
          <div className="glass px-3 py-1 rounded-full inline-block">
            <span className="text-xs font-semibold text-gray-700">Problem</span>
          </div>
          {item.problemLabel && (
            <p className="text-xs text-gray-600 font-medium">{item.problemLabel}</p>
          )}
        </div>
        <div className="absolute top-4 right-4 space-y-1 z-10 text-right">
          <div className="glass-teal px-3 py-1 rounded-full inline-block">
            <span className="text-xs font-semibold text-deep-teal">Result</span>
          </div>
          {item.resultLabel && (
            <p className="text-xs text-deep-teal font-semibold">{item.resultLabel}</p>
          )}
        </div>

        {/* Duration Badge */}
        {item.duration && (
          <div className="absolute bottom-4 right-4 glass-teal px-4 py-2 rounded-full flex items-center gap-2 z-10">
            <Clock className="w-3 h-3 text-deep-teal" />
            <span className="text-xs font-semibold text-deep-teal">{item.duration}</span>
          </div>
        )}
      </div>

      <p className="text-center mt-4 font-heading font-semibold text-deep-indigo text-lg">{item.label}</p>
    </div>
  )
}

export default function BeforeAfter() {
  return (
    <section id="before-after" className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Background accents */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-deep-teal/5 rounded-full blur-3xl pointer-events-none"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <motion.div
        className="container mx-auto px-4 max-w-6xl relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={slideUp}
            className="inline-flex items-center gap-2 bg-deep-teal/10 text-deep-teal px-5 py-2.5 rounded-full mb-6 backdrop-blur-sm border border-deep-teal/20"
          >
            <Eye className="w-4 h-4" />
            <span className="font-semibold text-sm">See the Difference</span>
          </motion.div>
          <motion.h2
            variants={slideUp}
            className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-deep-indigo mb-4"
          >
            Real Results,{' '}
            <span className="text-deep-teal">Real Clean</span>
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Drag the slider to see the transformation. Your space could be next.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {comparisons.map((item, index) => (
            <motion.div key={index} variants={scaleIn}>
              <ComparisonSlider item={item} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

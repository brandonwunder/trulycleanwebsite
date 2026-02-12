'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { QuoteFormSchema, type QuoteFormData } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Home, Building2, FileText, Loader2, CheckCircle, Mail, Phone, User } from 'lucide-react'
import { successAnimation, slideUp } from '@/lib/animations'

export default function QuoteForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
  })

  const notes = watch('notes')

  async function onSubmit(data: QuoteFormData) {
    setSubmitError('')
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()
        setTimeout(() => setSubmitSuccess(false), 6000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setSubmitError(
        'Unable to submit form. Please try again or call us directly at (602) 695-0607.'
      )
    }
  }

  if (submitSuccess) {
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={successAnimation}
        className="glass p-8 rounded-2xl text-center border border-vibrant-green/30"
      >
        <motion.div
          className="mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6 }}
        >
          <CheckCircle className="w-16 h-16 text-vibrant-green mx-auto" />
        </motion.div>
        <h3 className="font-heading font-bold text-2xl text-navy-dark mb-2">
          Quote Request Received!
        </h3>
        <p className="text-gray-600 mb-4">
          Thank you! Our team will contact you within 24 hours with a customized quote.
        </p>
        <p className="text-sm text-gray-500">
          📞 In the meantime, feel free to call us at (602) 695-0607
        </p>
      </motion.div>
    )
  }

  return (
    <div className="glass p-8 rounded-2xl border border-white/20">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm flex items-start gap-2"
          >
            <span className="mt-0.5">⚠️</span>
            <span>{submitError}</span>
          </motion.div>
        )}

        {/* Full Name */}
        <motion.div variants={slideUp}>
          <div className="relative">
            <User className="absolute left-4 top-3.5 w-5 h-5 text-vibrant-teal pointer-events-none" />
            <input
              id="fullName"
              placeholder="Full Name"
              {...register('fullName')}
              className={`w-full pl-12 pr-4 py-3 bg-white/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal focus:bg-white transition-all ${
                errors.fullName ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.fullName && (
            <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
          )}
        </motion.div>

        {/* Email */}
        <motion.div variants={slideUp}>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 w-5 h-5 text-vibrant-teal pointer-events-none" />
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              {...register('email')}
              className={`w-full pl-12 pr-4 py-3 bg-white/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal focus:bg-white transition-all ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </motion.div>

        {/* Phone */}
        <motion.div variants={slideUp}>
          <div className="relative">
            <Phone className="absolute left-4 top-3.5 w-5 h-5 text-vibrant-teal pointer-events-none" />
            <input
              id="phone"
              type="tel"
              placeholder="Phone Number"
              {...register('phone')}
              className={`w-full pl-12 pr-4 py-3 bg-white/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal focus:bg-white transition-all ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
            />
          </div>
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
          )}
        </motion.div>

        {/* Service Type */}
        <motion.div variants={slideUp}>
          <label className="text-navy-dark font-semibold block mb-3 text-sm">
            Service Type *
          </label>
          <div className="grid grid-cols-2 gap-3">
            <label className="cursor-pointer group">
              <input
                type="radio"
                value="residential"
                {...register('serviceType')}
                className="sr-only peer"
              />
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center peer-checked:border-vibrant-teal peer-checked:bg-vibrant-teal/10 transition font-semibold flex flex-col items-center gap-2 group-hover:border-vibrant-teal/50">
                <Home className="w-6 h-6 text-vibrant-teal" />
                Residential
              </div>
            </label>
            <label className="cursor-pointer group">
              <input
                type="radio"
                value="commercial"
                {...register('serviceType')}
                className="sr-only peer"
              />
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center peer-checked:border-vibrant-teal peer-checked:bg-vibrant-teal/10 transition font-semibold flex flex-col items-center gap-2 group-hover:border-vibrant-teal/50">
                <Building2 className="w-6 h-6 text-vibrant-green" />
                Commercial
              </div>
            </label>
          </div>
          {errors.serviceType && (
            <p className="text-red-500 text-xs mt-1">{errors.serviceType.message}</p>
          )}
        </motion.div>

        {/* Additional Notes */}
        <motion.div variants={slideUp}>
          <div className="relative">
            <FileText className="absolute left-4 top-3.5 w-5 h-5 text-vibrant-teal pointer-events-none" />
            <textarea
              id="notes"
              placeholder="Tell us about your cleaning needs (optional)"
              rows={3}
              {...register('notes')}
              maxLength={500}
              className={`w-full pl-12 pr-4 py-3 bg-white/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal focus:bg-white transition-all resize-none ${
                errors.notes ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            <div className="text-xs text-gray-500 mt-1 text-right">
              {notes?.length || 0}/500
            </div>
          </div>
          {errors.notes && (
            <p className="text-red-500 text-xs mt-1">{errors.notes.message}</p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div variants={slideUp} className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting}
            className="w-full group"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Get Your Free Quote
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </div>
  )
}

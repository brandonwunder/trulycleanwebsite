'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { QuoteFormSchema, type QuoteFormData } from '@/lib/validation'

export default function QuoteForm() {
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
  })

  async function onSubmit(data: QuoteFormData) {
    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        reset()

        // Reset success message after 5 seconds
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      alert('Error submitting form. Please try again or call us directly.')
    }
  }

  if (submitSuccess) {
    return (
      <div className="bg-vibrant-green/10 border-2 border-vibrant-green rounded-lg p-8 text-center animate-fade-in">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="font-heading font-bold text-2xl text-navy-dark mb-2">
          Thank You!
        </h3>
        <p className="text-gray-600">
          We've received your quote request. Our team will contact you within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-xl border border-gray-200">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="text-navy-dark font-semibold block mb-2">
            Full Name *
          </label>
          <input
            id="fullName"
            placeholder="John Doe"
            {...register('fullName')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal ${
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="text-navy-dark font-semibold block mb-2">
            Email Address *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register('email')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="text-navy-dark font-semibold block mb-2">
            Phone Number *
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="(555) 123-4567"
            {...register('phone')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        {/* Service Type */}
        <div>
          <label className="text-navy-dark font-semibold block mb-3">
            Service Type *
          </label>
          <div className="grid grid-cols-2 gap-4">
            <label className="cursor-pointer">
              <input
                type="radio"
                value="residential"
                {...register('serviceType')}
                className="sr-only peer"
              />
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center peer-checked:border-vibrant-teal peer-checked:bg-vibrant-teal/10 transition font-semibold">
                🏠 Residential
              </div>
            </label>
            <label className="cursor-pointer">
              <input
                type="radio"
                value="commercial"
                {...register('serviceType')}
                className="sr-only peer"
              />
              <div className="border-2 border-gray-300 rounded-lg p-4 text-center peer-checked:border-vibrant-teal peer-checked:bg-vibrant-teal/10 transition font-semibold">
                🏢 Commercial
              </div>
            </label>
          </div>
          {errors.serviceType && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
          )}
        </div>

        {/* Additional Notes */}
        <div>
          <label htmlFor="notes" className="text-navy-dark font-semibold block mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            placeholder="Tell us about your cleaning needs..."
            rows={4}
            {...register('notes')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-vibrant-teal ${
              errors.notes ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.notes && (
            <p className="text-red-500 text-sm mt-1">{errors.notes.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-vibrant-teal hover:bg-vibrant-teal/90 disabled:bg-gray-400 text-white py-3 text-lg font-semibold rounded-lg transition"
        >
          {isSubmitting ? '⏳ Submitting...' : 'Get Your Free Quote'}
        </button>
      </form>
    </div>
  )
}

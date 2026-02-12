'use client'

import QuoteForm from '@/components/QuoteForm'

export default function Contact() {
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'sonya_7653@hotmail.com'
  const serviceAreas = process.env.NEXT_PUBLIC_SERVICE_AREAS || 'New River, Anthem, Cave Creek & surrounding areas'

  return (
    <section id="quote-form" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-4">
            Get Your <span className="text-vibrant-teal">Free Quote</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fill out the form below and we'll get back to you within 24 hours with a customized quote.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <QuoteForm />
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-2xl text-navy-dark mb-6">
                Or Contact Us Directly
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-vibrant-teal/10 p-3 rounded-lg">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1">Phone</h4>
                    <a
                      href={`tel:${phone}`}
                      className="text-gray-600 hover:text-vibrant-teal transition"
                    >
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-vibrant-teal/10 p-3 rounded-lg">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1">Email</h4>
                    <a
                      href={`mailto:${email}`}
                      className="text-gray-600 hover:text-vibrant-teal transition"
                    >
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-vibrant-teal/10 p-3 rounded-lg">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-dark mb-1">Service Area</h4>
                    <p className="text-gray-600">
                      {serviceAreas}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-vibrant-teal/10 border-2 border-vibrant-teal rounded-lg p-6">
              <h4 className="font-heading font-bold text-xl text-navy-dark mb-3">
                Why Choose Truly Clean?
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-vibrant-teal font-bold mt-1">✓</span>
                  <span>BBB Accredited & trusted by 492+ followers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vibrant-teal font-bold mt-1">✓</span>
                  <span>Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vibrant-teal font-bold mt-1">✓</span>
                  <span>100% satisfaction guarantee</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-vibrant-teal font-bold mt-1">✓</span>
                  <span>Flexible scheduling options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

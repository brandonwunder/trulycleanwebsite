'use client'

export default function Services() {
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
    },
    {
      title: 'Fully Insured',
      description: 'Licensed, bonded, and insured',
    },
    {
      title: 'Eco-Friendly',
      description: 'Green cleaning products',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-4">
            Our <span className="text-vibrant-teal">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional cleaning solutions for homes and businesses
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Residential Card */}
          <div className="p-8 border-2 border-transparent hover:border-vibrant-teal rounded-lg hover:shadow-2xl transition-all">
            <div className="bg-vibrant-teal/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🏠</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy-dark mb-4">
              Residential Cleaning
            </h3>
            <p className="text-gray-600 mb-6">
              Keep your home spotless with our comprehensive residential cleaning services.
            </p>
            <ul className="space-y-3 mb-8">
              {residentialServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-vibrant-teal mt-0.5">✨</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold py-3 rounded-lg transition"
            >
              Get Residential Quote
            </button>
          </div>

          {/* Commercial Card */}
          <div className="p-8 border-2 border-transparent hover:border-vibrant-green rounded-lg hover:shadow-2xl transition-all">
            <div className="bg-vibrant-green/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <span className="text-3xl">🏢</span>
            </div>
            <h3 className="font-heading font-bold text-2xl text-navy-dark mb-4">
              Commercial Cleaning
            </h3>
            <p className="text-gray-600 mb-6">
              Professional cleaning solutions tailored for your business needs.
            </p>
            <ul className="space-y-3 mb-8">
              {commercialServices.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-vibrant-green mt-0.5">✨</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
            <button
              onClick={() => document.getElementById('quote-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-vibrant-green hover:bg-vibrant-green/90 text-white font-semibold py-3 rounded-lg transition"
            >
              Get Commercial Quote
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-vibrant-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💪</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-navy-dark mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

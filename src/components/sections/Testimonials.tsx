'use client'

const testimonials = [
  {
    name: 'Sarah Johnson',
    service: 'Residential Cleaning',
    rating: 5,
    text: 'Truly Clean transformed my home! Their attention to detail is incredible. I highly recommend their services to anyone looking for professional cleaning.',
  },
  {
    name: 'Michael Chen',
    service: 'Commercial Cleaning',
    rating: 5,
    text: 'We\'ve been using Truly Clean for our office for 6 months now. The team is reliable, thorough, and professional. Our workspace has never looked better!',
  },
  {
    name: 'Emily Rodriguez',
    service: 'Deep Cleaning',
    rating: 5,
    text: 'Amazing service! They did a deep clean of my entire house and it feels brand new. The eco-friendly products they use are a huge plus for me.',
  },
  {
    name: 'David Thompson',
    service: 'Move-Out Cleaning',
    rating: 5,
    text: 'Truly Clean made my move-out process so much easier. They got my deposit back in full thanks to their thorough cleaning. Worth every penny!',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-vibrant-teal/5 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-4">
            What Our <span className="text-vibrant-teal">Customers Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-100">
              <div className="mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl">⭐</span>
                ))}
              </div>

              <p className="text-gray-700 mb-6 italic">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-bold text-navy-dark">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.service}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

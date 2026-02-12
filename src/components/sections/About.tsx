'use client'

export default function About() {
  const stats = [
    { label: 'BBB Accredited', value: '✓' },
    { label: 'Followers', value: '492+' },
    { label: 'Satisfaction', value: '100%' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-navy-dark mb-6">
              About <span className="text-vibrant-teal">Truly Clean</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              At Truly Clean, we believe that a clean space is the foundation for a healthy, happy life. Our mission is to provide exceptional cleaning services that exceed expectations every single time.
            </p>
            <p className="text-gray-600 mb-8">
              Founded and operated by Sonya Ansell, we've built our reputation on reliability, professionalism, and attention to detail. Every member of our team is trained, vetted, and committed to delivering the highest quality service. We're proud to be accredited by the Better Business Bureau, a testament to our commitment to excellence.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-vibrant-teal text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">Quality First</h4>
                  <p className="text-gray-600">We never compromise on the quality of our work</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-vibrant-teal text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">Eco-Conscious</h4>
                  <p className="text-gray-600">Safe, green cleaning products for your health</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-vibrant-teal text-2xl">✓</span>
                <div>
                  <h4 className="font-semibold text-navy-dark mb-1">Customer Focused</h4>
                  <p className="text-gray-600">Your satisfaction is our top priority</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stats */}
          <div className="grid gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-vibrant-teal/10 to-vibrant-green/10 p-8 rounded-lg border-2 border-vibrant-teal/20 hover:border-vibrant-teal transition"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-4xl font-bold text-vibrant-teal">{stat.value}</span>
                  </div>
                  <div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

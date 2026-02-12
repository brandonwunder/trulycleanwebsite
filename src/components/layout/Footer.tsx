import { TrulyCleanLogo } from '@/components/Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const phone = process.env.NEXT_PUBLIC_COMPANY_PHONE || '(602) 695-0607'
  const email = process.env.NEXT_PUBLIC_COMPANY_EMAIL || 'sonya_7653@hotmail.com'

  return (
    <footer className="bg-navy-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <TrulyCleanLogo variant="white" className="h-12 w-auto mb-4" />
            <p className="text-gray-300">
              Professional residential and commercial cleaning services you can trust.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-300 hover:text-vibrant-teal transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-vibrant-teal transition">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-vibrant-teal transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`tel:${phone}`}
                  className="text-gray-300 hover:text-vibrant-teal transition"
                >
                  {phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${email}`}
                  className="text-gray-300 hover:text-vibrant-teal transition"
                >
                  {email}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/TrulyCleanSonya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-vibrant-teal transition"
                >
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Truly Clean. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

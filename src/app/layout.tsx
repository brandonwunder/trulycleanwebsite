import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import FixedBackground from '@/components/FixedBackground'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Truly Clean | Professional Cleaning Services',
  description: 'Professional residential and commercial cleaning services. Get your free quote today!',
  keywords: 'cleaning, residential cleaning, commercial cleaning, professional cleaning',
  icons: {
    icon: [
      { url: '/images/logo/favicon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/logo/favicon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/images/logo/apple-touch-icon.png',
  },
  openGraph: {
    title: 'Truly Clean | Professional Cleaning Services',
    description: 'Get your free cleaning quote today',
    type: 'website',
    images: [
      {
        url: '/images/logo/logo-square-512.png',
        width: 512,
        height: 512,
        alt: 'Truly Clean Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    images: '/images/logo/logo-square-512.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">
        {/* Fixed background system */}
        <FixedBackground />

        {/* Main content with z-index stacking */}
        <div className="relative z-10">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

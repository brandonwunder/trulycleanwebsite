import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Custom Truly Clean brand colors
        'vibrant-teal': '#06B6D4',
        'vibrant-green': '#84CC16',
        'vibrant-orange': '#F97316',
        'navy-dark': '#0F172A',

        // shadcn/ui colors (keep defaults)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#06B6D4', // Vibrant teal
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#84CC16', // Fresh green
          foreground: '#0F172A',
        },
        accent: {
          DEFAULT: '#F97316', // Vibrant orange
          foreground: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Glass morphism utilities
    function ({ addUtilities }: any) {
      addUtilities({
        '.glass': {
          '@apply bg-white/80 backdrop-blur-sm border border-white/20': {},
        },
        '.glass-dark': {
          '@apply bg-navy-dark/80 backdrop-blur-sm border border-white/10': {},
        },
        '.glass-teal': {
          '@apply bg-vibrant-teal/10 backdrop-blur-sm border border-vibrant-teal/20': {},
        },
        '.glass-green': {
          '@apply bg-vibrant-green/10 backdrop-blur-sm border border-vibrant-green/20': {},
        },
        '.glass-orange': {
          '@apply bg-vibrant-orange/10 backdrop-blur-sm border border-vibrant-orange/20': {},
        },
      })
    },
  ],
}

export default config

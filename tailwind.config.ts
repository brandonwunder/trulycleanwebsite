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
        // Custom Truly Clean brand colors - Ocean Depths palette
        'ocean-blue': '#0EA5E9',
        'royal-blue': '#3B82F6',
        'vibrant-purple': '#A855F7',
        'deep-indigo': '#1E1B4B',

        // shadcn/ui colors (keep defaults)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#0EA5E9', // Ocean blue
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#3B82F6', // Royal blue
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#A855F7', // Vibrant purple
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
        'marquee': 'marquee 40s linear infinite',
        'marquee-reverse': 'marqueeReverse 40s linear infinite',
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
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
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
          '@apply bg-deep-indigo/80 backdrop-blur-sm border border-white/10': {},
        },
        '.glass-ocean': {
          '@apply bg-ocean-blue/10 backdrop-blur-sm border border-ocean-blue/20': {},
        },
        '.glass-royal': {
          '@apply bg-royal-blue/10 backdrop-blur-sm border border-royal-blue/20': {},
        },
        '.glass-purple': {
          '@apply bg-vibrant-purple/10 backdrop-blur-sm border border-vibrant-purple/20': {},
        },
      })
    },
  ],
}

export default config

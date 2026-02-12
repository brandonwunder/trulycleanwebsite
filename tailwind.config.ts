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
        // Custom Truly Clean brand colors - Teal Harmony palette
        'deep-teal': '#0891B2',      // Cyan 600 - Primary teal
        'rich-violet': '#8B5CF6',    // Violet 500 - Primary purple
        'light-teal': '#22D3EE',     // Cyan 400 - Tertiary accent
        'deep-indigo': '#1E1B4B',    // Indigo 950 - Text/dark (unchanged)

        // shadcn/ui colors (keep defaults)
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: '#0891B2',  // Deep teal
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#8B5CF6',  // Rich violet
          foreground: '#FFFFFF',
        },
        accent: {
          DEFAULT: '#22D3EE',  // Light teal
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
        '.glass-teal': {
          '@apply bg-deep-teal/10 backdrop-blur-sm border border-deep-teal/20': {},
        },
        '.glass-violet': {
          '@apply bg-rich-violet/10 backdrop-blur-sm border border-rich-violet/20': {},
        },
        '.glass-light': {
          '@apply bg-light-teal/10 backdrop-blur-sm border border-light-teal/20': {},
        },
      })
    },
  ],
}

export default config

import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          deep: '#0A1628',
          medium: '#1E3A8A',
          light: '#3B82F6',
        },
        secondary: {
          dark: '#065F46',
          medium: '#10B981',
          light: '#34D399',
        },
        accent: {
          gold: '#F59E0B',
          'gold-light': '#FBBF24',
          purple: '#7C3AED',
          'purple-light': '#A855F7',
        },
        neutral: {
          darkest: '#000000',
          dark: '#0D0D0D',
          medium: '#1A1A1A',
          light: '#E0E0E0',
          lightest: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'monospace'],
      },
      backgroundImage: {
        'organic-gradient': 'linear-gradient(180deg, #0A1628 0%, #000000 100%)',
        'organic-cellular-gradient': 'linear-gradient(180deg, #0A1628 0%, #000000 100%), radial-gradient(rgba(59, 130, 246, 0.08) 0.5px, transparent 1px)',
      },
      backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        'cellular-sm': '10px 10px', // For the radial gradient dots
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ripple': 'ripple 0.6s linear',
        'breathing': 'breathing 6s ease-in-out infinite',
      },
      keyframes: {
        ripple: {
          'to': { transform: 'scale(4)', opacity: '0' },
        },
        breathing: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.7' },
          '50%': { transform: 'scale(1.03)', opacity: '1' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 15px 5px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;

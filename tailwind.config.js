import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eefcf3',
          100: '#d5f8e2',
          200: '#aef0c8',
          300: '#77e4a5',
          400: '#3fd07d',
          500: '#16b85f',
          600: '#0a964c',
          700: '#08783e',
          800: '#0a5e34',
          900: '#094d2d',
          950: '#032a17',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        dark: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d4d9e2',
          300: '#aeb8ca',
          400: '#8291ab',
          500: '#627290',
          600: '#4d5a76',
          700: '#3f495e',
          800: '#2d3444',
          900: '#1a1f2b',
          950: '#0f1219',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config

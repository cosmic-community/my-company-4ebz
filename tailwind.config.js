/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0a0e14',
        midnight: '#0f1829',
        'deep-navy': '#111827',
        gold: '#d4af37',
        'gold-light': '#f4cf5a',
        'electric-blue': '#00d4ff',
        'electric-blue-dark': '#0099cc',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0e14 0%, #0f1829 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4af37 0%, #f4cf5a 100%)',
      },
    },
  },
  plugins: [],
}
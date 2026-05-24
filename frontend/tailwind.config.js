/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F5D56A',
          dark: '#A08A1E',
          glow: 'rgba(212,175,55,0.3)',
        },
        navy: {
          DEFAULT: '#0C0F1E',
          dark: '#080B16',
          light: '#111827',
          card: '#0F1629',
          border: 'rgba(212,175,55,0.15)',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #F5D56A 50%, #D4AF37 100%)',
        'navy-gradient': 'linear-gradient(135deg, #080B16 0%, #0C0F1E 50%, #111827 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(212,175,55,0.08) 0%, rgba(212,175,55,0.02) 100%)',
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212,175,55,0.3)',
        'gold-lg': '0 0 60px rgba(212,175,55,0.4)',
        'card': '0 4px 40px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212,175,55,0.2)' },
          '50%': { boxShadow: '0 0 40px rgba(212,175,55,0.5)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

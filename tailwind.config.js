/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#17280F',
          900: '#243B16',
          800: '#345020',
          700: '#5F7F32',
          600: '#6B8E39',
          500: '#789C3C',
          400: '#94B855',
          100: '#E2ECCF',
        },
        cream: {
          50: '#FAF8F0',
          100: '#F7F2E2',
          200: '#F5EBD3',
          300: '#EBD8B0',
          400: '#DFBE86',
        },
        earth: {
          900: '#302116',
          800: '#4F3622',
          700: '#6B4A2F',
          600: '#8A613E',
          500: '#A47750',
          100: '#F2E8DE',
        },
        golden: {
          500: '#C7A66A',
          600: '#B08E51',
          400: '#DAC188',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'organic': '0 10px 30px -5px rgba(36, 59, 22, 0.08)',
        'organic-lg': '0 20px 40px -10px rgba(36, 59, 22, 0.15)',
        'golden-glow': '0 0 25px rgba(199, 166, 106, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}

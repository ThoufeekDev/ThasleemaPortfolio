/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FAF8F5',
          100: '#F5F1E8',
          200: '#EBE4D5',
          300: '#DFD5C0',
          400: '#C7B79B',
          500: '#AC9774',
        },
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F2',
          200: '#F4EFE6',
          300: '#ECE3D5',
        },
        navy: {
          950: '#0B111E',
          900: '#111927',
          800: '#1B2434',
          700: '#2A364B',
          600: '#404E67',
          500: '#5D6E8B',
        },
        emerald: {
          900: '#064E3B',
          800: '#065F46',
          700: '#047857',
          600: '#059669',
          500: '#10B981',
          400: '#34D399',
          100: '#D1FAE5',
          50: '#ECFDF5',
        },
        tealAccent: {
          900: '#134E4A',
          800: '#115E59',
          700: '#0F766E',
          600: '#0D9488',
          500: '#14B8A6',
          100: '#CCFBF1',
          50: '#F0FDFA',
        }
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(17, 25, 39, 0.05), 0 4px 6px -2px rgba(17, 25, 39, 0.02)',
        'card': '0 4px 20px -2px rgba(17, 25, 39, 0.06), 0 2px 6px -1px rgba(17, 25, 39, 0.03)',
        'hover': '0 10px 30px -4px rgba(17, 25, 39, 0.08), 0 4px 10px -2px rgba(17, 25, 39, 0.04)',
        'elevated': '0 20px 40px -6px rgba(17, 25, 39, 0.1)',
      }
    },
  },
  plugins: [],
}

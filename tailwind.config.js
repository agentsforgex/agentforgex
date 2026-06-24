
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        amber: {
          50: '#FFFFFF',
          100: '#F4FFFD',
          200: '#C2FFF0',
          300: '#5AFFE3',
          500: '#00FFCC',
          700: '#00CCA3',
          800: '#00806A',
          900: '#00332A',
        },
        dashboard: {
          bg: {
            light: '#F4F6FA',
            dark: '#0F1117'
          },
          sidebar: {
            light: '#FFFFFF',
            dark: '#161B27'
          }
        }
      }
    },
  },
  plugins: [],
}

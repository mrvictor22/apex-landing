import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0E3A4A',
          50: '#E6F2F5',
          100: '#CCE5EB',
          200: '#99CBD7',
          300: '#66B1C3',
          400: '#3397AF',
          500: '#0E3A4A',
          600: '#0B2E3B',
          700: '#08222C',
          800: '#05161D',
          900: '#020A0E',
        },
        secondary: {
          DEFAULT: '#5DA0B5',
          50: '#F0F7F9',
          100: '#E1EFF3',
          200: '#C3DFE7',
          300: '#A5CFDB',
          400: '#87BFCF',
          500: '#5DA0B5',
          600: '#4A8091',
          700: '#38606D',
          800: '#254049',
          900: '#132025',
        },
        accent: {
          DEFAULT: '#00C389',
          50: '#E6FBF4',
          100: '#CCF7E9',
          200: '#99EFD3',
          300: '#66E7BD',
          400: '#33DFA7',
          500: '#00C389',
          600: '#009C6E',
          700: '#007552',
          800: '#004E37',
          900: '#00271B',
        },
        background: {
          light: '#F7F5F2',
          dark: '#0B1220',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
  darkMode: 'media',
}
export default config

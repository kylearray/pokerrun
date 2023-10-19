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
        'array-red': '#FF4B4B',
        'array-black': '#272121',
      },
      fontSize: {
        xxs: '.25rem',
      }
    }
  },
  plugins: [],
}
export default config

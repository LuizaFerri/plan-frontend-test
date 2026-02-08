/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-orange': 'linear-gradient(135deg, #f68824 0%, #fcbb4f 50%, #fdc759 100%)',
      },
      colors: {
        'orange': {
          'strong': '#f68824',
          'medium': '#fcbb4f',
          'light': '#fdc759',
        },
      },
      fontSize: {
        xs: '0.8125rem',
        sm: '0.9375rem',
        df: '1rem',
        lg: '1.25rem',
        xl: '2rem',
      },
    }
  },
  plugins: [],
}

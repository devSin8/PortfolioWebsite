/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0e0e',
        text: '#e5dacb',
        accent: '#88a995',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};


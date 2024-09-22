/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'inverted-v': 'polygon(50% 0%, 0% 100%, 100% 100%)', // This creates a triangle on top
      },
    },
  },
  plugins: [],
}


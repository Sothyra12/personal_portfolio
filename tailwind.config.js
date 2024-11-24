/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        Knewave: ['Knewave', 'cursive'],
      },
      color: {
        'brownish': '#603F26',
        'light-brownish': '#A67B5B',
        'brown': '#6F4E37',
        'gray-brown': '#A0937D',
      },
    },
  },
  plugins: [],
}

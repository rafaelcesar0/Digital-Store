/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        'primary-2': 'var(--color-primary-2)',
        secondary: 'var(--color-secondary)',
        tertiary: 'var(--color-tertiary)',
        error: 'var(--color-error)',
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',

        /* Escalas de cinza */
        'dark-gray': 'var(--dark-gray)',
        'dark-gray-2': 'var(--dark-gray-2)',
        'dark-gray-3': 'var(--dark-gray-3)',
        'light-gray': 'var(--light-gray)',
        'light-gray-2': 'var(--light-gray-2)',
        'light-gray-3': 'var(--light-gray-3)',
        white: 'var(--white)',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem', // px-4 equivalente
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container-default': {
          '@apply w-full max-w-screen-xl mx-auto px-4 gap-32': {},
        },
      });
    },
  ],
});

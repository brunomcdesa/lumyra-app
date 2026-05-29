/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        // Paleta Lumyra — espelha constants/theme.ts (sage × lilás × branco perolado).
        green: {
          50: '#F1F6F2',
          100: '#E2EEE6',
          200: '#C5DDCC',
          300: '#A4C8B0',
          400: '#82B193',
          500: '#5C8A6F',
          600: '#4A7259',
          700: '#3B5A47',
          800: '#2D4435',
          900: '#1F2F25',
        },
        lilac: {
          50: '#F7F4FB',
          100: '#EEE6F4',
          200: '#DECDE9',
          300: '#C6AEDA',
          400: '#AA8FC8',
          500: '#9173B5',
          600: '#785A98',
          700: '#5F477A',
          800: '#46365D',
          900: '#322747',
        },
        ink: {
          50: '#FAF9FC',
          100: '#F2F0F4',
          200: '#EAE7ED',
          300: '#D8D4DC',
          400: '#B6B2BE',
          500: '#7C7888',
          600: '#5B5768',
          700: '#3F3B4E',
          800: '#2D2A38',
          900: '#1F1C28',
        },
        pearl: '#F9F8FB',
        // Aliases semânticos
        primary: '#5C8A6F',
        secondary: '#9173B5',
        background: '#F9F8FB',
        surface: '#FFFFFF',
      },
      fontFamily: {
        display: ['Fraunces'],
        body: ['Inter'],
        mono: ['JetBrainsMono'],
      },
      borderRadius: {
        sm: '10px',
        md: '16px',
        lg: '22px',
        xl: '30px',
      },
    },
  },
  plugins: [],
};

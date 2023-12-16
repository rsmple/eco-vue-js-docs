/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './server/**/*.vue',
    './app.vue',
    './error.vue',
    './node_modules/@whitespots/ui-kit/dist/components/**/*.vue.js',
    './node_modules/@whitespots/ui-kit/dist/components/**/*.js',
  ],
  presets: [
    require('@whitespots/ui-kit/tailwind-base/index.cjs'),
  ],
  plugins: [
    require('./plugins/default.js'),
  ],
  theme: {
    extend: {
      ...require('./theme/sizes'),
      keyframes: {
        'ping-opacity': {
          '0%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'spinner-dash-small': {
          '0%': {
            'stroke-dasharray': '1, 69',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '30, 69',
            'stroke-dashoffset': '-20px',
          },
          '100%': {
            'stroke-dasharray': '30, 69',
            'stroke-dashoffset': '-69px',
          },
        },
      },
      animation: {
        'ping-opacity': 'ping-opacity 0.9s linear infinite alternate-reverse',
        'spinner-dash-small': 'spinner-dash-small 1.6s linear infinite',
      },
    },
  },
}

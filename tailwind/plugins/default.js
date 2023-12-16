const plugin = require('tailwindcss/plugin')

module.exports = plugin(function ({addVariant, addUtilities}) {
  addVariant(
    'not-print', '@media not print',
  )

  addUtilities({
    '.max-w-inner': {
      'max-width': 'calc(100vw - var(--nav-bar-width) - var(--inner-margin) - var(--inner-margin))',
    },
    '.w-inner': {
      width: 'calc(100vw - var(--nav-bar-width) - var(--inner-margin) - var(--inner-margin))',
    },
    '.min-w-inner': {
      'min-width': 'calc(100vw - var(--nav-bar-width) - var(--inner-margin) - var(--inner-margin))',
    },
  })
})

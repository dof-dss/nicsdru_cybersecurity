module.exports = {
  prefix: 'tw-',
  separator: '-',
  theme: {
    extend: {
      spacing: {
        '5p': '.5%',
        '10p': '1%',
        '15p': '1.5%',
        '20p': '2%',
        '30p': '3%',
        '500p': '50%',
        '7': '1.75rem',
        '9': '2.25rem',
        '14': '3.5rem',
        '28': '7rem',
        '60': '15rem',
      },
      colors: {
        'primary': '#361c82',
        'secondary': '#020354',
        'heading': '#010247',
        'mid-heading': '#0a165c',
        'sidebar': '#163772',
        'separator': '#2451a2',
        'selected': '#85b3e1',
        'link': '#0066ff',
        'light': '#5787c7',
        'highlight': '#e5e5ec',
        'white': '#fff',
        'black': '#000',
        'text': '#333',
        'breadcrumb': '#090921',
        'warning': '#FF0000',
        'external': '#0c1e63',
      },
    },
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '765px',
      'lg': '960px',
      'max': '1024px',
      'max-container': '1064px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'fontawesome': ['"Font Awesome 5 Solid"'],
    },
    fontSize: {
      '0': '0',
      'xxs': '1.3rem',
      'xs': '1.4rem',
      'base': '1.6rem',
      'sm': '1.8rem',
      'md': '2.1rem',
      'lg': '2.4rem',
      'xl': '3rem',
      'xxl': '3.6rem',
    },
    lineHeight: {
      'sm': '2.4rem',
      'md': '2.8rem',
      'lg': '3rem',
      'xl-tight': '3.5rem',
      'xl': '4rem',
      'xxl': '4.5rem',
    },
    fill: theme =>({
      'external': theme('colors.external'),
      'white': theme('colors.white'),
    }),
  },
  variants: {},
  plugins: [
    require('tailwindcss-bg-alpha')(),
  ],
  corePlugins: {
    container: false
  }
}

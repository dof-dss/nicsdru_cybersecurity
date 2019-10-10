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
        '500p': '50%',
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
      },
    },
    screens: {
      'xs': '440px',
      'sm': '640px',
      'md': '765px',
      'lg': '960px',
      'max': '1024px',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '2': '2px',
      '3': '3px',
      '4': '4px',
    },
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
      'fontawesome': ['"Font Awesome 5 Free"'],
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
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-bg-alpha')(),
  ],
  corePlugins: {
    container: false
  }
}

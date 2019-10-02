const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.sass('src/scss/styles.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./cybersecurity.config.js')],
  });


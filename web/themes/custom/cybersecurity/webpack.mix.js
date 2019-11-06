const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
require('laravel-mix-purgecss');

mix.sass('src/scss/styles.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [tailwindcss('./cybersecurity.config.js')],
  })
  .purgeCss({
    enabled: true,

    globs: [
      path.join(__dirname, 'templates/*/*.html.twig'),
      path.join(__dirname, 'src/scss/*/*.scss'),
      path.join(__dirname, '/*.theme'),
    ],

    extensions: ['html.twig', 'html', 'php', 'scss', 'theme'],
  });


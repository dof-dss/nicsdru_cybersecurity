let mix = require('laravel-mix');

mix.postCss('src/cybersecurity.css', 'dist', [
  require('tailwindcss')('./cybersecurity.config.js'),
])

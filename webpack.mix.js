const mix = require('laravel-mix');
mix.pug   = require('laravel-mix-pug');

mix
	.sourceMaps()
	.sass('src/docs/sass/main.scss', 'docs/css')
	.pug('src/docs/pug/*.pug', 'docs', { seeds: null })
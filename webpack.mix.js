const mix = require('laravel-mix');
mix.pug   = require('laravel-mix-pug');

mix
	.sourceMaps()
	// GitHub Pages files
	.stylus('src/docs/stylus/main.styl', 'docs/css')
	.pug('src/docs/pug/*.pug', 'docs', { seeds: null })
	// Extension files
	.copyDirectory('src/app/images', 'build/images')
	.copy(['src/app/manifest.json'], 'build')
	.pug('src/app/pug/*.pug', 'build/html', { seeds: null })
	.stylus('src/app/stylus/popup.styl', 'build/css')
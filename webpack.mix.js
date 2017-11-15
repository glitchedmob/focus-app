const mix = require('laravel-mix');
mix.pug   = require('laravel-mix-pug');

mix
	.sourceMaps()
	// GitHub Pages files
	.sass('src/docs/sass/main.scss', 'docs/css')
	.pug('src/docs/pug/*.pug', 'docs', { seeds: null })
	// Extension files
	.copyDirectory('src/app/images', 'build/images')
	.copy(['src/app/manifest.json'], 'build')
	.pug('src/app/pug/*.pug', 'build/html', { seeds: null })
	.sass('src/app/sass/popup.scss', 'build/css')
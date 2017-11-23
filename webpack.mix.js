const mix = require('laravel-mix');
mix.pug   = require('laravel-mix-pug');

mix
	.sourceMaps()
	// GitHub Pages files
	.stylus('src/docs/stylus/main.styl', 'docs/css')
	.pug('src/docs/pug/*.pug', 'docs', { seeds: null })
	// Extension files
	.copyDirectory('src/app/images', 'build/images')
	.copy(['src/app/manifest.json', 'src/app/*.html'], 'build')
	.ts('src/app/ts/main.ts', 'build/js')
	.ts('src/app/ts/options.ts', 'build/js')
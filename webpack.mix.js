const mix = require('laravel-mix');
mix.pug   = require('laravel-mix-pug');

mix
	.sourceMaps()
	.setPublicPath('build')
	// GitHub Pages files
	.stylus('src/docs/stylus/main.styl', '../docs/css')
	.pug('src/docs/pug/*.pug', 'docs', { seeds: null })
	// Extension files
	.copyDirectory('src/app/images', 'build/images')
	.copy(['src/app/manifest.json', 'src/app/*.html'], 'build')
	.stylus('src/app/stylus/main.styl', 'build/css')
	.ts('src/app/ts/main.ts', 'build/js')
	.ts('src/app/ts/background.ts', 'build/js')
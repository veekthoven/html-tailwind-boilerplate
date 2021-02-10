let mix = require('laravel-mix');

mix.postCss('src/css/app.css', 'css')
	.js('src/js/app.js', 'js')
	.setPublicPath('dist');

let mix = require('laravel-mix')

mix.js('resources/js/chart-js-integration.js', 'js').vue({ version: 3 })
    .webpackConfig({
        externals: {
            vue: 'Vue',
        },
        output: {
            uniqueName: 'vendor/chart-js-integration.jsr',
        }
    })
    .setPublicPath('dist')

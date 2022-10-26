import pkg from 'gulp';
const { watch, series, parallel } = pkg;
import browserSync from 'browser-sync'

import { html } from './task/html.js'
import { scss } from './task/scss.js'
import { clear } from './task/clear.js'
import { js } from './task/js.js'
import { img } from './task/img.js'
import { font } from './task/font.js'
import { path, app } from './config/config.js'

const server = () => {
    browserSync.create()
    browserSync.init({
        server: {
            baseDir: path.root
        }
    })
}

const watcher = () => {
    watch(path.html.watch, html).on('all', browserSync.reload)
    watch(path.sass.watch, scss).on('all', browserSync.reload)
    watch(path.js.watch, js).on('all', browserSync.reload)
    watch(path.img.watch, img).on('all', browserSync.reload)
    watch(path.font.watch, img).on('all', browserSync.reload)
}

const build = series(
    clear,
    parallel(html, scss, js, img, font),
)

const dev = series(
    build,
    parallel(watcher, server)
)

pkg.task('default', app.isProd ? build : dev)
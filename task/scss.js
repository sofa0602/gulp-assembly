import pkg from 'gulp';
const { src, dest } = pkg;
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import size from 'gulp-size'
import nodeSass from 'sass';
import gulpSass from 'gulp-sass';
import webpCss from 'gulp-webp-css'
import gulpif from 'gulp-if'
const sass = gulpSass(nodeSass);

import { path, app } from '../config/config.js'

export const scss = () => {
    return src(path.sass.src, { sourcemaps: app.isDev })
        .pipe(sass())
        .pipe(gulpif(app.isProd, webpCss()))
        .pipe(size({ title: "main.css" }))
        .pipe(dest(path.sass.dest, { sourcemaps: app.isDev }))
        .pipe(gulpif(app.isProd, rename({ suffix: '.min' })))
        .pipe(gulpif(app.isProd, csso()).pipe(size({ title: "main.min.css" })))
        .pipe(gulpif(app.isProd, dest(path.sass.dest, { sourcemaps: app.isDev })))
}

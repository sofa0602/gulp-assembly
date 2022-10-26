import pkg from 'gulp';
const { src, dest } = pkg;
import concat from 'gulp-concat'
import cssimport from 'gulp-cssimport'
import csso from 'gulp-csso'
import rename from 'gulp-rename'
import size from 'gulp-size'
import groupCssMediaQueries from 'gulp-group-css-media-queries'
import gulpif from 'gulp-if'

import { path, app } from '../config/config.js'

export const css = () => {
    return src(path.css.src, { sourcemaps: app.isDev })
        .pipe(concat('index.css'))
        .pipe(cssimport())
        .pipe(groupCssMediaQueries())
        .pipe(size({ title: "main.css" }))
        .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
        .pipe(gulpif(app.isProd, rename({ suffix: '.min' })))
        .pipe(gulpif(app.isProd, csso()).pipe(size({ title: "main.min.css" })))
        .pipe(gulpif(app.isProd, dest(path.sass.dest, { sourcemaps: app.isDev })))
}

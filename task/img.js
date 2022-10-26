import pkg from 'gulp';
const { src, dest } = pkg;
import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp'
import gulpif from 'gulp-if'

import { path, app } from '../config/config.js'


export const img = () => {
    return src(path.img.src)
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, webp()))
        .pipe(dest(path.img.dest))
        .pipe(src(path.img.src))
        .pipe(newer(path.img.dest))
        .pipe(gulpif(app.isProd, imagemin(app.imageMin)))
        .pipe(dest(path.img.dest))
}

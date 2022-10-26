import pkg from 'gulp';
const { src, dest } = pkg;
import newer from 'gulp-newer';
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'

import { path, app } from '../config/config.js'

export const font = () => {
    return src(path.font.src)
        .pipe(newer(path.font.dest))
        .pipe(fonter(app.fonter))
        .pipe(dest(path.font.dest))
        .pipe(ttf2woff2())
        .pipe(dest(path.font.dest))
}

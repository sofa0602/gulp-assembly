import pkg from 'gulp';
const { src, dest } = pkg;
import babel from 'gulp-babel'
//import uglify from 'gulp-uglify'
import webpack from 'webpack-stream'
import gulpif from 'gulp-if'

import { path, app } from '../config/config.js'


export const js = () => {
    return src(path.js.src, { sourcemaps: app.isDev })
        .pipe(babel())
        .pipe(gulpif(app.isProd, webpack(app.webpack)))
        // .pipe(uglify())
        .pipe(dest(path.js.dest, { sourcemaps: app.isDev }))
}

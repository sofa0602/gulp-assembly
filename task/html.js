import pkg from 'gulp';
const { src, dest } = pkg;
import fileInclude from 'gulp-file-include'
import webpHtml from 'gulp-webp-html'
import htmlmin from 'gulp-htmlmin'

import { path, app } from '../config/config.js'

export const html = () => {
    return src(path.html.src)
        .pipe(webpHtml())
        .pipe(fileInclude())
        .pipe(htmlmin(app.htmlmin))
        .pipe(dest(path.html.dest))
}

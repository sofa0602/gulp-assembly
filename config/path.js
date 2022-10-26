const pathSrc = './src'
const pathDest = './build'

export const path = {
    root: pathDest,

    html: {
        src: pathSrc + '/html/*.html',
        watch: pathSrc + '/html/**/*.html',
        dest: pathDest
    },

    css: {
        src: pathSrc + '/css/*.css',
        watch: pathSrc + '/css/**/*.css',
        dest: pathDest + '/css'
    },

    sass: {
        src: pathSrc + '/sass/*.scss',
        watch: pathSrc + '/sass/**/*.scss',
        dest: pathDest + '/css'
    },

    js: {
        src: pathSrc + '/js/*.js',
        watch: pathSrc + '/js/**/*.js',
        dest: pathDest + '/js'
    },

    img: {
        src: pathSrc + '/img/*.*',
        watch: pathSrc + '/img/**/*.*',
        dest: pathDest + '/img'
    },

    font: {
        src: pathSrc + '/font/*.*',
        watch: pathSrc + '/font/**/*.*',
        dest: pathDest + '/font'
    }
}
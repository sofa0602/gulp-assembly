export const isProd = process.argv.includes('--production');
export const isDev = !isProd;

export const app = {

    isProd: isProd,
    isDev: isDev,

    webpack: {
        mode: isProd ? "production" : "development"
    },

    imageMin: {
        verbose: true
    },

    fonter: {
        formats: ['ttf', 'woff', 'eot', 'svg']
    },

    htmlmin: {
        collapseWhitespace: isProd
    }

}


const pathSrc = "./src/benefits-estimator";
//const pathDest = "./public/benefits-estimator";
const pathDest = "/var/www/projects/wordpress.konductor.net/wp-content/plugins/benefits-estimator";

module.exports = {
    root: pathDest,

    html: {
        src: pathSrc + "/html/*.html",
        watch: pathSrc + "/html/**/*.html",
        dest: pathDest
    },

    php: {
        src: pathSrc + "/**/*.php",
        watch: pathSrc + "/**/*.php",
        dest: pathDest
    },

    pug: {
        src: pathSrc + "/pug/*.pug",
        watch: pathSrc + "/pug/**/*.pug",
        dest: pathDest
    },

    css: {
        src: pathSrc + "/assets/css/*.css",
        watch: pathSrc + "/assets/css/**/*.css",
        dest: pathDest + "/assets/css"
    },

    scss: {
        src: pathSrc + "/sass/*.{sass,scss}",
        watch: pathSrc + "/sass/**/*.{sass,scss}",
        dest: pathDest + "/css"
    },

    js: {
        src: pathSrc + "/assets/js/*.js",
        watch: pathSrc + "/assets/js/**/*.js",
        dest: pathDest + "/assets/js"
    },

    img: {
        src: pathSrc + "/assets/img/*.{png,jpg,jpeg,gif,svg}",
        watch: pathSrc + "/assets/img/**/*.{png,jpg,jpeg,gif,svg}",
        dest: pathDest + "/assets/img"
    },

    font: {
        src: pathSrc + "/font/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        watch: pathSrc + "/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}",
        dest: pathDest + "/font"
    },

    favicon: {
        src: pathSrc + "/img/favicon/favicon.svg",
        watch: pathSrc + "/img/favicon/favicon.svg",
        dest: pathDest + "/img/favicon"
    }
    
}
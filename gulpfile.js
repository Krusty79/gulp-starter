//https://www.youtube.com/watch?v=qSZvGlIKGPg
const { watch, series, parallel }   = require("gulp");
const browserSync                   = require("browser-sync").create();
const path                          = require("./config/path.js");
const clear                         = require("./task/clear.js");
const pug                           = require("./task/pug.js");
const scss                          = require("./task/scss.js");
const css                          = require("./task/css.js");
const js                            = require("./task/js.js");
const img                           = require("./task/img.js");


const server = () => {
    browserSync.init({
        server: {
            baseDir: path.root
        }
    });
}

const watcher = () => {
    watch(path.pug.watch, pug).on("all",browserSync.reload);
    watch(path.scss.watch, scss).on("all",browserSync.reload);
    watch(path.js.watch, js).on("all",browserSync.reload);
    watch(path.img.watch, img).on("all",browserSync.reload);
}

// Tasks
exports.pug     = pug;
exports.scss    = scss;
exports.css    = css;
exports.js      = js;
exports.img     = img;
exports.watch   = watcher;
exports.clear   = clear;

exports.dev = series(
    clear,
    parallel(pug, scss, js, img),
    parallel(watcher, server)
);
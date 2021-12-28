//https://www.youtube.com/watch?v=qSZvGlIKGPg

global.$ = {
    gulp: require("gulp"),
    gp: require("gulp-load-plugins")(),
    browserSync: require("browser-sync").create(),
    path: require("./config/path.js"),
    app: require("./config/app.js")
}

const requierDir = require("require-dir");
const task = requierDir("./task", {recurse: true});

const watcher = () => {
    watch($.path.pug.watch, task.pug);
    watch($.path.scss.watch, task.scss);
    watch($.path.js.watch, task.js);
    watch($.path.img.watch, task.img);
    watch($.path.font.watch, task.font);
}

const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
);

// Tasks
exports.pug     = task.pug;
exports.scss    = task.scss;
exports.css     = task.css;
exports.js      = task.js;
exports.img     = task.img;
exports.font    = task.font;
exports.watch   = task.watcher;
exports.clear   = task.clear;

exports.default = $.app.isProd
    ? build
    : dev;
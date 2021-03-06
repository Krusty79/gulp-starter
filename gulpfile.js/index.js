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
    $.gulp.watch($.path.pug.watch, task.pug);
    $.gulp.watch($.path.scss.watch, task.scss);
    $.gulp.watch($.path.js.watch, task.js);
    $.gulp.watch($.path.img.watch, task.img);
    $.gulp.watch($.path.font.watch, task.font);
}

const build = $.gulp.series(
    task.clear,
    $.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font, task.favicon)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
);

// Tasks
exports.pug     = task.pug;
exports.html    = task.html;
exports.scss    = task.scss;
exports.css     = task.css;
exports.js      = task.js;
exports.img     = task.img;
exports.favicon = task.favicon;
exports.font    = task.font;
exports.watch   = task.watcher;
exports.clear   = task.clear;

exports.default = $.app.isProd
    ? build
    : dev;
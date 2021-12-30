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
    $.gulp.watch($.path.php.watch, task.php);
}

const build = $.gulp.series(
    //task.clear,
    //$.gulp.parallel(task.pug, task.scss, task.js, task.img, task.font, task.favicon)
    $.gulp.parallel(task.php, task.css, task.js, task.img, task.font)
);

const dev = $.gulp.series(
    build,
    $.gulp.parallel(watcher, task.server)
);

// Tasks
exports.pug     = task.pug;
exports.php     = task.php;
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
const webpack = require("webpack-stream");
const js = cb => {
    return $.gulp.src($.path.js.src, { sourcemaps: $.app.isDev })
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "JS",
                message: error.message
            }))
        }))
        .pipe($.gp.babel())
        //.pipe(webpack($.app.webpack))
        //.pipe($.gulp.dest($.path.js.dest, { sourcemaps: $.app.isDev }))
        .pipe($.browserSync.stream());
}

module.exports = js
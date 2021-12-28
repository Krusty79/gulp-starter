const favicon = cb => {
    return $.gulp.src($.path.favicon.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "favicon",
                message: error.message
            }))
        }))
        //.pipe($.gp.newer($.path.favicon.dest))
        .pipe($.gulp.dest($.path.favicon.dest))
        .pipe($.gp.favicons($.app.favicons))
        .pipe($.gulp.dest($.path.favicon.dest))
        .pipe($.gp.filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
        .pipe($.gulp.dest($.path.root))
        .pipe($.browserSync.stream());
}

module.exports = favicon
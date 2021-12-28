const pug = cb => {
    return $.gulp.src($.path.pug.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "PUG",
                message: error.message
            }))
        }))
        .pipe($.gp.pug($.app.pug))
        .pipe($.gp.webpHtml())
        .pipe($.gulp.dest($.path.root))
        .pipe($.browserSync.stream());
}

module.exports = pug
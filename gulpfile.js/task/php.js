const php = cb => {
    return $.gulp.src($.path.php.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "php",
                message: error.message
            }))
        }))
        .pipe($.gulp.dest($.path.root))
        .pipe($.browserSync.stream());
}

module.exports = php;
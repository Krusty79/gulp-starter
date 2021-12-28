const fileinclude = require("gulp-file-include");
const webpHtml = require("gulp-webp-html");
// HTML proccess
const html = cb => {
    return $.gulp.src($.path.html.src)
        .pipe($.gp.plumber({
            errorHandler: $.gp.notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe($.gp.size({ title : "Before Zip" }))
        .pipe($.gp.htmlmin($.app.htmlmin))
        .pipe($.gp.size({ title : "After Zip" }))
        .pipe($.gulp.dest($.path.root))
        .pipe($.browserSync.stream());
}

module.exports = html;
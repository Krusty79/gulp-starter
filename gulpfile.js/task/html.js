const { src, dest } = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

const fileinclude = require("gulp-file-include");
const size = require("gulp-size");
const htmlmin = require("gulp-htmlmin");
const webpHtml = require("gulp-webp-html");
const path = require("../config/path.js");
const app = require("../config/app.js");

// HTML proccess
const html = cb => {
    return src(path.html.src)
        .pipe(plumber({
            errorHandler: notify.onError(error => ({
                title: "HTML",
                message: error.message
            }))
        }))
        .pipe(fileinclude())
        .pipe(webpHtml())
        .pipe(size({ title : "Before Zip" }))
        .pipe(htmlmin(app.htmlmin))
        .pipe(size({ title : "After Zip" }))
        .pipe(dest(path.root));
}

module.exports = html;
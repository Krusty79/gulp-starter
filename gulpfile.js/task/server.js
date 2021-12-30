const server = () => {
    $.browserSync.init({
        /*
        server: {
            baseDir: $.path.root
        }
        */
       proxy: "wordpress.konductor.net"
    });
}

module.exports = server
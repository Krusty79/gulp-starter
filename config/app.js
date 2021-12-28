module.exports = {
    htmlmin: {
        collapseWhitespace: true
    },

    pug: {
        pretty: true,
        data: {
            news: require("../data/news.json")
        }
    },

    webpack: {
        "mode": "production"//"development"
    },

    imagemin: {
        "verbose": true
    }
}
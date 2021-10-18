// vue.config.js
module.exports = {
    lintOnSave: false, //eslint, lint 사용 정지
    devServer: {
        disableHostCheck: true
    },
    publicPath : '/portfolio',
    css : {
        loaderOptions : {
            sass : {
                additionalData : 
                    `@import "@/css/scss/set.scss";`
            }
        }
    }
}

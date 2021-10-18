// vue.config.js
module.exports = {
    lintOnSave: false, //eslint, lint 사용 정지
    devServer: {
        disableHostCheck: true //lt 사용시 허용하게함 
    },
    // publicPath : '/vue_PASTEL', //github올릴때
    css : { //scss 전역사용
        loaderOptions : {
            sass : {
                additionalData : 
                    `@import "@/css/scss/set.scss";`
            }
        }
    }
}

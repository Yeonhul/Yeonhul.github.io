// vue.config.js
const webpack = require('webpack');

module.exports = {
    lintOnSave: false, //eslint, lint 사용 정지
    productionSourceMap: false, //build 시 map파일 생성 금지
    devServer: {
        disableHostCheck: true // 원격서버 접속 허용
    },
    publicPath : '/portfolio',
    css : { // scss 전역
        loaderOptions : {
            sass : {
                additionalData : 
                    `@import "@/scss/set.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({ // jquery 전역
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            }),
        ]
    },
}

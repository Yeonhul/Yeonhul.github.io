const webpack = require('webpack'); // webpack 접근
// vue.config.js
module.exports = {
    lintOnSave: false, // eslint, lint 사용 정지
    productionSourceMap: false, // build 시 map파일 생성 금지
    devServer: {
        disableHostCheck: true // 원격서버 접속 허용 || lt 사용시 허용하게함 
    },
    publicPath : '/vue_PASTEL', //github올릴때
    css : { //scss 전역사용
        loaderOptions : {
            sass : {
                additionalData : 
                    `@import "@/scss/set.scss";`
            }
        }
    },
    configureWebpack: {
        plugins: [ // 플러그인
            new webpack.ProvidePlugin({ // jquery 전역
                $: 'jquery',
                jquery: 'jquery',
                'window.jQuery': 'jquery',
                jQuery: 'jquery'
            }),
        ]
    },
}

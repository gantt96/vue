const path = require('path');

// 导入在内存中生成HTML页面的插件
const htmlWebpackPlugin = require('html-webpack-plugin');

// Vue-loader在15.*之后的版本都是 vue-loader的使用都是需要伴生 VueLoaderPlugin的
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, "./src/main.js"),
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "bundle.js"
    },
    mode: 'development',
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    module: {
        rules: [
            { test: /\.css$/, use: [ 'style-loader', 'css-loader'] }, // 处理.vue 文件的加载器规则
            { test: /\.less/, use: ['style-loader', 'css-loader', 'less-loader']}, // 配置.less文件的第三方的加载器规则
            { test: /\.scss/, use: ['style-loader', 'css-loader', 'sass-loader']}, // 配置.scss文件的第三方的加载器规则
            { test: /\.js$/, use: 'babel-loader', exclude:/node_modules/ }, // 配置解析高级语法的第三方加载器规则
            { test: /\.(jpg|png|gif|jpeg|bmp)$/, use: 'url-loader'},  // 配置解析图片url的第三方加载器规则
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 配置解析字体url的第三方加载器规则
            { test: /\.vue$/, use: 'vue-loader' } // 处理.vue 文件的加载器规则
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, '/src/index.html'), // 指定模板页面，会根据指定的模板页面生成内存中的页面
            filename: 'index.html' // 指定生成的页面的名称
        }),
        new VueLoaderPlugin() // 添加 VueLoaderPlugin 插件
    ]
}
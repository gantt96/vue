import Vue from 'vue'


export default {
    install(Vue, options) {
        Vue.prototype.$baseUrl = function () { // 定义获取全局域名的函数
            return options;
        };
    }
}
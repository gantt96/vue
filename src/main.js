console.log('ok');

// 导入vue模块
import Vue from 'vue'
// 导入vue-router模块
import VueRouter from 'vue-router'
import Vuex from 'vuex'
Vue.use(Vuex)
// 导入自定义的路由文件
import router from './router'
// 导入mint-ui模块
import MintUI from 'mint-ui'
// 导入mint-ui模块的css样式
import 'mint-ui/lib/style.css'
// 将vue-router模块绑定到vue模块
Vue.use(VueRouter)
Vue.use(MintUI)
import app from './app.vue'
// 导入 MUI的样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'

import axios from 'axios'
import VueResource from 'vue-resource'
Vue.use(VueResource)

import siteUrl from './config'
import global from './global'
Vue.use(global)

Vue.prototype.axios = axios;
Vue.prototype.$baseUrl = siteUrl;//后端服务根路径







var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})

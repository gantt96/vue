import VueRouter from 'vue-router'
import home from './components/home.vue'
import search from './components/search.vue'
import file from './components/file.vue'
import manage from './components/manage.vue'

var router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: home },
        { path: '/file', component: file },
        { path: '/manage', component: manage },
        { path: '/search', component: search }
    ],
    linkActiveClass: 'mui-active', //覆盖默认的路由高亮类名 
})

export default router
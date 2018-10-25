import Vue from 'vue'
import Router from 'vue-router'

// import LeftNav from './components/nav/LeftNav.vue'
// import TopNav from './components/nav/TopNav.vue'
import HelloWorld from './components/HelloWorld'
import Layout from './components/Layout'
// import TreeTable from './components/test1/TableTree'
import Home from './views/setting/Home.vue'
import GoodsAdd from './views/goods/add.vue'
import GoodsList from './views/goods/list.vue'
// import CategoryList from './views/category/list'
import Login from './views/login.vue'


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            name: 'home',
            component: Layout,
            redirect: '/dashboard',
            children: [
                {
                    path: '/setting',
                    name: '系统设置',
                    component: HelloWorld,
                    leaf: true
                },
                {
                    path: '/dashboard',
                    name: '仪表盘',
                    component: Home,
                    menuShow: true,
                    children: [
                        { path: '/setting', name: '商品列表', component: HelloWorld, menuShow: true },
                        { path: '/permission', name: '添加商品', component: HelloWorld,  menuShow: true }
                    ]
                },
                {
                    path: '/permission',
                    name: '权限控制',
                    leaf: true,
                    component: HelloWorld
                },
                {
                    path: '/cookie',
                    name: '清除缓存',
                    leaf: true,
                    component:  HelloWorld
                }
            ]
        },
        {
            path: '/goods',
            name: 'goods',
            component: Layout,
            redirect: '/goods/manager',
            menuShow: true,
            children: [
                {
                    path: '/goods/manager',
                    name: '商品管理',
                    menuShow: true,
                    component: {render(c) { return c('router-view')}},
                    children: [
                        { path: '/goods/list', name: '商品列表', component: GoodsList, menuShow: true},
                        { path: '/goods/add', name: '添加商品', component: GoodsAdd, menuShow: true }
                    ]
                },
            ]
        }
    ]
})

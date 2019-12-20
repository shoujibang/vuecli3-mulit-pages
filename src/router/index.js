import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import login from '../pages/login/login.vue'



import admin from './module/admin';
import user from './module/user'
import busy from './module/busy'






Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{
      title:"官网"
    },
    children:[...admin]
  },
  {
    path:'*',
    component:() => import('views/404.vue')
  },
  {
    path:"/user",
    name:user,
    component:() => import ('pages/person/person'),
    meta:{
      title:"用户中心"
    },
    
    children:[...user]
  },
  {
    path: '/logins',
    name: 'login',
    component: login,
    meta:{
      title:"登录页面"
    }
  },
  {
    path: '/about',
    name: 'about',
    meta:{
      title:"关于我们"
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
/**
 * 
 * 这里可以处理title和登录验证信息
 */
router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

export default router

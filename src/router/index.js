import Vue from 'vue'
import VueRouter from 'vue-router'
import storage from '@/util/storage';
import store from '@/store';
import Home from '../views/Home.vue'
import maoyan from '../views/maoyan.vue'
import login from '../pages/login/login.vue'
// import layout from '@/pages/admin/layout';


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
    }
    
  },
  {
    path: '/maoyan',
    name: 'maoyan',
    component: maoyan,
    meta:{
      title:"电影搜索"
    }
    
  },
  {
    path: '/admin',
    name: 'layout',
    component:() => import('@/pages/admin/layout'),
    children:[
      ...admin
    ]
  },
  {
    path:'*',
    component:() => import('views/404.vue')
  },
  {
    path:"/users",
    name:user,
    component:() => import ('pages/person/person'),
    meta:{
      title:"登录"
    },    
    // children:[...user]
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
  // base: process.env.BASE_URL,
  routes
})
/**
 * 
 * 这里可以处理title和登录验证信息
 */
let lang = storage.getStorage("locale");
console.log("router-lang:",lang)

router.beforeEach((to,from,next) =>{
  // if(lang){
  //   store.commit('SET_LANG', lang);
  // }
  // //切换语言是更改路由通过vuerouter
  // const routePath = from.path;
  // if (store.state.lang === 'en-US' && routePath.indexOf(`/${store.state.lang}/`) === -1) {
  //   return router.push({path: `/${store.state.lang}${routePath}`, query: from.query})
  //   // return redirect({path: `/${store.state.lang}${routePath}`, query: route.query})
  // }
  // console.log("routePathroutePathroutePathroutePathroutePath",routePath);
  // console.log("routePathroutePathroutePathroutePathroutePath",router);
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next();
})

export default router

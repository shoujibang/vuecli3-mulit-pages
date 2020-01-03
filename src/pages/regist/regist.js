
import Vue from 'vue'
import App from './index.vue'
import router from '../../router'
import store from '../../store'
import Element from 'element-ui'
import i18n from '@/locale' //国际化
import storage from '@/util/storage' //国际化
import axios from '../../../config/axios';
import $ from 'jquery'
Vue.prototype.$ = $;
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
import "element-ui/lib/theme-chalk/index.css";
import "font-awesome/css/font-awesome.min.css";
import util from '@/util';
console.log("utilutilutilutil",util)
Object.keys(util).forEach(key =>{
  console.log("keykeykeykey",key)
  Vue.prototype[`$${key}`] = util[key];
  // Vue.prototype.$key = util[key];
  
})


Vue.use(Element)
import VHeader from 'components/VHeader'
import Carousel from 'components/Carousel'
import VFotter from 'components/VFotter'
Vue.component(VHeader.name,VHeader);
Vue.component(Carousel.name,Carousel);
Vue.component(VFotter.name,VFotter);


Object.keys(storage).forEach(key =>{
  console.log("storagestoragestorage",key)
  Vue.prototype[`$${key}`] = storage[key];

});
//集成mock服务开发环境才起作用
import '@/mock'

//扩展filter
import extFilter from 'filter' 
Object.keys(extFilter).forEach(key =>{
  Vue.filter(key,extFilter[key]);
});
//扩展指令
import extDirective from '@/directive'

Object.keys(extDirective).forEach(key =>{
  Vue.directive(key,extDirective[key]());
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')

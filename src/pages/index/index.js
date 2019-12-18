
import Vue from 'vue'
import App from './index.vue'
import router from '../../router'
import store from '../../store'
import Element from 'element-ui'
import axios from '../../../config/axios';
import $ from 'jquery'
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element)
import VHeader from 'components/VHeader'
import Carousel from 'components/Carousel'
import VFotter from 'components/VFotter'
Vue.component(VHeader.name,VHeader);
Vue.component(Carousel.name,Carousel);
Vue.component(VFotter.name,VFotter);
//扩展filter
import extFilter from 'filter' 
Object.keys(extFilter).forEach(key =>{
  Vue.filter(key,extFilter[key]);
});
//扩展指令
import extDirective from '@/directive/index'

Object.keys(extDirective).forEach(key =>{
  Vue.directive(key,extDirective[key]());
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

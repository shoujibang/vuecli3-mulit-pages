
import Vue from 'vue'
import App from './index.vue'
import router from '../../router'
import store from '../../store'
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

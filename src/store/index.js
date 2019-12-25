import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import state from './state';

//用户模块
import user from './user';
console.log('----------------------',user)
import home from './home';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations,
  actions,
  getters ,
  state,
  modules: {
    user,
    home
  }
})

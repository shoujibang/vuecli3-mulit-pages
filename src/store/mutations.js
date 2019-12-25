import * as types from './types';

/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * Mutation 必须是同步函数
 * 在组件中使用 this.$store.commit('xxx')或
 * 使用 mapMutations 辅助函数：
 * methods：{
 * ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`

      // `mapMutations` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    })
    模块化：
    ...mapMutations('user',['increment'])
 * 
 * }
 * */
console.log("0000000000000000")
console.log(types)
export default {
  //增加
    [types.ADD_COUNT](state,n){
      console.log(n);
      n = parseInt(n);
      state.count += n;
    },
  // 减少
    [types.REMOVE_COUNT](state,n){
        if(state.count <= 0){
            return;
          }
          n = parseInt(n);
          state.count -= n;
    },
  // 获取数据
    [types.GET_LIST](state,data){
      
      state.itemArr = data;
    }  



}
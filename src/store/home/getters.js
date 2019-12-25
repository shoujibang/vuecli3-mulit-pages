/**
 * mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性
 * import { mapGetters } from 'vuex'

export default {
  // ...
  computed: {
  // 使用对象展开运算符将 getter 混入 computed 对象中
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
      // ...
    ])
  }
}
 */
export default {
    itemArrFilter: state =>{
        console.log("statestatestate:",state)
        return state.itemArr.slice(1,3);
    }
}
/**
 * 你在组件中使用 this.$store.dispatch('xxx') 分发 action，
 * 或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 
 * 调用（需要先在根节点注入 store）
 * 
 * 
 * Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，
 * 因此你可以调用 context.commit 提交一个 mutation，
 * 或者通过 context.state 和 context.getters 来获取 state 和 getters
 * 
 * 
 * // 以载荷形式分发
    store.dispatch('incrementAsync', {
    amount: 10
    })

    // 以对象形式分发
    store.dispatch({
    type: 'incrementAsync',
    amount: 10
    })
 * 
 * 在组件中使用：Action 通过 store.dispatch 方法触发
 * Action 类似于 mutation，不同在于：
   Action 提交的是 mutation，而不是直接变更状态。
   Action 可以包含任意异步操作。
 */
import * as types from './types';

export default {
    setList({commit,state,getters},info){
        console.log("infoinfoinfoinfoinfo-------",info);
        commit(types.GET_LIST, info)
    }
}
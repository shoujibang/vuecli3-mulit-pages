import Util from '@/util';
console.log(Util.addEvent)
// 扩展全部指令
const extDirective = {
    /**
     * 
     *  
     * 要浮动的距离可以是css样式值top/bottom/right/left/Number
     */
    fixedDom:function(){
        debugger;
        return {
            // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
            bind(el, binding, vnode){
                el.style.position = 'fixed'
                el.style.bottom = binding.value + 'px'
                Util.addEvent(el,"click",function(){
                    alert("单击事件")
                })
            }

        }
    }
}
export default extDirective;
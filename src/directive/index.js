import Util from '@/util';
console.log(Util.addEvent)
// 扩展全部指令
const extDirective = {
    /**
     * v-fixed-dom="{bottom:'30px',right:'100px'}"
     *  
     * 要浮动的距离可以是css样式值top/bottom/right/left/Number
     */
    fixedDom:function(){
        debugger;
        return {
            // 只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
            bind(el, binding, vnode){
                
                el.style.position = 'fixed';
                el.style.right= binding.value.right ?  binding.value.right : '0px';
                el.style.bottom = binding.value.bottom?  binding.value.bottom : '0px';
                el.style.zIndex = binding.value.zIndex?  binding.value.zIndex : 999;
                el.style.color = binding.value.color ?  binding.value.color : '#808080';
                el.style.top= binding.value.top ?  binding.value.top : ' ';
                el.style.left = binding.value.left ?  binding.value.left : ' ';
                el.style.border = binding.value.border ?  binding.value.border : '1px solid #808080';
                Util.addEvent(el,"click",function(){
                    document.documentElement.scrollTo(0,0);
                })
            }

        }
    }
}
export default extDirective;
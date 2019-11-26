//扩展过滤器
/**
 * 去掉指定的字符串
 * str 要过滤的字符串
 */

 const extFilter = {
     /**
      * 
      * @param {*} value 
      * 要处理的字符串 
      * @param {*} len 
      */
     sliceStr(value,len){
         debugger;
         len = Number.parseInt(len) || 10;
         if(value.length <= len){
             return value;
         }else{
             return value.slice(0,len) + "...";
         }
     }
 }



 export default extFilter;

const Utils = {
    //事件兼容性封装
    addEvent(element,type,callback){
        if(element.addEventListener){
            element.addEventListener(type,callback,false);
        }else if(element.attachEvent){
            //兼容ie
            element.attachEvent(`on${type}`,callback);
        }
    }
}

export default Utils;


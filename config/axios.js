
import Vue from 'vue'
import axios from "axios";
import storage from '@/util/storage';
import router from '@/router';
import { Message, Loading } from 'element-ui';
let loadingCount = 0;
let loading;
const startLoading  = () =>{
    loading = Loading.service({
        lock: true,
        text: '加载中……',
        background: 'rgba(0, 0, 0, 0.7)'
      });
};
const endLoading = () =>{
    loading.close();
}
const showLoading  = () =>{
    if(loadingCount === 0){
        startLoading();
    }
    loadingCount ++;
}
const hideLoading  = () =>{
    if(loadingCount <= 0){
        return;
    }
    loadingCount --;
    if(loadingCount === 0){
        endLoading();
    }
}
//配置的默认值/defaults :axios.defaults
/**
 *  `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
   它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
*/
// axios.defaults.baseURL = `${location.origin}`
console.log("axios.defaults",axios.defaults.baseURL)


//添加请求拦截器
axios.interceptors.request.use(config =>{
    if(process.env.NODE_ENV === 'development'){
        config.url = `http://${location.host}${config.url}`
    }
    let data = {};
    let headers = {
        // 'Content-Type':'application/json;charset=UTF-8'
    }
    data.token = "abcdwf123";
    /**
     * config.data
     *  `data` 是作为请求主体被发送的数据
        只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
        在没有设置 `transformRequest` 时，必须是以下类型之一：
        - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        - 浏览器专属：FormData, File, Blob
        - Node 专属： Stream
     */
    if(!config.data || JSON.stringify(config.data) === "{}"){
        config.data = data;
    }else{

        Object.assign(config.data,data);
    }
    //判断access-token是否存在，存在着添加到请求头里
    if(storage.getStorage('access-token')){
        headers = Object.assign(headers,{
            'access-token': `0000000`
          })

    }
    config.headers = headers;
    console.log("request-config:",config)
    // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
    config.transformRequest = (data) =>{
        data.uuid = "10101010"
        console.log("transformRequest---data",data)
        return data;
    }
    showLoading() //请求加载loading
    return config;
},
err =>{
    //请求错误
    return Promise.reject(err);
});
// 添加相应拦截器

axios.interceptors.response.use(response =>{

    console.log("response:",response)
    if(response.data.code === 404){
        
        // router.push({            
        //     path:"/error",
        //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
            
        // })
    }
    hideLoading() //关闭loading
    return response;
},
err =>{
  //响应错误
  // 对响应错误做点什么，比如400、401、402等等
  console.log("error.response",err)

  if (err && err.response) {
      if(err.response.status === 500){
            Message({
                type:'success',
                message:err.response.statusText,
                showClose:true,
                center:true
            })
            hideLoading() //关闭loading
      }
    console.log("error.response",err.response)
    }
   return Promise.reject(err); 
})

Vue.prototype.$axios = axios;
export default axios;


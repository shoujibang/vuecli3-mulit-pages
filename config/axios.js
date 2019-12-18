
import Vue from 'vue'
import axios from "axios";
// import storage from 'assets/util/storage'


console.log("pppppppppppppppppppppppppp")
//添加请求拦截器
axios.interceptors.request.use(config =>{



    return config;
},
err =>{
    //请求错误
    return Promise.reject(err);
});
// 添加相应拦截器

axios.interceptors.response.use(response =>{



    return response;
},
err =>{
  //响应错误
   return Promise.reject(err); 
})

Vue.prototype.$axios = axios;
export default axios;


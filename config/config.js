





module.exports = {
    port:80,
    open:true,
    // host:"",    
    proxy:{
        "/api":{
            target:"http://localhost:80",
            secure: false, // 如果是https接口，需要配置这个参数為true
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/api': '/'
              }
        },
        "/devapi":{
            target:"https://api.apiopen.top",
            secure: false, // 如果是https接口，需要配置这个参数為true
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/devapi': '/'
              }
        },
        
    }
}





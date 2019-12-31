





module.exports = {
    port:80,
    open:true,
    // host:"",    
    proxy:{
        "/mock":{
            target:"http://10.12.234.165:80",
            secure: false, // 如果是https接口，需要配置这个参数為true
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/mock': '/'
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





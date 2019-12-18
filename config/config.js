





module.exports = {
    port:80,
    open:true,
    host:"cms.xjoycity.com",
    proxy:{
        "/api":{
            target:"http://localhost:4000",
            changeOrigin: true,
            secure: false, // 如果是https接口，需要配置这个参数為true
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/api': ''
              }
        },
        "/devapi":{
            target:"https://api.apiopen.top",
            changeOrigin: true,
            secure: false, // 如果是https接口，需要配置这个参数為true
            changeOrigin: true, // 是否跨域
            pathRewrite: {
                '^/devapi': ''
              }
        }
    }
}





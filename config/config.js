





module.exports = {
    port:80,
    open:true,
    host:"cms.xjoycity.com",
    proxy:{
        "/api":{
            target:"http://localhost:4000",
            changeOrigin: true,
        }
    }
}





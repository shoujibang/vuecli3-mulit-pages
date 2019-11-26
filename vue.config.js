//全局配置文件
const config = require('./config/config');
// 打包页面配置
const _ = require('lodash');
const path = require("path");
const glob = require('glob');
const pagesPath = path.resolve(__dirname,"./src/pages");
const resolve = dir =>path.join(__dirname,'./',dir);



const getPages = function(pages={}){
    let obj = {};
    let entryFiles = glob.sync(pagesPath + '/*/*.js');
    let buildFile,fileParse,chunkName,extNames;
    _(entryFiles).forEach((item,index) =>{
        fileParse = path.parse(item);
        buildFile = `${fileParse.name}.html`;
        chunkName = fileParse.name; //chunk名字
        extNames = `${fileParse.name}${fileParse.ext}`;

        obj[chunkName] = {
            // page 的入口
            //["babel-polyfill", "./src/main.js"]
            entry: `./src/pages/${chunkName}/${extNames}`,
            
            // 模板来源
            template: './template.html',
            // 在 dist/index.html 的输出
            filename: buildFile,
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            title: "",
            // 在这个页面中包含的块，默认情况下会包含
            // 提取出来的通用 chunk 和 vendor chunk。
            chunks: ['chunk-vendors', 'chunk-common', chunkName]
        },
        console.log("入口文件：",fileParse);
        console.log("构建dist目录文件名",buildFile);
    })
    console.log("页面目录目录obj:",obj)
    return obj;
}

module.exports = {
    devServer:{
        port:config.port || 80,  //配置端口
        open:config.open,//是否自动打开浏览器
        proxy:config.proxy,//配置代理
        host:config.host//配置域名
    },
    lintOnSave: false,//关闭保存时eslint检验      
    pages:getPages(),
    //颗粒化配置webpack支持回调
    chainWebpack:config =>{
        //为src目录配置别名
        config.resolve.alias        
        .set('views',resolve('src/views'))
        .set('components',resolve('src/components'))
        .set('assets',resolve('src/assets'))
        .set('router',resolve('src/router/module'))
        .set('filter',resolve('src/filter'))
        .set('pages',resolve('src/pages'))
        .set('directive',resolve('src/directive'))
        .set('util',resolve('src/util'))

        console.log(config.resolve.alias )
    },
    //webpack配置
    configureWebpack:config =>{
        console.log("-----------config:")
        console.log(config.rules)
    },
    // pages:{
    //         index:{
    //             // page 的入口
    //             entry:'./src/pages/index/index.js',
    //             // 模板来源
    //             template: './src/pages/index/index.html',
    //             // 在 dist/index.html 的输出
    //             filename: 'index.html',
    //             // 当使用 title 选项时，
    //             // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //             title: 'index-page',
    //             // 在这个页面中包含的块，默认情况下会包含
    //             // 提取出来的通用 chunk 和 vendor chunk。
    //             chunks: ['chunk-vendors', 'chunk-common', 'index']
    //         }
    
    
    //     }
}
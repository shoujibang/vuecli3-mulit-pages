const path = require("path");
const fs = require('fs');
const cheerio = require('cheerio');
const _ = require('lodash'); //javascript工具库
const async = require("async");
const pagePath = path.resolve(__dirname,'../src/pages');//获取page目录
function readPageDir(callback){    
    let newDir = [];
    fs.readdir(pagePath,(err,dir) =>{
        if(err){
            throw err;
        }
        _(dir).forEach((value,index) =>{
            
            var currentPath = path.join(pagePath,value);
            
            newDir.push(currentPath);
            
            
        })
        callback(null,newDir)
    })
}
function multPageDir(arg,callback){
    let obj = {};
    let htmlPath;//html文件，模板入口
    let jsPath;//js路径，入口文件
    let fileNames;//文件名
    let titleName;//标题
    let ext;//扩展名
    async.forEachOf(arg,(value,key,cb) =>{
        console.log("所有页面目录：",value);
       fs.readdir(value,(err,fileArr) =>{
           console.log("所有页面目录下的文件：",fileArr);
           _(fileArr).forEach((item,index) =>{
            console.log("具体文件：",item); 
                let items = item.split(".");
                name = items[0];
                ext = items[1];
                if(_.isEqual(ext,'js')){                            
                    jsPath =  `../src/pages/${name}/${item}`;                    
                }
               /** 
                * 通过解析pages目录下的页面目录html内容拿到title
                * 
                
                if(_.isEqual(ext,'html')){
                    htmlPath =  `../src/pages/${name}/${item}`;                    
                    fileNames = item;
                    let htmlData = fs.readFileSync(htmlPath,"utf-8")
                    let $ = cheerio.load(htmlData);
                    titleName = $('title').text();
                    
                }
                 */
                htmlPath = `../template.html`;
                obj[name] = {                                
                    // page 的入口
                    entry: jsPath,
                    // 模板来源
                    template: htmlPath,
                    // 在 dist/index.html 的输出
                    filename: `${name}.html`,
                    // 当使用 title 选项时，
                    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
                    // title: titleName,
                    title: "",
                    // 在这个页面中包含的块，默认情况下会包含
                    // 提取出来的通用 chunk 和 vendor chunk。
                    chunks: ['chunk-vendors', 'chunk-common', name]
                }


           })
           cb();
       })

    
    },err =>{

        callback(null,obj)
    })
    
    
}

/**
 * 回调函数
*/

 function getPages(pagePath,callback,obj){
     var abm = {};
    async.waterfall([readPageDir,multPageDir],function(err,result){           
          if (err) { 
          console.log(err); 
          } 
         
                
         return callback(result);
     })
     
    // return new Promise((resolve,reject) =>{

    // })
}


getPages(pagePath,function(res){
    console.log("最终配置文件:",res); 
})







/**
 * promise
 * */
//  function getPages(pagePath){
//     return new Promise((resolve,reject) =>{
//         async.waterfall([readPageDir,multPageDir],function(err,result){           
//              if (err) { 
//              console.log(err); 
//              } 
//             //  let pageJson = path.join(__dirname,"page.json");
//             // res = JSON.parse(res);
//             // console.log("__dirname:",path.join(__dirname,"page.json")) 
//             // // fs.unlinkSync(pageJson);
//             // fs.writeFile(pageJson,res,"utf-8",(err,result) =>{

//             // })
//               resolve(result);
//         })

//     })
// }





module.exports = getPages;





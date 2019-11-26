const path = require("path");
const fs = require('fs');
const cheerio = require('cheerio');
const htmlparser2 = require('htmlparser2');
const _ = require('lodash'); //javascript工具库
var async = require("async");
const glob = require("glob");
const pagePath = path.resolve(__dirname,'../src/page');//获取page目录

function readHtmlData(currentPath){
    let pages = {};
    let obj = {};
    let htmlPath;
    let jsPath;
    let fileNames;
    let titleName;
    return new Promise((resolve,reject) =>{
        fs.readdir(currentPath,(err,data)=>{
            _(data).forEach((item,index) =>{
                let items = item.split(".");
                name = items[0];
                let ext = items[1];
                
                if(_.isEqual(ext,'js')){
                    
                    jsPath =  `./src/page/${name}/${item}`;
                    // jsPath =  path.resolve(value,item);
                    // jsPath = `${value}\\${item}`;
                    // jsPath = path.normalize(jsPath)
                    }
                    if(_.isEqual(ext,'html')){
                        htmlPath =  `./src/page/${name}/${item}`;
                        // htmlPath = `${value}\\${item}`;
                        // htmlPath = path.normalize(htmlPath)
                        fileNames = item;
                        let htmlData = fs.readFileSync(htmlPath,"utf-8")
                        let $ = cheerio.load(htmlData);
                        titleName = $('title').text();
                        
                    }
                    // console.log("titles555555:",titleName)
                    
                    pages[name] = {                                
                            // page 的入口
                            entry: jsPath,
                            // 模板来源
                            template: htmlPath,
                            // 在 dist/index.html 的输出
                            filename: fileNames,
                            // 当使用 title 选项时，
                            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
                            title: titleName,
                            // 在这个页面中包含的块，默认情况下会包含
                            // 提取出来的通用 chunk 和 vendor chunk。
                            chunks: ['chunk-vendors', 'chunk-common', name]
                        }
                //     console.log("html",htmlPath)
                //     console.log("jsPath:",jsPath)
                
                
                // console.log(currentPath)
                // console.log(item)

            })
            // let baseParse = path.parse(data);

            // console.log("obj",pages)
            
            // console.log("objpages:",pages)
            // return pages;
            resolve(pages)
        })

    })
}
function readPageDir(pagePath){
    return new Promise((resolve,reject) =>{
       
        fs.readdir(pagePath,(err,dir) =>{
            if(err){
                throw err;
            }
            let newDir = [];
            _(dir).forEach((value,index) =>{
                // let newFile = [];
                var currentPath = path.join(pagePath,value);
                
                newDir.push(currentPath);
                
                
            })
            resolve(newDir)
            
            
        })
    })
}
function getPages(pagePath){
    return new Promise((resolve,reject) =>{
        let pages = {};//多页配置
        let obj = {};
        let htmlPath;
        let jsPath;
        let fileNames;
        let titleName;
        readPageDir(pagePath).then(res =>{
            console.log("res:",res);
            async.forEachOf(res,(value,key,cb) =>{
                
                fs.readdir(value,(err,data)=>{
                    _(data).forEach((item,index) =>{
                        let items = item.split(".");
                        name = items[0];
                        let ext = items[1];
                        
                        if(_.isEqual(ext,'js')){
                            
                            jsPath =  `./src/page/${name}/${item}`;
                            // jsPath =  path.resolve(value,item);
                            // jsPath = `${value}\\${item}`;
                            // jsPath = path.normalize(jsPath)
                            }
                            if(_.isEqual(ext,'html')){
                                htmlPath =  `./src/page/${name}/${item}`;
                                // htmlPath = `${value}\\${item}`;
                                // htmlPath = path.normalize(htmlPath)
                                fileNames = item;
                                let htmlData = fs.readFileSync(htmlPath,"utf-8")
                                let $ = cheerio.load(htmlData);
                                titleName = $('title').text();
                                
                            }
                            // console.log("titles555555:",titleName)
                            
                            pages[name] = {                                
                                    // page 的入口
                                    entry: jsPath,
                                    // 模板来源
                                    template: htmlPath,
                                    // 在 dist/index.html 的输出
                                    filename: fileNames,
                                    // 当使用 title 选项时，
                                    // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
                                    title: titleName,
                                    // 在这个页面中包含的块，默认情况下会包含
                                    // 提取出来的通用 chunk 和 vendor chunk。
                                    chunks: ['chunk-vendors', 'chunk-common', name]
                                }
                        //     console.log("html",htmlPath)
                        //     console.log("jsPath:",jsPath)
                        
                        
                        // console.log(currentPath)
                        // console.log(item)
        
                    })
                    cb();
                })

            },err =>{
                console.log("async:",pages);
                // return pages;
                resolve(pages)
            })
            // 
        })

    })
   
    

}


// getPages(pagePath);
module.exports = getPages;





// 升级版的加载静态文件
const http = require('http');
const fs = require("fs");
const  path = require("path");

// 引入第三方
const mime = require("mime");
// 创建服务 开启服务器 开始监听
http.createServer(function (req,res) {


    //引入html 文件
    if(req.url === "/" || req.url === "/index"){
        console.log(req.url);
        // 从文件中读取数据
        fs.readFile(path.join(__dirname,"./page/index.html"),function (err,data) {
            if(err){
                throw err;
            }
            res.end(data);
        });

    }
    // 登录页

      else if(req.url === "/login"){
        fs.readFile(path.join(__dirname,"page/login.html"),function (err,data) {

            if(err){
                throw err;
            }
            res.end(data);
        })
    }
    //配置静态文件
    else if(req.url.startsWith("/public")){


        console.log(mime.getType(req.url));
        // /public/index.css
        // 进来的： /public/7.jpg
        const tempDir = "page/"+req.url
        console.log("进来的：",tempDir);
        fs.readFile(path.join(__dirname,tempDir),function (err,data) {
            if(err){
                throw err;
            }
            res.end(data);
        })

    }
    else {
        res.end("404 Page No Found");
    }

}).listen(8080,function () {
    console.log("服务器开启了");
});

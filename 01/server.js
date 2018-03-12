//  后台服务器
//创建后台服务器
// 加载 http
const http = require("http");
const fs = require('fs');
const path = require("path");
//创建服务器 开启服务器 开始监听
http.createServer(function (req,res) {

    console.log(req.url);

    //首页
    if(req.url === '/' || req.url === "/index"){

        fs.readFile(path.join(__dirname,"htmls/index.html"),function (err,data) {

            if(err){
                throw  err;
            }
            res.end(data);
        })

    }
    //登录页
    else if(req.url === "/login"){
        fs.readFile(path.join(__dirname,"htmls/login.html"),function (err,data) {
            if(err){
                throw  err;
            }
            res.end(data);
        })
    }
    //加载图片
        else if(req.url === "/1111.gif"){

        fs.readFile(path.join(__dirname,"./htmls/1111.gif"),function (err,data) {
            if(err){
                throw err;
            }
            res.end(data);
        });

    }


    // 加载css 样式
        else if(req.url === "/index.css"){
            fs.readFile(path.join(__dirname,"/htmls/index.css"),function (err,data) {
                if(err){
                    throw err;
                }
                res.end(data);
            })
    }
    else {
        res.end("404 page no found");
    }


}).listen(8080,function () {
    console.log("服务器开启了");
});

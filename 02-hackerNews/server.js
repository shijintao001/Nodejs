// hackerNews 案例

//创建服务器
// 获取url
// 根据不同的url 返回不同的url

const http = require("http");
const fs = require("fs");
const path = require("path");

const mime = require("mime");
const URL = require("url");


// 创建服务器 开启服务器 开始监听
http.createServer(function (req, res) {

    // console.log(req.url);
    // 首页
    if (req.url === "/" || req.url === "/index") {

        // 读取文件
        fs.readFile(path.join(__dirname, "./views/index.html"), function (err, data) {

            if (err) {
                throw err;
            }
            res.end(data);

        })
    }

    //详情页
    else if (req.url === "/detail") {

        fs.readFile(path.join(__dirname, "./views/detail.html"), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    }
    //submit
    else if (req.url === "/submit") {
        fs.readFile(path.join(__dirname, "./views/submit.html"), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    }

    //添加页
    else if (req.url.startsWith("/add") && req.method == "GET") {

        // add?title=111&url=3333&text=2222

        // 要把数据解析为一个个json对象然后放到数组里

        // 0 从data.json 里获取原来的数据 然后在添加
        fs.readFile(path.join(__dirname,"./data/data.json"),"utf-8",function (err,data) {
            if(err && err.code != "ENOENT"){
                throw err;
            }

           let list = JSON.parse(data || "[]");
            // console.log(list);
            // 获取对象
            let urlObj = URL.parse(req.url, true);
            // console.log(urlObj);
            let obj = urlObj.query;
            // console.log(obj);
            // let list = [];
            //数组拼接对象
            list.push(obj);
            // 收集数据

            //1.写入到本地
            fs.writeFile(path.join(__dirname, "./data/data.json"), JSON.stringify(list), function (err) {
                if (err) {
                    throw err;
                }
                console.log("写入成功");

                // 重定向
                // 状态码
                res.statusCode = "301";
                // 状态信息
                res.statusMessage = "Moved Permanently";
               // 跳转根目录
                res.setHeader("Location","/");
                res.end();
            })
        })




    }

    // 静态资源
    else if (req.url.startsWith("/resources")) {
        // console.log("进来的有---->",req.url);
        // 1 设置样式
        res.setHeader("content-type", mime.getType(req.url));
        fs.readFile(path.join(__dirname, req.url), function (err, data) {
            if (err) {
                throw err;
            }
            res.end(data);
        })
    }
    else {
        res.end("404 page no found");
    }


}).listen(8080, function () {
    console.log("服务器开启");
});


// Url {
//     protocol: null,
//         slashes: null,
//         auth: null,
//         host: null,
//         port: null,
//         hostname: null,
//         hash: null,
//         search: '?title=1111&url=222&text=3333',
//         query: 'title=1111&url=222&text=3333',
//         pathname: '/add',
//         path: '/add?title=1111&url=222&text=3333',
//         href: '/add?title=1111&url=222&text=3333' }


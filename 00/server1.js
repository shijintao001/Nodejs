// 制作一个简单版本的服务器

//1 创建服务器 需要http 模块
const http = require("http");
//2 创建服务器
let server = http.createServer('content-type','text/plain;charset=utf-8');
//3 监听浏览器发过来的请求
server.on("request",function (req,res) {
    console.log("有人请求了");
res.setHeader();


    res.end("哈哈哈");

});


// 4 开启服务器
server.listen(8080,function () {
    console.log("服务器开了,请访问http:localhost:8080");
})
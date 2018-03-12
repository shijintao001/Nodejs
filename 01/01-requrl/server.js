let http = require("http");

//创建服务器 开启服务器 监听服务器
http.createServer(function (req,res) {
    //
    // res.statusCode = "203";
    // res.statusMessage = "Non-Authoritative Information";
    // res.setHeader("content-type","text/css")

    res.writeHead("201","Non-Authoritative Information",{"content-type":"text/css"});
    // 但是 最忌讳的是 状态码和状态信息不匹配
    // 500 服务器错误
    // 规则
    // 200+ ok 201 202 203
    // 300+ 缓存/重定向

    //400+ 客户端有问题 错误的ajax 参数/端口/url
    //500+ 服务器有问题


    res.end("ok");
}).listen(8080,function () {
    console.log("服务器开启");
});
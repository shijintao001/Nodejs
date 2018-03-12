//读取数据
// 引入fs 模块
const fs = require('fs');

//2 读取数据
fs.readFile("./data.txt",function (err,data) {
    if(err){
        throw err;
    }
    console.log(data.toString("utf-8"));
})
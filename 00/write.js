//写入数据
// 引入fs 模块
const fs = require('fs');

let str = "今天晚上浪费了 写了两小时博客没了";
fs.writeFile('./data.txt',str,function (err) {
    if(err){
        throw err;
    }
    console.log("写入数据成功");
})
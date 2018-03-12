// sync 同步
// aSync 异步
// a 否定的词根



//同步读取数据
//1 引入模块
const fs = require('fs');

//2 fs.readFileSync(path[,options])
// 参数1: 从哪里读取数据
// 参数2:以什么编码格式读取
console.log("我的博客啊");
    // let data = fs.readFileSync("./data1.txt","utf-8");

try{
    let data = fs.readFileSync("./data1.txt","utf-8");
}catch(err) {
    console.log("出错了");
}

console.log("回不来了");

// 同步 有 错误 用try.....catch(){}
// 异步用 throw err 
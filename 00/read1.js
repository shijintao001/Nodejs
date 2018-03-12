// 读取数据
// 引入fs 模块
const fs = require("fs");
// path 模块 路径问题 path.join()
const path = require('path');
// console.log(__dirname);
// let file = __dirname + '/data.txt';
// fs.readFile(file,function (err,data) {
//     if(err){
//         throw err;
//     }
//
//     console.log("读取成功");
//
// });
let file = path.join(__dirname,'data.txt');
console.log("file:",file);

fs.readFile(file,function (err,data) {
    if(err){
        throw err;
    }
    console.log("读取成功");
});
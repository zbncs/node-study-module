// 解析成绝对路径
const path = require('path');
// /Users/zhengyima/Desktop/nodejs/node-study-module/packages/path
const resolve1 = path.resolve();
const resolve2 = path.resolve('/a', '/b'); // /b
const resolve3 = path.resolve('/a', 'b'); // /a/b
const resolve4 = path.resolve('a', '/b'); // /b
// /Users/zhengyima/Desktop/nodejs/node-study-module/packages/path/a/b
const resolve5 = path.resolve('a', 'b'); 

console.log(111, resolve1, resolve2, resolve3)
console.log(222, resolve4, resolve5);



const path = require('path');

// 获取当前文件所在的目录，不包括该文件。
const dirname1 = path.dirname(__filename); // /Users/zhengyima/Desktop/nodejs/node-study-module/packages/path
const dirname2 = path.dirname('/a/c/v.js'); // /a/c
const dirname3 = path.dirname('/a/c/v/'); // /a/c

console.log(111, dirname1, dirname2, dirname3)




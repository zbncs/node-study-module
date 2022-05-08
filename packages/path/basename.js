// path.basename(path [, ext])
// path.basename() 方法返回 path 的最后一部分, 尾随的目录分隔符被忽略，
const path = require('path');

const baseName1 = path.basename('./a/b/c'); // c
const baseName2 = path.basename('.././a.html'); // a.html
const basename12 = path.basename('/a/b/c/'); // c

console.log(111, baseName1, baseName2, basename12);


const baseName3 = path.basename('./a.html', '.html'); // a
const baseName4 = path.win32.basename('C:\\foo.html', '.html'); // foo


console.log(222, baseName3, baseName4);

// 获取当前文件的 名字包括后缀名
const basename5 = path.basename(__filename); // basename.js

// 获取当前文件的 名字不包括后缀名
const basename6 = path.basename(__filename, '.js'); // basename

console.log(333, basename5, basename6)

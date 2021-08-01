// path.basename(path [, ext])
// path.basename() 方法返回 path 的最后一部分, 尾随的目录分隔符被忽略，
const path = require('path');

const baseName1 = path.basename('./a/b/c');
const baseName2 = path.basename('.././a.html');

console.log(111, baseName1, baseName2);


const baseName3 = path.basename('./a.html', '.html');
const baseName4 = path.win32.basename('C:\\foo.html', '.html');


console.log(222, baseName3, baseName4)

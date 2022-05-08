// 规范化路径
const path = require('path');

const normalize1 = path.normalize('a///b/c/../d'); // a/b/d
const normalize2 = path.normalize('a//\\/b/c\\/d');// a/\/b/c\/d
const normalize3 = path.normalize('a/\/b/c\/d'); // a/b/c/d

console.log(111, normalize1, normalize2, normalize3)



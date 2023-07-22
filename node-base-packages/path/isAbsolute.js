// path.isAbsolute(path) 方法确定 path 是否为绝对路径。

const path = require('path');

const isAbsolute1 = path.isAbsolute('./a/c');
const isAbsolute2 = path.isAbsolute('/a/c');
const isAbsolute3 = path.isAbsolute('.');
const isAbsolute4 = path.isAbsolute('a/c');
const isAbsolute5 = path.isAbsolute('foo');
const isAbsolute6 = path.isAbsolute('///foo');

console.log(1234, isAbsolute1, isAbsolute2, isAbsolute3, isAbsolute4);
console.log(222, isAbsolute5, isAbsolute6)
// windows

// const isAb1 = path.isAbsolute('//a');
// const isAb2 = path.isAbsolute('a\\c');
// const isAb3 = path.isAbsolute('c:\\a\\');
// const isAb4 = path.isAbsolute('c:/a/');
// const isAb5 = path.isAbsolute('a/c');

// console.log(77886, isAb1, isAb2, isAb3, isAb4, isAb5);





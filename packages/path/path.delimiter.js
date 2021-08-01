// 提供特定于平台的路径定界符(多个路径分隔符)：
// ; 用于 Windows
// : 用于 POSIX
 
const path = require('path');

const paths = process.env.PATH;
const pathArr = paths.split(path.delimiter);

console.log(11, paths, pathArr);



// windows
// console.log(process.env.PATH);
// 打印: 'C:\Windows\system32;C:\Windows;C:\Program Files\node\'

// process.env.PATH.split(path.delimiter);
// 返回: ['C:\\Windows\\system32', 'C:\\Windows', 'C:\\Program Files\\node\\']






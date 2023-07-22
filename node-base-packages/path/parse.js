// 解析路径
const path = require('path')

// 绝对路径，
const parse1 = path.parse(__filename)
// {
//     root: '/',
//     dir: '/Users/zhengyima/Desktop/nodejs/node-study-module/packages/path',
//     base: 'parse.js',
//     ext: '.js',
//     name: 'parse'
// }
console.log(111, parse1)

// 相对路径
const parse2 = path.parse('./a/b/c');

// { 
//     root: '', 
//     dir: './a/b',
//     base: 'c', 
//     ext: '', 
//     name: 'c' 
// }
console.log(222, parse2)



// path.extname(path) 方法返回 path 的扩展名，即 path 的最后一部分中从最后一次出现的 .（句点）字符到字符串的结尾。

const path = require('path');

const ext = path.extname('./a.html');
// .html
const ext1 = path.extname('./a.html.md');
// .md
const ext2 = path.extname('./a.');
// .
const ext3 = path.extname('./a');
// ''
const ext4 = path.extname('.a.html');
// .html
const ext5 = path.extname('.a');
// ''

console.log(ext, ext1, ext2, ext3, ext4, ext5)
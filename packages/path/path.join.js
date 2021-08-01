// path.join([...path])，返回拼接的字符串

const path = require('path');

const path1 = path.join('/a', '/b', '/c', '/d', '..');
const path2 = path.join('/a', 'b', '/c/d');
const path3 = path.join('/a', './b', './c', '../d');

console.log(1233, path1, path2, path3);







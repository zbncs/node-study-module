const fs = require('fs');
const rs = fs.createReadStream('./asset/go.png');
const ws = fs.createWriteStream('./copy/go1.png');

// 实现复制
rs.pipe(ws);


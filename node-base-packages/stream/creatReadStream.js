const fs = require('fs');

const res = fs.createReadStream('./asset/stream.txt');

let str = '';

// 监听数据
res.on('data', function(chunk) {
    str += chunk;
})

// 结束时打印数据
res.on('end', function() {
    console.log(1212, str);
})

// 错误提示
res.on('error', function(err) {
    console.log(333, err);
})



const fs = require('fs');

let str = '';

for (let i = 0; i < 1000; i++) {
    str += 'nodejs教程: Nodejs+Express+Koa2入门实战视频教程'
}

const writeStream = fs.createWriteStream('./asset/write.txt');

// 写入文件
writeStream.write(str);

// 标记写入完成，用来出发完成事件
writeStream.end();

writeStream.on('finish', function() {
    console.log('写入完成了')
})








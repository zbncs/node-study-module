// 异步地读取文件的全部内容。

const fs = require('fs');
const path = require('path');

// 绝对路径
const publicPath = path.resolve(__dirname, './assets/file.txt');

fs.readFile(publicPath, 'utf-8', function(err, data) {
    if (err) {
        console.log(111, err);
    }
    else {
        console.log(222, data);
    }

})

// 同步读取, (同步没有callback)

const data = fs.readFileSync(publicPath, 'utf-8');

console.log(234, data);



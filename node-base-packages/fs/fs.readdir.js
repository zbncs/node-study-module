// 读取目录的内容。

const fs = require('fs');
const path = require('path');

const public = path.resolve(__dirname, './assets')

fs.readdir(public, 'utf-8', function(err, data) {
    if (err) {
        console.log(111, err)
    }
    else {
        console.log(222, data) // [ 'file.txt', 'fs.md' ]
    }
})

// 


// withFileTypes 读取文件夹里所有的所有文件
fs.readdir('./www/', {withFileTypes: true}, (err, files) => {
    for (let file of files) {
        console.log(file.isDirectory())
    }
})


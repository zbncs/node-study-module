const fs = require('fs');

// access：判断文件或者目录是否有操作权限
fs.access('a.txt', (err) => {
    if (!err) {
        console.log('有操作权限');
    }
})

// stat：获取目录及文件信息
fs.stat('a.txt', (err, statObj) => {
    // 文件大小
    console.log(statObj.size);
    // 是否是文件
    console.log(statObj.isFile());
    // 是否是文件夹
    console.log(statObj.isDirectory());
})

// mkdir：创建目录
// 目录a必须存在
fs.mkdir('/a/b', (err) => {
    
})
// 递归创建
fs.mkdir('/a/b', {recursive: true}, (err) => {

})

// rmdir：删除目录
// 删除空目录
fs.rmdir('a/b', (err) => {

})

fs.rm('a/b', {recursive: true, force: true}, (err) => {

})

// readdir：读取目录中的内容
fs.readdir('a', (err, files) => {

})

// unlink：删除指定文件
fs.unlink('a/a.txt', (err) => {})


const {stat, access, constants, chmod, chown} = require('fs');
const path = require('path');

const pathPub = path.resolve(__dirname, './assets/file.txt');

// 要检查文件是否存在而不对其进行操作，建议使用 fs.access()

// 文件信息，判断路径类型是文件还是文件夹
stat(pathPub, (err, stats) => {
    // console.log(1323, stats);

    // stats.isDirectory() 判断是否是目录
    // stats.isFile() 是否是文件
})

// 判断文件是否可见, 可读，可写， 可以被调用进程执行
access(pathPub, constants.F_OK, function(err) {
    console.log(677, err);
})

// 异步地更改文件的权限。 
chmod(pathPub, 0o775, (err) => {
    console.log(999, err)
})

// 异步地更改文件的所有者和群组。
chown(pathPub, uid, gid, (err) => {})



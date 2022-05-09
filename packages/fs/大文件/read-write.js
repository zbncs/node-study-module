const fs = require('fs');

let buf = Buffer.alloc(10);

/**
 * fd: 定位当前打开的文件
 * buf: 表示当前的缓冲区
 * offset: 表示从buf哪个位置开始写入
 * length: 写入的长度
 * position: 当前位置哪个位置开始读取
 */

fs.open('../assets/file.txt', 'r', (err, rfd) => {
    fs.read(rfd, buf, 0, 4, 3, (err, bytesRead, data) => {

    })
})

//
let buf1 = Buffer.from('1234567890');

fs.open('../assets/fswrite.txt', 'w', (err, wfd) => {
    fs.write(wfd, buf1, 0, 10, 0, (err, written, buffer) => {
        console.log(written);
        console.log(buffer);
        console.log(buffer.toString());
        fs.close(wfd)
    })
})


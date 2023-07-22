const fs = require('fs')

/**
 * 打开a文件，利用read将数据保存到buffer中
 * 打开b文件，利用write将数据从buffer中写入b文件中
 */

let buf = Buffer.alloc(10)

fs.open('../assets/file.txt', 'r', (err, rfd) => {
    fs.read(rfd, buf, 0, 10, 0, (err, byteRead, buffer) => {
        fs.open('../assets/b.txt', 'w', (err, wfd) => {
            fs.write(wfd, buf, 0, 10, 0, (err, writeBytes, buffer) => {
                console.log('写入成功')
            })
        })
    })
})

// 改动，不要每次都去open

fs.open('../assets/file.txt', 'r', (err, rfd) => {
    fs.open('../assets/b.txt', 'w', (err, wfd) => {
        fs.read(rfd, buf, 0, 10, 0, (err, byteRead, buffer) => {
            fs.write(wfd, buf, 0, 10, 0, (err, writeBytes, buffer) => {
                console.log('写入成功')
            })
        })   
    })

})

// 封装
let BUFFER_SIZE = 10
let readOffset = 0;

fs.open('../assets/file.txt', 'r', (err, rfd) => {
    fs.open('../assets/b.txt', 'w', (err, wfd) => {
        function next() {
            fs.read(rfd, buf, 0, BUFFER_SIZE, readOffset, (err, readBytes) => {
                if (!readBytes) {
                    fs.close(rfd);
                    fs.close(wfd);
                    console.log('copy完成');
                    return;
                }
                readOffset += readBytes;
                fs.write(wfd, buf, 0, readOffset, (err, writeBytes) => {
                    next()
                })
            })   
        }
        next();
    })

})




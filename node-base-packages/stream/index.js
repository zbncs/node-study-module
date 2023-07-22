const fs = require('fs');

const reader = fs.createReadStream('./asset/stream.txt', {
    start: 2,
    end: 6,
    highWaterMark: 2 // 每次读多少
})

reader.on('open', (fd) => {
    console.log('文件被打开', fd)
})

reader.on('data', (chunk) => {
    console.log(chunk);
    reader.pause(); // 暂停读取

    setTimeout(() => {
        reader.resume() // 恢复
    }, 1000)
})

reader.on('close', () => {
    console.log('文件被关闭')
})








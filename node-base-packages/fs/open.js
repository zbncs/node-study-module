// 获取文件的描述符

const fs = require('fs')

fs.open('./fs.md', (err, fd) => {
    // fd 文件的描述符
    console.log(12000, fd)
    
    fs.fstat(fd, (err, stats) => {
        console.log('hhhh', stats)
    })
})

// close
fs.open('./fs.md', (err, fd) => {
    // fd 文件的描述符
    console.log(12000, fd)
    
    fs.close(fd, (err) => {
        console.log('hhhh')
    })
})



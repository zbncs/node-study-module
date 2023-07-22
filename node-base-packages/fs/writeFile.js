// 异步向文件写入内容，覆盖的写操作
const fs = require('fs')
const path = require('path')

const public = path.resolve(__dirname, './assets')

const data = Buffer.from('Hello Node.js');

fs.writeFile(`${public}/mes.txt`, data, 'utf-8', function(err) {
    if (!err) {
        fs.readFile(`${public}/mes.txt`, 'utf-8', (err, data) => {
            console.log(111, data)
        })
    }
})

// 写入在文件内容中追加内容
fs.writeFile(`${public}/mes11.txt`, '追加111', {
    encoding: 'utf-8',
    mode: 438,
    flag: 'a+'
}, (err) => {
    if (!err) {
        fs.readFile(`${public}/mes11.txt`, 'utf-8', (err, data) => {
            console.log(8888, data)
        })
    }
    else {
        console.log(222, err)
    }
})

// 同步写入

// const err = fs.writeFileSync(`${public}/sync.js`, data, 'utf-8');

// console.log(666, err)







// 在文件内容末尾追加内容

const fs = require('fs')
const path = require('path')

const public = path.resolve(__dirname, './assets')
fs.appendFile(`${public}/file.txt`, '追加', (err) => {
    console.log(11, err)
})


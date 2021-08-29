// 异步向文件写入内容

const fs = require('fs')
const path = require('path')

const public = path.resolve(__dirname, './assets')

const data = Buffer.from('// Hello Node.js');

fs.writeFile(`${public}/mes.txt`, data, 'utf-8', function(err) {
    console.log(1212, err)
})

// 同步写入

const err = fs.writeFileSync(`${public}/sync.js`, data, 'utf-8');

console.log(666, err)







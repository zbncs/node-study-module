const {promisify} = require('util')
const fs = require('fs')
const path = require('path')

const readFilePromise = promisify(fs.readFile)
const writeFilePromise = promisify(fs.writeFile)

const p1 = path.join(__dirname, '1.txt')
const p2 = path.join(__dirname, '2.txt')
const p3 = path.join(__dirname, '3.txt')

const wp = path.join(__dirname, 'data.txt')

let str = ''

async function transform() {
    const data1 = await readFilePromise(p1, 'utf-8')
    const data2 = await readFilePromise(p2, 'utf-8')
    const data3 = await readFilePromise(p3, 'utf-8')

    str = data1 + data2 + data3

    writeFilePromise(wp, str).catch(e => {
        console.log(123, e);
    })
}

transform()



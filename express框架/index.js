const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

app.get('/register', (req, res) => {

    let pathName = path.join(__dirname, 'index.html')
    const str = fs.readFileSync(pathName, 'utf-8')
    res.send(str)
})

app.listen(3000, () => {
    console.log('express app');
})


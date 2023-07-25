const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())


app.get('/', (req, res) => {

    let pathName = path.join(__dirname, '../index.html')
    const str = fs.readFileSync(pathName, 'utf-8')
    res.send(str)
})

app.post('/register', (req, res) => {
    console.log(req.body);

    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.repwd);

    // 重定向
    res.redirect('/')
})


app.listen(3000, () => {
    console.log('express app');
})


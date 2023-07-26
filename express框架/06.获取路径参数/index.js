const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('<h1>哈哈哈</h1>')
})

app.get('/detail/:id/:name', (req, res) => {

    // 获取路径参数
    const {id, name} = req.params
    console.log(111, id, name);

    res.send('detail')
})

app.listen(3000, () => {
    console.log('app running ...');
})


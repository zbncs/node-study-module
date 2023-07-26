const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', (req, res) => {
    res.send('<h1>哈哈哈</h1>')
})

app.get('/setCookie', (req, res) => {

    // 设置cookie
    res.cookie('my-cookie', '666', {maxAge: 1000 * 60 * 60 * 2})
    res.cookie('my-cookie-2', '888')

    res.send('<h1>设置cookie</h1>')
})

app.get('/getCookie', (req, res) => {
    // 获取cookie
    const cookie1 = req.cookies['my-cookie']
    const cookie2 = req.cookies['my-cookie-2']

    res.send(`cookie是${cookie1}-${cookie2}`)
})

app.get('/deleteCookie', (req, res) => {
    // 删除cookie
    res.clearCookie('my-cookie')
    res.clearCookie('my-cookie-2')

    res.send('删除cookie')
})

app.listen(3000, () => {
    console.log('app running ...');
})


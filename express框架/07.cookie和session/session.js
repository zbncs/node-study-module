const express = require('express')
const app = express()
const cookieSession = require('cookie-session')

app.use(cookieSession({
    name: 'my_session',
    keys: ['sdsdsdsdsddd'],
    maxAge: 1000 * 60 * 60 * 24
}))

app.get('/', (req, res) => {
    res.send('<h1>哈哈哈session</h1>')
})

app.get('/set_session', (req, res) => {
    // 设置session
   req.session['name'] = 'zhangsan'
   req.session['age'] = 18

    res.send('<h1>设置session</h1>')
})

app.get('/get_session', (req, res) => {
    // 获取session
    const name = req.session['name']
    const age = req.session['age']

    res.send(`session是${name}-${age}`)
})

app.listen(3000, () => {
    console.log('app running ...');
})


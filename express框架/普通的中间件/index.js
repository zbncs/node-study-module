const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('第01个普通中间件启动');
    next()
})

app.use((req, res, next) => {
    console.log('第02个普通中间件启动');
    next()
})

app.use((req, res, next) => {
    console.log('第03个普通中间件启动');
    res.end('最后一个中间件执行完毕')
})

app.listen('8000', () => {
    console.log('普通中间件服务器启动');
})








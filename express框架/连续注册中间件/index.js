const express = require('express');

const app = express();


app.get('/home', (req, res, next) => {
    console.log('第01个普通中间件启动');
    next()
}, (req, res, next) => {
    console.log('第02个普通中间件启动');
    next()
}, (req, res, next) => {
    console.log('第03个普通中间件启动');
    res.end()
})


app.listen('8000', () => {
    console.log('普通中间件服务器启动');
})








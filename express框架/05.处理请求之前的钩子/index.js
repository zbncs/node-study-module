// 项目中使用路由
const express = require('express');
const app = express();

// 1、引入对应工具模块
const utils = require('./utils/index.js');

const passportRouters = require('./routes/passport');


var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// 2、补上执行接口函数之前所执行的函数
app.use(utils.checkLogin, passportRouters)


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
});
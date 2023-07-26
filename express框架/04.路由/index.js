const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// 引入路由
const passportRouter = require('./routes/passport')
const indexRouter = require('./routes/index')
app.use(passportRouter)
app.use(indexRouter)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('app run at 3000');
})






const express = require('express')
const app = express()

// http://localhost:4000?name=zs&age=18
app.get('/', (req, res) => {
    console.log(req.query.name, req.query.age);
    res.send('hello world')
})

app.listen(4000, () => {
    console.log("app run .....");
})




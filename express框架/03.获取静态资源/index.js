const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('ooooooooooooo')
})

app.listen(3000, () => {
    console.log('app run in 3000');
})








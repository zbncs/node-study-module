const express = require('express')
const app = express()

const mysql = require('mysql')

// 数据库连接配置
const pool = mysql.createPool({
    user: 'root',
    password: '123456qq',
    database: 'DB1',
    host: 'localhost'
})

// 

function query(sql, callbcak) {
    pool.getConnection((err, connection) => {
        connection.query(sql, (err, rows) => {
            callbcak(err, rows)
            connection.release()
        })
    })
}

app.get('/', (req, res) => {
    const sql = 'select * from emp'
    query(sql, (err, data) => {
        if(err) {
            console.log(111, err);
            return
        }
        res.send(data)
    })
})


app.listen(3000, () => {
    console.log('3000 -------------------');
})










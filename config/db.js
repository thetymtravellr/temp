const mysql = require('mysql2');

const db = mysql.createConnection({
    user: process.env.DB_USER,
    host: 'localhost',
    password: process.env.DB_PASS,
    database: 'my-todo'
})

module.exports = db;
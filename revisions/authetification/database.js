const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user:'cnam',
    password: 'cnam2020',
    database: 'nodejs'
})

connection.connect();

module.exports = connection;
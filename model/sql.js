const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'unisi_pt'
});

module.exports = conn;

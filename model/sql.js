const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'ilham',
    password: 'ilham2001#',
    database: 'unisi_pt'
});

module.exports = conn;

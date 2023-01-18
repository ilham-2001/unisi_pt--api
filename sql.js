const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'ilham',
    password: 'ilham2001#',
    database: 'unisi_pt'
});

conn.connect((err) => {
    if (err) {
        console.log('Error');
    } else {
        console.log('Connected')
    }
});

conn.query('SELECT * FROM mahasiswa', (err, result, field) => {
    console.log(result);
});

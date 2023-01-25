const sql = require('./sql');

const verifyLogin = (email, password) => {
    return sql.promise().query(`SELECT 1 verified FROM mahasiswa WHERE email='${email}' AND nim='${password}'`);
}


module.exports = {verifyLogin};
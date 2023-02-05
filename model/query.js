const sql = require('./sql');

const verifyLogin = (email, password) => {
    return sql.promise().query(`SELECT 1 verified FROM mahasiswa WHERE email='${email}' AND nim='${password}'`);
}

const registerAccount = (data) => {
    const {name, email, noTelepon, tglLahir, jurusan, nim} = data;

    return sql.promise().query(`INSERT INTO mahasiswa(nim, nama_mahasiswa, email, no_telepon,
         jurusan, tanggal_lahir) VALUES('${nim}', '${name}', '${email}', '${noTelepon}', '${jurusan}', '${tglLahir}')`);

}


module.exports = {verifyLogin, registerAccount};
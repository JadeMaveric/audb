const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'audb'
});

module.exports = pool.promise();
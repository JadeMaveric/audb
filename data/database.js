const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'audb',
    password: 'dontell',
    database: 'audb'
});

module.exports = pool.promise();
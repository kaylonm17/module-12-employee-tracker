const mysql = require('mysql2');

const connection = mysql.createConnection({
    
        host: 'localhost',
        user: 'root',
        password: 'Texans17',
        database: 'employeelist_db'
});

connection.connect(function (err) {
    if (err) throw err;
});

module.exports = connection;
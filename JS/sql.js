const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees',
    password: 'Tafolla1226'
},
    console.log('Connected to the employee_trackert database.')
);

module.exports = db;
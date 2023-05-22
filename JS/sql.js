const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    database: 'employees',
    password: ''
},
    console.log('Connected to the employee_trackert database.')
);

module.exports = connection;
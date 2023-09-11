const mysql = require('mysql2');


// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Mahdawe11@@',
        database: 'teams_db'
    },
    console.log(`Connected to the teams_db database.`)
);

module.exports = db
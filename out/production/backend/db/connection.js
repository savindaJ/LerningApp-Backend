const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "80221474",
    insecureAuth: true,
    database: "mern_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("database Connected!");
});

module.exports = connection;
const express = require('express');
const mysql = require('mysql');

const app = express();

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'students'
});
 
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

db.query(`SELECT * FROM 'student'`, (error, results) => {
    if (error) {
        console.log(error);
    }

    console.log(results);
});

app.get('/', function (req, res) {
  res.send('Hello World')
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});
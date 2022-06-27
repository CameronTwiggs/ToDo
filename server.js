//create express server
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
const port = 8080;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const connection = mysql.createConnection({
    host: 'todo-database.cxjiy2ijjdts.us-east-1.rds.amazonaws.com',
    user: 'root',
    port:  3306,
    password: '[Twigs2112]',
    database: 'todoDatabase'
});

connection.connect(function(err) {  // 
    if(err) throw err;
    console.log('Connected to database');
}); // connect to database


app.listen(port, () => console.log(`Listening on port ${port}`)); // listen on port 8080

app.get ('/', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    connection.query(sql, function(err, result) {
        if(err) throw err;
        res.send(result);
    });
}); // send response to client


app.get ('/bruh', (req, res) => {
    res.send('bruh');
}); // send response to client


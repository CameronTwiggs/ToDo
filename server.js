//create express server
const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 8080;


const connection = mysql.createConnection({
    host: 'todo-database.cxjiy2ijjdts.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: '[Twigs2112]',
    database: 'todoDatabase'
});

connection.connect(function(err) {  // 
    if(err) throw err;
    console.log('Connected to database');
}); // connect to database

app.listen(port, () => console.log(`Listening on port ${port}`)); // listen on port 3000


app.get ('/', (req, res) => {
    const sql = 'SELECT * FROM tasks';
    connection.query(sql, function(err, result) {
        if(err) throw err;
        res.send(result);
    });
}); // send response to client


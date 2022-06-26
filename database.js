// connecting to a mysql database
var mysql = require('mysql'); 
var connection = mysql.createConnection({
    host    : 'todo-database.cxjiy2ijjdts.us-east-1.rds.amazonaws.com',
    user : 'root',  
    password : '[Twigs2112]',
})
connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected to database');
});

module.exports =  connection; // exporting the connection to be used in other files

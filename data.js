//connects to the database
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'todo-database.cxjiy2ijjdts.us-east-1.rds.amazonaws.com',
    user: 'root',
    password: '[Twigs2112]',
    database: 'todoDatabase'
});

// cpmmunicates with the database
connection.connect(function(err) {  //
    if(err) throw err;
    console.log('Connected to database');
}
); // connect to database

const sql = 'SELECT * FROM tasks';
connection.query(sql, function(err, result) {
    if(err) throw err;
   console.log(result);
});

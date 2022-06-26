var express = require('express'); 
var router = express.Router();
var db = require('../database.js');

router.get('/', function(req, res) {
    var query = "SELECT * FROM tasks";
    db.query(query, function(err, rows, fields) { // Gets all tasks from the database
        if(err) throw err;
        res.render(rows); // Renders the tasks in the database
    });
  }
);

module.exports = router; // exports the router to be used in the app.js file
 
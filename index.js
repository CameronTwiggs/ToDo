const {createPool} = require('mysql');
const express = require('express');
var app = express();


const pool = createPool({
    host    : 'todo-database.cxjiy2ijjdts.us-east-1.rds.amazonaws.com',
    user : 'root',  
    password : '[Twigs2112]',
})


async function updateList(){
    const taskList = await pool.query(`select * from todoDatabase.tasks;`, (err,res) => {
        if (err) { return console.error(err); }
        return console.log(res)
    })
    console.log(taskList[1])
}

updateList(); 
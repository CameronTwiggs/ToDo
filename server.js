// creatrs express server that sends folder contents to client
const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = 8080;

add.listen(port, () => {
    console.log(`listening on port ${port}`);
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "/public"));
});
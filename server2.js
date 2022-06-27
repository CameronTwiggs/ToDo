// starts expres server
const express = require('express');
let app = express();
let port = 8080;

app.get('/', (req, res) => {
    res.send('bruh');
} // send response to client
);



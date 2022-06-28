const express = require('express');
const https = require('https');
const fs = require('fs');
let app = express();
let port = 8080;


var key = fs.readFileSync(__dirname + '/certs/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certs/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};



app.get('/bruh', (req, res) => {
    res.send('bruh but https');
} // send response to client
);

https
    .createServer(options, app)
    .listen(port, () => console.log(`Listening on port ${port}`)); // listen on port 8080
    



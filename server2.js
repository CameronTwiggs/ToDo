// starts expres server
const express = require('express');
let app = express();
let port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}`)); // listen on port 8080

app.get('/', (req, res) => {
    res.send('bruh');
} // send response to client
);



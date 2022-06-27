// creates a new express server
const express = require('express');
const app = express();
const port = 4000

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})
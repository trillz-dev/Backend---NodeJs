const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(8080, () => {
    console.log('server is running on port 3000')
});
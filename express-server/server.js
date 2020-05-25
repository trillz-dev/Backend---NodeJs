const express = require ('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/contact', (req, res) =>{
    res.send('contact me at helloadetomiwa@gmail.com')
});

app.get('/about', (req, res) => {
    res.send('this is a personal page and its about me learning on how to create my own server')
});

app.listen(3000, () => {
    console.log('server is running on port 3000')
});

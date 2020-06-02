const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

 
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/signup.html")
});

app.post('/', (req, res) => {
    
    let firstName = req.body.fName
    let lastName = req.body.lName
    let email = req.body.email

    console.log(firstName)
    console.log(lastName)
    console.log(email)


});


app.listen(3000, () => {
    console.log("server is running on port 3000")
});






//cd9b3c45aa0a0b442ba71420749917eb-us10
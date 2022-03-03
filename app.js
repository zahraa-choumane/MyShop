
const express = require("express")
const bodyParser = require("body-parser")
const cors = require('cors');
const jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');

// create our express app
const app = express()
const fs = require('fs');
// route
const routes = require('./route/route')
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json({limit: '10mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb', extended: true}));

app.use('/', routes)

let secret = 'some_secret';




app.get('/token/sign', (req, res) => {
    
    var userData = {
        "email": "zahraa.choumane",
        "pwd": "123"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '2h'})
    res.status(200).json({"token": token});
});
app.post('/token/sign', (req, res) => {
    
    var userData = {
        "email": req.body["email"],
        "pwd": req.body["pwd"],
    }
    let token = jwt.sign(userData, secret, { expiresIn: '2h'})
    res.status(200).json({"token": token});
});

app.get('/path1', (req, res) => {
    res.status(200)
        .json({
            "success": true,
            "msg": "Secrect Access Granted"
        });
});



//start server
app.listen(3000, ()=>{
    console.log("listening at port:3000")
}) 



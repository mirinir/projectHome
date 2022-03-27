const express = require('express')
const app = express()
const port = 5000
//בכדי שיוכל לקבל בבדי
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// axios - בכדי שיוכל לקבל קריאת   
const cors = require('cors');
app.use(cors());

//מגדיר את מה להריץ
const api = require('./api')
app.use(api);
app.use('/', api)


const mongoose = require('mongoose');
// הגדרת משתנה למסד הרצוי
const mongoDB_Url ="mongodb+srv://mirinir:m207464041@cluster0.m51yh.mongodb.net/myData?retryWrites=true&w=majority"
                  
// Connect to the db
mongoose.connect(mongoDB_Url, function (err, db) {
    if (err) throw err;
    console.log("connect db")

});

app.listen(port, console.log(`app listening at http://localhost:${port}`))
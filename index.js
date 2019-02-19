var express = require('express');
var app = express()
var userRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(express.static('views'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users',userRouter);
app.use('/admin',adminRouter);
app.listen(8080,function(err){
    if(err){
        throw err;
    }
    console.log("Server is Running at 8080 port!")
});
/* GET home page. */

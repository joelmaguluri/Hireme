var express = require('express');
var app = express()
var userRouter = require('./routes/users');
var adminRouter = require('./routes/admin');
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static('views'));
app.use('/uploads', express.static('uploads'));
app.use('/users',userRouter);
app.use('/admin',adminRouter);
var port=process.env.PORT||4000;
app.listen(port, function(err){
    if(err) throw err;
    console.log("Server is running 4000");
});

/* GET home page. */

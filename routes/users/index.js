var app=require('express');
var router = app.Router();
var bodyParser=require('body-parser');
const nodemailer = require("nodemailer");
router.get('/login',function(req,res,next){
res.send("helloworld");

})
router.get('/register',function(req,res,next){
res.send("helloworld");

})
router.get('/connectwithme',function(req,res,next){
 res.sendFile('/views/index.html', { root: "./"});

})
router.post('/connectwithme',function(req,res,next){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "gains.arrowsupercloud.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'thisissudeep@msudeepjoel.com', // generated ethereal user
      pass: 'AMMAHello123@#' // generated ethereal password
    }
  });
  // setup email data with unicode symbols
 let mailOptions = {
   from: '"Sudeep Joel" <thisissudeep@msudeepjoel.com>', // sender address
   to:`thisissudeep@msudeepjoel.com`, // list of receivers
   subject: `Name:${req.body.fname}${req.body.fname}`, // Subject line
   text: `${req.body.message}`, // plain text body
   html: `<b>Your Details<b><br><b>Firstname:${req.body.fname}</b><br>
   <b>Lastename:${req.body.lname}</b><br><b>Email:${req.body.email}</b><br>
   Message:${req.body.message}</b><br>
   Subject:${req.body.subject}</b><br>` // html body
 };
let info = transporter.sendMail(mailOptions,function(error, response){
    if(error){
        console.log(error);
    }else{
      console.log("Message sent: %s", info.messageId);
// Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
});
    res.send(req.body);
})
module.exports = router;

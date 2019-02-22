var app=require('express');
var router = app.Router();
var bodyParser=require('body-parser');
const email="msudeep.joel@gmail.com";
const nodemailer = require("nodemailer");

/*router.get('/login',function(req,res,next){
res.send("helloworld");});

router.get('/register',function(req,res,next){
res.send("helloworld");

})*/
router.get('/sendemail',function(req,res,next){
 res.sendFile('/views/index.html', { root: "./"});
});
router.post('/sendemail',function(req,res,next){
console.log(req.body);
res.json(req.body);
});
/*router.post('/sendemail',function(req,res,next){

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'msudeep.joel@gmail.com', // generated ethereal user
      pass: 'AmmaNana789)!' // generated ethereal password
    }
  });
  // setup email data with unicode symbols
 let name=req.body.fname+req.body.lname;
 let mailOptions = {
   from: '"Sudeep Joel" <msudeep.joel@gmail.com>', // sender address
   to:`${email}`,// list of receivers
   subject: `Resume:${name}`, // Subject line
   text: ``, // plain text body
   html: `<p>${req.body.message}</p>`, // html body
   attachments: [
   {
    path: ABSPATH + '/images/test.jpg'
   }]
 };
let info = transporter.sendMail(mailOptions,function(error, response){
      if(error){
          console.log('Failed in sending mail');
          console.dir({success: false, existing: false, sendError: true});
          console.dir(error);
          res.end('Failed in sending mail');
      }else{
          console.log('Successful in sending email');
          console.dir({success: true, existing: false, sendError: false});
          console.dir(response);
          res.end('Successful in sending email');
      }
  });
    res.send(req.body);
});*/

module.exports = router;

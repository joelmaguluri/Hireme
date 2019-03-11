var app=require('express');
var router = app.Router();
var bodyParser=require('body-parser');
const nodemailer = require("nodemailer");
var multer = require('multer');
const path=require('path');
const fs=require('fs')
var email='msudeep.joel@gmail.com'
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+'.pdf',()=>{
      alert('Not pdf');
    })
  },
  fileFilter: function (req, file, cb) {
    if (path.extension(file.originalname) !== '.pdf') {
      return cb(null, false)
    }

    cb(null, true)
  }
});

var upload = multer({ storage: storage });
router.get('/sendemail',function(req,res,next){
 res.sendFile( path.join(__dirname, '/../../views/index.html') );
});


 router.post('/sendemail', upload.single('Resume'), function(req, res,next) {
   let transporter = nodemailer.createTransport({
     host: "smtp.gmail.com",
     port: 465,
     secure: true, // true for 465, false for other ports
     auth: {
       user: 'msudeep.joel@gmail.com', // generated ethereal user
       pass: '*****' // generated ethereal password
     }
   });
   // setup email data with unicode symbols
  let name=req.body.fname+req.body.lname;
  let mailOptions = {
    from: '"Sudeep Joel" <msudeep.joel@gmail.com>', // sender address
    to:`${email}`,// list of receivers
    subject: `Resume:${req.name}`, // Subject line
    text: `helloworld`, // plain text body
    html: `<p>${req.body.message}</p>`, // html body
    attachments: [
         {   // utf-8 string as an attachment
             filename: 'Resume.pdf',
             content: fs.createReadStream('../../uploads/Resume.pdf')
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
  console.log(req.file);
 res.send("file saved on server");
 });
module.exports = router;

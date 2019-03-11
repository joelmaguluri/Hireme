var app=require('express');
var router = app.Router();
router.get('/login',function(req,res,next){
res.send("helloworld");

})
router.get('/register',function(req,res,next){
res.send("helloworld");

})
module.exports = router;

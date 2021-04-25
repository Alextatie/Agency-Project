//iomports
const express  = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport   =  require("passport");
const {check,validationResult}=require('express-validator');
const userDB = require('./Models/usersDB')
const app = express()
const port = process.env.PORT || 3000

//Connect to DB username and password needed of MongoDB.
mongoose.connect("mongodb+srv://ProjTest:1q2w3e4r@travelagency.gvhr2.mongodb.net/travelagency");

//static files
app.use(express.static('public'))
app.use('/main',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/bg-1',express.static(__dirname+'public/img'))
app.use(bodyParser.urlencoded({extended: false}))
//set views
app.set('views', './views')
app.set('view engine', 'ejs')


//navigation
app.get('',(req,res)=>{
  res.render('index')
})

app.get('/about',(req,res)=>{
  res.render('about')
})

app.get('/contact',(req,res)=>{
  res.render('contact')
})

app.get('/deals',(req,res)=>{
  res.render('deals')
})

app.get('/login',(req,res)=>{
  res.render('login')
})
app.get('/ErrorPage',(req,res)=>{
  res.render('ErrorPage')
})
app.get('/ProfileTest',(req,res)=>{
  res.render('ProfileTest')
})

app.get('/signup',(req,res)=>{
  res.render('signup')
})

// This Signsup a new User
app.post("/signup",(req,res)=>{
  //This function doesnt work properly yet, but it needs to check if emails
  //exist in the DB and show a proper message if email is alreay used.
  function validateEmailAccessibility(email){

   return User.findOne({email: email}).then(function(result){
        return result !== null;
   });
}
//creates a new User in the DB, Authenticaets the *Required* fields.
  const newUser =  new userDB({
      userEmail: req.body.email,
      userName: req.body.username,
      userPassword:req.body.password
    })
      req.body.password,function(err,user){
        if(err){
            console.log(err);
            res.render("ErrorPage");
        }
    passport.authenticate("local")(req,res,function(){
        res.redirect("ProfileTest");
    })
    }
    //saves to DB.
    newUser.save()
    res.render("ProfileTest");
})
function isLoggedIn(req,res,next) {
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect("ProfileTest");
}


//listen on port 3000
app.listen(port, ()=> console.info('Listening on port ${port}'))

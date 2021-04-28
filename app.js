//iomports
const express  = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const passport   =  require("passport");
const {check,validationResult}=require('express-validator');
const userDB = require('./Models/usersDB')
const { validateEmail,validatePassword} = require('./Routes/Verifier.js')
const signupTemplet = require('./views/signUp.js')
const loginTemplet = require('./views/logIn.js')
const app = express()
const port = process.env.PORT || 3000

//Connect to DB username and password needed of MongoDB.
mongoose.connect("mongodb+srv://ProjTest:1q2w3e4r@travelagency.gvhr2.mongodb.net/TravelAgency");

//static files
app.use(express.static('public'))
app.use('/main',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/bg-1',express.static(__dirname+'public/img'))
app.use(bodyParser.urlencoded({extended: false}))
//set views
app.set('views', './views')
app.set('view engine', 'ejs')


//navigations
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
app.get('/emlogin',(req,res)=>{
  res.render('emlogin')
})
app.get('/ErrorPage',(req,res)=>{
  res.render('ErrorPage')
})
app.get('/SuccessPage',(req,res)=>{
  res.render('SuccessPage')
})
app.get('/signup',(req,res)=>{
  res.render('signup')
})
app.get('/emsignup',(req,res)=>{
  res.render('emsignup')
})


//Registartions
app.post('/signup',[validateEmail],async (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.send(signupTemplet({ errors }))
        }
          var newUser =  new userDB({
              userEmail: req.body.email,
              userName: req.body.username,
              userPassword:req.body.password  })
              newUser.save()
              return res.render('SuccessPage')
      }
    )

//login
app.post('/login',[validatePassword],async (req,res)=>{
  userName=req.body.email;
  userPassword=req.body.password;
  const errors = validationResult(req)
  console.log(errors);
  if (!errors.isEmpty()) {
      return res.send(loginTemplet({ errors }))}
  else{res.render('ProfileTest');}
})

//listen on port 3000
app.listen(port, ()=> console.info('Listening on port ${port}'))

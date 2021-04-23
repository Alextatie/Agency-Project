//iomports
const express  = require('express')
const bodyParser = require('body-parser');
const {check,validationResult}=require('express-validator')
const app = express()
const port = process.env.PORT || 3000

@@ -13,7 +15,9 @@ app.use('/bg-1',express.static(__dirname+'public/img'))
app.set('views', './views')
app.set('view engine', 'ejs')

//get
const urlencodedParser = bodyParser.urlencoded({extended: false})

//navigation
app.get('',(req,res)=>{
  res.render('index')
})
@@ -38,6 +42,24 @@ app.get('/signup',(req,res)=>{
  res.render('signup')
})

app.post('/signup',urlencodedParser,[
  check('username','Username must be 3+ characters long')
    .exists()
    .isLength({min: 3}),
  check('email','Email is not valid')
    .isEmail()
    .normalizeEmail()
],(req,res)=>{
  const errors = validationResult(req)

  if(!errors.isEmpty()){
    const alert = errors.array()
    res.render('signup', {
      alert
    })
  }
})


//listen on port 3000
app.listen(port, ()=> console.info('Listening on port ${port}'))
//iomports
const express  = require('express')
const app = express()
const port = 3000

//static files
app.use(express.static('public'))
app.use('/main',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/bg-1',express.static(__dirname+'public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

//get
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

app.get('/signup',(req,res)=>{
  res.render('signup')
})


//listen on port 3000
app.listen(port, ()=> console.info('Listening on port ${port}'))

//iomports
const express  = require('express')
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const bodyParser = require('body-parser')
const msql = require('mysql')
const {check,validationResult}=require('express-validator')
=======
>>>>>>> parent of 0a37ceb (valid)
=======
>>>>>>> parent of 0a37ceb (valid)
=======
>>>>>>> parent of 0a37ceb (valid)
const app = express()
const port = process.env.PORT || 3000

//static files
app.use(express.static('public'))
app.use('/main',express.static(__dirname+'public/css'))
app.use('/js',express.static(__dirname+'public/js'))
app.use('/bg-1',express.static(__dirname+'public/img'))


//set views
app.set('views', './views')
app.set('view engine', 'ejs')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const urlencodedParser = bodyParser.urlencoded({extended: false})

//mysql
const pool=mysql.createPool({
  connectionLimit: 100,
  host:'localhost',
  user:'root',
  password:'password',
  database:'travelagency'
})

app.get('',(req,res)=>{

  pool.getConnection((err,connection)=>{
    if(err) throw err
    console.log('connected as id ${connection.threadId}')

    connection.query('SELECT * from users',(err,rows)=>{
      connection.release()

      if(!err){
        res.send(rows)
      } else{
        console.log()
      }
    })
  })

})


//navigation
=======
//get
>>>>>>> parent of 0a37ceb (valid)
=======
//get
>>>>>>> parent of 0a37ceb (valid)
=======
//get
>>>>>>> parent of 0a37ceb (valid)
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

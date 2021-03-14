const express = require('express')
const app_port = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(app_port)
console.log('app is running. port:3000')
console.log('http://127.0.0.1:3000/')

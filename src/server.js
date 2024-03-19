const express = require('express') // commonjs
const { hostname } = require('os')
const path = require('path') // commonjs
require('dotenv').config()

const app = express()  //app express
const port = process.env.PORT //port => hardcode
const locallhost = process.env.HOST_NAME

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//config static files: image/css/js 
app.use(express.static(path.join(__dirname, 'public')))

//declare route
app.get('/', (req, res) => {
  res.send('Hello World and nodemon!')
})

app.get('/abc', (req, res) => {
  res.send('<h1>nodejs for beginner</h1>')
})

app.get('/view', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
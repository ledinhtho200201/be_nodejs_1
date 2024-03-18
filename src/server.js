const express = require('express') // commonjs
const path = require('path') // commonjs

const app = express()  //app express
const port = 8080 //port

// config template engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//khai bao route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/abc', (req, res) => {
  res.send('<h1>nodejs for beginner</h1>')
})

app.get('/view', (req, res) => {
  res.render('sample.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
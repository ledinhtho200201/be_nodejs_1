const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World and nodemon!')
})

router.get('/abc', (req, res) => {
    res.send('<h1>nodejs for beginner</h1>')
})

router.get('/view', (req, res) => {
    res.render('sample.ejs')
})

module.exports = router; //export default
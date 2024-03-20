
const getHomepage = (req, res) => {
    //process data
    //call model
    res.send('Xin chao chu em')
}

const getABC = (req, res) => {
    res.send('<h1>nodejs for beginner</h1>')
}

const viewPage = (req, res) => {
    res.render('sample.ejs')
}

module.exports = {
    getHomepage, getABC, viewPage
}
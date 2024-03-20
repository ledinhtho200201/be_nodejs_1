const path = require('path');
const express = require('express') // commonjs

const configViewEngine = (app) => {
    console.log('>>>check dir: ', path.join('./src', 'public'))
    app.set('views', path.join('./src', 'views'))
    app.set('view engine', 'ejs')

    //config static files: image/css/js 
    app.use(express.static(path.join('./src', 'public')))
}

module.exports = configViewEngine;
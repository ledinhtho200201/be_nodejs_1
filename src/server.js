require('dotenv').config()

const express = require('express') // commonjs


const app = express()  //app express
const port = process.env.PORT //port => hardcode
const hostname = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')

// config template engine
configViewEngine(app);

//declare route
app.use('/web', webRoutes);

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
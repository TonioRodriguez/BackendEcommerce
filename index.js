const app = require ('./src/app')

require('./src/db/mongodb')
require('dotenv').config()


const port = process.env.PORT || 3000

app.listen ( port, (req, res) => {
    console.log('Servidor activo')
})
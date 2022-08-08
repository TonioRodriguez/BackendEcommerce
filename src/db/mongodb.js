const mongoose = require('mongoose');

const url = process.env.MONGO_URL

mongoose.connect(url, {}, () => {
  console.log('Base de datos conectada')
})


module.exports = mongoose  
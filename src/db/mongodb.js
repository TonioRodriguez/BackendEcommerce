const mongoose = require('mongoose');

const url = process.env.MONGO_URL

mongoose.connect(url, {}, () => {
  console.log('-------------------------')
  console.log('Base de datos conectada')
  console.log('-------------------------')
})

module.exports = mongoose
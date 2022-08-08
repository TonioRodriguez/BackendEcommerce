const express = require('express');
const cors = require('cors');
const app = express();
const apiRouter = require('./apis')

app.use(express.json());
app.use('/api/v1', apiRouter)

app.use(cors());

app.use('/', (req, res) => {
  res.send({ message: 'esto funciona' })
})

module.exports = app
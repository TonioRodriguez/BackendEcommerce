const express = require('express');
const cors = require('cors');
const apiRouter = require('./apis')
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/v1', apiRouter)

app.use('/', (req, res) => {
  res.send({ message: 'esto funciona' })
})

module.exports = app
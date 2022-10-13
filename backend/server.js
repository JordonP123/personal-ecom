const express = require('express')

const server = express()
const products = require('./routes/products-route')
const cors = require('cors')

server.use(express.json())
server.use(cors())
server.use('/api/products', products)
server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
      message: err.message,
      stack: err.stack,
    });
  });
  

module.exports = server
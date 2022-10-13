const express = require('express')
const helpers = require('../models/products-model')

const router = express.Router()

router.get('/', async(req, res, next) => {
    try{
        const products = await helpers.getProducts(req.body)
        res.json(products)
    } catch (err){
        res.status(500).json({ message: err.message})
    }
})

module.exports = router
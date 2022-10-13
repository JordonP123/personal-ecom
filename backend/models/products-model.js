const db = require('../data/db-config')

function getProducts(){
    return db('products')
}

module.exports = {
    getProducts
}
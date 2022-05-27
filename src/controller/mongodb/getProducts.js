const Product = require('../model/Product')

function getProducts(){
    return Product.find().sort({price: -1});
}
module.exports = getProducts
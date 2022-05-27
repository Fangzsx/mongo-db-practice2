const Product = require('../model/Product')

function getProducts(){
    return Product.find();
}
module.exports = getProducts
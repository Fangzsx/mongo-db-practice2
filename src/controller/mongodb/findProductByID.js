const Product = require('../model/Product');

function findProductByID(id){
    return Product.findById(id);
}

module.exports = findProductByID;
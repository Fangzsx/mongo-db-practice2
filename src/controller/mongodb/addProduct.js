function addProduct(product){
    console.log(`${product.productName} was added.`);
    return product.save()
}

module.exports = addProduct
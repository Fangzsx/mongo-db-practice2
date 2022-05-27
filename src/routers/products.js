const express = require('express');
const router = express.Router();
const Product = require('../model/Product')
const addProduct = require('../controller/mongodb/addProduct');


router.get('/', (req, res) => {
    res.status(200).send('showing all products');
})

router.get('/add', (req, res) => {
    const product = new Product({
        productName : 'item 2',
        price : 2000,
        stockQuantity : 100,
        description : 'some description'
    });
    addProduct(product)
        .then(() => {
            res.send(product);
            console.log('added');
        })
        .catch((error) => {
            console.log(error);
        })

});

module.exports = router;
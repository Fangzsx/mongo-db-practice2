const express = require('express');
const router = express.Router();
const Product = require('../controller/model/Product')
const addProduct = require('../controller/mongodb/addProduct');
const getProduct = require('../controller/mongodb/getProducts');

router.get('/', (req, res) => {
    getProduct()
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((error) => {
            res.status(500).send(error);
        })
})

router.get('/add', (req, res) => {
    const product = new Product({
        productName : 'item 4',
        price : 4000,
        stockQuantity : 400,
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
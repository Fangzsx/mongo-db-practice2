const express = require('express');
const router = express.Router();
const Product = require('../controller/model/Product')
const addProduct = require('../controller/mongodb/addProduct');
const getProduct = require('../controller/mongodb/getProducts');
const findProductByID = require('../controller/mongodb/findProductByID');

router.get('/', (req, res) => {
    getProduct()
        .then((result) => {
        res.status(200).send(result);
    })
        .catch((error) => {
            res.status(500).send(error);
        })
})

router.get('/find-product', (req, res) => {
    findProductByID('62903ed129d3be0f8bbb748f')
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

router.get('/add', (req, res) => {
    const product = new Product({
        productName : 'item 6',
        price : 6000,
        stockQuantity : 600,
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

})

module.exports = router;
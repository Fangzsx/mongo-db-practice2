const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./routers/products');

const dbURI = 'mongodb+srv://fangzsx:123123123@cluster0.qtiygwl.mongodb.net/productsdb?retryWrites=true&w=majority';

mongoose.connect(dbURI)
    .then(() => {
        app.listen(3000);
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log(`an unexpected error occurred. ${error.body.message}`);
    });

app.get('/', (req, res) => {
    res.status(200).send('homepage');
})

app.use('/products', productsRouter);

















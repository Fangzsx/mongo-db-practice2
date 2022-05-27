const express = require('express');
const mongoose = require('mongoose');
const app = express();

const dbURI = 'mongodb+srv://fangzsx:123123123@cluster0.qtiygwl.mongodb.net/?retryWrites=true&w=majority';

app.get('/', (req, res) => {
    res.send('homepage');
})

mongoose.connect(dbURI)
    .then( () => {
        const server = app.listen(3000 , () => {
            console.log(`mongo db connected, listening with port ${server.address().port}`)
        });
    })


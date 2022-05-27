const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    productName : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    stockQuantity: {
        type : Number,
        required : true
    },
    description :{
        type : String,
        required : false
    }
})

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
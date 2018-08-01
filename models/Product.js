var mongoose = require('mongoose');
var moment = require('moment');

var productSchema = new mongoose.Schema({
    productName: {type: String, default: ''},
    price: {type: Number, default: 0},
    category: {type: String, default: ''},
    description: {type: String, default: ''},
    productPicture: {type: String, default: ''},
    createdTimeStamp: {type: String, default: () => moment().format("dddd, MMMM Do YYYY, h:mm:ss a")} 
});

module.exports = mongoose.model('product', productSchema);
var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res, next) {

  productController.getAllProducts({})
    .then((products) => {
      res.render('index', { products: products });
    })
    .catch((error) => {
      res.render('error', {message: 'Error', error: error});
    });
});

module.exports = router;

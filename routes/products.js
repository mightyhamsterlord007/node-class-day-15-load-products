var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');

/* GET Product page. */
router.get('/', function(req, res, next) {
  
  productController.getAllProducts({})
    .then( products => {
      res.json({
        message: 'success',
        data: products
      });
      return;
    })
    .catch(error => {
      res.json({
        message: 'Failure',
        data: error
      });
      return;
    });

});

router.post('/createproduct', function(req, res, next) {

  productController.createProduct(req.body)
    .then(product => {
      res.json({
        message: 'Success',
        data: product
      });
      return;
    })
    .catch(error => {
      res.json({
        message: 'Failure',
        data: error
      });
      return;
    })

});

module.exports = router;

var express = require('express');
var router = express.Router();
var productController = require('../controllers/productController');
var multer = require('multer');
var uuid = require('uuid');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/product-pictures');
  },
  filename: function(req, file, cb) {
    let profileID = uuid() + '.jpg';
    cb(null, profileID);
  }
})

var upload = multer({storage: storage});
/* GET Product page. */

router.get('/createproduct', function(req, res, next) {
  res.render('product-form');
});

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

router.post('/createproduct', upload.single('productPicture'), function(req, res, next) {
  let productPicture
  if (req.file) {
    productPicture = req.file.filename;
  } else {
    productPicture = 'noimage.jpg';
  }

  req.body.productPicture = productPicture;
  console.log(req.body)
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

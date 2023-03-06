const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { addProducts,id,updateProducts} = require('../validation/Products');

router.post('/addProducts', validator.body(addProducts), productsController.addProducts);
router.get('/getAllProducts', productsController.getAllProducts);
router.get('/getProductsbyId', validator.query(id),productsController.getProductsbyId);
router.delete('/deleteProductsbyId', validator.query(id), productsController.deleteProductsbyId);
router.put('/upadteProducts', validator.body(updateProducts), productsController.updateProducts);
module.exports = router;
const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const productsVMSController = require('../controllers/productsVMSController');
const { addProductsVMS,id,updateProductsVMS} = require('../validation/productsVMS');

router.post('/addProductsVMS', validator.body(addProductsVMS), productsVMSController.addProductsVMS);
router.get('/getAllProductsVMS', productsVMSController.getAllProductsVMS);
router.get('/getProductsVMSbyId', validator.query(id),productsVMSController.getProductsVMSbyId);
router.delete('/deleteProductsVMSbyId', validator.query(id), productsVMSController.deleteProductsVMSbyId);
router.put('/updateProductsVMS', validator.body(updateProductsVMS), productsVMSController.updateProductsVMS);
module.exports = router;
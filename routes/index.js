const express = require('express');

const contactusRoots = require('./contactus');
const partnerRoots = require('./partner');
const adminRoots = require('./admin');
const careerRoots = require('./career');
const productsRoots = require('./products');
const productsVMSRoots = require('./productsVMS');


const router = express.Router();


router.use('/contactus', contactusRoots);
router.use('/partner', partnerRoots);
router.use('/admin', adminRoots);
router.use('/career',careerRoots);
router.use('/products',productsRoots);
router.use('/productsVMS',productsVMSRoots);
module.exports = router;

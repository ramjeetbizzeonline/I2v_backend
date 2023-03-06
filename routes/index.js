const express = require('express');
const blogCategoryRoots = require('./blogCategory');
const blogDataRoots = require('./blogData');
const contactusRoots = require('./contactus');
const partnerRoots = require('./partner');
const adminRoots = require('./admin');
const careerRoots = require('./career');
const productsRoots = require('./products');


const router = express.Router();


router.use('/blogCategory', blogCategoryRoots);
router.use('/blogData', blogDataRoots);
router.use('/contactus', contactusRoots);
router.use('/partner', partnerRoots);
router.use('/admin', adminRoots);
router.use('/career',careerRoots);
router.use('/products',productsRoots);
module.exports = router;

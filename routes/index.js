const express = require('express');
const blogCategoryRoots = require('./blogCategory');
const blogDataRoots = require('./blogData');
const contactusRoots = require('./contactus');
const partnerRoots = require('./partner');
const adminRoots = require('./admin');
const router = express.Router();


router.use('/blogCategory', blogCategoryRoots);
router.use('/blogData', blogDataRoots);
router.use('/contactus', contactusRoots);
router.use('/partner', partnerRoots);
router.use('/admin', adminRoots);

module.exports = router;
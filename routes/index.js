const express = require('express');

const contactusRoots = require('./contactus');
const partnerRoots = require('./partner');
const adminRoots = require('./admin');
const router = express.Router();


router.use('/contactus', contactusRoots);
router.use('/partner', partnerRoots);
router.use('/admin', adminRoots);

module.exports = router;

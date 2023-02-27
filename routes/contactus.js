const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();
const authentication = require('../middlewares/jwtToken');
const ContactusController = require('../controllers/contactusController');
const { addContactus,id,filters} = require('../validation/contactus');

router.post('/addContactus',validator.body(addContactus),ContactusController.addContactus)
router.get('/getAllContactus',validator.query(filters),authentication, ContactusController.getContactus);
router.get('/getContactusById', authentication, validator.query(id),ContactusController.getContactusById);
router.delete('/deleteContactus', validator.body(id),authentication, ContactusController.deleteContactus);
module.exports = router;

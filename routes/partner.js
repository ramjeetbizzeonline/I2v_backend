const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();
const authentication = require('../middlewares/jwtToken');
const partnerController = require('../controllers/partnerController');
const { addPartner,updatePartner,id,filters} = require('../validation/partner');

router.post('/addPartner',validator.body(addPartner),authentication,partnerController.addPartner)
router.get('/getAllPartner',validator.query(filters),authentication, partnerController.getAllPartner);
router.get('/getPartnerById', authentication, validator.query(id),partnerController.getPartnerById);
router.delete('/deletePartner', validator.body(id),authentication, partnerController.deletePartner);
router.put('/updatePartner', validator.body(updatePartner),authentication, partnerController.updatePartner);
module.exports = router;

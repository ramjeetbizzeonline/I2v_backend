const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const careerController = require('../controllers/careerController');
const { addCareer,id,updateCareer} = require('../validation/career');

router.post('/addCareer', validator.body(addCareer), careerController.addCareer);
router.get('/getCareerAll', careerController.getCareerAll);
router.get('/getCareerbyId', validator.query(id),careerController.getCareerbyId);
router.delete('/deleteCareerbyId', validator.query(id), careerController.deleteCareerbyId);
router.put('/upadtecareer', validator.body(updateCareer), careerController.updateCareer);
module.exports = router;
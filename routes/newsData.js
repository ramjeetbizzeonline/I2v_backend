const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const newsDataController = require('../controllers/newsDataController');
const { addnewsData,id,updatenewsData,filters} = require('../validation/newsData');

router.post('/addnewsData', validator.body(addnewsData), authentication, newsDataController.addnewsData);
router.get('/getnewsData',validator.query(filters), newsDataController.getnewsData);
router.get('/getnewsDataById', validator.query(id),newsDataController.getnewsDataById);
router.delete('/deletenewsData', validator.body(id),authentication, newsDataController.deletenewsData);
router.put('/upadtenewsData', validator.body(updatenewsData),authentication, newsDataController.updatenewsData);
module.exports = router;

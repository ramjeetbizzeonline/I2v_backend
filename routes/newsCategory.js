const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const newsCategoryController = require('../controllers/newsCategoryController');
const { addnewsCategory,id,updatenewsCategory,filters} = require('../validation/newsCategory');

router.post('/addnewsCategory', validator.body(addnewsCategory), authentication, newsCategoryController.addnewsCategory);
router.get('/getnewsCategory',validator.query(filters), newsCategoryController.getnewsCategory);
router.get('/getnewsCategoryById', authentication, validator.query(id),newsCategoryController.getnewsCategoryById);
router.delete('/deletenewsCategory', validator.body(id),authentication, newsCategoryController.deletenewsCategory);
router.put('/upadtenewsCategory', validator.body(updatenewsCategory),authentication, newsCategoryController.updatenewsCategory);
module.exports = router;

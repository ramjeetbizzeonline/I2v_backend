const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const blogDataController = require('../controllers/blogDataController');
const { addBlogData,id,updateBlogData,filters} = require('../validation/blogData');

router.post('/addBlogData', validator.body(addBlogData), authentication, blogDataController.addBlogData);
router.get('/getBlogData',validator.query(filters), blogDataController.getBlogData);
router.get('/getBlogDataById', validator.query(id),blogDataController.getBlogDataById);
router.delete('/deleteBlogData', validator.body(id),authentication, blogDataController.deleteBlogData);
router.put('/upadteBlogData', validator.body(updateBlogData),authentication, blogDataController.updateBlogData);
module.exports = router;

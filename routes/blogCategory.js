const express = require('express');
const validator = require('express-joi-validation').createValidator({});
const authentication = require('../middlewares/jwtToken');
const router = express.Router();
const blogCategoryController = require('../controllers/blogCategoryController');
const { addBlogCategory,id,updateBlogCategory,filters} = require('../validation/blogCategory');

router.post('/addBlogCategory', validator.body(addBlogCategory), authentication, blogCategoryController.addBlogCategory);
router.get('/getBlogCategory',validator.query(filters), blogCategoryController.getBlogCategory);
router.get('/getBlogCategoryById', authentication, validator.query(id),blogCategoryController.getBlogCategoryById);
router.delete('/deleteBlogCategory', validator.body(id),authentication, blogCategoryController.deleteBlogCategory);
router.put('/upadteBlogCategory', validator.body(updateBlogCategory),authentication, blogCategoryController.updateBlogCategory);
module.exports = router;

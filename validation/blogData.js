const Joi = require('joi');


exports.addBlogData = Joi.object().keys({
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().required(),
    longDescription: Joi.string().required(),
    author:Joi.string().required(),
});

exports.id = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});

exports.updateBlogData = Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().required(),
    longDescription: Joi.string().required(),
    author:Joi.string().required(),
});


exports.filters = Joi.object().keys({
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').optional(),
    pageSize:Joi.string().optional().default(500),
    pageNo:Joi.string().optional().default(1),
})



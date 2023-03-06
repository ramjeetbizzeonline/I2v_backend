const Joi = require('joi');


exports.addnewsData = Joi.object().keys({
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().optional(),
    longDescription: Joi.string().optional(),
    thirdPartyUrl: Joi.string().optional(),
    author:Joi.string().optional(),
});
exports.id = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});
exports.updatenewsData = Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    title: Joi.string().required(),
    shortDescription: Joi.string().optional(),
    longDescription: Joi.string().optional(),
    thirdPartyUrl: Joi.string().optional(),
    author:Joi.string().optional(),
});


exports.filters = Joi.object().keys({
    categoryId:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').optional(),
    pageSize:Joi.string().optional().default(500),
    pageNo:Joi.string().optional().default(1),
})



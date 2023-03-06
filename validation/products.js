const Joi = require('joi');
exports.addProducts = Joi.object().keys({
    category: Joi.string().required(),
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description:Joi.string().required(),
    highlights:Joi.string().required(),
    advantages:Joi.string().required(),

});
exports.id = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});

exports.updateProducts = Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    category: Joi.string().required(),
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description:Joi.string().required(),
    highlights:Joi.string().required(),
    advantages:Joi.string().required()
});
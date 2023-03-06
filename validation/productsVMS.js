const Joi = require('joi');
exports.addProductsVMS= Joi.object().keys({
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description:Joi.string().required(),
    highlights:Joi.string().required(),
    basicEditiondescription:Joi.string().required(),
    professionalEditiondescription:Joi.string().required(),
    enterpriseEditiondescription:Joi.string().required()

});
exports.id = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});

exports.updateProductsVMS= Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    name: Joi.string().required(),
    slug: Joi.string().required(),
    description:Joi.string().required(),
    highlights:Joi.string().required(),
    basicEditiondescription:Joi.string().required(),
    professionalEditiondescription:Joi.string().required(),
    enterpriseEditiondescription:Joi.string().required()
});
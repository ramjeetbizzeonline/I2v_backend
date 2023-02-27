const Joi = require('joi');

exports.addContactus = Joi.object().keys({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    phoneNumber:Joi.string().required(),
    email:Joi.string().email().required(),
    msg:Joi.string().optional().allow('')
});



exports.id = Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});


exports.filters = Joi.object().keys({
    pageSize:Joi.string().optional().default(500),
    pageNo:Joi.string().optional().default(1),
});
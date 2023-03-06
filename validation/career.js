const Joi = require('joi');
exports.addCareer = Joi.object().keys({
    jobTitle: Joi.string().required(),
    enterSlug: Joi.string().required(),
    JobID: Joi.string().required(),
    shortDescription:Joi.string().required(),
    rolesResponsibilities:Joi.string().required(),
    requiredSkills:Joi.string().required(),

});
exports.id = Joi.object().keys({
    id: Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
});

exports.updateCareer = Joi.object().keys({
    id:Joi.string().regex(/^[0-9a-fA-F]{24}$/).message('must be an oid').required(),
    jobTitle: Joi.string().required(),
    enterSlug: Joi.string().required(),
    JobID: Joi.string().required(),
    shortDescription:Joi.string().required(),
    rolesResponsibilities:Joi.string().required(),
    requiredSkills:Joi.string().required(),
});
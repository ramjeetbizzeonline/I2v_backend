const Jwt = require('jsonwebtoken');
const { toLower, size } = require('lodash');
const moment = require('moment');
const { career } = require('../models');
const commonHelper = require('../helpers/common');
const utils = require('../utils/apiHelper');
const env = require('../config');
const privateKey = env.JWTOKEN;
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const logger = require('../helpers/logger');

exports.updateCareer = async (payloadData, res) =>{
    const pararms = payloadData.body;
    const data = await utils.updateData(career, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success updated', data, res);
};
exports.addCareer = async (payloadData, res) => {
    const pararms = payloadData.body;
    const data = await utils.saveData(career, pararms);
    return sendSuccessMessage('success', {}, res);
};
exports.deleteCareerbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    await utils.updateData(career, { _id: pararms.id }, { isDeleted: true }, {});
    return sendSuccessMessage('success', {}, res);
};
exports.getCareerAll = async (payloadData, res) => {
    let data = await utils.getData(career, {
        query: { isDeleted: { $ne: true },
    }});
    return sendSuccessMessage('success', data, res);
}; 
exports.getCareerbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    const data = await utils.getData(career, {
        query: { _id: pararms.id, isDeleted: false }
      
    });
    return sendSuccessMessage('success', data, res);
}; 
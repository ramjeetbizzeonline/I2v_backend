const { Contactus } = require('../models');
const utils = require('../utils/apiHelper');
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const { toLower, size } = require('lodash');


exports.addContactus = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(Contactus, {
        query: { firstName: pararms.firstName ,isDeleted:false},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist', {}, res);
    await utils.saveData(Contactus, pararms);
    return sendSuccessMessage('success', {}, res);
};

exports.getContactus = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(Contactus, {
        query: {
            isDeleted:false
        },
        sort:{_id:-1},
        pageSize:pararms.pageSize,
        pageNo:pararms.pageNo
    });
    if (!size(data)) {
        return sendErorMessage('No Data Found ', {}, res);
    } else {
        return sendSuccessMessage('success', data, res);
    }
};


exports.getContactusById = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(Contactus, {
        query: {
            _id: pararms.id,
            isDeleted: false
        }
    });
    if (!size(data)) {
        return sendErorMessage('No Data Found ', {}, res);
    } else {
        return sendSuccessMessage('success', data, res);
    }
};

exports.deleteContactus = async (payloadData, res) => {
    const pararms = payloadData.body;
    await utils.updateData(Contactus, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};


exports.updateContactus = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(Contactus, {
        query: { name: pararms.name ,isDeleted:false,_id: {$ne: pararms.id}},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist', {}, res);
    await utils.updateData(Contactus, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success', {}, res);
};


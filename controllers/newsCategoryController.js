const { newsCategory } = require('../models');
const utils = require('../utils/apiHelper');
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const { toLower, size } = require('lodash');



exports.addnewsCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(newsCategory, {
        query: { name: pararms.name , isDeleted:false},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist',{} , res);
    await utils.saveData(newsCategory, pararms);
    return sendSuccessMessage('success', {}, res);
};

exports.getnewsCategory = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(newsCategory, {
        query: { isDeleted: false },
        sort:{_id:-1},
        pageSize:pararms.pageSize,
        pageNo:pararms.pageNo
    });
    return sendSuccessMessage('success', data, res);
};

exports.getnewsCategoryById = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(newsCategory, {
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

exports.deletenewsCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    await utils.updateData(newsCategory, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};


exports.updatenewsCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(newsCategory, {
        query: { name: pararms.name ,isDeleted:false,_id: {$ne: pararms.id}},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist',{} , res);
    await utils.updateData(newsCategory, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success', {}, res);
};


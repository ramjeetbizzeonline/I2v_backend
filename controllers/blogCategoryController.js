const { BlogCategory } = require('../models');
const utils = require('../utils/apiHelper');
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const { toLower, size } = require('lodash');



exports.addBlogCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(BlogCategory, {
        query: { name: pararms.name , isDeleted:false},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist',{} , res);
    await utils.saveData(BlogCategory, pararms);
    return sendSuccessMessage('success', {}, res);
};

exports.getBlogCategory = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(BlogCategory, {
        query: { isDeleted: false },
        sort:{_id:-1},
        pageSize:pararms.pageSize,
        pageNo:pararms.pageNo
    });
    return sendSuccessMessage('success', data, res);
};

exports.getBlogCategoryById = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(BlogCategory, {
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

exports.deleteBlogCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    await utils.updateData(BlogCategory, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};


exports.updateBlogCategory = async (payloadData, res) => {
    const pararms = payloadData.body;
    const checkNameAlreadyExist = await utils.getData(BlogCategory, {
        query: { name: pararms.name ,isDeleted:false,_id: {$ne: pararms.id}},
    });
    if (size(checkNameAlreadyExist)) return sendErorMessage('Name Already Exist',{} , res);
    await utils.updateData(BlogCategory, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success', {}, res);
};


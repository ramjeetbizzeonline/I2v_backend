const Jwt = require('jsonwebtoken');
const { toLower, size } = require('lodash');
const moment = require('moment');
const {products} = require('../models');
const commonHelper = require('../helpers/common');
const utils = require('../utils/apiHelper');
const env = require('../config');
const privateKey = env.JWTOKEN;
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const logger = require('../helpers/logger');
let S3 = require('../helpers/s3/index')({
    aws_s3: {
        "accessKey": env.S3_ACCESSKEYID,
        "accessKeyId": env.S3_ACCESSKEYID,
        "secretAccessKey": env.S3_SECRETACCESSKEY,
        "region": "us-east-1",
        "bucket": "i2vbucket"
    }
});
exports.addProducts = async (payloadData, res) =>{
    if (!payloadData || !payloadData.files || !payloadData.files.uploadBannerImage) {
        return sendErorMessage('No uploadBannerImage File is present', {}, res);
    }   
    let uploadBannerImage = payloadData.files.uploadBannerImage;
    let key = S3.genKeyFromFilename(`Products`, uploadBannerImage.name || 'jpg', []);
    pararms["uploadBannerImageUrl"] = await S3.uploadFile(key, uploadBannerImage.data, { publicRead: true, mimeType: uploadBannerImage.mimetype }, 1);

    const data = await utils.saveData(products, pararms);
    return sendSuccessMessage('success Save products', {}, res);
};
exports.updateProducts= async (payloadData, res) =>{
    const pararms = payloadData.body;
    if (!payloadData || !payloadData.files || !payloadData.files.uploadBannerImage) {
        return sendErorMessage('No uploadBannerImage File is present', {}, res);
    }   
    let uploadBannerImage = payloadData.files.uploadBannerImage;
    let key = S3.genKeyFromFilename(`Products`, uploadBannerImage.name || 'jpg', []);
    pararms["uploadBannerImageUrl"] = await S3.uploadFile(key, uploadBannerImage.data, { publicRead: true, mimeType: uploadBannerImage.mimetype }, 1);

    const data = await utils.updateData(products, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success updated products', data, res);
};
exports.getAllProducts = async (payloadData, res) => {
    const data = await utils.getData(products, {
        query: { isDeleted: false },
    });
    return sendSuccessMessage('success', data, res);
}; 
exports.getProductsbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    const data = await utils.getData(products, {
        query: { _id: pararms.id, isDeleted: false }
    });
    return sendSuccessMessage('success', data, res);
};
exports.deleteProductsbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    await utils.updateData(products, { _id: pararms.id }, { isDeleted: true }, {});
    return sendSuccessMessage(' Deleted success', {}, res);
};
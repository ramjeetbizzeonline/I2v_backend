const Jwt = require('jsonwebtoken');
const { toLower, size } = require('lodash');
const moment = require('moment');
const {productsVMS} = require('../models');
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
exports.addProductsVMS = async (payloadData, res) =>{
    if (!payloadData || !payloadData.files || !payloadData.files.uploadBannerImage) {
        return sendErorMessage('No uploadBannerImage File is present', {}, res);
    }   
    if (payloadData && payloadData.files && payloadData.files.uploadBannerImage) {
        let uploadBannerImage = payloadData.files.uploadBannerImage;
        let key = S3.genKeyFromFilename(`productsVMS/uploadBannerImage`, uploadBannerImage.name || 'jpg', []);
        pararms["uploadBannerImage"] = await S3.uploadFile(key, uploadBannerImage.data, { publicRead: true, mimeType: uploadBannerImage.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.basicEditionFile) {
        let basicEditionFile = payloadData.files.basicEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/basicEditionFile`, basicEditionFile.name || 'jpg', []);
        pararms["basicEditionFile"] = await S3.uploadFile(key, basicEditionFile.data, { publicRead: true, mimeType: basicEditionFile.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.professionalEditionFile) {
        let professionalEditionFile = payloadData.files.professionalEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/professionalEditionFile`, professionalEditionFile.name || 'jpg', []);
        pararms["professionalEditionFile"] = await S3.uploadFile(key, professionalEditionFile.data, { publicRead: true, mimeType: professionalEditionFile.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.enterpriseEditionFile) {
        let enterpriseEditionFile = payloadData.files.enterpriseEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/enterpriseEditionFile`, enterpriseEditionFile.name || 'jpg', []);
        pararms["enterpriseEditionFile"] = await S3.uploadFile(key, enterpriseEditionFile.data, { publicRead: true, mimeType: enterpriseEditionFile.mimetype }, 1);
    }
    const data = await utils.saveData(productsVMS, pararms);
    return sendSuccessMessage('success Save productsVMS', {}, res);
};
exports.updateProductsVMS= async (payloadData, res) =>{
    const pararms = payloadData.body;
    if (!payloadData || !payloadData.files || !payloadData.files.uploadBannerImage) {
        return sendErorMessage('No uploadBannerImage File is present', {}, res);
    }   
    if (payloadData && payloadData.files && payloadData.files.uploadBannerImage) {
        let uploadBannerImage = payloadData.files.uploadBannerImage;
        let key = S3.genKeyFromFilename(`productsVMS/uploadBannerImage`, uploadBannerImage.name || 'jpg', []);
        pararms["uploadBannerImage"] = await S3.uploadFile(key, uploadBannerImage.data, { publicRead: true, mimeType: uploadBannerImage.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.basicEditionFile) {
        let basicEditionFile = payloadData.files.basicEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/basicEditionFile`, basicEditionFile.name || 'jpg', []);
        pararms["basicEditionFile"] = await S3.uploadFile(key, basicEditionFile.data, { publicRead: true, mimeType: basicEditionFile.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.professionalEditionFile) {
        let professionalEditionFile = payloadData.files.professionalEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/professionalEditionFile`, professionalEditionFile.name || 'jpg', []);
        pararms["professionalEditionFile"] = await S3.uploadFile(key, professionalEditionFile.data, { publicRead: true, mimeType: professionalEditionFile.mimetype }, 1);
    }
    if (payloadData && payloadData.files && payloadData.files.enterpriseEditionFile) {
        let enterpriseEditionFile = payloadData.files.enterpriseEditionFile;
        let key = S3.genKeyFromFilename(`productsVMS/enterpriseEditionFile`, enterpriseEditionFile.name || 'jpg', []);
        pararms["enterpriseEditionFile"] = await S3.uploadFile(key, enterpriseEditionFile.data, { publicRead: true, mimeType: enterpriseEditionFile.mimetype }, 1);
    }
    const data = await utils.updateData(productsVMS, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success updated productsVMS', data, res);
};
exports.getAllProductsVMS = async (payloadData, res) => {
    const data = await utils.getData(productsVMS, {
        query: { isDeleted: false },
    });
    return sendSuccessMessage('success', data, res);
}; 
exports.getProductsVMSbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    const data = await utils.getData(productsVMS, {
        query: { _id: pararms.id, isDeleted: false }
    });
    return sendSuccessMessage('success', data, res);
};
exports.deleteProductsVMSbyId = async (payloadData, res) => {
    const pararms = payloadData.query;
    await utils.updateData(productsVMS, { _id: pararms.id }, { isDeleted: true }, {});
    return sendSuccessMessage(' Deleted success', {}, res);
};
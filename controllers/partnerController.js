const { Partner  } = require('../models');
const utils = require('../utils/apiHelper');
const { sendErorMessage, sendSuccessMessage } = require('../helpers/sendResponse');
const { toLower, size } = require('lodash');
const env = require('../config');
let S3 = require('../helpers/s3/index')({
    aws_s3: {
        "accessKey": env.S3_ACCESSKEYID,
        "accessKeyId": env.S3_ACCESSKEYID,
        "secretAccessKey": env.S3_SECRETACCESSKEY,
        "region": "us-east-1",
        "bucket": "i2vbucket"
    }
});
exports.addPartner = async (payloadData, res) => {
    const pararms = payloadData.body;
    if (!payloadData || !payloadData.files || !payloadData.files.image) {
        return sendErorMessage('No Image File is present', {}, res);
    }   
    let image = payloadData.files.image;
    let key = S3.genKeyFromFilename(`partner`, image.name || 'jpg', []);
    pararms["imageUrl"] = await S3.uploadFile(key, image.data, { publicRead: true, mimeType: image.mimetype }, 1);

    await utils.saveData(Partner, pararms);
    return sendSuccessMessage('success', {}, res);
};
exports.getAllPartner = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(Partner, {
        query: { isDeleted: false},
        sort:{_id:-1},
        pageSize:pararms.pageSize,
        pageNo:pararms.pageNo
    });
    return sendSuccessMessage('success', data, res);
};
exports.getPartnerById = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(Partner, {
        query: {
            _id: pararms.id,
             isDeleted: { $ne: true } 
        }
    });
    if (!size(data)) {
        return sendErorMessage('No Data Found ', {}, res);
    } else {
        return sendSuccessMessage('success', data, res);
    }
};
exports.deletePartner = async (payloadData, res) => {
    const pararms = payloadData.body;
    await utils.updateData(Partner, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};
exports.updatePartner = async (payloadData, res) => {
    const pararms = payloadData.body;
    if (payloadData && payloadData.files && payloadData.files.image) {       
        let image = payloadData.files.image;
        let key = S3.genKeyFromFilename(`partner`, image.name || 'jpg', []);
        pararms["imageUrl"] = await S3.uploadFile(key, image.data, { publicRead: true, mimeType: image.mimetype }, 1);    
    }
    await utils.updateData(Partner, { _id: pararms.id },pararms);
    return sendSuccessMessage('success', {}, res);
};

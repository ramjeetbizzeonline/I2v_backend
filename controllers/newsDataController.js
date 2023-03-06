const { newsData } = require('../models');
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


exports.addnewsData = async (payloadData, res) => {
    if (!payloadData || !payloadData.files || !payloadData.files.smallImage) {
        return sendErorMessage('No Short Image File is present', {}, res);
    }
    if (!payloadData || !payloadData.files || !payloadData.files.largeImage) {
        return sendErorMessage('No Large Image File is present', {}, res);
    }
    const pararms = payloadData.body;
    // let smallImageName = Math.round(Math.random() * 1000000000000) + payloadData.files.smallImage.name;
    // await payloadData.files.smallImage.mv('./files/' + smallImageName);
    // pararms.smallImageUrl = smallImageName;
    let smallImage = payloadData.files.smallImage;
    let key = S3.genKeyFromFilename(`news/smallImages`, smallImage.name || 'jpg', []);
    pararms["smallImageUrl"] = await S3.uploadFile(key, smallImage.data, { publicRead: true, mimeType: smallImage.mimetype }, 1);

    // let largeImageName = Math.round(Math.random() * 1000000000000) + payloadData.files.largeImage.name;
    // await payloadData.files.largeImage.mv('./files/' + largeImageName);
    // pararms.largeImageUrl = largeImageName;
    let largeImage = payloadData.files.largeImage;
    key = S3.genKeyFromFilename(`news/largeImages`, largeImage.name || 'jpg', []);
    pararms["largeImageUrl"] = await S3.uploadFile(key, largeImage.data, { publicRead: true, mimeType: largeImage.mimetype }, 1);

    await utils.saveData(newsData, pararms);
    return sendSuccessMessage('success', {}, res);
};

exports.getnewsData = async (payloadData, res) => {
    const pararms = payloadData.query;
    let query = { isDeleted: false };
    if (pararms.categoryId) {
        query.categoryId = pararms.categoryId
    }
    let data = await utils.getData(newsData, {
        query: query,
        sort: { _id: -1 },
        pageSize: pararms.pageSize,
        pageNo: pararms.pageNo
    });
    // for(let i=0;i<data.length;i++){
    //     data[i].smallImageUrl =  `http://${payloadData.hostname }:${env.PORT}/files/${data[i].smallImageUrl}`;
    //     data[i].largeImageUrl =  `http://${payloadData.hostname }:${env.PORT}/files/${data[i].largeImageUrl}`;
    // }
    return sendSuccessMessage('success', data, res);
};

exports.getnewsDataById = async (payloadData, res) => {
    const pararms = payloadData.query;
    let data = await utils.getData(newsData, {
        query: {
            _id: pararms.id,
            isDeleted: false
        }
    });
    data = data[0];
    // data.smallImageUrl =  `http://${payloadData.hostname }:${env.PORT}/files/${data.smallImageUrl}`;
    // data.largeImageUrl =  `http://${payloadData.hostname }:${env.PORT}/files/${data.largeImageUrl}`;
    if (!size(data)) {
        return sendErorMessage('No Data Found ', {}, res);
    } else {
        return sendSuccessMessage('success', data, res);
    }
};

exports.deletenewsData = async (payloadData, res) => {
    const pararms = payloadData.body;
    await utils.updateData(newsData, { _id: pararms.id }, { isDeleted: true });
    return sendSuccessMessage('success', {}, res);
};


exports.updatenewsData = async (payloadData, res) => {
    const pararms = payloadData.body;
    if (payloadData && payloadData.files && payloadData.files.smallImage) {
        // let smallImageName = Math.round(Math.random() * 1000000000000) + payloadData.files.smallImage.name;
        // await payloadData.files.smallImage.mv('./files/' + smallImageName);
        // pararms.smallImageUrl = smallImageName;
        let smallImage = payloadData.files.smallImage;
        let key = S3.genKeyFromFilename(`news/smallImages`, smallImage.name || 'jpg', []);
        pararms["smallImageUrl"] = await S3.uploadFile(key, smallImage.data, { publicRead: true, mimeType: smallImage.mimetype }, 1);

    }
    if (payloadData && payloadData.files && payloadData.files.largeImage) {
        // let largeImageName = Math.round(Math.random() * 1000000000000) + payloadData.files.largeImage.name;
        // await payloadData.files.largeImage.mv('./files/' + largeImageName);
        // pararms.largeImageUrl = largeImageName;
        let largeImage = payloadData.files.largeImage;
        let key = S3.genKeyFromFilename(`news/largeImages`, largeImage.name || 'jpg', []);
        pararms["largeImageUrl"] = await S3.uploadFile(key, largeImage.data, { publicRead: true, mimeType: largeImage.mimetype }, 1);

    }
    await utils.updateData(newsData, { _id: pararms.id }, pararms);
    return sendSuccessMessage('success', {}, res);
};


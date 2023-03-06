const mongoose = require('mongoose');
const { Schema } = mongoose;
const productsVMS = new Schema({
    uploadBannerImage: { type: String, default: null },
    category: { type: String, default: null },
    name: { type: String, default: null },
    slug:{ type: String, default: null },
    description:{ type: String, default: null },
    highlights:{ type: String, default: null },
    basicEditionFile:{ type: String, default: null },
    basicEditiondescription:{ type: String, default: null },
    professionalEditionFile:{ type: String, default: null },
    professionalEditiondescription:{ type: String, default: null },
    enterpriseEditionFile:{ type: String, default: null },
    enterpriseEditiondescription:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

productsVMS.set('toObject');
productsVMS.set('toJSON');
module.exports = mongoose.model('productsVMS', productsVMS);

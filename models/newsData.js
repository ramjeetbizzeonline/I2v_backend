const mongoose = require('mongoose');

const { Schema } = mongoose;

const newsDataSchema = new Schema({
    categoryId:{ type: Schema.ObjectId, ref: 'newscategory', default: null },
    title: { type: String, default: null },
    shortDescription: { type: String, default: null },
    longDescription: { type: String, default: null },
    smallImageUrl:{ type: String, default: null },
    largeImageUrl:{ type: String, default: null },
    thirdPartyUrl:{ type: String, default: null },
    author:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

newsDataSchema.set('toObject');
newsDataSchema.set('toJSON');
module.exports = mongoose.model('newsdata', newsDataSchema);

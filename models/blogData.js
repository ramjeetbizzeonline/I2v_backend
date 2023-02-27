const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogDataSchema = new Schema({
    categoryId:{ type: Schema.ObjectId, ref: 'blogcategory', default: null },
    title: { type: String, default: null },
    shortDescription: { type: String, default: null },
    longDescription: { type: String, default: null },
    smallImageUrl:{ type: String, default: null },
    largeImageUrl:{ type: String, default: null },
    author:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

blogDataSchema.set('toObject');
blogDataSchema.set('toJSON');
module.exports = mongoose.model('blogdata', blogDataSchema);

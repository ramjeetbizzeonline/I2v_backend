const mongoose = require('mongoose');
const { Schema } = mongoose;
const products = new Schema({
    uploadBannerImage: [{ type: String, default: null }],
    category: { type: String, default: null },
    name: { type: String, default: null },
    slug:{ type: String, default: null },
    description:{ type: String, default: null },
    highlights:{ type: String, default: null },
    advantages:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

products.set('toObject');
products.set('toJSON');
module.exports = mongoose.model('products', products);

const mongoose = require('mongoose');

const { Schema } = mongoose;
const newsCategorySchema = new Schema({
    name: { type: String, default: null },
    description: { type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

newsCategorySchema.set('toObject');
newsCategorySchema.set('toJSON');
module.exports = mongoose.model('newscategory', newsCategorySchema);

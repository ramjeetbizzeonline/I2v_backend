const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogCategorySchema = new Schema({
    name: { type: String, default: null },
    description: { type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

blogCategorySchema.set('toObject');
blogCategorySchema.set('toJSON');
module.exports = mongoose.model('blogcategory', blogCategorySchema);

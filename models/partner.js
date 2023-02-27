const mongoose = require('mongoose');

const { Schema } = mongoose;

const partnerSchema = new Schema({
    title:{ type: String, default: null },
    imageUrl:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

partnerSchema.set('toObject');
partnerSchema.set('toJSON');
module.exports = mongoose.model('partner', partnerSchema);

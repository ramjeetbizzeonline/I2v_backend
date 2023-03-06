const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactusSchema = new Schema({
    firstName:{ type: String, default: null },
    lastName:{ type: String, default: null },
    phoneNumber:{ type: String, default: null },
    email:{ type: String, default: null },
    msg:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false },
}, {
    timestamps: true,
});

contactusSchema.set('toObject');
contactusSchema.set('toJSON');
module.exports = mongoose.model('contactus', contactusSchema);

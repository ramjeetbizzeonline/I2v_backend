const mongoose = require('mongoose');
const { Schema } = mongoose;
const career = new Schema({
    jobTitle: { type: String, default: null },
    enterSlug: { type: String, default: null },
    JobID: { type: String, default: null },
    shortDescription:{ type: String, default: null },
    rolesResponsibilities:{ type: String, default: null },
    requiredSkills:{ type: String, default: null },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true,
});

career.set('toObject');
career.set('toJSON');
module.exports = mongoose.model('career', career);

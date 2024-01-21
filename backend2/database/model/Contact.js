const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

})

const contact = mongoose.model('Contact', messageSchema) || mongoose.models.contact

module.exports = contact;
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    role: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: true },
    company: { type: String },
});

module.exports = mongoose.model('User', userSchema);
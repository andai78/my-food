const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userType: { type: Number, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    mail: { type: String, required: true },
});

module.exports = mongoose.model('User', userSchema);
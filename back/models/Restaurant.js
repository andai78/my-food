const mongoose = require('mongoose');

const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    category: { type: String, required: true },
    foods: { type: [Object] }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
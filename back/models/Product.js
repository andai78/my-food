const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    food: { type: Object, required: true },
});

module.exports = mongoose.model('Product', productSchema);
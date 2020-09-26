const express = require('express');
const router = express.Router();

router.post('/api/add-products/:restaurant', (req, res) => {
    
});

router.post('/api/order/:restaurant', (req, res) => {
    
});

router.get('/api/restaurants', (req, res) => {
    res.send('restaurants works')
});

router.get('/api/products/:restaurant', (req, res) => {
    res.send('products restaurants works')
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Restaurant = require('../../models/Restaurant');
const Product = require('../../models/Product');

router.post('/add', (req, res) => {
    const product = req.body;
    Restaurant.findOne({name: 'West Indies'}, (err, resto) => {
        if (err) {
            console.log(err)
        }
        else {
            //console.log(resto);
            resto.foods.push(product);
            res.json(resto);
        }
    })
});

router.post('/api/order/:restaurant', (req, res) => {
    
});

router.get('/', (req, res) => {
    Restaurant.find()
    .then(restos => res.json(restos))
    .catch(err => res.status(400).json({err}))
});

router.get('/api/products/:restaurant', (req, res) => {
    res.send('products restaurants works')
});

module.exports = router;
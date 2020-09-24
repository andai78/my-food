const express = require('express');
const app = express();

const port = process.env.port || 3000;

app.get('/api/login', (req, res) => {
    res.send('login works')
});

app.get('/api/restaurants', (req, res) => {
    res.send('restaurants works')
});

app.get('/api/products/:restaurant', (req, res) => {
    res.send('products restaurants works')
});

app.post('/api/add-products/:restaurant', (req, res) => {
    
});

app.post('/api/order/:restaurant', (req, res) => {
    
});

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
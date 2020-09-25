const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});

const User = require('./models/User');

const app = express();

const port = process.env.port || 3000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASS}@clusterfood.qy43i.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/login', (req, res) => {
    console.log(req.body);
    User.findOne(req.body, (err, user) => {
        if (err) {
            console.log(err)
        } 
        else {
            res.redirect('/')
        }
    })
});

app.post('/api/add-products/:restaurant', (req, res) => {
    
});

app.post('/api/order/:restaurant', (req, res) => {
    
});

app.get('/', (req, res) => {
    res.send('Welcome to my food');
})

app.get('/api/restaurants', (req, res) => {
    res.send('restaurants works')
});

app.get('/api/products/:restaurant', (req, res) => {
    res.send('products restaurants works')
});


app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
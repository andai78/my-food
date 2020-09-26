const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

/** ROUTES */
const home = require('./routes/home/home');
const users = require('./routes/user/user');
const restaurants = require('./routes/restaurants/restaurants');

const app = express();

const port = process.env.port || 3000;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.USER_PASS}@clusterfood.qy43i.azure.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

/** MIDDLEWARE */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', home);
app.use('/api/users', users);
app.use('/api/restaurants', restaurants);

app.listen(port, () => {
    console.log(`server listening on port ${port}`);
});
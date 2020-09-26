const express = require('express');
const router = express.Router();
const User = require('../../models/User');

router.post('/login', (req, res) => {
    User.findOne(req.body, (err, user) => {
        if (err) {
            console.log(err)
        } 
        else {
            res.status(200).json({user})
        }
    })
});

router.post('/register', (req, res) => {
    const user = new User({
        ...req.body
    });
    user.save().then((user) => {
        console.log(user);
        res.status(201).json({ msg: 'user enregistré' })
    })
    .catch(err => res.status(400).json({err}))
});

module.exports = router;
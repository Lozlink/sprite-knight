const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Models
const User = require('../models/user');

// Routes
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    if (name === '' || email === '' || password === '') {
        res.status(400).json({ error: 'Name/Email/Password cannot be blank.'})
    } else {
        // using bcrypt to create password digest
        const password_digest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
    
        User
            .create(name, email, password_digest)
            .then(user => {
                req.session.userId = user.id;
                res.json(user);
            });        
    }
});


module.exports = router;
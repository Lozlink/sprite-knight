const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Models
const User = require('../models/user');

// Log the user in if the password matches the password digest
router.post('/', (req, res) => {
    const { email, password } = req.body;

    User
        .findByEmail(email)
        .then(user => {
            if (email === '' || password === '') {
                res.status(400).json({ error: 'email and/or password cannot be blank'});
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (user && isValidPassword) {
                    req.session.userId = user.id;
                    res.json(user.email);
                }
            }
        });
});

// Log the user in using stored cookie
router.get('/', (req, res) => {
    User
        .findById(req.session.userId)
        .then(user => {
            if (user) {
                res.json(user.email);
            } else {
                res.json(null);
            }
        });
});

module.exports = router;
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
                res.status(400).json({ error: 'Email and/or password cannot be blank.'});
            } else {
                const isValidPassword = bcrypt.compareSync(password, user.password);
                if (user && isValidPassword) {
                    req.session.userId = user.id;
                    res.json(user);
                } else {
                    res.status(400).json({ error: 'Incorrect login details. Check email and/or password.'});
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
                res.json(user);
            } else {
                res.json(null);
            }
        });
});

// Log the user out by deleting the session
router.delete('/', (req, res) => {
    req.session.userId = null;
    res.json({ message: 'User successfully logged out.' });
});

module.exports = router;
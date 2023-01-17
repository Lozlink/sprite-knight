const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Models
const User = require('../models/user');

// Routes
router.post('/', (req, res) => {
    const { name, email, password } = req.body;

    // using bcrypt to create password digest
    const password_digest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);

    User
        .create(name, email, password_digest)
        .then(userName => res.json(userName));
    });

module.exports = router;
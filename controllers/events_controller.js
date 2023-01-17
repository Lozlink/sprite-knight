const express = require("express");
const router = express.Router();

const Event = require("../models/event");


router.get("/", (req, res) => {
    Event
        .randEvent()
        .then((event) => res.json(event));
});

module.exports = router
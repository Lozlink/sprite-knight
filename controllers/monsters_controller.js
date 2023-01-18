const express = require("express");
const router = express.Router();

const Event = require("../models/monster");

router.get("/", (req, res) => {
    Event.randMonster().then((event) => res.json(event));
});

module.exports = router;

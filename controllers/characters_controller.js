const express = require("express");
const router = express.Router();

// models
const Character = require("../models/character");

// Routes

router.post("/", (req, res) => {
    const { name, gender, age, level, user_id, health, image } = req.body;

    Character.create(name, gender, age, level, user_id, health, image).then(
        (character) => res.json(character)
    );
});

router.delete("/:id", (req, res) => {
    const characterId = req.params.id;

    Character.delete(characterId).then(() =>
        res.json({ message: "succesfully deleted" })
    );
});

module.exports = router;

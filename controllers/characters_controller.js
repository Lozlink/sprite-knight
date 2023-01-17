const express = require("express");
const router = express.Router();

// models
const Character = require("../models/character");

// Routes

router.get("/", (req, res) => {
    Character.findAll().then((character) => res.json(character));
});


router.post("/", (req, res) => {
    const { char_name, gender, age } = req.body;

    Character.create(char_name, gender, age).then(
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

const express = require("express");
const router = express.Router();

// models
const Character = require("../models/character");

// Routes

router.get("/:id", (req, res) => {
    const userId = req.params.id;
    console.log(`userId: ${userId}`)
    Character
        .findUserCharacters(userId)
        .then((characters) => res.json(characters));
});

router.post("/", (req, res) => {
    const { char_name, gender, age, level, userId, health, image } = req.body;

    Character
        .create(char_name, gender, age, level, userId, health, image)
        .then(character => res.json(character));
});

router.delete("/:id", (req, res) => {
    const characterId = req.params.id;

    Character.delete(characterId).then(() =>
        res.json({ message: "succesfully deleted" })
    );
});

router.put('/:id', (req, res) => {
    const characterId = req.params.id;
    
    Character.levelUp(characterId).then(character => res.json(character))

})


module.exports = router;

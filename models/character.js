const db = require("../db/db");

const Character = {
    findAll: () => {
        const sql = "SELECT * FROM characters;";

        return db.query(sql).then((dbRes) => dbRes.rows);
    },
    create: (char_name, gender, age, image) => {
        const sql = `
        INSERT INTO characters(char_name, gender, age, level, health, image)
        VALUES($1, $2, $3, $4, $5, $6)
        RETURNING *
        `;
        const level = 1
        const health = 100
        

        return db
            .query(sql, [char_name, gender, age, level, health, image])
            .then((dbRes) => dbRes.rows[0]);
    },

    delete: (characterId) => {
        const sql = "DELETE FROM characters WHERE id = $1";

        return db.query(sql, [characterId]);
    },
};

module.exports = Character;

const db = require("../db/db");

const Character = {
    findAll: () => {
        const sql = "SELECT * FROM characters;";

        return db.query(sql).then((dbRes) => dbRes.rows);
    },
    create: (char_name, gender, age, level, userId, health, image) => {
        const sql = `
            INSERT INTO characters(char_name, gender, age, level, user_id, health, image)
            VALUES($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
        `;

        return db
            .query(sql, [char_name, gender, age, level, userId, health, image])
            .then((dbRes) => dbRes.rows[0]);
    },

    getUserFromEmail: userEmail => {
        const sql = 'SELECT * FROM users WHERE email = $1';

        return db
            .query(sql, [userEmail])
            .then(dbRes => dbRes.rows[0]);
    },

    delete: (characterId) => {
        const sql = "DELETE FROM characters WHERE id = $1";

        return db.query(sql, [characterId]);
    },
};

module.exports = Character;

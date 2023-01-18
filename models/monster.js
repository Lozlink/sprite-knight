const db = require("../db/db");

const Monster = {
    randMonster: () => {
        const sql = `SELECT * FROM monsters ORDER BY RANDOM() LIMIT 1;`;

        return db.query(sql).then((dbRes) => dbRes.rows[0]);
    },
};

module.exports = Monster;
